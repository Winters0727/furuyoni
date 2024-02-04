import { useState } from "react";

import { FAQContainer, Question, Answer } from "../../styles/faq.style";

import type { FAQ } from "../../types/faq.type";

type QA = Omit<FAQ, "category">;

const FAQComponent = ({ qa }: { qa: QA }) => {
  const { question, answer } = qa;

  const [toggleQuestion, setToggleQuestion] = useState(false);

  const clickHandler = () => setToggleQuestion((prevValue) => !prevValue);

  return (
    <FAQContainer>
      <Question onClick={clickHandler}>
        {toggleQuestion ? "▼" : "▶"} {question}
      </Question>
      <Answer className={toggleQuestion ? "show" : "hidden"}>{answer}</Answer>
    </FAQContainer>
  );
};

export default FAQComponent;
