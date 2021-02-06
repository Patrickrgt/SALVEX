import React, { Component } from "react";
import Pagination from "../elements/pagination";
import { paginate } from "../utils/paginate";
import { Container } from "react-bootstrap";

import line from "../img/line.png";
import loading from "../img/loading.gif";
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("ce0ebff1947a464681f8c1204c2b7745", {
  corsProxyUrl: "https://cors-anywhere.herokuapp.com/",
});

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
        <div className="container">
          <div className="row-trending div-center mb-4 fade-in">
            <h1 className="header mb-0 fade-in" style={{ fontWeight: "bold" }}>
              trending
            </h1>
          </div>

          <div>
            {this.state.loadData === true ? (
              <Container fluid>
                {articles.map((article, index) => (
                  <div>
                    <div className="row slide-right">
                      <div className="row-prpl">
                        <div className="col-xs-3">
                          <a href={article.url}>
                            <img
                              className="result-img"
                              src={article.urlToImage}
                              onerror="this.onerror=null; this.src='https://mulder-onions.com/wp-content/uploads/2017/02/White-square.jpg'"
                              width="85"
                              height="85"
                              alt=""
                              style={{
                                position: "relative",
                                float: "left",
                                padding: "2%1%",
                              }}
                            />
                          </a>
                        </div>

                        <div className="col-xs-3">
                          <h className="result-header">
                            {article.title.substring(0, 25)}
                            {"..."}
                          </h>

                          {article.description === null ? (
                            <p className="result-text">
                              Please click on the image for more information.
                            </p>
                          ) : (
                            <p className="result-text">
                              {
                                article.description
                                  .substring(0, 100)
                                  .split("<")[0]
                              }
                              {"..."}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row my-3">
                      <img
                        className="slide-left"
                        src={line}
                        alt=""
                        style={{ position: "relative", margin: "auto" }}
                      />
                    </div>
                  </div>
                ))}
                <Container fluid className="slide-right">
                  <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
                </Container>
              </Container>
            ) : (
              <div>
                <img className="loading-gif" src={loading} alt="" />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Trending;
