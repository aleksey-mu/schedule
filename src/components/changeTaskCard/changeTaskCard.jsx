import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Button, Input, Modal } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import moment from 'moment';
import TimeDeadline from './templates/TimeDeadlineTask';
import AdditionItem from './templates/additionItem';
import BasicItem from './templates/basicItem';
import TypeComponent from './templates/typeComponent';
import MapComponent from './templates/mapComponent';
import updateExistingEventByID from '../../actions/httpRequests/updateExistingEventByID';

import './styles/taskCard.scss';



const defaultData = {
    name: '',
    saveLastChange: '',
    saveChangeReason: '', 
    description: '', 
    descriptionUrl: '', 
    isFavorite: false,
    type: '',
    dateTime: '',
    saveImage: '',
    saveFeedback: false,
    saveVideo: '',
    saveLatitude: 0,
    saveLongitude: 0,
    saveColorText: '',
    saveColorBackground: '',
    comment: '',
    allFeedbacks: [],
    user: "student",
}

const ChangeTaskCard = ({ dataTask }) => {
    const { name, saveLastChange, saveChangeReason, description, descriptionUrl, 
        isFavorite, dateTime, saveImage, type, saveFeedback, saveVideo, saveLatitude,
        saveLongitude, comment, user, saveColorBackground, saveColorText,
        allFeedbacks } = defaultData && dataTask;
    const [isEdit, setIsEdit] = useState(false);
    const [lastChange, setLastChange] = useState(saveLastChange || '');
    const [taskDescription, setTaskDescription] = useState(description || '');
    const [taskTitle, setTaskTitle] = useState(name || '');
    const [changeReason, setChangeReason] = useState(saveChangeReason || '');
    const [link, setLink] = useState(descriptionUrl || '');
    const [image, setImage] = useState(saveImage || '');
    const [time, setTime] = useState(dateTime || '');
    const [taskType, setType] = useState(type || '');
    const [feedback, setFeedback] = useState(saveFeedback || false);
    const [latitude, setLatitude] = useState(saveLatitude || 0);
    const [longitude, setLongitude] = useState(saveLongitude || 0);
    const [video, setVideo] = useState(saveVideo || '');
    const [colorText, setColorText] = useState(saveColorText || 'black');
    const [colorBackground, setColorBackground] = useState(saveColorBackground || 'white');
    const [status, setStatus] = useState(isFavorite || false);
    const [editComment, setEditComment] = useState(comment || '');
    const [showModal, setShowModal] = useState(false);
    const [allFeedbacksText, setAllFeedbacksText] = useState(allFeedbacks || []);

    const [isLink, setIsLink] = useState(link);
    const [isDescription, setIsDescription] = useState(taskDescription);
    const [isImage, setIsImage] = useState(image);
    const [isVideo, setIsVideo] = useState(video);
    const [isMap, setIsMap] = useState((saveLatitude || saveLatitude) > 0);
    const [isReason, setIsReason] = useState(changeReason);
    const [isComment, setIsComment] = useState(editComment);
    const [isEditEnd, setIsEditEnd] = useState(false);
    const [valueFeedback, setValueFeedback] = useState('');

    const optionalValues = [link, taskDescription, image, video, changeReason, editComment];
    const statusFunctions = [setIsLink, setIsDescription, setIsImage, setIsVideo, 
        setIsReason, setIsComment];

    async function sendData(dataFeedback, dataStatus) {
        setIsEditEnd(false);
        const teamId = "group51";
        const baseURL = "https://rs-react-schedule.firebaseapp.com/api";
        const obj = { 
            ...dataTask, 
            name: taskTitle, 
            saveLastChange: lastChange, 
            saveChangeReason: changeReason, 
            description: taskDescription, 
            descriptionUrl: link, 
            isFavorite: status, 
            dateTime: time, 
            saveImage: image, 
            type: taskType,
            saveFeedback: feedback, 
            saveVideo: video, 
            saveLatitude: latitude, 
            saveLongitude: longitude, 
            comment: editComment,
            allFeedbacks: allFeedbacksText,
            saveColorText: colorText,
            saveColorBackground: colorBackground,
        };
        const { id } = obj;
        if(dataFeedback) {
            obj.allFeedbacks = dataFeedback;
        }
        if (dataStatus) {
            obj.isFavorite = dataStatus;
        }
        delete obj.data;
        delete obj.index;
        delete obj.user;
        await updateExistingEventByID(baseURL, teamId, obj, id);
    }

    function saveData() {
        setLastChange(moment().format('YYYY-MM-DD HH:mm'));
        setIsEdit(!isEdit);
        optionalValues.forEach((value, index) => {
            if(!value || !value.trim()) {
                statusFunctions[index]("");
            }
        });
        if (latitude === 0 && longitude === 0) {
            setIsMap(false);
        }
        setIsEditEnd(true);
    }

    function changeStatus() {
        if(!isEdit) {
            setStatus(!status);
        }
        sendData(null, !status);
    }

    function savingFeedback() {
        sendData(allFeedbacksText.concat(valueFeedback));
        setAllFeedbacksText(allFeedbacksText.concat(valueFeedback));
        setValueFeedback('');
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
                    title="Комментарий"
                    status={isComment}
                    text="комментарий"
                    isEdit={isEdit}
                    value={editComment}
                    changeValue={setEditComment}
                    changeStatus={setIsComment}
                    placeholder="Поле для комментария"
                    type="comment"
                />
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
                            value={valueFeedback}
                            onChange={(event) => setValueFeedback(event.target.value)}
                        />
                        <Button onClick={() => savingFeedback()}>оставить feedback</Button>
                        { allFeedbacksText.length > 0 && 
                            <div>
                                <Button type="button" onClick={() => setShowModal(true)}>
                                    посмотреть feedback
                                </Button>
                                <Modal
                                    visible={showModal}
                                    onCancel={() => setShowModal(false)}
                                    width="fit-content"
                                    closable="false"
                                    style={{ top: 10, left: 0 }}
                                >
                                
                                { allFeedbacksText.map((value) => <p>{value}</p>) }
                                </Modal>
                            </div>
                        }
                    </div>
                }
            </div>
            <div className="buttons">
            {isEdit === true ? (
                    <div>
                        <Button onClick={() => saveData()}>
                            Завершить редактирование
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
            {
                isEditEnd && 
                <Button onClick={() => sendData()}>
                    Сохранить задание
                </Button>
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
        comment: PropTypes.string,
        user: PropTypes.string,
    }),
};

ChangeTaskCard.defaultProps = {
    dataTask: defaultData,
}

export default ChangeTaskCard;