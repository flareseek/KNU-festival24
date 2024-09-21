import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css.ts";

// Section styles
export const section = style({
  padding: "20px",
  fontFamily: vars.font.pretendardRegular,
});

// Filter button styles
const baseFilterButton = style({
  padding: "10px 15px",
  margin: "0 5px 10px 0",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
});

export const filterButton = styleVariants({
  default: [
    baseFilterButton,
    {
      backgroundColor: "#6c757d",
      color: "#fff",
      ":hover": {
        backgroundColor: "#5a6268",
      },
    },
  ],
  active: [
    baseFilterButton,
    {
      backgroundColor: "#007bff",
      color: "#fff",
      ":hover": {
        backgroundColor: "#0056b3",
      },
    },
  ],
});

// TimeTableItem styles
export const timeTableItem = style({
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

export const timeTableTitle = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const timeTableDescription = style({
  fontSize: "0.9rem",
  color: "#6c757d",
  marginBottom: "10px",
});

export const timeTableTime = style({
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: "#007bff",
});

// ArtistInfo styles
export const artistInfoContainer = style({
  marginTop: "15px",
});

export const artistInfoTitle = style({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const artistItem = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

export const artistImage = style({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "10px",
  objectFit: "cover",
});

export const artistName = style({
  fontSize: "0.9rem",
});

export const currentIndicator = style({
  backgroundColor: "#1890ff",
  color: "white",
  padding: "2px 8px",
  borderRadius: "4px",
  display: "inline-block",
  marginTop: "8px",
});

export const timeSeparator = style({
  margin: "16px 0",
  border: "none",
  borderTop: "1px dashed #d9d9d9",
});
