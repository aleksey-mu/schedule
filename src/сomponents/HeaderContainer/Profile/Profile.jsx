import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, Dropdown, Switch, Space } from 'antd';
import { shape } from 'prop-types';

import ProfileIcon from '../../Icons/ProfileIcon';
import styles from './Profile.module.scss';
import { switchUserRole } from '../../../Redux/roleReducers';

const Profile = ({personData}) => {
  const dispatch = useDispatch();
  const userRole = useSelector(state => state.userRole.role);
  const userRoleLocalStorage = localStorage.getItem('appRSSchoolRole');

  useEffect(() => {
    dispatch(switchUserRole(userRoleLocalStorage));
  }, [userRoleLocalStorage])

  const handleMenuClick = (e) => {
      console.log('click', e);
    }

  const handleChange = () => {
    const roleToSet = userRole === "Student" ? "Mentor" : "Student";
    localStorage.setItem('appRSSchoolRole', roleToSet);
    dispatch(switchUserRole(roleToSet));
  }

  const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
          <Switch checkedChildren="Student" unCheckedChildren="Mentor" defaultChecked={userRole === "Student"} onChange={handleChange}/>
        </Menu.Item>
      </Menu>
    );

  return (
      <div className={styles.container}>
        <Space style={{flexWrap: 'wrap', justifyContent: 'flex-end'}}>
          <Space style={{flexWrap: 'wrap', justifyContent: 'flex-end'}}>
            <strong>{userRole}:</strong>
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

Profile.propTypes = {
  personData: shape,
}

Profile.defaultProps = {
  personData: null,
};

export default Profile;