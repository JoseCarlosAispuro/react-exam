import React from "react";
import {Link} from "react-router-dom";

type SearchT = {
    searchValue: string
    onSearchChange: (event: any) => void
    searchIsActive: boolean
    onSearchFocus: () => void
    resetSearch: () => void
}

const SearchHeader = ({searchValue, onSearchChange, searchIsActive, onSearchFocus, resetSearch}: SearchT) => {
    return (
        <div className="search-header">
            <div className="search-actions-container grid container">
                <form>
                    <div className="input-container search">
                        <img src="/images/magnify-icon.svg" alt="Magnify Icon"/>
                        <input className="input"
                               type="text"
                               name="search"
                               value={searchValue}
                               onChange={onSearchChange}
                               onFocus={onSearchFocus}
                               placeholder="Search"
                        />
                    </div>
                </form>
                {!searchIsActive && (
                    <Link className="profile-link" to="/profile">
                        <img src="/images/user-icon.svg" alt="User Icon"/>
                    </Link>
                )}
                {searchIsActive && (
                    <button className="cancel-button body small"
                            onClick={() => resetSearch()}>
                        Cancel
                    </button>
                )}
            </div>
        </div>
    )
}

export default SearchHeader
