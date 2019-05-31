import React from "react";
import PropTypes from "prop-types";
import noop from 'lodash/noop';

const PaginationItem = ({
  title,
  pageItemStyle,
  style,
  onHandleChangePage
}) => {
  return (
    <li className={`page-item${pageItemStyle}`}>
      <div className="page-link" onClick={onHandleChangePage}>
        <div className={style}>{title}</div>
      </div>
    </li>
  );
};

PaginationItem.defaulProps = {
  pageItemStyle: "",
  style: "",
  onHandleChangePage: noop,
};

PaginationItem.propTypes = {
  pageItemStyle: PropTypes.string,
  style: PropTypes.string,
  onHandleChangePage: PropTypes.func
};

export default PaginationItem;

