const UserProfile = (props) => {
  const containerStyle = {
    border: '1px solid gray',
    padding: '10px',
    margin: '10px',
    borderRadius: '6px',
    backgroundColor: '#fff',
    maxWidth: '420px',
  };

  const nameStyle = {
    margin: '0 0 6px 0',
    color: 'blue',
    fontSize: '1.25rem',
  };

  const metaStyle = {
    margin: '4px 0',
    color: '#333',
  };

  const ageValueStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p style={metaStyle}>Age: <span style={ageValueStyle}>{props.age}</span></p>
      <p style={metaStyle}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

