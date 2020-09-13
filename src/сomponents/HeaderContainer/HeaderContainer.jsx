import React from 'react';
import { Row, Col, Layout } from 'antd';

import styles from './HeaderContainer.module.scss';
import Logo from '../common/Logo/Logo';
import Score from './Score/Score';
import Profile from './Profile/Profile';

const { Header } = Layout;

const mockPersonData = {
    name: 'Иванов Иван',
    github: 'ivanovIvan'
}

const HeaderContainer = () => {
    const scoreValue = 3452;
    const role = 'student';
    return (
        <Header className={styles.container}>
            <Row justify='space-between' >
                <Col flex="100px">
                    <h1>
                        <Logo />
                    </h1>  
                </Col>
                <Col flex="auto" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Score scoreValue={scoreValue} />
                    <Profile personData={mockPersonData} role={role}/>
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderContainer;