import styled, { keyframes } from "styled-components";

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-32px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const hide = keyframes`
0% {
  opacity: 1;
  transform: translateY(0px);
}

100% {
  opacity: 0;
  transform: translateY(-32px);
}`;

export const FaqHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px 64px;
  column-gap: 16px;
  border: 5px solid #ff5ab4;
  border-radius: 20px;
`;

export const HeaderImage = styled.img`
  width: auto;
  height: 12vh;
`;

export const HeaderText = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
  font-family: "SangSangRock";
  font-size: 5rem;
  font-weight: 700;
  text-shadow: 5px 5px #ff5ab4;
  word-break: keep-all;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  margin-bottom: 32px;
  column-gap: 16px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  padding: 16px 32px;
  border: 1px solid transparent;
  border-radius: 25px;
  font-size: 1.5rem;
  outline: none;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  &.faqs-show {
    animation: ${show} 1s forwards;
  }
`;

export const CategoryText = styled.span`
  width: fit-content;
  background-color: #ffb4e6;
  border-radius: 10px;
  color: #ffffff;
  padding: 16px 32px;
  font-family: "SangSangRock";
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  cursor: pointer;
`;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  row-gap: 16px;
  word-break: keep-all;
`;

export const Question = styled.div`
  padding: 16px;
  background-color: #ff5ab4;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  line-height: 20px;
  z-index: 4;
`;

export const Answer = styled.div`
  padding: 16px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #ff5ab4;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 24px;
  z-index: 3;

  &.show {
    animation: ${show} 0.3s both;
  }

  &.hidden {
    animation: ${hide} 0.3s both;
  }
`;
