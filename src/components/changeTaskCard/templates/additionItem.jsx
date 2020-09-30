import React from 'react';
import PropTypes from "prop-types";
import { Button, Input } from 'antd';

const AdditionItem = (props) => {
    const {status, title, text, changeValue, value, isEdit, changeStatus, type, placeholder} = props;
    let baseInfo = '';
    switch(type) {
        case 'link' : baseInfo = <a href={value} target="_blank" rel="noreferrer">{value}</a>;
        break;
        case 'description' : baseInfo = value;
        break;
        case 'image': baseInfo = <img className='image' src={value} alt='картинка для задания'/>;
        break;
        case 'comment': baseInfo = value;
        break;
        case 'video': baseInfo = <iframe 
                                    title="video" 
                                    width="80%" 
                                    height="260px" 
                                    src={`https://www.youtube.com/embed/${value.replace(/https:\/\/www.youtube.com\/watch\?v=|https:\/\/youtu.be\//, '')}`} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
        break;
        default: baseInfo = '';
    }
    return (
        <div>
            {
                (
                    status.trim() && (
                        <div className="task-card-description-block">
                            <span className="task-card-description-title">{title}:</span>
                            <span className="task-card-description"> {isEdit === true ? (
                                    <div> 
                                        <Input.TextArea
                                            defaultValue={value} 
                                            onChange={(event) => changeValue(event.target.value)}
                                            autoSize='true'
                                            placeholder={placeholder}
                                        />
                                        <span className="hint">
                                            Оставьте поле пустым если хотите убрать {text}*
                                        </span>
                                    </div> 
                                ) : (
                                    baseInfo
                                )
                            }
                            </span>
                        </div>
                    )
                ) || (
                    isEdit && <Button onClick={() => changeStatus("true")}>Добавить {text}</Button>
                )
            }
        </div>
    );
}

AdditionItem.propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    changeValue: PropTypes.func,
    changeStatus: PropTypes.func,
    isEdit: PropTypes.bool,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

AdditionItem.defaultProps = {
    status: "",
    title: "",
    text: "",
    value: "",
    changeValue: () => '',
    changeStatus: () => '',
    isEdit: false,
    type: 'description',
    placeholder: '',
}

export default AdditionItem;