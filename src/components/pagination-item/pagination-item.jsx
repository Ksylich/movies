import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const PaginationItem = ({
  title,
  pageItemStyle,
  btnStyle,
  onHandleChangePage,
  currentPage,
}) => {
  const changePage = useCallback(
    () => {
      onHandleChangePage(currentPage);
    },
    [currentPage],
  );

  return (

    <li className={`page-item ${pageItemStyle}`}>
      <div className="page-link" role="presentation" onClick={changePage}>
        <div className={btnStyle}>{title}</div>
      </div>
    </li>
  );
};

PaginationItem.defaultProps = {
  pageItemStyle: '',
  btnStyle: '',
  onHandleChangePage: noop,
  currentPage: null,
};

PaginationItem.propTypes = {
  title: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  pageItemStyle: PropTypes.string,
  btnStyle: PropTypes.string,
  onHandleChangePage: PropTypes.func,
  currentPage: PropTypes.number,
};

export default PaginationItem;
