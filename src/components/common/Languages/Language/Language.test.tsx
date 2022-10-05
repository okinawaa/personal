import { render, screen } from "@testing-library/react";
import Language from "./Language";
import "@testing-library/jest-dom";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string): string => str,
      i18n: {
        language: "ko-KR"
      }
    };
  }
}));

test("renders learn react link", () => {
  render(<Language label="한국어" type="ko-KR" />);
  const LanguageText = screen.getByText(/한국어/i);
  expect(LanguageText).toBeInTheDocument();
});
