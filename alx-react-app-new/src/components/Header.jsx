function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.6rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;

