import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css";

export const selectContainer = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
});
export const select = style({
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  color: vars.color.blue1,
  padding: "10px 15px",
  paddingRight: "35px",
  borderRadius: "10px",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent("#0781cd")}'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  boxShadow: `0 4px 4px rgba(0, 0, 0, 0.25)`,
});

export const fake = style({
  height: "100px",
});
export const bottomContainer = style({
  position: "fixed",
  width: "100%",
  height: "190px",
  top: "calc(100vh - 190px)",
});
export const detailBtn = style({
  borderRadius: "99px",
  width: "60%",
  padding: "8px",
  margin: "10px auto",
  color: vars.color.blue1,
  backgroundColor: vars.color.white,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});
export const notice = style({
  fontSize: "12px",
  fontWeight: "bold",
  height: "130px",
  textAlign: "center",
  borderRadius: "20px 20px 0 0",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "0 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
