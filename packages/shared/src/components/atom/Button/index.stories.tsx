import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ButtonComponent } from "../Button";

const components = storiesOf("Components / Atoms", module);
components.addDecorator(withKnobs).add("Button", () => {
  return (
    <ButtonComponent
      onClick={action("onClickAction")}
      type={select(
        "Type",
        {
          primary: "primary",
          link: "link",
          ghost: "ghost",
        },
        "primary"
      )}
      fullWidth={boolean("Show in full Size", true)}
      disabled={boolean("Disabled", false)}
      loading={boolean("Loading", false)}
    >
      Button
    </ButtonComponent>
  );
});
