const ErrorMessage = (props) => {
    return (
        <marquee>
            <p>There is a problem fetching the post data - {props.error}</p>
        </marquee>
    );
}

export {ErrorMessage}