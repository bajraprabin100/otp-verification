import { StatusCodesMapper } from "./error.types";

export const statusCodeMapper: StatusCodesMapper = {
  "501": {
    title: 501,
    content: "Not Implemented",
    body: "Opps... Something went wrong. Try again later",
    backButton: { title: "Back to Dashboard", navigate: "/", action: "back" },
  },
  "500": {
    title: 500,
    content: "Internal Server Error",
    body: "Server has responded with code 500. Please contact Admin",
    backButton: { title: "Back to Dashboard", navigate: "/", action: "back" },
  },
  "403": {
    title: 403,
    content: "Unauthorized",
    body: "You don't have permission to view this page.",
    backButton: { title: "Back to Dashboard", navigate: "/", action: "back" },
  },
};
