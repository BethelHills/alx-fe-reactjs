function WelcomeMessage() {
    const wrapper = {
        padding: '1rem',
        backgroundColor: '#f5f7fb',
        borderRadius: '6px',
        maxWidth: '800px',
        margin: '1rem auto',
        textAlign: 'center'
    };

    const heading = {
        margin: '0 0 0.5rem 0',
        color: '#1f2937'
    };

    const paragraph = {
        margin: '0.25rem 0',
        color: '#374151'
    };

    return (
        <div style={wrapper}>
            <h1 style={heading}>Hello everyone, I am learning React at ALX!</h1>
            <p style={paragraph}>This is a simple JSX component.</p>
            <p style={paragraph}>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;

