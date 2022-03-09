const ErrorPrompt = ({message}) => {
    return (
    <div className="error-prompt">
        <h1>{`An error occured: ${message}`}</h1>
    </div>
    )
}

export default ErrorPrompt;