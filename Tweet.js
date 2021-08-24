const Tweet = (props) => {
    return (
        <div classname="tweet">
            <span className="username">@{props.username}</span>
            <span>Name: {props.name}</span>
            <span className="date">{props.date}</span>
            <p>{props.message}</p>
        </div>
    );

}