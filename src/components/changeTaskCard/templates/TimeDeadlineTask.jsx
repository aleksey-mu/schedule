import React from 'react';
import PropTypes from "prop-types";
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const TimeDeadlineTask = ({ time, isEdit, setTime }) => {
    return (
        <Space direction="vertical" size={12}>
                <DatePicker 
                    showTime 
                    allowClear={false}
                    disabled={!isEdit}
                    defaultValue={moment(`${time}`, 'YYYY-MM-DD HH:mm' )}
                    onChange={(date) => setTime(date.format('YYYY-MM-DD HH:mm'))}
                />
        </Space>
    )
}

TimeDeadlineTask.propTypes = {
    time: PropTypes.string,
    isEdit: PropTypes.bool,
    setTime: PropTypes.func,
};

TimeDeadlineTask.defaultProps = {
    time: "2020-09-18 22:58",
    isEdit: false,
    setTime: () => '',
};

export default TimeDeadlineTask;
