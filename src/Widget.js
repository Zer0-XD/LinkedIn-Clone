import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import './Widget.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className='widget__article'>
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widget'>
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Anees", "This is linkedIn clone")}
            {newsArticle("Anees", "This is linkedIn clone")}
            {newsArticle("Zero", "Whatssss UPPPPPP")}
            {newsArticle("Anees", "Another test text")}
            {newsArticle("Anees", "BLA BLA")}
            {newsArticle("Anees", "TESTING ")}
        </div>
    )
}

export default Widget
