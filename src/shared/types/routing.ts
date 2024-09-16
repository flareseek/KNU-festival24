// 라우팅 정보 객체 타입
import React, { ComponentType } from "react";

export interface routerInfoType {
  path: string;
  element: React.LazyExoticComponent<ComponentType<unknown>>;
  english: string;
  korean: string;
  expose: boolean;
}
