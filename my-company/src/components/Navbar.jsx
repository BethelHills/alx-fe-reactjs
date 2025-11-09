import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const brandStyle = {
    color: '#ecf0f1',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    display: 'block',
  };

  const linkStyleHover = {
    ...linkStyle,
    backgroundColor: '#34495e',
    transform: 'translateY(-2px)',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>My Company</Link>
      <ul style={navListStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li>
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

