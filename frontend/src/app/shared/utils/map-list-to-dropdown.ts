import { AutocompleteListType } from "@/app/shared/components/design-system/autocomplete.component";

const mapListToDropdown = <T>(
  list: T[],
  text: string[],
  value: string[],
  hiddenValue?: string
): AutocompleteListType[] => {
  const newDropdownList = list?.map((item) => {
    if (hiddenValue) {
      return {
        text: `${item[text?.[0]]}${item[text?.[1]] ? ` ${item[text?.[1]]}` : ""}`,
        value: item[value?.[0]],
        hiddenValue: item[hiddenValue],
      };
    } else {
      return {
        text: `${item[text?.[0]]}${item[text?.[1]] ? ` ${item[text?.[1]]}` : ""}`,
        value: item[value?.[0]],
      };
    }
  });
  return newDropdownList as AutocompleteListType[];
};

export default mapListToDropdown;

export const mapStringListToDropdown = (
  list: [],
) => {
  const newDropdownList = list?.map((item) => {
    return {
      text: item,
      value: item,
    };

  });
  return newDropdownList;
};

