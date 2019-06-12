import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { fetchMovies } from '../../redux/actions';
import PaginationItem from '../pagination-item';

import './pagination-panel.css';


class PaginationPanel extends Component {
    static propTypes = {
      currentPage: PropTypes.number.isRequired,
      pagesCount: PropTypes.number.isRequired,
      fetchMovies: PropTypes.func.isRequired,
    };

  renderPagBegin = () => {
    const { currentPage, fetchMovies } = this.props;
    const style = classNames({
      invisible: currentPage === 1,
    });
    return (
      <Fragment>
        <PaginationItem
          title="First"
          style="active"
          onHandleChangePage={fetchMovies}
          pageItemStyle={style}
          currentPage={1}
        />

        <PaginationItem
          title="Prev"
          onHandleChangePage={fetchMovies}
          pageItemStyle={style}
          currentPage={currentPage - 1}
        />
      </Fragment>
    );
  };

  renderPages = () => {
    const { currentPage, pagesCount, fetchMovies } = this.props;
    const pageIndex = currentPage - 1;

    const PAGES_ARR = Array.from({ length: pagesCount }, (v, k) => k + 1);

    const prefPages = PAGES_ARR.slice(0, pageIndex);
    const afterPages = PAGES_ARR.slice(pageIndex + 1);
    const pageCount = 1;

    const pref = prefPages.length > pageCount ? prefPages.slice(-pageCount) : prefPages;
    const after = afterPages.length > pageCount
      ? afterPages.slice(0, pageCount)
      : afterPages;

    return (
      <Fragment>
        {prefPages.length > pageCount ? (
          <PaginationItem title="..." />
        ) : null}
        {this.renderPageNumbers(pref)}
        <PaginationItem
          key={`pagebutton-${currentPage}`}
          title={currentPage}
          style="active"
          onHandleChangePage={fetchMovies}
          currentPage={currentPage}
        />
        {this.renderPageNumbers(after)}
        {afterPages.length > pageCount ? (
          <PaginationItem title="..." />
        ) : null}
      </Fragment>
    );
  };

  renderPageNumbers = pages => (
    <Fragment>{pages.map(this.renderPageButton)}</Fragment>
  );

  renderPageButton = pageNumber => (
    <PaginationItem
      key={`pagebutton-${pageNumber}`}
      title={pageNumber}
      onHandleChangePage={this.props.fetchMovies}
      currentPage={pageNumber}
    />
  );

  renderPagEnd = () => {
    const { currentPage, pagesCount, fetchMovies } = this.props;
    const style = classNames({
      invisible: currentPage === pagesCount,
    });

    return (
      <Fragment>
        <PaginationItem
          title="Next"
          onHandleChangePage={fetchMovies}
          pageItemStyle={style}
          currentPage={currentPage + 1}
        />

        <PaginationItem
          title="Last"
          style="active"
          onHandleChangePage={fetchMovies}
          pageItemStyle={style}
          currentPage={pagesCount}
        />
      </Fragment>
    );
  };

  render() {
    return (
      <div className="pagination-panel">
        <nav className="aria-label">
          <ul className="pagination justify-content-center">
            {this.renderPagBegin()}
            {this.renderPages()}
            {this.renderPagEnd()}
          </ul>
        </nav>
      </div>
    );
  }
}


const mapStateToProps = ({ currentPage, pagesCount }) => ({
  currentPage,
  pagesCount,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationPanel);
