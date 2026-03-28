import React, { useState, useEffect } from 'react';
import About from './About';
import '../components/css/Home.css'; 

const Home = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">My App</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* Content */}
      <h1 className="title">Welcome to the Home Page</h1>
      <p className="text">This is a simple paragraph on the home page.</p>

      {/* Counter */}
      <h3>Counter: {count}</h3>
      <button className="btn btn-inc" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn btn-dec" onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      {/* Users */}
      <h2>User List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* About */}
      <About name="Saravanan" role="Frontend Developer" />

    </div>
  );
};

export default Home;