import { useState } from "react";
import Example2Props from "./Example2Props";
import styles from './Example2styles.module.css'

const Example2 = () => {

    const [value, setValue] = useState("Trapo");

    const [message, setMessage] = useState("");

    function toWet() {
        if (value === "Trapo Mojado") {
            setMessage("El Trapo ya está mojado");

        } else {
            setValue("Trapo Mojado");
        }
    }

    function toDry() {
        if (value === "Trapo Seco") {
            setMessage("El Trapo Ya está seco")
            return;              // Mejor 90% de los casos      READABILITY === (LEGIBILIDAD)
        }

        setValue("Trapo Seco");
    }

    function PropsExample() {
        console.log("Este es un ejemplo para las props");
    };


        //EL COMPONENTE SE RENDERIZA Y EJECUTA TODO, PERO NO VUELVE, A MENOS QUE SEA UNA FUNCIÓN :) 
    return (<>

        <div className={styles.states}>
            <h2 className={styles.titulos}>Ejemplo de ESTADO</h2>
            <h3 className={styles.stateText}>Estado : {value}</h3>

            <h2>{message}</h2>

            <div className={styles.buttons}>
                <button onClick={toWet} >Mojar</button>
                <button onClick={toDry} >Secar</button>
            </div>
        </div>

        <br />
        <br />
        <br />
        <div className={styles.example}>
            <h2 className={styles.titulos}>Ejemplo de Props</h2>
            <Example2Props PropsExample={PropsExample} />
        </div>

    </>)
}

export default Example2;