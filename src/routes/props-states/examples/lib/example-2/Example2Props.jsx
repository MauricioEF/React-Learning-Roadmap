const Example2Props = (props) => {
    const {PropsExample} = props
    const Props = () => {

        PropsExample();

    }

    return (
        <>
            <button onClick={() => { Props() }}>Clickeame</button>
        </>
    )
}

export default Example2Props;

//todas las variables que resulten de la destructuraccion deben de ser englobadas en llaves