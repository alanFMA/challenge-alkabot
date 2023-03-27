import styled from "styled-components";

export const Perfil = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0 0.7rem 0;
  color: ${(props) => props.theme.colors.textColor};

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #cdcdcd;
  -webkit-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 23px -14px rgba(0, 0, 0, 0.75);

  @media (min-width: 768px) {
    flex-direction: row;
    width: 700px;
    height: 300px;
  }
`;

export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const ProfileInfo = styled.div`
  margin-left: 1rem;
  font-size: 1.3rem;
`;
