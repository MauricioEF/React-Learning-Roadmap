import styles from './Example1Styles.module.css'
const Example1Description = () => {
  return (
    <>
    <h1 className={styles.descriptionTitle}>Ejemplo 1: Toggle</h1>
      <div className={styles.descriptionBody}>
        <br />
        <p>
          El primer uso comun de los estados es para cambiar valores de true a
          false y viceversa.
        </p>
        <p>
          Esto brinda el efecto de prendido y apagado a diferentes elementos.
        </p>
        <p>
          En el ejemplo, el botón puede prender y apagar el estado isOn,
          cambiando el estilo del ícono.
        </p>
      </div>
    </>
  );
};
export default Example1Description;
