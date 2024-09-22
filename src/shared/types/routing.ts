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
  scrollOptions?: "never" | "top" | "bottom";
}
