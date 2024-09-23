import { artistInfoListProps } from "./mainPage.ts";

export interface timeTableInfoProps {
  title: string;
  description: string;
  descriptionShow: boolean;
  artist?: artistInfoListProps[];
  date: Date;
  startTime: Date;
  endTime: Date;
  link?: { text: string; url: string };
}

export interface timeTableFilterProps {
  name: string;
  date: Date;
}
