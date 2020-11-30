import React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ButtonComponent as Button } from "../Button";

export default { title: "Components/Atoms/Button", component: Button };

export const button = () => (
  <Button
    onClick={action("onClickAction")}
    type={select(
      "Type",
      {
        primary: "primary",
        link: "link",
      },
      "primary"
    )}
    fontSize={text("Font Size", "16px")}
    block={boolean("Show in full Size", false)}
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
  >
    Button
  </Button>
);
