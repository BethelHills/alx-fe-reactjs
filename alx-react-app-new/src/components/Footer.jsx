function Footer() {
  const footerStyle = {
    marginTop: '2rem',
    padding: '1rem 0',
    textAlign: 'center',
    color: '#f1f5f9',
    backgroundColor: '#0f1724',
    fontSize: '0.95rem',
  };

  const innerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <p style={{ margin: 0 }}>© 2023 City Lovers</p>
      </div>
    </footer>
  );
}

export default Footer;

