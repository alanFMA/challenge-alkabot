import styled from "styled-components";

export const Post = styled.div`
  width: 337.5px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 250px;
  flex-direction: column;
  font-size: 1.5rem;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  -webkit-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  :hover {
    filter: brightness(90%);

    :after {
      content: "Ver mais";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      padding: 10px;
      border-radius: 5px;
    }
  }

  @media (min-width: 576px) {
    width: 450px;
  }

  @media (min-width: 992px) {
    width: 400px;
  }

  h3 {
    color: ${(props) => props.theme.colors.tertiary};
    text-align: center;
  }

  p {
    margin: 1rem auto;
    max-width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.textColor};
  }
`;
