import React from 'react';
import '../search.css';

export default props => {
    const {
        loading,
        showPrevLink,
        showNextLink,
        handlePrevClick,
        handleNextClick
    } = props;
    return (
        <div className="nav-link-container">
            <a
                href="/"
                className={`nav-link ${showPrevLink ? "show" : "hide"} 
          ${loading ? "greyed-out" : ""}`}
                onClick={handlePrevClick}
            >
                &#x2190;
      </a>

            <a
                href="/"
                className={`nav-link ${showNextLink ? "show" : "hide"}
          ${loading ? "greyed-out" : ""}`}
                onClick={handleNextClick}
            >
                &#x2192;
      </a>
        </div>
    );
};