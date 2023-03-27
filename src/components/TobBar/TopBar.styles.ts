import styled from "styled-components";

export const Topbar = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.colors.primary};
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  font-weight: 800;
  z-index: 1;
`;

export const TitleTopBar = styled.h4`
  color: ${(props) => props.theme.colors.textColor};
`;
