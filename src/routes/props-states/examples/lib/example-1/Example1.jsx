import { useState } from "react";
import {FaLightbulb} from 'react-icons/fa';
import styles from './Example1Styles.module.css'

const Example1 = () => {

    const [isOn,setIsOn] = useState(true);

    const handleOnClick = (e) =>{
        setIsOn(prev=>!prev);
    }
    return (
        <div className={styles.container}>
            <button className={styles.toggleButton} onClick={handleOnClick}>{isOn?"Off":"On"}</button>

            <div>
                <FaLightbulb className={styles.lightbulbIcon} color={isOn?"yellow":"white"}/>
            </div>
        </div>
    )
}
export default Example1