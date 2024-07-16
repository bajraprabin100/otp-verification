export interface CodeTypes {
    title: number;
    content: string;
    body: string;
    backButton?: { title: string; navigate: string; action: "logout" | "back" };
  }
  export interface StatusCodesMapper {
    [key: string]: CodeTypes;
  }
  