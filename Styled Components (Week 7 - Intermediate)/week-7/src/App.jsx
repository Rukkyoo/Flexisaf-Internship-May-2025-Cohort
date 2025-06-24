import React from 'react';
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f6f8;
  width: 100%;
  max-width: 100vw;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

export default App;
