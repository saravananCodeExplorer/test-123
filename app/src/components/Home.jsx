import React from 'react'
import About from './About'

const Home = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple paragraph on the home page.</p>
          <About/>
     
    </div>
  );
};

export default Home;