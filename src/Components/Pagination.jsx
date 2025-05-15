import React from 'react';

const Pagination = ({ skip, setSkip, total }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(total / itemsPerPage);
  const currentPage = Math.floor(skip / itemsPerPage) + 1;

  const goToPage = (page) => {
    setSkip((page - 1) * itemsPerPage);
  };

  return (
    <nav aria-label="Page navigation example" className="mt-4">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
            Previous
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li
              key={page}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => goToPage(page)}>
                {page}
              </button>
            </li>
          );
        })}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
