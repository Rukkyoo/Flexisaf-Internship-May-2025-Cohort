import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings, CiLogout, CiMenuBurger } from "react-icons/ci";

const SidebarWrapper = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    z-index: 999;
    height: 100%;
    left: ${({ open }) => (open ? "0" : "-100%")};
    transition: left 0.3s ease-in-out;
  }
`;

const SidebarContainer = styled.div`
  width: 220px;
  min-width: 220px;
  background-color: #1f2937;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    width: 200px;
  }
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

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1f2937;
  font-size: 2rem;
  margin: 1rem;
  position: absolute;
  top: 1.5rem;
  left: -1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 998;
    background: rgba(0, 0, 0, 0.3);
  }
`;

function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {!open && (
        <HamburgerButton onClick={() => setOpen(true)}>
          <CiMenuBurger size={20} />
        </HamburgerButton>
      )}

      <Overlay open={open} />

      <SidebarWrapper open={open}>
        <SidebarContainer ref={sidebarRef}>
          <Title>My Dashboard</Title>
          <NavItem onClick={() => setOpen(false)}>
            Dashboard <MdOutlineDashboard />
          </NavItem>
          <NavItem onClick={() => setOpen(false)}>
            Reports <TbReportSearch />
          </NavItem>
          <NavItem onClick={() => setOpen(false)}>
            Settings <CiSettings />
          </NavItem>
          <NavItem onClick={() => setOpen(false)}>
            Logout <CiLogout />
          </NavItem>
        </SidebarContainer>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
