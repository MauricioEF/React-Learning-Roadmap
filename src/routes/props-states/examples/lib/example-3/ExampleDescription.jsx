const Example1Description3 = () => {

    return (
        <>
            <h2>Form Managment</h2>
            <br />
            <h3>Componentes Controlados</h3>
            <h3>En React, la gestión de formularios se basa en el concepto de componentes controlados.</h3>
            <p>Un componente controlado es un campo de entrada cuyo valor está controlado por el estado de React (useState)</p>

            <br/>
            <br/>
            <div>
                <h3>Inputs + Estado</h3>
                <p>Cada input tiene una prop value vinculada al estado y un onChange que lo actualiza</p>

                <h3>Manejo del Submit</h3>
                <p>El evento onSubmit del formulario se intercepta con "event.preventDefault() </p>
                <p>para evitar que se refresque la página.</p>

                <h3>Validación</h3>
                <p>Los datos se pueden validar antes de enviarlos a un backend/API.</p>

                <h4>Como React controla el estado, se puede:

                    <p>Prellenar formularios</p>

                    <p> Resetear valores</p>

                    Mostrar errores dinámicamente</h4>
            </div>
        </>
    )
}

export default Example1Description3;