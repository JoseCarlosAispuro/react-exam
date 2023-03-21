import React from "react";

type SearchResultsStateT = {
    image: string
    heading: string
    copy: string
}

const SearchResultsState = ({image, heading, copy}: SearchResultsStateT) => {
    return (
        <div className="search-results-state grid container">
            {image !== '' && (
                <img src={image} alt="Magnify Icon"/>
            )}
            <div className="search-content columns-8">
                <p className="heading secondary">{heading}</p>
                <p className="search-copy body regular">{copy}</p>
            </div>
        </div>
    )
}

export default SearchResultsState
