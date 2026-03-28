import React from 'react';

const About = ({ name, role }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>About Section</h2>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default About;