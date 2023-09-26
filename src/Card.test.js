import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(
    <Card caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      title="images for testing"
      currNum={1}
      totalNum={3}
    />
  );
});

it("matches snapshot", function () {
  const { container, debug } = render(
  <Card caption={TEST_IMAGES[0].caption}
  src={TEST_IMAGES[0].src}
    title="images for testing"
    currNum={1}
    totalNum={3}
  />
  );
  expect(container).toMatchSnapshot();
  debug(container);
});

it("Has Correct Card alt text and src", function () {
  const { container, debug } = render(
    <Card caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
      title="images for testing"
      currNum={1}
      totalNum={3}
    />
  );

  const img = container.querySelector("img");
  debug(img);

  expect(img.getAttribute("alt")).toEqual("testing image 1");
  expect(img.getAttribute("src")).toContain("test1.com");
});


