import { useState } from "react";
import Example2Props from "./Example2Props";
import styles from './Example2styles.module.css'

const Example2 = () => {

    const [value, setValue] = useState("Trapo");

    function toWet() {
        setValue("Trapo Mojado");
    }

    function toDry() {
        setValue("Trapo Seco");
    }

    function PropsExample(){
        console.log("Este es un ejemplo para las props");
    };

    return (<>

        <div className = {styles.states}>
            <h2 className={styles.titulos}>Ejemplo de ESTADO</h2>
            <h3 className={styles.stateText}>Estado : {value}</h3>

            <div className = {styles.buttons}>
            <button onClick={toWet}>Mojar</button>
            <button onClick={toDry}>Secar</button>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <div className= {styles.example}>
            <h2 className={styles.titulos}>Ejemplo de Props</h2>
        <Example2Props PropsExample={PropsExample}/>
        </div>
      
    </>)
}

export default Example2;