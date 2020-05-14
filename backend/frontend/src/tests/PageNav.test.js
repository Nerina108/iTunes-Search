import React from "react";
import PageNav from "../components/page-nav";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<PageNav />).toJSON();

  expect(tree).toMatchSnapshot();
});