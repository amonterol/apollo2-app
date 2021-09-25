import Pagination from "react-js-pagination";

const AppPagination = ({ count, pageSize, pageNumber, onChange }) => {
  return (
    <Pagination
      itemClass="page-item"
      linkClass="page-link"
      activePage={pageNumber}
      itemsCountPerPage={pageSize}
      totalItemsCount={count}
      pageRangeDisplayed={10}
      onChange={(page) => onChange(page, pageSize)}
    />
  );
};

export default AppPagination;
