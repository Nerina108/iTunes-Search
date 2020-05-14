import React from "react";
import axios from "axios";
import "../search.css";
import loader from "../loader.gif";
import PageNavigation from "./page-nav";
import Favorite from "./favorites";
import { Button } from "reactstrap";

//Movies component runs when user selects movies
class Movies extends React.Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      query: "",
      Results: {},
      loading: false,
      totalResult: 0,
      totalPages: 0,
      currentPageNo: 0,
      favoriteList: []
    };
    this.cancel = "";
  }

  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  UNSAFE_componentWillMount = (updatedPageNo = "", query) => {
    // to get page number automatically
    let pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `/movies/${query}/${pageNumber}`;

    // to cancel results if user back space and types in new request
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token
      })
      .then(res => {
        //   get response of total results
        const total = res.data.resultCount;
        const totalPagesCount = this.getPageCount(total, 20);

        //   set state
        this.setState({
          Results: res.data.results,
          totalResult: total,
          totalPages: totalPagesCount,
          currentPageNo: updatedPageNo,
          loading: false
        });
      });
  };

  handleOnInputChange = event => {
    const query = event.target.value;
    //if nothing on query set state to empty
    if (!query) {
      this.setState({
        query,
        Results: {},

        totalPages: 0,
        totalResult: 0
      });
    } else {
      this.setState({ query: query, loading: true }, () => {
        this.UNSAFE_componentWillMount(1, query);
      });
    }
  };

  handlePageClick = (type, e) => {
    e.preventDefault();
    const updatedPageNo =
      "Prev" === type
        ? this.state.currentPageNo - 1
        : this.state.currentPageNo + 1;

    // check our page current state
    if (!this.state.loading) {
      this.setState({ loading: true }, () => {
        this.UNSAFE_componentWillMount(updatedPageNo, this.state.query);
      });
    }
  };

  //Adds selected item to the list of Favorites and notifies user
  addToFavorite = (index, previewUrl, trackName, artworkUrl100) => {
    const { favoriteList } = this.state;

    let item = {
      id: index,
      link: previewUrl,
      title: trackName,
      img: artworkUrl100
    };

    this.setState({ favoriteList: [...favoriteList, item] });
    alert(`${item.title} has been added to your favorites list. Scroll to the bottom to view your favorites.`);
  };

  //display search results
  renderSearchResults = () => {
    const { Results } = this.state;
    // set state for search results
    if (Object.keys(Results).length && Results.length) {
      return (
        <div className="results-container">
          {Results.map((result, index) => {
            return (
              <div className="result-item">
                <a key={index} href={result.previewUrl}>
                  <h6 className="image-username">{result.trackName}</h6>
                  <div className="image-wraper">
                    <img
                      className="image"
                      src={result.artworkUrl100}
                      alt={result.trackName}
                    />
                  </div>
                </a>

                {/* Add to Favorites button */}
                <div>
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={this.addToFavorite.bind(
                      this,
                      index,
                      result.previewUrl,
                      result.trackName,
                      result.artworkUrl100,
                    )}
                  >
                    Add to Favorites
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const {
      query,
      loading,
      currentPageNo,
      totalPages,
      favoriteList
    } = this.state;
    // next and previous page handle
    const showPrevLink = 1 < currentPageNo;
    const showNextLink = totalPages > currentPageNo;

    return (
      <div className="container">
        <h4 className="welcome-text">
          To add a movie to your favorites list, simply click the "Add to Favorites"
          button <br />
          <br />
          You can view your Favorites list at the bottom of the page.
        </h4>
        <br />
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Search movie title"
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon" aria-hidden="true" />
        </label>

        <img
          src={loader}
          className={`search-loading ${loading ? "show" : "hide"}`}
          alt="loader"
        />

        {this.renderSearchResults()}

        <Favorite favoriteList={favoriteList} />
        <br />
        <PageNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={e => this.handlePageClick("prev", e)}
          handleNextClick={e => this.handlePageClick("next", e)}
        />
      </div>
    );
  }
}

export default Movies;
