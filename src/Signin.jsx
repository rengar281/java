import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Sign in</h2>
        <p>Welcome user, please sign in to continue</p>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.checkboxGroup}>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  form: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },

  title: {
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  checkboxGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default SignIn;