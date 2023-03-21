import {Link} from "react-router-dom";
import {useScroll} from "../../hooks/useScroll";

type SearchT = {
    searchString: string
    onSearchChange: (event: any) => void
    searchIsActive: boolean
    onSearchFocus: () => void
    resetSearch: () => void
}

const SearchHeader = ({searchString, onSearchChange, searchIsActive, onSearchFocus, resetSearch}: SearchT) => {
    const {scrollPosition} = useScroll()

    return (
        <div className={`search-header ${scrollPosition > 10 ? 'active' : ''}`}>
            <div className="search-actions-container grid container">
                <form>
                    <div className="input-container search">
                        <img src="/images/magnify-icon.svg" alt="Magnify Icon"/>
                        <input className="input"
                               type="text"
                               name="search"
                               value={searchString}
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
