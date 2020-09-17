import React from 'react';
import PropTypes from "prop-types";
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const TimeDeadlineLecture = ({ time }) => {
    return (
        <Space direction="vertical" size={12}>
                <DatePicker 
                    showTime 
                    allowClear={false}
                    defaultValue={moment(`${time}`, 'YYYY-MM-DD HH:mm' )}
                />
        </Space>
    )
}

TimeDeadlineLecture.propTypes = {
    time: PropTypes.string
};

TimeDeadlineLecture.defaultProps = {
    time: "2020-09-18 23:59"
};

export default TimeDeadlineLecture;
