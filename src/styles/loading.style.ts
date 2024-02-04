import styled, { keyframes } from "styled-components";

const loadingImageAnimation = keyframes`
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 5px solid #ff5ab4;
  border-radius: 20px;
  align-items: center;
  width: max-content;
  margin: 64px auto 0 auto;
  row-gap: 32px;
`;

export const LoadingImage = styled.img`
  width: 20vmin;
  height: 20vmin;
  animation: ${loadingImageAnimation} 1s infinite alternate;
`;

export const LoadingText = styled.div`
  color: #ffffff;
  font-family: "SangSangRock";
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 1px 1px #ff5ab4;
  text-align: center;
`;
