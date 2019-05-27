import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";
import PaginationItem from "../pagination-item";
const classNames = require("classnames");

import "./pagination-panel.css";

class PaginationPanel extends Component {
  state = {
    pageNumbers:[],
    numbers:[],
    first: 1,
    last: 50
  };

  componentDidMount(){
    this.setState({
      pageNumbers:[1,2,3],
      numbers:Array.from({ length: 50 },  (v,k) => k + 1)
    })
  }

  renderPagBegin = currentPage => {
    let style = classNames(``);
    const { pageNumbers, first} = this.state;
    if (pageNumbers.find(number => number === first)) {
      style = classNames(` invisible`);
    }
    return (
      <Fragment>
        <PaginationItem
          title={"First"}
          style={classNames(`active`)}
          onHandleChangePage={this.handleChangePage.bind(this, first)}
        />

        <PaginationItem
          title={"Prev"}
          onHandleChangePage={this.handleChangePage.bind(this, currentPage - 1)}
        />

        <PaginationItem title={"..."} pageItemStyle={style} />
      </Fragment>
    );
  };

  renderPages = currentPage => {
    const { pageNumbers } = this.state;
    return (
      <Fragment>
        {pageNumbers.map(num => {
          let style = classNames(``);
          if (num === currentPage) {
            style = classNames(`active`);
          }
          return (
            <PaginationItem
              key={num}
              title={num}
              style={style}
              onHandleChangePage={this.handleChangePage.bind(this, num)}
            />
          );
        })}
      </Fragment>
    );
  };

  renderPagEnd = currentPage => {
    let style = classNames(``);
    const { pageNumbers, last } = this.state;
    if (pageNumbers.find(number => number === last)) {
      style = classNames(` invisible`);
    }
    return (
      <Fragment>
        <PaginationItem title={"..."} pageItemStyle={style} />

        <PaginationItem
          title={"Next"}
          onHandleChangePage={this.handleChangePage.bind(this, currentPage + 1)}
        />

        <PaginationItem
          title={"Last"}
          style={classNames(`active`)}
          onHandleChangePage={this.handleChangePage.bind(this, last)}
        />
      </Fragment>
    );
  };

  handleChangePage = num => {
    const { fetchMovies } = this.props;
    this.modifyPageNumbers(num);
    fetchMovies(num);
  };

  modifyPageNumbers = num => {
    const { numbers } = this.state;

    let part1 = numbers.slice(0, num - 1);
    let part2 = numbers.slice(num);
    if (part1.length >= 2) {
      part1 = part1.slice(part1.length - 1);
    }
    if (part2.length >= 2) {
      part2 = part2.slice(0, 1);
    }
    const newArr = [...part1, num, ...part2];
    this.setState({ pageNumbers: newArr });
  };

  PaginationList = currentPage => {
    const {first,last} = this.state;
    return (
      <nav className="aria-label">
        <ul className="pagination justify-content-center">
          {currentPage !== first && this.renderPagBegin(currentPage)}
          {this.renderPages(currentPage)}
          {currentPage !== last && this.renderPagEnd(currentPage)}
        </ul>
      </nav>
    );
  };

  render() {
    const { currentPage } = this.props;
    return (
      <div className="pagination-panel">{this.PaginationList(currentPage)}</div>
    );
  }
}

const mapStateToProps = ({ currentPage }) => {
  return { currentPage };
};

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationPanel);
