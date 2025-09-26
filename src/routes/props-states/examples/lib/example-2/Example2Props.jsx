const Example2Props = (props) => {

    const Props = () => {

        props.PropsExample();

    }

    return (
        <>
            <button onClick={()=>{Props()} }>Clickeame</button>
        </>
    )
}

export default Example2Props;