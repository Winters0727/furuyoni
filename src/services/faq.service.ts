import { https } from "./https";

import type { FAQSuccessResponse } from "../types/faq.type";

export const getFaqs = async (keyword: string = "") => {
  try {
    const { data } = await https.get<FAQSuccessResponse>(
      `/faq?keyword=${encodeURIComponent(keyword)}`
    );

    return data;
  } catch (err: any) {
    console.log(err);
  }
};

// export const getFaqs = async (
//   category: string | undefined,
//   keyword: string | undefined
// ) => {
//   let query = "";

//   if (category && keyword) {
//     query = `?category=${encodeURIComponent(
//       category
//     )}&keyword=${encodeURIComponent(keyword)}`;
//   } else if (category && !keyword) {
//     query = `?category=${encodeURIComponent(category)}`;
//   } else if (!category && keyword) {
//     query = `?keyword=${encodeURIComponent(keyword)}`;
//   }

//   const { data } = await https.get<FAQResponse>(`/faq${query}`);

//   return data;
// };
