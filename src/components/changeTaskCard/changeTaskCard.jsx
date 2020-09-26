import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Button, Input } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import moment from 'moment';
import TimeDeadline from './templates/TimeDeadlineTask';
import AdditionItem from './templates/additionItem';
import BasicItem from './templates/basicItem';
import TypeComponent from './templates/typeComponent';
import MapComponent from './templates/mapComponent';

import './styles/taskCard.scss';

let currentIsFavorite = false;
let currentTaskTitle = '';
let currentLastChange = 'таск не изменяли';
let currentChangeReason = '';
let currentTaskDescription = '';
let currentLink = '';
let currentType = '';
let currentTime = '2020-01-01 23:59';
let currentImage = '';
let currentFeedback = true;
let currentVideo = '';
let currentLatitude = 0;
let currentLongitude = 0;
let currentColorText = 'black';
let currentColorBackground = 'white';

const defaultData = {
    name: currentTaskTitle,
    saveLastChange: currentLastChange,
    saveChangeReason: currentChangeReason, 
    description: currentTaskDescription, 
    descriptionUrl: currentLink, 
    isFavorite: currentIsFavorite,
    type: currentType,
    dateTime: currentTime,
    saveImage: currentImage,
    saveFeedback: currentFeedback,
    saveVideo: currentVideo,
    saveLatitude: currentLatitude,
    saveLongitude: currentLongitude,
    saveColorText: currentColorText,
    saveColorBackground: currentColorBackground,
}

