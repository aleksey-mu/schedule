import React from 'react';
import PropTypes from "prop-types";
import TimeDeadlineLecture from './templates/TimeDeadlineLecture'
import AddToCalendarLecture from './templates/AddToCalendarLecture'
import AddToFavoritesLecture from './templates/AddToFavoritesLecture'

import './styles/lectureCard.scss'

const LectureCard = ({ lectureTitle, link, description }) => {
    return (
        <div className="lecture-card-wrapper">
        <div className="lecture-card-block">
            <div className="lecture-card-title-block">
                <div className="lecture-card-title">
                    {lectureTitle}
                </div>
            </div>
            <div className="lecture-card-data-block">
                <div className="lecture-card-time">
                    <span>Время: </span>
                    <TimeDeadlineLecture time="2020-09-18 23:59" />
                    <AddToCalendarLecture/>
                    <AddToFavoritesLecture />
                </div>
            </div>
            <div className="lecture-card-info-block">
                <div className="lecture-card-description-block">
                    <span className="lecture-card-description-title">
                        Описание:
                    </span>
                    <span className="lecture-card-description">
                        {description}
                    </span>
                </div>
                <div className="lecture-card-link-block">
                    <span className="lecture-card-description-title">
                        Ссылка:
                    </span>
                    <span className="lecture-card-description">
                        <a href={link}>{link}</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

LectureCard.propTypes = {
    lectureTitle: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string
};

LectureCard.defaultProps = {
    lectureTitle: "React routing lecture",
    link: 'https://youtu.be/eeyWc9Erkrw',
    description: 'Лекция по роутингу'
};

export default LectureCard;