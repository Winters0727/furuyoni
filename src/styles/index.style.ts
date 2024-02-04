import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 5vh 0;
  width: 100%;
  max-width: 1024px;
  min-width: 320px;
`;

export const BackgroundCharImage = styled.img`
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: auto;
  height: 30vh;
  z-index: -1;
`;

export const CustomButton = styled.button`
  min-width: 90px;
  padding: 16px;
  font-size: 1.2rem;
  border-radius: 10px;
`;
