import React from 'react'
import PropTypes from 'prop-types'

const Issue = ({ img, id, number, available }) => {
    return (
        <section id={id}>
            <img src={img} alt={id} className="issue-img" />
            <p>Issue #{number}{available ? "" : " is sold out"}</p>
            {available && <p className="section-small"><a href="https://www.bruil.info/product/backstage-talks-5/">BUY HERE</a></p>}
            <p className="section-small">{available ? "or in" : "If you are lucky, you may get the last pieces in"} 
                {!available && <br />}
                <a href="http://backstagetalks.com/stocklist.php"> selected stores</a>
            </p>
        </section>
    )
}

Issue.propTypes = {
    img: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
    available: PropTypes.bool
}

export default Issue
