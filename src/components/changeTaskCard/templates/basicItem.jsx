import React from 'react';
import PropTypes from "prop-types";
import { Input } from 'antd';

const BasicItem = ({isEdit, value, onChange, defaultValue, placeholder, text}) => {
    return (
        <div>
            {
                isEdit === true ? (
                    <div>
                        <Input 
                            defaultValue={value} 
                            onChange={(event) => onChange(event.target.value)}
                            placeholder={placeholder}
                        />
                        <p className="hint">
                            Здесь можно указать {text}*
                        </p>
                    </div>
                ) : ( 
                    value || defaultValue
                )
            }
        </div>
    )
}

BasicItem.propTypes = {
    isEdit: PropTypes.bool,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    text: PropTypes.string,
    placeholder: PropTypes.string,
}

BasicItem.defaultProps = {
    isEdit: false,
    value: '',
    defaultValue: '',
    onChange: () => '',
    text: '',
    placeholder: '',
}

export default BasicItem;