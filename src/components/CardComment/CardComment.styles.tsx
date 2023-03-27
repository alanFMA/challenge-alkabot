import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #cdcdcd;
  -webkit-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
`;

export const Comment = styled.p`
  margin-bottom: 1.5rem;
`;

export const AuthorInfo = styled.p`
  text-align: right;
`;
