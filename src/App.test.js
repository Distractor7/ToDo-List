import React from "react";
import renderer from "react-test-renderer";
import toDo from "./store/toDo";
``;

test("App renders correctly", () => {
  const tree = renderer.create(<toDo />).toJSON();
  expect(tree).toMatchSnapshot();
});
