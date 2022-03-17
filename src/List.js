export const List = (props) => {


    return (
        <>
            <p>{props.message}</p>
            <ul>
                { props.items.map(crypto => <li>{crypto}</li>) }
            </ul>
        </>
    );
};

export default List;