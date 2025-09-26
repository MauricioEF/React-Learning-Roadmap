
const Example2Description = () => {
    return <>
        <h1>Props VS States</h1>
        <br />
        <h2>Las props son datos </h2>
        <p>Esto permite que el componente hijo reciba información para funcionar</p>
        <p>no modifica el componente padre, y facilita la reutilización de componentes</p>
        <p>Inmutable desde el componente que lo recibe</p>

        <br />
        <br/>
        <h2>State</h2>
        <p>Es un objeto interno de un componente, Permite guardar información que puede cambiar con el tiempo</p>
        <p> Cuando el state cambia, React vuelve a renderizar el componente automáticamente</p>
        <p>Es mutable desde el componente en el que esté</p>
        <p>Se maneja de manera interna en el componente</p>
        <p>Es Asíncrono</p>
    </>
}

export default Example2Description;