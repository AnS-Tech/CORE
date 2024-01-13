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
  p {
    margin: 0;
    color: ${colors.grayScale900};
  }
`;

export const AboutUs = styled.section``;

export const AboutTitleContainer = styled.div`
  width: 100%;
  padding: 20px 0 100px;

  display: inline-flex;
  flex-direction: column;

  align-items: start;
  justify-content: center;
`;

export const SessionAboutContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;

  flex: 1;
`;

export const SessionAboutDescriptionsWrapper = styled.div`
  display: flex;

  justify-content: center;
  gap: 20px;

  flex: 1;

  div:first-child {
    justify-content: stretch;
    padding-top: 50px;
  }

  div:last-child {
    justify-content: flex-end;
    padding-bottom: 50px;
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
