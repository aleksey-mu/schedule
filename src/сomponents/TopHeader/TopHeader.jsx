import React, { 
//     useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Space } from 'antd';
import {
    MenuOutlined
  } from '@ant-design/icons';
import Logo from '../common/Logo/Logo';
import { toggleMenuSet } from '../../Redux/reducers';

import styles from './TopHeader.module.scss';

const TopHeader = () => {

    const dispatch = useDispatch();
    const collapsed = useSelector(state => state.toggleMenu.collapsed);
    // const [collapsed, setCollapsed] = useState(true);
    const onCollapse = () => {
        // setCollapsed(bool);
        // dispatch({type: 'toggleMenuSet', payload: bool});
        // console.log(toggleMenuSet);
        dispatch(toggleMenuSet(!collapsed));
    }
    return (
        <div className={styles.container}>
            <Space>
                <div className={styles.menuOutlined}>
                    <MenuOutlined style={{ fontSize: '24px' }} className='trigger' onClick={onCollapse}/>
                </div>
                <Logo />
            </Space>
        </div>
    )
} 

// const mapStateToProps = (state) => {
//   return {
//     collapsedMenu: state.menu.collapsed
//   }
// }

// export default connect(
//     mapStateToProps,
//     null
//   )(TopHeader);

export default TopHeader;