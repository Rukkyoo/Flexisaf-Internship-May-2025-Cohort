import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  flex: 1;
  padding: 2rem;
  width: 100vw;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  color: #1f2937;
  margin-left: 3rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  font-weight: 700;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  cursor: pointer;
  color: #374151;

  &:hover {
    transform: translateY(-4px);
  }
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Header>Welcome Back, Admin</Header>
      <CardGrid>
        <Card>Total Users: 1,240</Card>
        <Card>Monthly Revenue: $4,500</Card>
        <Card>Tasks Completed: 75%</Card>
        <Card>Active Sessions: 23</Card>
      </CardGrid>
    </DashboardContainer>
  );
}

export default Dashboard;
