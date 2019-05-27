import React from 'react';

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
    onHandleChangePage: () => {}
  };

  export default PaginationItem;