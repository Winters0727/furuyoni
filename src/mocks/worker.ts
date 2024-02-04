import { setupWorker } from "msw/browser";
import { handlers } from "./hanlder";

export const worker = setupWorker(...handlers);
