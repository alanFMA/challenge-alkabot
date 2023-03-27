import styled from "styled-components";

export const PostTitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 0.7rem 0;
  color: ${(props) => props.theme.colors.textColor};
`;

export const TitleComments = styled.h3`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.textColor};
`;

export const PostContent = styled.p`
  font-size: 1.3rem;
  margin: 1.5rem 0;
`;
