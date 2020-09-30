import React from 'react';
import PropTypes from "prop-types";
import { Button, Input } from 'antd';

const TypeComponent = (props) => {
    const { isEdit, type, setType, setColorText, colorText, setColorBackground,
         colorBackground } = props;

    return(
        <div>  
                <div className="wrapper-type">
                    <div>
                        Тип задания: 
                        <span 
                            className="type" 
                            style={{ color: colorText, backgroundColor: colorBackground }}
                        >
                            {type || 'тип задания не указан'}
                        </span>
                    </div>
                    {
                        isEdit && <>
                        <p className="hint">введите тип задания в поле для ниже*</p>
                        <Input 
                            onChange={(event) => setType(event.target.value)} 
                            placeholder='поле для типа задания'
                        />
                        <p className="hint">здесь можно указать тип задания*</p>
                        <Button onClick={() => setType("offline")}>offline</Button>
                        <p className="hint">чтобы появилась возможность добавить карту выберите тип задания offline*</p>
                        <div>
                            <input 
                                type="color" 
                                value={colorText} 
                                name="имя"
                                className="input-color"
                                onChange={(event) => setColorText(event.target.value)}
                            />
                            <p className="hint">нажмите на квадрат сверху для выбора цвета шрифта*</p>
                        </div>
                        <input 
                            type="color" 
                            value={colorBackground} 
                            name="имя"
                            className="input-color"
                            onChange={(event) => setColorBackground(event.target.value)}
                        />
                        <p className="hint">нажмите на квадрат сверху для выбора цвета фона*</p>
                        </> 
                    }
                </div>
        </div>
    )
}

TypeComponent.propTypes = {
    isEdit: PropTypes.bool,
    type: PropTypes.string,
    setType: PropTypes.func,
    setColorText: PropTypes.func,
    colorText: PropTypes.string,
    colorBackground: PropTypes.string,
    setColorBackground: PropTypes.func,
}

TypeComponent.defaultProps = {
    isEdit: false,
    type: '',
    setType: () => '',
    setColorText: () => '',
    colorText: 'black',
    colorBackground: 'white',
    setColorBackground: () => '',
}

export default TypeComponent;