import { Link } from 'react-router-dom';

function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '2rem',
    marginTop: '3rem',
    textAlign: 'center',
    boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
  };

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '1.5rem',
  };

  const sectionStyle = {
    textAlign: 'left',
  };

  const headingStyle = {
    color: '#3498db',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #34495e',
    paddingBottom: '0.5rem',
  };

  const linkStyle = {
    color: '#bdc3c7',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease',
  };

  const textStyle = {
    color: '#bdc3c7',
    marginBottom: '0.5rem',
    lineHeight: '1.6',
  };

  const copyrightStyle = {
    borderTop: '1px solid #34495e',
    paddingTop: '1.5rem',
    marginTop: '1.5rem',
    color: '#95a5a6',
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>🏢 My Company</h3>
          <p style={textStyle}>
            Providing excellent services and solutions for businesses worldwide.
          </p>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={headingStyle}>🔗 Quick Links</h3>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={headingStyle}>📞 Contact Info</h3>
          <p style={textStyle}>📧 Email: contact@mycompany.com</p>
          <p style={textStyle}>📱 Phone: +1 (555) 123-4567</p>
          <p style={textStyle}>📍 Address: 123 Business St, City, State 12345</p>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={headingStyle}>🌐 Follow Us</h3>
          <p style={textStyle}>Stay connected with us on social media</p>
          <p style={textStyle}>
            <a href="#" style={linkStyle}>💼 LinkedIn</a>
            <a href="#" style={linkStyle}>🐦 Twitter</a>
            <a href="#" style={linkStyle}>📘 Facebook</a>
          </p>
        </div>
      </div>
      
      <div style={copyrightStyle}>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

