/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

// 라우팅 정보 객체 타입
import React, { ComponentType } from "react";

/**
 * 라우팅 정보 객체 타입
 * @interface
 * @property {string} path - 라우팅 경로
 * @property {React.LazyExoticComponent<ComponentType<unknown>>} element - 라우팅 컴포넌트
 * @property {string} english - 영어 이름
 * @property {string} korean - 한글 이름
 * @property {boolean} expose - 헤더 노출 여부
 * @property {boolean} mainPage - 메인 페이지 퀵링크 항목 공개 여부
 */

export interface routerInfoType {
  path: string;
  element: React.LazyExoticComponent<ComponentType<unknown>>;
  english: string;
  korean: string;
  expose: boolean;
  mainPage: boolean;
  scrollOptions?: "never" | "save";
}
