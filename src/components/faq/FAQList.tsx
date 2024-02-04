import { useState, useEffect } from "react";

import FAQComponent from "./FAQComponent";

import {
  CategoryWrapper,
  CategoryText,
  FAQWrapper,
} from "../../styles/faq.style";

import type { FAQ } from "../../types/faq.type";

interface SortedFAQ {
  [category: string]: Omit<FAQ, "category">[];
}

const FAQList = ({ faqs }: { faqs: FAQ[] }) => {
  const [sortedData, setSortedData] = useState<SortedFAQ>({});

  useEffect(() => {
    const sortedFAQByCategory: SortedFAQ = {};

    for (const faq of faqs) {
      const { category, question, answer } = faq;

      const qa = {
        question,
        answer,
      };

      if (category in sortedFAQByCategory) {
        sortedFAQByCategory[category].push(qa);
      } else {
        sortedFAQByCategory[category] = [qa];
      }
    }

    setSortedData(sortedFAQByCategory);
  }, [faqs]);

  return (
    <>
      {Object.keys(sortedData).map((category) => (
        <CategoryWrapper key={category} className="faqs-show">
          <CategoryText>{category}</CategoryText>
          <FAQWrapper>
            {sortedData[category].map((qa, index) => (
              <FAQComponent key={`${index}-${qa.question}`} qa={qa} />
            ))}
          </FAQWrapper>
        </CategoryWrapper>
      ))}
    </>
  );
};

export default FAQList;
