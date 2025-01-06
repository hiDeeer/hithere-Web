import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TextField } from "./TextField";

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
    type: "text",
    name: "textField",
    value: "Input text",
    ref: () => alert("값 변경"),
    keydown: (e: { key: any; }) => alert(`${e.key}키 누름`),
  },
};
