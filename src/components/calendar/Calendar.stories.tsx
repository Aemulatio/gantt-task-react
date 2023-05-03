import type { Meta, Story } from "@storybook/react";
import React from "react";

import { Calendar } from "./calendar";
import { ViewMode } from "../../types/public-types";
// import { DateSetup } from "../../types/date-setup";


export default {
  title: "Lib/Calendar",
  component: Calendar,
} as Meta<typeof Calendar>;


const Template: Story<typeof Calendar> = (args) => <Calendar {...args} />;

export const Test = Template.bind({});
Test.args = {
  viewMode: ViewMode.Day,
  locale: "ru",
  rtl: false,
  columnWidth: 300,
  fontSize: "14px",
  fontFamily: "Roboto",
  headerHeight: 150,
  dateSetup: {
    viewMode: ViewMode.Day,
    dates: [],
  },
};
