import React from "react";

function getPageNumbers(currentPage, totalPages) {
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }
  return pages;
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex justify-center mt-4 space-x-1">
      <button
        className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        &lt;
      </button>
      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={"ellipsis-" + idx}
            className="px-2 py-1 text-gray-400 select-none"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`px-3 py-1 rounded border border-gray-300 mx-0.5 ${
              page === currentPage
                ? "bg-blue-500 text-white font-semibold border-blue-500 cursor-default"
                : "bg-white text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}
      <button
        className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
