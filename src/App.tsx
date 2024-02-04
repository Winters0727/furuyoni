import { useState, useRef } from "react";

import LoadingComponent from "./components/faq/Loading";
import EmptyComponent from "./components/faq/Empty";

import { useLoading } from "./hooks/faq.hook";

import { PageWrapper, BackgroundCharImage } from "./styles/index.style";
import { FaqHeader, HeaderImage, HeaderText } from "./styles/faq.style";

import SearchBar from "./components/faq/SearchBar";
import FAQList from "./components/faq/FAQList";

import type { FAQ } from "./types/faq.type";

const App = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const { loading, setLoading } = useLoading();

  const setData = (faqs: FAQ[]) => {
    if (firstRender) setFirstRender(false);
    setFaqs(faqs);
  };

  const backgroundImageRef = useRef<HTMLImageElement>(null);

  return (
    <>
      <PageWrapper>
        <FaqHeader>
          <HeaderImage
            src="images/chibi/sd_shinra.png"
            alt="신라 치비 이미지"
          />
          <HeaderText>도와줘요! 신라님!</HeaderText>
        </FaqHeader>
        <SearchBar setLoading={setLoading} setData={setData} />
        {loading ? (
          <LoadingComponent />
        ) : faqs.length > 0 ? (
          <FAQList faqs={faqs} />
        ) : (
          !firstRender && <EmptyComponent />
        )}
        <BackgroundCharImage
          ref={backgroundImageRef}
          src="images/standard/shinra.png"
          onScroll={(e) => console.log(document.body.scrollTop)}
          alt="신라 배경 이미지"
        />
      </PageWrapper>
    </>
  );
};

export default App;
