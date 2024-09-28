/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions 
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 * 
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

import { style } from "@vanilla-extract/css";

// 공통 스타일: 글꼴, 색상, 기본 박스 쉐도우 등을 재사용할 수 있도록 변수화
const commonColors = {
  primary: "#0781CD",
  secondary: "#029FD7",
  accent: "#04D1C3",
  background: "#F0F8FF",
  white: "#FFFFFF",
  shadow: "rgba(7, 129, 205, 0.1)",
  hoverShadow: "rgba(7, 129, 205, 0.15)",
};

const fontStyles = {
  headingFont: "pyeongChangBold, sans-serif",
  subHeadingFont: "pyeongChangLight, sans-serif",
  bodyFont: "pretendard, sans-serif",
};

export const container = style({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2rem",
  backgroundColor: "rgba(255,255,255,0.32)",
  color: commonColors.primary,
  fontFamily: fontStyles.bodyFont,
  boxShadow: `0 4px 6px ${commonColors.shadow}`,
  borderRadius: "8px",
});

export const heading = style({
  fontSize: "2.5rem",
  color: commonColors.secondary,
  marginBottom: "1.5rem",
  fontFamily: fontStyles.headingFont,
  textAlign: "center",
  position: "relative",
  ":after": {
    content: '""',
    display: "block",
    width: "50px",
    height: "3px",
    backgroundColor: commonColors.accent,
    margin: "0.5rem auto",
  },
});

export const section = style({
  marginBottom: "2rem",
  background: commonColors.background,
  padding: "1.5rem",
  borderRadius: "6px",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const subHeading = style({
  fontSize: "1.8rem",
  color: commonColors.primary,
  marginBottom: "1rem",
  fontFamily: fontStyles.subHeadingFont,
  borderBottom: `2px solid ${commonColors.accent}`,
  paddingBottom: "0.5rem",
});

export const list = style({
  listStyleType: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
});

export const listItem = style({
  backgroundColor: commonColors.white,
  padding: "1rem",
  borderRadius: "6px",
  boxShadow: `0 2px 4px ${commonColors.shadow}`,
  transition: "box-shadow 0.3s ease",
  ":hover": {
    boxShadow: `0 4px 8px ${commonColors.hoverShadow}`,
  },
});

export const personName = style({
  fontWeight: "bold",
  color: commonColors.secondary,
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
});

// contactInfo 스타일 추가
export const contactInfo = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
});

// responsibilities 스타일 추가
export const responsibilities = style({
  marginTop: "0.75rem",
  paddingLeft: "1rem",
  color: commonColors.primary,
  fontSize: "0.9rem",
});

export const link = style({
  color: "transparent",
  backgroundImage: `linear-gradient(90deg, ${commonColors.primary}, #00CFFD, ${commonColors.secondary}, #00274D)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  textDecoration: "none",
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: commonColors.secondary,
  },
});

export const responsibilityItem = style({
  marginBottom: "0.25rem",
  position: "relative",
  ":before": {
    content: '"•"',
    position: "absolute",
    left: "-1rem",
    color: commonColors.accent,
  },
});