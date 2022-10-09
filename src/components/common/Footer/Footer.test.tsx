import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

const setup = () => {
  return render(<Footer />);
};

beforeEach(() => {
  setup();
});

describe("📂 components/common/Footer", () => {
  test("🟢 render two items", () => {
    const container = screen.getByTestId("footer");
    expect(container.children).toHaveLength(2);
  });

  [1, 3, 4, 5, 6, 7, 8, 9, 10].forEach(length => {
    test(`🔴 not render ${length} items`, () => {
      const container = screen.getByTestId("footer");
      expect(container.children).not.toHaveLength(length);
    });
  });

  test("🟢 render link well", () => {
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute(
      "href",
      "http://jigsaw.w3.org/css-validator/check/referer"
    );
    expect(links[0]).toHaveAttribute("title", "w3c css 검사에 통과하였습니다.");
    expect(links[1]).toHaveAttribute(
      "href",
      "https://validator.w3.org/nu/?doc=http%3A%2F%2Fchanhyuk.com%2F"
    );
    expect(links[1]).toHaveAttribute(
      "title",
      "w3c HTML markup 검사에 통과하였습니다."
    );
  });

  test("🟢 check render css image well", () => {
    const cssImage = screen.getByAltText("올바른 CSS입니다!");
    expect(cssImage).toBeInTheDocument();
  });
  test("🔴 check not render other css image well", () => {
    const cssImage = screen.queryByAltText("올바른 CSS입니다!!");
    expect(cssImage).not.toBeInTheDocument();
  });

  test("🟢 check render html image well", () => {
    const htmlImage = screen.getByAltText("올바른 XHTML MARKUP입니다!!");
    expect(htmlImage).toBeInTheDocument();
  });
  test("🔴 check not render other html image well", () => {
    const htmlImage = screen.queryByAltText("올바른 XHTML MARKUP입니다!!!");
    expect(htmlImage).not.toBeInTheDocument();
  });
});
