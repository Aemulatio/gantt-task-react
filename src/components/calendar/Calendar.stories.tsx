import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Calendar } from "./calendar";
import { ViewMode } from "../../types/public-types";
// import { DateSetup } from "../../types/date-setup";


export default {
  component: Calendar,
  render: (args) => <Calendar {...args} />,
} as Meta<typeof Calendar>;

type S = StoryObj<typeof Calendar>;

export const CalendarStory: S = {
  args: {
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
  },
};
