import React from 'react'

const Issue = ({ img, id, number, available }) => {
    return (
        <section id={id}>
            <img src={img} alt={id} className="issue-img" />
            <p >Issue #{number}</p>
            <p className="section-small"><a href="https://www.bruil.info/product/backstage-talks-5/">BUY HERE</a></p>
            <p className="section-small">or in <a href="http://backstagetalks.com/stocklist.php">selected stores</a>.</p>
        </section>
    )
}

export default Issue
