import React from "react";

const classNames = require("classnames");

const PaginationIten = ({ title, activePage, onPageHandler }) => {
  let style = classNames(``);

  if (activePage === title || title === "First" || title === "Last") {
    style = classNames(`active`);
  }

  return (
    <li className="page-item ">
      <div className="page-link" onClick={onPageHandler}>
        <div className={style}>{title}</div>
      </div>
    </li>
  );
};

export default PaginationIten;
