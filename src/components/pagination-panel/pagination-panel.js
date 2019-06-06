import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovies } from '../../redux/actions';
import PaginationItem from '../pagination-item';

import './pagination-panel.css';

const classNames = require('classnames');

class PaginationPanel extends Component {
  renderPagBegin = () => {
    const { currentPage } = this.props;
    const style = classNames({
      ' invisible': currentPage === 1,
    });
    return (
      <Fragment>
        <PaginationItem
          title="First"
          style={classNames('active')}
          onHandleChangePage={this.handleChangePage.bind(this, 1)}
          pageItemStyle={style}
        />

        <PaginationItem
          title="Prev"
          onHandleChangePage={this.handleChangePage.bind(this, currentPage - 1)}
          pageItemStyle={style}
        />
      </Fragment>
    );
  };

  renderPages = () => {
    const { currentPage, pagesCount } = this.props;
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
          <PaginationItem title="..." pageItemStyle={classNames('')} />
        ) : null}
        {this.renderPageNumbers(pref)}
        <PaginationItem
          key={`pagebutton-${currentPage}`}
          title={currentPage}
          style={classNames('active')}
          onHandleChangePage={this.handleChangePage.bind(this, currentPage)}
        />
        {this.renderPageNumbers(after)}
        {afterPages.length > pageCount ? (
          <PaginationItem title="..." pageItemStyle={classNames('')} />
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
      onHandleChangePage={this.handleChangePage.bind(this, pageNumber)}
    />
  );

  renderPagEnd = () => {
    const { currentPage, pagesCount } = this.props;
    const style = classNames({
      ' invisible': currentPage === pagesCount,
    });

    return (
      <Fragment>
        <PaginationItem
          title="Next"
          onHandleChangePage={this.handleChangePage.bind(this, currentPage + 1)}
          pageItemStyle={style}
        />

        <PaginationItem
          title="Last"
          style={classNames('active')}
          onHandleChangePage={this.handleChangePage.bind(this, pagesCount)}
          pageItemStyle={style}
        />
      </Fragment>
    );
  };

  handleChangePage = pageNumber => this.props.fetchMovies(pageNumber);

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

PaginationPanel.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

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
