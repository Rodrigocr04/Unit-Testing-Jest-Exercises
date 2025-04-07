import { reverseString, toLowerCase, toUpperCase } from "./utils";

export type CaseType = "upper" | "lower" | "reverse" | "unknown";

export function convertCase(str: string, caseType: CaseType): string {
  // manejo del string vacio
  if (str === '') {
    return '';
  }

  switch (caseType) {
    case "upper":
      return toUpperCase(str);
    case "lower":
      return toLowerCase(str);
    case "reverse":
      return reverseString(str);
    default:
      return str;
  }
}
