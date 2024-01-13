import Image from "next/image";
import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const About = styled.main`
  max-width: 1320px;
  height: 100%;

  h1 {
    font-size: 2em;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    color: ${colors.grayScale900};
  }

  @media (max-width: 1390px) {
    width: 96%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1300px) {
    h2 {
      font-size: 1.3em;
    }
    p {
      font-size: 0.9em;
    }
  }
`;

export const AboutUs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const AboutTitleContainer = styled.div`
  width: 100%;
  padding: 20px 0 40px;

  display: inline-flex;
  flex-direction: column;

  align-items: start;
  justify-content: center;
`;

export const SessionAboutContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 60px;

  flex: 1;
`;

export const SessionAboutDescriptionsWrapper = styled.div`
  display: flex;

  justify-content: center;
  gap: 20px;

  flex: 1;

  div:first-child {
    justify-content: stretch;
  }

  div:last-child {
    justify-content: flex-end;
  }
`;

export const SessionAboutDescription = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: center;
  gap: 10px;

  flex: 1;
`;

export const SessionAboutImageWrapper = styled.div`
  position: relative;

  height: 500px;

  flex: 1;
`;

export const FirstSessionAboutImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Featured = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 40px;
  padding: 100px 0;

  p {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const FeaturedTopContainer = styled.div`
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1.9em;
  }
  p {
    max-width: 500px;
  }
`;

export const FeaturedBottonContainer = styled.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;
`;

export const FeaturedComponentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  :first-child {
    color: ${colors.grayScale900};
    font-size: 3em;
  }
`;
