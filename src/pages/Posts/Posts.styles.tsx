import styled from "styled-components";

export const PostList = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: 450px;
  gap: 2.5rem;
  margin-bottom: 2rem;

  @media (min-width: 576px) {
    gap: 3rem 5rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 400px 400px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem 3rem;
  }
`;
