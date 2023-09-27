import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";



it("renders without crashing", function () {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
});

it("matches snapshot", function () {
  const { container, debug } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  expect(container).toMatchSnapshot();
  debug(container);
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move backwards in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});



it("left/right arrow hidden", function () {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  debug(container);
  const leftA = container.querySelector(".bi-arrow-left-circle");
  const rightA = container.querySelector(".bi-arrow-right-circle");
  // expect the left arrow to not show when on first image in Carousel

  expect(leftA.getAttribute("style")).toEqual("visibility: hidden;");
  expect(rightA.getAttribute("style")).toEqual("visibility: visible;");

  // move forward twice in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

 // expect the right arrow to not show when on last image in Carousel
 expect(rightA.getAttribute("style")).toEqual("visibility: hidden;");
  expect(leftA.getAttribute("style")).toEqual("visibility: visible;");

});