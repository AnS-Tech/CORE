import styled from "styled-components";

export const Homepage = styled.main`
  max-width: 1320px;
  height: 100%;

  .content-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100%;
  }

  .list {
    padding: 0px 0 100px 0;
    height: inherit;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 5px;

    @media (max-width: 1300px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (max-width: 1140px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 770px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 0px 5px 30px 5px;
    }
    @media (max-width: 550px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding: 0px 5px 30px 5px;
      gap: 20px;
    }
  }

  @media (max-width: 770px) {
    h1 {
      margin-left: 8px;
      font-size: 24px;
    }
  }
`;
