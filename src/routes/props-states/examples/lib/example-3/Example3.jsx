import { useState } from "react";
import styles from './Example3Styles.module.css'


const Example3 = () => {

    const [name, setName] = useState("Usuario");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* Parte de Las validaciones */ }
        if (name === "" || name === null) {
            console.log("Nombre Incompleto");
            setError("Nombre Incompleto");
            return;
        }
        setError("");
        console.log("Formulario Enviado");
    }

    const changeName = (e) => {
        setName("");
    }

    return (
        <>
            <div className={styles.message}>
                <h2>Hi {name}</h2>
                <h4>Error en el Formulario : {error}</h4>
            </div>

            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <h2>Ejemplo de Formulario</h2>
                    <label>Escribe tu nombre</label>
                    <input name="name" value={name} onChange={handleInputChange} />  {/* El Onchang es el que lo actualiza */}

                    <input type="submit" />

                    <button onClick={changeName}>Resetear Nombre</button>
                </form>
            </div>

        </>
    )
}

export default Example3