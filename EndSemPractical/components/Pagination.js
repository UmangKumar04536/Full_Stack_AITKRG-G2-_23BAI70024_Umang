import React, { useState } from "react";
import items from "../data/items";

const Pagination = () => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="card">
      <h2 className="title">Paginated List</h2>

      <ul className="list">
        {currentItems.map((item) => (
          <li key={item.id} className="list-item">
            {item.name}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Previous
        </button>

        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Pagination;