import React from 'react';
import { Button, Menu, Dropdown, Switch, Space } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

import ProfileIcon from '../../Icons/ProfileIcon';
import styles from './Profile.module.scss';

const Profile = ({role, personData}) => {

    const handleMenuClick = (e) => {
        console.log('click', e);
      }

    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">
            <Switch checkedChildren="Mentor" unCheckedChildren="Student" defaultChecked />
          </Menu.Item>
        </Menu>
      );

    return (
        <div className={styles.container}>
          <Space>
            <Space>
              <strong>{role}:</strong>
              <span>{personData.name},</span>
            </Space>            
            <span>@{personData.github}</span>
            <Dropdown overlay={menu}>
                  <Button type="text" size='small' className={styles.profileButton}>
                      <ProfileIcon />
                  </Button>
              </Dropdown>
          </Space>
        </div>
    );
}

export default Profile;