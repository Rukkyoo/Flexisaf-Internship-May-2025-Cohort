import React from "react";
import styled from "styled-components";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const SidebarContainer = styled.div`
  width: 220px;
  min-width: 220px;
  background-color: #1f2937;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const NavItem = styled.div`
  margin: 1rem 0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: #374151;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Title>My Dashboard</Title>
      <NavItem>
        Dashboard <MdOutlineDashboard />
      </NavItem>
      <NavItem>
        Reports <TbReportSearch />
      </NavItem>
      <NavItem>
        Settings <CiSettings />
      </NavItem>
      <NavItem>
        Logout <CiLogout />
      </NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;
