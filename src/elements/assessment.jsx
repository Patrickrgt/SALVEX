import React, { Component } from "react";

import { db } from "../store/firebase.js";
import webmd from "../img/webmd.png";
import loading from "../img/loading.gif";

class Assessment extends Component {
  constructor() {
    super();

    this.state = {
      symptomList: [],
      symptomQuery: "",
      symptomResults: [],
      userSymptoms: [],
      userSymptomsSynonyms: [],
      diseaseResult: [],
      symptomObj: {},
      filterSum: 0,
      filterPercent: 0,
      curDiseaseOccurance: 0,
      filterArray: [],
      relations: [],
      relationsObj: {},
      filteredItemCui: "",
      diseasesMerge: [],
      userMatchingDiseases: [],
      diseaseLink: "",
      diseaseLoad: null,
      returnUserDisease: false,
    };
  }

  async componentDidMount() {
    await db
      .collection("conceptRelations")
      .get()
      .then((querySnapshot) => {
        const synonyms = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ relations: synonyms }, () => {
          this.createObj();
        });
      });
  }

  createObj() {
    let localRelations = this.state.relations[0];
    let localRelationsLen = localRelations.relations;
    // console.log(Object.keys(localRelations.relations[0]));
    console.log(Object.values(localRelationsLen));

    let relations = [];

    for (const len in localRelationsLen) {
      let obj = {};
      let synonyms = Object.keys(localRelationsLen[len]);
      let synonymsInner = synonyms[0];
      let cui = Object.values(localRelationsLen[len]);
      let cuiInner = cui[0];
      obj["relationSynonym"] = synonymsInner;
      obj["relationCui"] = cuiInner;
      relations.push(obj);
    }
    console.log(relations);
    this.setState(
      {
        relationsObj: relations,
      },
      () => {
        console.log(this.state.relationsObj);
      }
    );
  }

  async fetchCUI(filteredItem) {
    console.log(filteredItem);

    await db
      .collection("dummySymptoms")
      .doc(filteredItem)
      .get()
      .then((querySnapshot) => {
        let data = querySnapshot.data();
        let symptom = data.cui;
        let synonym = data.name;
        this.setState({
          filteredItemCui: symptom,
          filteredItemName: synonym,
        });
      });

    this.setState(
      {
        userSymptoms: [
          ...this.state.userSymptoms,
          [this.state.filteredItemCui],
        ],

        userSymptomsSynonyms: [
          ...this.state.userSymptomsSynonyms,
          [this.state.filteredItemName],
        ],
      },
      () => {
        document.getElementById("symptomSearch").value = "";
        this.setState({
          symptomQuery: "",
        });
        //   Deletes old local symptom list and updates with a new one that does not include the symptoms the user has chosen
        const oldSymptomResults = this.state.relationsObj.filter(
          (list) => !list.relationCui.includes(this.state.filteredItemCui)
        );
        const newSymptomResults = oldSymptomResults;
        console.log(newSymptomResults);
        this.setState({
          relationsObj: newSymptomResults,
        });
      }
    );
  }

  searchSymptom = (e) => {
    this.setState(
      {
        symptomQuery: e.target.value,
      },
      () => {
        let symptomResults = this.state.symptomList.filter((list) =>
          list.includes(this.state.symptomQuery)
        );
        console.log(this.state.symptomQuery);
        this.setState({
          symptomResults: symptomResults.slice(0, 5),
        });
      }
    );

    let symptomLength = this.state.symptomQuery;

    if (symptomLength.length > 0) {
      document.getElementById("matching-border").style.display = "block";
    } else {
      document.getElementById("matching-border").style.display = "none";
    }
  };

  handleUserSymptoms = (symptom) => {
    //   Sets a state of arrays to the symptoms that the user has chosen
    this.setState(
      {
        userSymptoms: [...this.state.userSymptoms, [symptom]],
      },
      () => {
        document.getElementById("symptomSearch").value = "";
        this.setState({
          symptomResults: [],
        });
        //   Deletes old local symptom list and updates with a new one that does not include the symptoms the user has chosen
        const oldSymptomResults = this.state.symptomList.filter(
          (list) => !list.includes(symptom)
        );
        const newSymptomResults = oldSymptomResults;
        this.setState(
          {
            symptomList: newSymptomResults,
          },
          () => {
            console.log(this.state.symptomList);
          }
        );
      }
    );
  };

  async returnDisease() {
    this.setState({
      returnUserDisease: true,
      diseaseLoad: false,
    });
    //   For better readability
    const symptoms = this.state.userSymptoms;
    // Initalize array before looping

    // console.log(symptoms[0].toString());

    let diseases = [];

    for (const symptom in symptoms) {
      await db
        .collection("dummySymptoms")
        .doc(symptoms[symptom].toString())
        .get()
        .then((querySnapshot) => {
          let data = querySnapshot.data();
          let diseaseList = Object.keys(data.diseaseRelations);

          diseases.push(diseaseList);
          console.log(diseases);

          let symptomObj = {};

          symptomObj = {};
          let cui = data.cui;
          let diseaseRelations = data.diseaseRelations;
          let name = data.name;
          let popOccurrence = data.popOccurrence;
          symptomObj["cui"] = cui;
          symptomObj["diseaseRelations"] = diseaseRelations;
          symptomObj["name"] = name;
          symptomObj["popOccurrence"] = popOccurrence;

          // console.log(symptomObj);

          this.setState(
            {
              diseasesMerge: [...this.state.diseasesMerge, symptomObj],
            },
            () => {
              console.log(this.state.diseasesMerge);
            }
          );
        });
    }

    // console.log(this.state.diseasesMerge.length);

    let mergedDiseases = [];

    for (const i in diseases) {
      for (const j in diseases[i]) {
        await mergedDiseases.push(diseases[i][j]);
      }
    }

    let findDuplicates = (arr) =>
      arr.filter((item, index) => arr.indexOf(item) !== index);

    let matchingDiseasesX = findDuplicates(mergedDiseases);

    let matchingDiseases = [];

    matchingDiseasesX.forEach((c) => {
      if (!matchingDiseases.includes(c)) {
        matchingDiseases.push(c);
      }
    });

    console.log(matchingDiseases);

    for (const match in matchingDiseases) {
      let diseasesObj = {};
      let cui = matchingDiseases[match];
      let matchCount = 0;
      let occurance = 0;
      let percentageOccurance = 0;
      let percentageOccuranceSymp = 0;
      let percentageRanking = 0;
      diseasesObj["percentageOccuranceSymp"] = percentageOccuranceSymp;
      diseasesObj["percentageRanking"] = percentageRanking;
      diseasesObj["matchCount"] = matchCount;
      diseasesObj["percentageOccurance"] = percentageOccurance;
      diseasesObj["cui"] = cui;
      diseasesObj["occurance"] = occurance;

      // console.log(diseasesObj);

      this.setState(
        {
          userMatchingDiseases: [
            ...this.state.userMatchingDiseases,
            diseasesObj,
          ],
        }
        // () => {
        //   console.log(this.state.userMatchingDiseases);
        // }
      );
    }

    for (const list in symptoms) {
      for (const match in matchingDiseases) {
        if (
          Object.keys(this.state.diseasesMerge[list].diseaseRelations).includes(
            matchingDiseases[match]
          )
        ) {
          await db
            .collection("dummyDiseases")
            .doc(matchingDiseases[match])
            .get()
            .then((querySnapshot) => {
              let popOccurrence = querySnapshot.data().popOccurrence;

              this.state.userMatchingDiseases[
                match
              ].popOccurrence = popOccurrence;
            });

          await this.state.userMatchingDiseases[match].matchCount++;

          this.state.userMatchingDiseases[
            match
          ].occurance += this.state.diseasesMerge[list].diseaseRelations[
            matchingDiseases[match]
          ];

          const cui = matchingDiseases[match];

          this.state.userMatchingDiseases[match].percentageOccuranceSymp +=
            (this.state.diseasesMerge[list].diseaseRelations[cui] /
              this.state.diseasesMerge[list].popOccurrence) *
            100;

          this.state.userMatchingDiseases[match].percentageRanking =
            this.state.userMatchingDiseases[match].percentageOccuranceSymp /
            symptoms.length;

          let calculation =
            this.state.userMatchingDiseases[match].matchCount *
            this.state.userMatchingDiseases[match].popOccurrence;

          this.state.userMatchingDiseases[match].percentageOccurance =
            this.state.userMatchingDiseases[match].occurance / calculation;
        }
      }
    }

    console.log(symptoms.length);

    console.log(this.state.userMatchingDiseases);

    await this.rank();
  }

  async rank() {
    let rank = [];
    for (const ranking in this.state.userMatchingDiseases) {
      await rank.push(
        this.state.userMatchingDiseases[ranking].percentageRanking
      );
    }
    let index = rank.indexOf(Math.max(...rank));

    console.log(this.state.userMatchingDiseases[index].cui);

    db.collection("dummyDiseases")
      .doc(this.state.userMatchingDiseases[index].cui)
      .get()
      .then((querySnapshot) => {
        let name = querySnapshot.data().name;
        try {
          let definition = querySnapshot.data().diseaseDefinitions[0]
            .definition;
          console.log(definition);
          this.setState({
            diseaseResultDefinition: definition,
          });
        } catch (error) {
          let definition =
            "https://www.webmd.com/search/search_results/default.aspx?query=" +
            name;
          console.log(definition);
          this.setState({
            diseaseResultDefinition: definition,
          });
        }
        this.setState(
          {
            diseaseResult: name,
            diseaseLink:
              "https://www.webmd.com/search/search_results/default.aspx?query=" +
              name,
            diseaseLoad: true,
          },
          () => {
            console.log(
              this.state.diseaseResult,
              this.state.diseaseResultDefinition
            );
          }
        );
      });
  }

  /** listSymptom works for any changes on the input area.
   * So I used a 'for' loop to make sure it only lists symptoms
   * that matches the pre-set options from the datalist */
  listSymptom() {
    var inputValue = document.getElementById("symptomSearch").value;

    const datalistSize = document.getElementById("symptoms").options.length;

    var inputLowerCase = inputValue.toLowerCase();

    for (var x = 0; x < datalistSize; x++) {
      var symptomOptionLC = document
        .getElementById("symptoms")
        .options[x].value.toLowerCase();

      if (inputLowerCase === symptomOptionLC) {
        var li = document.createElement("li");

        li.setAttribute("class", "list-item");

        var t = document.createTextNode(
          document.getElementById("symptoms").options[x].value
        );
        li.appendChild(t);

        document.getElementById("myList").appendChild(li);

        /** This following 'if else' method is to enable the results button
         * if the user has listed at least 3 symptoms */
        var listSize = document.getElementById("myList").children.length;
        console.log(listSize);

        if (listSize < 4) {
          document.getElementById("listBtn").style.display = "inline";
          document.getElementById("resultsBtn").style.display = "none";
        } else {
          document.getElementById("listBtn").style.display = "none";
          document.getElementById("resultsBtn").style.display = "inline";
        }

        //This following line cleans the input area so that user can enter another symptom
        document.getElementById("symptomSearch").value = "";
      } else {
      }
    }
  }

  render() {
    let { length: listLength } = this.state.userSymptoms;

    return (
      <React.Fragment>
        {this.state.returnUserDisease === false ? (
          <div className="container">
            {/* HEADER */}

            <div className="row div-center my-5">
              <h1 className="header fade-in" style={{ marginTop: "50px" }}>
                Search for your symptoms <br></br>so we can analyze for{" "}
                <br></br>
                your best approach.
              </h1>
            </div>

            {/* USER INPUT */}
            <div className="container div-center">
              <form id="myForm" type="">
                <input
                  id="symptomSearch"
                  type="text"
                  className="form-grey fade-in-up"
                  placeholder="Enter item to be searched"
                  onChange={this.searchSymptom}
                />

                {/* OPTIONS OF SYMPTOMS FOR INPUT */}
                <div className="container">
                  <div id="matching-border" className="matching-border">
                    {this.state.symptomQuery.length > 0 ? (
                      <div>
                        {this.state.relationsObj
                          .filter((query) =>
                            query.relationSynonym.includes(
                              this.state.symptomQuery
                            )
                          )
                          .slice(0, 5)
                          .map((filteredItem) => (
                            <React.Fragment>
                              <a
                                className="matching-item"
                                onClick={() => {
                                  this.fetchCUI(filteredItem.relationCui);
                                }}
                              >
                                {filteredItem.relationSynonym}
                              </a>
                            </React.Fragment>
                          ))}
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* LIST OF SYMPTOMS ENTERED BY USER */}
            <div className="div-center">
              <ul className="list-full" id="myList">
                {this.state.userSymptomsSynonyms.map((userSymptom) => (
                  <li className="list-item">{userSymptom}</li>
                ))}
                <li className="fade-in">Enter at least 3 symptoms.</li>
              </ul>
            </div>

            {/** RESULTS BUTTON
             * (disabled if less than 3 symptoms entered -
             *  'if else' method in listSymptom() to enable it when at least 3 symptoms entered) */}
            <div className="div-center">
              <div className="row div-center my-5">
                <div className="col">
                  {listLength < 3 ? (
                    <button
                      type="button"
                      id="listBtn"
                      className="btn btn-grey-wd fade-in-right"
                      disabled="disabled"
                    >
                      list your symptoms
                    </button>
                  ) : (
                    <button
                      type="button"
                      id="resultsBtn"
                      className="btn btn-prpl-wd"
                      onClick={() => this.returnDisease()}
                    >
                      results
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="slide-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="221.914"
                height="146.719"
                viewBox="0 0 221.914 146.719"
              >
                <g
                  id="undraw_button_style_70y7"
                  transform="translate(-13.718 0)"
                  opacity="0.5"
                >
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M633.191,209.325a5.8,5.8,0,0,0,3.985-1.057,10.933,10.933,0,0,0,2.858-3.066,19.865,19.865,0,0,0,2.8-6.5,3.81,3.81,0,0,0,3.712,1.292c2.211-.5,3.538-3.077,3.106-5.3a7.107,7.107,0,0,0-4.34-4.882,16.764,16.764,0,0,0-6.671-1.035,12.928,12.928,0,0,0-4.421.586,5.17,5.17,0,0,0-3.189,2.943c-.313.883-.3,1.861-.658,2.728-.645,1.574-2.319,2.433-3.891,3.085s-3.279,1.314-4.205,2.741a4.851,4.851,0,0,0,.409,5.4,7.96,7.96,0,0,0,4.889,2.8,23.662,23.662,0,0,0,5.744.187"
                    transform="translate(-493.553 -188.775)"
                    fill="#2f2e41"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M419.947,408.784l-6.192-2.685,3.36-6.915,5,2.926Z"
                    transform="translate(-297.461 -286.985)"
                    fill="#feb8b8"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M447.156,270.689l-5.98,12.164L430.622,304.32l-10.88-5.228,12.011-28.12.034-3.54.107-11.015Z"
                    transform="translate(-301.765 -184.346)"
                    fill="#2f2e41"
                  />
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M555.557,397.513l-6.359,2.261-2.261-7.348,5.652-1.272Z"
                    transform="translate(-393.209 -281.212)"
                    fill="#feb8b8"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M689.366,350.952l-19.218-5.511,5.652-3.815,14.837,4.663,6.709,1.61a3.315,3.315,0,0,1,2.251,4.582h0a3.315,3.315,0,0,1-4.619,1.549Z"
                    transform="translate(-528.432 -298.664)"
                    fill="#feb8b8"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M674.677,285.382,666.9,289.9c-.686-5.655,2.7-15.721,6.924-26.707h0a8.451,8.451,0,0,1,3.417,7.981Z"
                    transform="translate(-526.036 -242.279)"
                    fill="#f0f0f0"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M558.105,340.06l-.163,5.8A3.345,3.345,0,0,1,553.733,349h0a3.345,3.345,0,0,1-2.176-4.623l2.168-4.738,6.783-16.109,4.663,1.7Z"
                    transform="translate(-442.954 -285.652)"
                    fill="#feb8b8"
                  />
                  <circle
                    id="Ellipse_12"
                    data-name="Ellipse 12"
                    cx="6.076"
                    cy="6.076"
                    r="6.076"
                    transform="translate(140.657 3.042)"
                    fill="#feb8b8"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M503.225,49.027l-7.065-3.391,3.532-7.913,5.935,1.13Z"
                    transform="translate(-356.704 -27.12)"
                    fill="#feb8b8"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M634.287,281.233,619.874,277.7l2.894-26.531a4.667,4.667,0,0,1,5.062-4.142l4.761.433,6.5,2.967,2.4,2.544-.733,3.135c.683,6.456.157,12.059-3.6,15.383Z"
                    transform="translate(-492.288 -230.641)"
                    fill="#f0f0f0"
                  />
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M586.641,272.209l-7.489-1.978,10.041-16.63a10.741,10.741,0,0,1,10.308-5.131h0l-3.815,12.576A34.269,34.269,0,0,0,586.641,272.209Z"
                    transform="translate(-463.011 -231.649)"
                    fill="#f0f0f0"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M643.91,459.463l-5.98,12.164c-3.381-5.214-6.644-10.393-9.388-15.421l.107-11.015Z"
                    transform="translate(-498.519 -373.12)"
                    opacity="0.2"
                  />
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M643.978,412.2,632.532,415.6c-13.937-22.627-33.895-47.012-26.142-63.306l2.826-6.641,14.7,4.522.848,17.522,9.044,14.131Z"
                    transform="translate(-481.348 -301.556)"
                    fill="#2f2e41"
                  />
                  <path
                    id="Path_19"
                    data-name="Path 19"
                    d="M729.208,608.5l-10.172-.1a3.664,3.664,0,0,1-3.64-3.664v-5.071a1.169,1.169,0,0,1,1.515-1.121c1.837.589,3.342.393,4.476-.675.68-.64.759-.769,1.569-.3l4.592,5.016,1.863.12a2.9,2.9,0,0,1,2.707,2.679h0a2.9,2.9,0,0,1-2.91,3.119Z"
                    transform="translate(-560.962 -482.466)"
                    fill="#2f2e41"
                  />
                  <path
                    id="Path_20"
                    data-name="Path 20"
                    d="M572.259,619.6l-7.122-7.263a3.664,3.664,0,0,1,.017-5.165l3.586-3.586a1.169,1.169,0,0,1,1.864.278c.883,1.716,2.085,2.641,3.642,2.688.933.028,1.081-.007,1.324.9l-.3,6.795,1.232,1.4a2.9,2.9,0,0,1,.02,3.808h0a2.9,2.9,0,0,1-4.263.148Z"
                    transform="translate(-452.177 -486.745)"
                    fill="#2f2e41"
                  />
                  <path
                    id="Path_21"
                    data-name="Path 21"
                    d="M652.878,201.271a7.274,7.274,0,0,0,3.526,2.91,2.932,2.932,0,0,0,3.117-.293,2.79,2.79,0,0,0,.594-2.249,7.04,7.04,0,0,0-4.44-5.588,9.87,9.87,0,0,0-7.316.215c-2.185.891-4.261,2.716-4.378,5.072-.06,1.208.377,2.538-.271,3.559a4.45,4.45,0,0,1-2.276,1.422c-.845.34-1.751.878-1.925,1.772a1.983,1.983,0,0,0,.582,1.69,4.59,4.59,0,0,0,1.563.98,8.153,8.153,0,0,0,4.374.726,4.485,4.485,0,0,0,3.491-2.509,7.877,7.877,0,0,0,.3-3.415,5.75,5.75,0,0,1,.579-3.354,2.178,2.178,0,0,1,2.962-.825"
                    transform="translate(-506.39 -193.571)"
                    fill="#2f2e41"
                  />
                  <path
                    id="Path_78"
                    data-name="Path 78"
                    d="M821.2,372.43H755.19c-1.287,0-2.33-.743-2.331-1.658V356.425c0-.915,1.044-1.658,2.331-1.658H821.2c1.287,0,2.329.743,2.331,1.658v14.346C823.526,371.687,822.483,372.429,821.2,372.43Zm-66.006-17c-.772,0-1.4.446-1.4.995v14.346c0,.549.627.994,1.4.995H821.2c.772,0,1.4-.446,1.4-.995V356.425c0-.549-.626-.994-1.4-.995Z"
                    transform="translate(-587.895 -308.112)"
                    fill="#e6e6e6"
                  />
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    d="M810.655,383.775a1.407,1.407,0,0,0-1.405,1.405v9.837a1.407,1.407,0,0,0,1.405,1.405h50.312a1.407,1.407,0,0,0,1.405-1.405V385.18a1.407,1.407,0,0,0-1.405-1.405Z"
                    transform="translate(-628.436 -328.966)"
                    fill="#6c63ff"
                  />
                  <circle
                    id="Ellipse_13"
                    data-name="Ellipse 13"
                    cx="3.092"
                    cy="3.092"
                    r="3.092"
                    transform="translate(186.154 58.181)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_55"
                    data-name="Rectangle 55"
                    width="53.684"
                    height="13.21"
                    transform="translate(13.718 133.227)"
                    fill="#6c63ff"
                  />
                  <path
                    id="Path_23"
                    data-name="Path 23"
                    d="M456.155,663.775a1.407,1.407,0,0,0-1.405,1.405v10.4a1.407,1.407,0,0,0,1.405,1.405h50.312a1.407,1.407,0,0,0,1.405-1.405v-10.4a1.407,1.407,0,0,0-1.405-1.405Z"
                    transform="translate(-373.575 -530.267)"
                    fill="#6c63ff"
                  />
                  <path
                    id="Path_24"
                    data-name="Path 24"
                    d="M699.074,665.775a6.324,6.324,0,0,0,0,12.648h40.474a6.324,6.324,0,0,0,0-12.648Z"
                    transform="translate(-544.681 -531.705)"
                    fill="#6c63ff"
                  />
                  <circle
                    id="Ellipse_14"
                    data-name="Ellipse 14"
                    cx="6.746"
                    cy="6.746"
                    r="6.746"
                    transform="translate(216.791 132.946)"
                    fill="#6c63ff"
                  />
                  <circle
                    id="Ellipse_15"
                    data-name="Ellipse 15"
                    cx="3.092"
                    cy="3.092"
                    r="3.092"
                    transform="translate(220.445 136.6)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_57"
                    data-name="Rectangle 57"
                    width="25.279"
                    height="3.935"
                    transform="translate(27.92 137.865)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_58"
                    data-name="Rectangle 58"
                    width="25.279"
                    height="3.935"
                    transform="translate(95.096 137.865)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_59"
                    data-name="Rectangle 59"
                    width="25.279"
                    height="3.935"
                    transform="translate(161.991 138.427)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        ) : (
          <div>
            {this.state.diseaseLoad === false ? (
              <div>
                <img className="loading-gif" src={loading} alt="" />
              </div>
            ) : (
              <React.Fragment>
                <div className="container">
                  <div className="row-result1 div-center mt-2 slide-down"></div>

                  <div className="row">
                    <div className="row-grey div-center slide-down">
                      <h className="header ">
                        {" "}
                        based on your symptoms we narrowed it down to 1 possible
                        diesease
                      </h>
                    </div>
                  </div>

                  <div className="row div-center my-3 fade-in-down">
                    <h className="header" style={{ fontWeight: "bold" }}>
                      {this.state.diseaseResult}
                    </h>
                  </div>
                  <div className="row">
                    <div className="row-prpl slide-right">
                      <div className="col-xs-3">
                        <a href={this.state.diseaseLink}>
                          <img
                            src={webmd}
                            alt=""
                            style={{
                              position: "relative",
                              float: "left",
                              padding: "2%1%",
                            }}
                          />
                        </a>
                      </div>

                      <div className="col-xs-9">
                        <h className="result-header">
                          {this.state.diseaseResult}
                        </h>
                        <p className="result-text">
                          {this.state.diseaseResultDefinition.substring(0, 300)}
                          {"..."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row row-result2 my-3 slide-left">
                    <button
                      className="btn btn-prpl-center mb-4 fade-in-up"
                      style={{ width: "60%" }}
                      onClick={() => {
                        window.location.href = "./assessment";
                      }}
                    >
                      {" "}
                      retake assessment
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Assessment;
