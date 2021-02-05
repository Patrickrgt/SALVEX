import React, { Component } from "react";
import Pagination from "../elements/pagination";
import { paginate } from "../utils/paginate";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import webmd from "../img/webmd.png";
import line from "../img/line.png";
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("ce0ebff1947a464681f8c1204c2b7745", {
  corsProxyUrl: "https://cors-anywhere.herokuapp.com/",
});
const reqOptions = {
  mode: "cors",
  headers: { "Access-Control-Allow-Origin": "*" },
};

class Trending extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loadData: false,
      currentPage: 1,
      pageSize: 4,
    };
  }

  componentDidMount() {
    newsapi.v2
      .topHeadlines({
        q: "covid",
        category: "health",
        language: "en",
        country: "us",
      })
      .then((response) => {
        let data = response.articles;

        this.setState(
          {
            articles: response.articles,

            loadData: true,
          },
          () => {
            console.log(this.state.lengthy);
          }
        );
      });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.articles;
    const { pageSize, currentPage, articles: allArticles } = this.state;
    const articles = paginate(allArticles, currentPage, pageSize);

    return (
      <React.Fragment>
        <div>
          {this.state.loadData === true ? (
            <React.Fragment>
              <div className="row">
                <div className="row-prpl">
                  <div className="col-xs-3">
                    <img
                      src={webmd}
                      alt=""
                      style={{
                        position: "relative",
                        float: "left",
                        padding: "2%1%",
                      }}
                    />
                  </div>

                  <div className="col-xs-9">
                    <h className="result-header">
                      Dyspnea (Shortness of Breath)
                    </h>
                    <p className="result-text">
                      Dyspnea, or shortness of breath, can be a warning sign of
                      a health problem. Learn more about dyspnea symptoms,
                      causes, and treatments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <img
                  src={line}
                  alt=""
                  style={{ position: "relative", margin: "auto" }}
                />
              </div>

              <Container fluid>
                <Row>
                  {articles.map((article, index) => (
                    <Col key={index} xs="10" md="1">
                      <h1>{article.title}</h1>
                      <h3>{article.description}</h3>
                    </Col>
                  ))}
                </Row>
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </Container>
            </React.Fragment>
          ) : (
            <div>helloworld</div>
          )}
        </div>

        <div className="container">
          <div className="row-trending div-center mb-4">
            <h1 className="header mb-0" style={{ fontWeight: "bold" }}>
              trending
            </h1>
          </div>

          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <img
              src={line}
              alt=""
              style={{ position: "relative", margin: "auto" }}
            />
          </div>

          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <img
              src={line}
              alt=""
              style={{ position: "relative", margin: "auto" }}
            />
          </div>

          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <img
              src={line}
              alt=""
              style={{ position: "relative", margin: "auto" }}
            />
          </div>
          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5 div-center">
            <div className="col">
              <div type="button" align="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <g
                    id="Ellipse_47"
                    data-name="Ellipse 47"
                    fill="none"
                    stroke="#b4b0ff"
                    stroke-width="1"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                    <circle cx="12.5" cy="12.5" r="12" fill="none" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="col-xs-3">
              <div type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <g
                    id="Ellipse_47"
                    data-name="Ellipse 47"
                    fill="none"
                    stroke="#b4b0ff"
                    stroke-width="1"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                    <circle cx="12.5" cy="12.5" r="12" fill="none" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="col">
              <div type="button" align="left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <g
                    id="Ellipse_47"
                    data-name="Ellipse 47"
                    fill="none"
                    stroke="#b4b0ff"
                    stroke-width="1"
                  >
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                    <circle cx="12.5" cy="12.5" r="12" fill="none" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Trending;
