import React, {useState} from 'react';
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';


const AddToFavoritesLecture = () => {

    const [status, setStatus] = useState(false)


    return (
        <Button onClick={() => setStatus(prev => !prev)}>
           {!status && <StarOutlined />} 
           {status && <StarFilled />}
            
        </Button>
    )
}


export default AddToFavoritesLecture;