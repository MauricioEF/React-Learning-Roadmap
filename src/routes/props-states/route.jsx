import { Outlet } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';

const PropsStates = () => {

    const [currentDescription,setCurrentDescription] = useState("Default description");
    return (
        <div className={'container'}>
            <div className={'description'}>
                {currentDescription}
            </div>
            <div className={'componentContent'}>
                <Outlet context={{setCurrentDescription}}/>
            </div>
        </div>
    )
}

export default PropsStates;