import React from "react";
import Video from "../components/videos";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Video />).toJSON();
  expect(tree).toMatchSnapshot();
});
 