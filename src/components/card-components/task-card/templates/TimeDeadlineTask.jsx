import React from 'react';
import PropTypes from "prop-types";
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const TimeDeadlineTask = ({ time }) => {
    return (
        <Space direction="vertical" size={12}>
                <DatePicker 
                    showTime 
                    allowClear={false}
                    disabled="true"
                    defaultValue={moment(`${time}`, 'YYYY-MM-DD HH:mm' )}
                />
        </Space>
    )
}

TimeDeadlineTask.propTypes = {
    time: PropTypes.string
};

TimeDeadlineTask.defaultProps = {
    time: "2020-09-18 23:59"
};

export default TimeDeadlineTask;
