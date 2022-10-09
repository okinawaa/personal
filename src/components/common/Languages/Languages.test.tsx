import { render, screen } from "@testing-library/react";
import Languages from "./Languages";

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

describe("📂 components/common/Languages", () => {
  // text
  test("🟢 render three languages", () => {
    render(<Languages />);
    const Container = screen.getByRole("navigation");
    expect(Container.children).toHaveLength(3);
  });

  [1, 2, 4, 5, 6, 7, 8, 9, 10].forEach(length => {
    test(`🔴 not render ${length} languages`, () => {
      render(<Languages />);
      const Container = screen.getByRole("navigation");
      expect(Container.children).not.toHaveLength(length);
    });
  });
});
