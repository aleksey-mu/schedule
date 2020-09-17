import React from 'react';
import PropTypes from "prop-types";
import TimeDeadline from './templates/TimeDeadlineTask'
import AddToCalendarTask from './templates/AddToCalendarTask'
import AddToFavoritesTask from './templates/AddToFavoritesTask'


import './styles/taskCard.scss'

const TaskCard = ({ taskTitle, lastChange, changeReason, taskDescription }) => {


    return (
        <div className="task-card-wrapper">
            <div className="task-card-block">
                <div className="task-card-title-block">
                    <div className="task-card-title">
                        {taskTitle}
                    </div>
                </div>
                <div className="task-card-data-block">
                    <div className="task-card-time">
                        <span>Время: </span>
                        <TimeDeadline time="2020-09-18 23:59" />
                        <AddToCalendarTask/>
                        <AddToFavoritesTask />
                    </div>
                    <div>
                        <span>Последнее изменение: {lastChange}</span>
                    </div>
                    <div>
                        <span>Причина изменения: {changeReason}</span>
                    </div>
                </div>
                <div className="task-card-description-block">
                    <span className="task-card-description-title">Описание:</span>
                    <span className="task-card-description">
                        {taskDescription}
                    </span>
                </div>
            </div>
        </div>
    )
}

TaskCard.propTypes = {
    taskTitle: PropTypes.string,
    lastChange: PropTypes.string,
    changeReason: PropTypes.string,
    taskDescription: PropTypes.string
};

TaskCard.defaultProps = {
    taskTitle: "React schedule",
    lastChange: "14.09.2020 15:35",
    changeReason: "Уточнено задание, сдвинут дедлайн",
    taskDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

export default TaskCard;