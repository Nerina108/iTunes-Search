import React from "react";
import Audio from "../components/audio-books";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Audio />).toJSON();
  expect(tree).toMatchSnapshot();
});