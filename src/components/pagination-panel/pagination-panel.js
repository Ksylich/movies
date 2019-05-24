import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCurrentPage } from "../../actions";
import PaginationItem from "../pagination-item";

import "./pagination-panel.css";

const PaginationList = ({ items, currentPage, onPageHandler }) => {
  return (
    <div className="pagination-panel">
      <nav className="aria-label">
        <ul className="pagination justify-content-center">
          {items.map(title => {
            return (
              <PaginationItem
                key={title}
                title={title}
                activePage={currentPage}
                onPageHandler={() => onPageHandler(title)}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

class PaginationPanel extends Component {
  state = {
    case1: ["First", "Prev", "1", "2", "3", "...", "Next", "Last"],
    case2: ["First", "Prev", "...", "", "", "", "...", "Next", "Last"],
    case3: ["First", "Prev", "...", "", "", "", "Next", "Last"],
    cursor: 0,
    last: 50,
    first: 1
  };

  newPage = num => {
    console.log(num);
  };

  render() {
    const { currentPage } = this.props;
    return (
      <PaginationList
        items={this.state.case1}
        currentPage={currentPage}
        onPageHandler={this.newPage}
      />
    );
  }
}

const mapStateToProps = ({ currentPage }) => {
  return { currentPage };
};

const mapDispatchToProps = {
  changeCurrentPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationPanel);
