import React from "react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "antd/dist/antd.css";

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  controls: { expanded: true }
};

export const decorators = [
  (storyFn) => <div style={{ padding: "16px" }}>{storyFn()}</div>,
];