const ChangeTaskCard = ({ dataTask }) => {
    const { name, saveLastChange, saveChangeReason, description, descriptionUrl, 
        isFavorite, dateTime, saveImage, type, saveFeedback, saveVideo, saveLatitude,
	saveLongitude, saveColorText, saveColorBackground } = defaultData && dataTask;
    const [isEdit, setIsEdit] = useState(false);
    const [lastChange, setLastChange] = useState(saveLastChange || currentLastChange);
    const [taskDescription, setTaskDescription] = useState(description || currentTaskDescription);
    const [taskTitle, setTaskTitle] = useState(name || currentTaskTitle);
    const [changeReason, setChangeReason] = useState(saveChangeReason || currentChangeReason);
    const [link, setLink] = useState(descriptionUrl || currentLink);
    const [image, setImage] = useState(saveImage || currentImage);
    const [time, setTime] = useState(dateTime || currentTime);
    const [taskType, setType] = useState(type || currentType);
    const [feedback, setFeedback] = useState(saveFeedback || currentFeedback);
    const [latitude, setLatitude] = useState(saveLatitude || currentLatitude);
    const [longitude, setLongitude] = useState(saveLongitude || currentLongitude);
    const [video, setVideo] = useState(saveVideo || saveVideo);
    const [colorText, setColorText] = useState(saveColorText || currentColorText);
    const [colorBackground, setColorBackground] = useState(saveColorBackground || currentColorBackground);
    const [status, setStatus] = useState(isFavorite || false);
    const [user, setUser] = useState("student");

    const [isLink, setIsLink] = useState(link);
    const [isDescription, setIsDescription] = useState(taskDescription);
    const [isImage, setIsImage] = useState(image);
    const [isVideo, setIsVideo] = useState(video);
    const [isMap, setIsMap] = useState(false);
    const [isReason, setIsReason] = useState(changeReason);

    const optionalValues = [link, taskDescription, image, video, changeReason];
    const statusFunctions = [setIsLink, setIsDescription, setIsImage, setIsVideo, setIsReason];
    
    function saveData() {
        currentTaskTitle = taskTitle;
        currentLastChange = lastChange;
        currentChangeReason = changeReason;
        currentTaskDescription = taskDescription;
        currentLink = link;
        currentType = taskType;
        currentTime = time;
        currentImage = image;
        currentFeedback = feedback;
        currentVideo = video;
        currentLatitude = latitude;
        currentLongitude = longitude;
        currentColorText = colorText;
        currentColorBackground = colorBackground;
        currentIsFavorite = status;
        setLastChange(moment().format('YYYY-MM-DD HH:mm'));
        setIsEdit(!isEdit);
        optionalValues.forEach((value, index) => {
            if(!value.trim()) {
                statusFunctions[index]("");
            }
        });
        if (latitude === 0 && longitude === 0) {
            setIsMap(false);
        }
    }

    function changeStatus() {
        if(!isEdit) {
            setStatus(!status);
        }
    }

    return (
        <div className="task-card-wrapper">
            <div className="task-card-block">
                {isEdit && <span className="hint">Вы находитесь в режиме редактирования, чтобы увидеть как будет выглядеть карточка с заданием нажмите сохранить*</span>}
                <div className="task-card-title-block">
                    <div className="task-card-title">
                        <BasicItem 
                            isEdit={isEdit}
                            value={taskTitle}
                            onChange={setTaskTitle}
                            defaultValue="Название таска не указано"
                            placeholder="Поле для названия таска"
                            text="название таска"
                        />
                    </div>
                </div>
                <TypeComponent 
                    isEdit={isEdit}
                    type={taskType}
                    setType={setType}
                    setColorText={setColorText}
                    colorText={colorText}
                    setColorBackground={setColorBackground}
                    colorBackground={colorBackground}
                />
                <div className="task-card-data-block">
                {isEdit && <span className="hint">Кнопки &quot;Добавить в календарь&quot; и со звездочкой будут активны при просмотре задания, сейчас вы находитесь на странице редактирования таска*</span>}
                    <div className="task-card-time">
                        <span>Время: </span>
                        <TimeDeadline time={time} isEdit={isEdit} setTime={setTime}/>
                        <Button type="primary">Добавить в календарь</Button>
                        <Button onClick={() => changeStatus()}>
                            {status === false ? <StarOutlined /> : <StarFilled />} 
                        </Button>
                    </div>
                    <div>
                        <p>Последнее изменение: {lastChange}</p>
                    </div>
                    {
                        isReason.trim() && 
                            <div>
                                <div>
                                    Причина изменения:
                                    <BasicItem 
                                        isEdit={isEdit}
                                        value={changeReason}
                                        onChange={setChangeReason}
                                        defaultValue="не указана"
                                        placeholder="Поле для причины изменения"
                                        text="причину изменения"
                                    />
                                </div>
                            </div>
                        || isEdit &&
                            <Button onClick={() => setIsReason("true")}>
                                Добавить причину изменения
                            </Button>
                    }
                </div>
                <AdditionItem
                    status={isDescription}
                    title='Описание'
                    text='описание'
                    isEdit={isEdit}
                    value={taskDescription}
                    changeValue={setTaskDescription}
                    changeStatus={setIsDescription}
                    type='description'
                    placeholder='поле для описания'
                />
                <AdditionItem
                    status={isLink} 
                    title='Ссылка'
                    text='ссылку'
                    isEdit={isEdit}
                    value={link}
                    changeValue={setLink}
                    changeStatus={setIsLink}
                    type='link'
                    placeholder='поле для ссылки'
                />
                <AdditionItem
                    status={isImage} 
                    title= 'Картинка для задания'
                    text='картинку'
                    isEdit={isEdit}
                    value={image}
                    changeValue={setImage}
                    changeStatus={setIsImage}
                    type='image'
                    placeholder='поле для ссылки на картинку'
                />
                <AdditionItem
                    status={isVideo}
                    title='Видео'
                    text='видео'
                    isEdit={isEdit}
                    value={video}
                    changeValue={setVideo}
                    changeStatus={setIsVideo}
                    type='video'
                    placeholder='поле для видео с ютуба'
                />
                <MapComponent 
                    latitude={latitude}
                    setLatitude={setLatitude}
                    longitude={longitude}
                    setLongitude={setLongitude}
                    isEdit={isEdit}
                    isMap={isMap}
                    setIsMap={setIsMap}
                    type={taskType}
                />
                {
                    feedback && 
                    <div className="feedback">
                        <span className="task-card-description-title">Feedback:</span>
                        <Input.TextArea
                            placeholder="поле для feedback"
                            autoSize='true'
                        />
                    </div>
                }
            </div>
            <div className="buttons">
                <p>Пользователь: {user}</p>
            {
                isEdit === false &&
                <Button onClick={() => setUser(user === "student" ? "mentor" : "student")}>
                    сменить пользователя
                </Button>
            }
            {isEdit === true ? (
                    <div>
                        <Button onClick={() => saveData()}>
                            Сохранить задание
                        </Button>
                        <Button onClick={() => setFeedback(!feedback)}>
                            {feedback === false ? 'разрешить оставлять feedback' : 'запретить оставлять feedback'}
                        </Button>
                    </div>
                ) : (
                    user === "mentor" && 
                    <Button onClick={() => setIsEdit(!isEdit)}>
                        Редактировать задание
                    </Button>
                )
            }
            </div>
        </div>
    )
}

ChangeTaskCard.propTypes = {
    dataTask: PropTypes.shape({
        name: PropTypes.string,
        saveLastChange: PropTypes.string,
        saveChangeReason: PropTypes.string, 
        description: PropTypes.string, 
        descriptionUrl: PropTypes.string, 
        isFavorite: PropTypes.bool,
        dateTime: PropTypes.string,
        saveImage: PropTypes.string,
        type: PropTypes.string,
        saveFeedback: PropTypes.bool,
        saveVideo: PropTypes.string,
        saveLatitude: PropTypes.number,
        saveLongitude: PropTypes.number,
        saveColorBackground: PropTypes.string,
    }),
};

ChangeTaskCard.defaultProps = {
    dataTask: defaultData,
}

export function sendData() {
    return { currentTaskTitle, currentLastChange, currentChangeReason, 
        currentTaskDescription, currentLink, currentIsFavorite, currentType, 
        currentTime, currentFeedback, currentVideo, currentLatitude, currentLongitude,
        currentColorText, currentColorBackground  };
}

export default ChangeTaskCard;