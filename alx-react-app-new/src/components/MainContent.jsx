function MainContent() {
  const mainStyle = {
    padding: '1.75rem',
    textAlign: 'left',
    maxWidth: '760px',
    margin: '1rem auto',
    lineHeight: 1.7,
    color: '#263238',
    background: 'linear-gradient(180deg, #ffffff 0%, #f7fafc 100%)',
    borderRadius: '10px',
    boxShadow: '0 6px 18px rgba(33, 33, 33, 0.06)',
    border: '1px solid #e6edf3',
  };

  const paragraphStyle = {
    margin: 0,
    fontSize: '1.05rem',
  };

  return (
    <main style={mainStyle}>
      <p style={paragraphStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;

