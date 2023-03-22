import {Link} from "react-router-dom";

type HeaderLinks = {
    prevLink: string
    nextLink: string
    header: string
}
const MobileHeader = ({prevLink, nextLink, header}: HeaderLinks) => {
    return (
        <div className="header grid">
            {prevLink !== '' &&
            <Link to={prevLink} className="chevron-prev-container">
                <img className="prev-arrow" src="/images/back-chevron.svg" alt="Back"/>
            </Link>
            }
            {header !== '' &&
            <span className="page-header heading tertiary">{header}</span>
            }
            {nextLink !== '' &&
            <Link to={nextLink} className="chevron-next-container">
                <img className="next-arrow" src="/images/back-chevron.svg" alt="Next"/>
            </Link>
            }
        </div>
    )
}

export default MobileHeader
