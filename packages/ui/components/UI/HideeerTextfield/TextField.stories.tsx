import type { Meta } from "@storybook/react";
import { TextField } from "./TextField";
import { ifError } from "assert";

export default {
  title: "ui/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}as Meta<typeof TextField>;


export const StyledTextField = {
  args: {
    id: "text",
    inputType: "text",
    Type: "Default",
    name: "textField",
    value: "",
    placeholder:"Text",
    Label:"Label",
    ref: () => alert("값 변경"),
    keydown: (e: { key: any; }) => alert(`${e.key}키 누름`),
  },
};
