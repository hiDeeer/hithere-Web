import { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react"; 
import { Select } from "./Select";
import React from "react";

export default {
  title: "ui/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [classification, setClassification] = useState("전체보기");

  const handleChange = (value: string) => {
    setClassification(value);
  };

  return (
    <Select
      {...args}
      name="test"
      items={["전체보기", "1학년", "2학년", "3학년"]}
      value={classification}
      onChange={handleChange}
      placeholder="선택하기"
    />
  );
};

export const Common: StoryFn<typeof Select> = Template.bind({});
Common.args = {
  name: "test",
  items: ["전체보기", "1학년", "2학년", "3학년"],
  value: "",
  placeholder: "선택하기",
};
