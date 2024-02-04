import { EmptyWrapper, EmptyImage, EmptyText } from "../../styles/empty.style";

const EmptyComponent = () => {
  return (
    <EmptyWrapper>
      <EmptyImage
        src="images/chibi/sd_shinra_a1.png"
        alt="신라A1 치비 이미지"
      />
      <EmptyText>결과를 찾지 못했습니다...</EmptyText>
    </EmptyWrapper>
  );
};

export default EmptyComponent;
