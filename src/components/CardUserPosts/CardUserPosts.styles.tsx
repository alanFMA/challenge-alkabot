import styled from "styled-components";

export const Posts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  word-wrap: break-word;
  max-width: 700px;
  padding: 1rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #cdcdcd;
  -webkit-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);

  h3 {
    text-align: center;
    margin: 1rem auto;
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
