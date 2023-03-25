import Api from "./weatherApi";
import React from "react";
import renderer from "react-test-renderer";

test("Api component renders without error", () => {
  const component = renderer.create(<Api />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("dummy test case", () => {
  expect(true).toBe(true);
});
