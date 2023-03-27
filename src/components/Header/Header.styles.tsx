import styled from "styled-components";

export const TitleHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0 3rem 0;
  color: ${(props) => props.theme.colors.textColor};
`;
