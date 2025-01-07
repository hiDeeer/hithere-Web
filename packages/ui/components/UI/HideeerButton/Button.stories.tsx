import type { Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}as Meta<typeof Button>;


export const StyledButton = {
  args: {
    children:"Button",
    type: "Default",
    radius: "Large",
    size: "Medium",
    onclick: ()=>alert("버튼 클릭"),
  },
};
