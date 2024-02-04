import { useState } from "react";
import _ from "lodash";

import { getFaqs } from "../../services/faq.service";

import { SearchBarWrapper, SearchBarInput } from "../../styles/faq.style";

import type { FormEvent, Dispatch, SetStateAction } from "react";
import type { FAQ } from "../../types/faq.type";

const SearchBar = ({
  setData,
  setLoading,
}: {
  setData: (faqs: FAQ[]) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const [prevKeyword, setPrevKeyword] = useState("");

  const fetchFaqs = _.debounce(async (keyword: string) => {
    if (keyword.length > 0 && keyword !== prevKeyword) {
      setLoading(true);

      try {
        const data = await getFaqs(keyword);
        if (data && data.faq) {
          const { faq } = data;
          setData(faq);
        } else {
          setData([]);
        }
      } catch (err: any) {
        setData([]);
      } finally {
        setPrevKeyword(keyword);
        setLoading(false);
      }
    }
  }, 1000);

  const onChangeHandler = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const keyword = e.currentTarget.value;

    await fetchFaqs(keyword);
  };

  return (
    <>
      <SearchBarWrapper>
        <SearchBarInput
          placeholder="신라님께 무엇이든 물어보세요. :)"
          onChange={onChangeHandler}
        />
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
