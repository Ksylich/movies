import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const PaginationItem = ({
  title,
  pageItemStyle,
  style,
  onHandleChangePage,
  currentPage,
}) => {
  const memoizedCallback = useCallback(
    () => {
      onHandleChangePage(currentPage);
    },
    [currentPage],
  );

  return (

    <li className={`page-item ${pageItemStyle}`}>
      <div className="page-link" role="presentation" onClick={memoizedCallback}>
        <div className={style}>{title}</div>
      </div>
    </li>
  );
};


PaginationItem.defaulProps = {
  pageItemStyle: '',
  style: '',
  onHandleChangePage: noop,
  currentPage: null,
};

PaginationItem.propTypes = {
  title: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  pageItemStyle: PropTypes.string,
  style: PropTypes.string,
  onHandleChangePage: PropTypes.func,
  currentPage: PropTypes.number,
};

export default PaginationItem;
