import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ page, setPage, count, LIMIT }) => {
  const pageMax = Math.ceil(Number(count) / Number(LIMIT));

  return (
    <div className="pagination">
      {page > 1 && (
        <div
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {" "}
          <FontAwesomeIcon icon="angle-left" className="icon" />{" "}
        </div>
      )}
      <span>
        {" "}
        page {page} / {pageMax}
      </span>
      {page < pageMax && (
        <div
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {" "}
          <FontAwesomeIcon icon="angle-right" className="icon" />{" "}
        </div>
      )}
    </div>
  );
};

export default Pagination;
