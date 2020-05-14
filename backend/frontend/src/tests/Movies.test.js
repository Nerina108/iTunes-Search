import React from "react";
import Movie from "../components/movies";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Movie />).toJSON();
  expect(tree).toMatchSnapshot();
});