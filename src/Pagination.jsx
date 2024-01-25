const Pagination = ({ setSearchUrl, nextPageLink, prevPageLink }) => {
  return (
    <div className="btn-container">
      {prevPageLink ? (
        <button
          onClick={() => {
            setSearchUrl(prevPageLink);
          }}
          className="btn prev-btn"
        >
          prev
        </button>
      ) : (
        ""
      )}
      {nextPageLink ? (
        <button
          onClick={() => {
            setSearchUrl(nextPageLink);
          }}
          className="btn next-btn"
        >
          next
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default Pagination;
