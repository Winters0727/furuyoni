import styled from "styled-components";

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 20px;
  align-items: center;
  width: max-content;
  margin: 64px auto 0 auto;
  row-gap: 32px;
`;

export const EmptyImage = styled.img`
  width: 20vmin;
  height: 20vmin;
`;

export const EmptyText = styled.div`
  color: #ffffff;
  font-family: "SangSangRock";
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 1px 1px #ff5ab4;
  text-align: center;
`;
