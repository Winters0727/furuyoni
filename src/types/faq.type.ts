export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export interface FAQSuccessResponse {
  result: "success";
  faq: FAQ[];
  length: number;
}

export interface FAQFailureResponse {
  result: "fail";
  error: string;
}
