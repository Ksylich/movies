import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const PaginationItem = ({
  title,
  pageItemStyle,
  style,
  onHandleChangePage,
}) => (
  <li className={`page-item${pageItemStyle}`}>
    <div className="page-link" role="presentation" onClick={onHandleChangePage}>
      <div className={style}>{title}</div>
    </div>
  </li>
);

PaginationItem.defaulProps = {
  pageItemStyle: '',
  style: '',
  onHandleChangePage: noop,
};

PaginationItem.propTypes = {
  title: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pageItemStyle: PropTypes.string,
  style: PropTypes.string,
  onHandleChangePage: PropTypes.func,
};

export default PaginationItem;
