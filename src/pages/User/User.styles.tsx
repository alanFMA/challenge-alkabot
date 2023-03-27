import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostsTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem;
  color: ${(props) => props.theme.colors.textColor};
`;
