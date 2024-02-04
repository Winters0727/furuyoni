import { getRandomNumberBetween } from "../../utils/index.util";

import {
  LoadingWrapper,
  LoadingImage,
  LoadingText,
} from "../../styles/loading.style";

const LoadingComponent = () => {
  const LOADING_DATA = [
    {
      image: "sd_yurina.png",
      phrase: "유리나가 결투를 기다리는중",
      alt: "유리나 치비 이미지",
    },
    {
      image: "sd_saine_a1.png",
      phrase: "사이네가 음악을 연주중...",
      alt: "사이네A1 치비 이미지",
    },
    {
      image: "sd_tokoyo_a1.png",
      phrase: "토코요가 음악을 연주중...",
      alt: "토코요A1 치비 이미지",
    },
    {
      image: "sd_shinra.png",
      phrase: "신라가 논리를 설파중",
      alt: "신라 치비 이미지",
    },
  ];
  const randomIndex = getRandomNumberBetween(0, LOADING_DATA.length - 1);
  const { image, phrase, alt } = LOADING_DATA[randomIndex];

  return (
    <LoadingWrapper>
      <LoadingImage src={`images/chibi/${image}`} alt={alt} />
      <LoadingText>{phrase}...</LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingComponent;
