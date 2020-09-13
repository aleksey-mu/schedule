import React from 'react';
import { Tag, Space } from 'antd';

import styles from './Score.module.scss';

const Score = ({scoreValue}) => {
    return (
        <div className={styles.container}>
            <Space>
                <strong>Score:</strong>
                <Tag color="green" >{scoreValue}</Tag>
            </Space> 
        </div>
    );
}

export default Score;