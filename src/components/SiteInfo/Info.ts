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

import { siteDataProps } from "../../shared/types/stieInfoTypes.ts";

export const siteData: siteDataProps = {
  creators: {
    label: "제작자",
    manager: {
      label: "담당자",
      people: [
        {
          name: "홍지환",
          email: "flareseek@gmail.com",
          github: "https://github.com/flareseek",
          responsibilities: [
            "PR / CI / CD / 어드민 페이지",
            "폰트 최적화(PyeongChangPeace)",
            "및 타임테이블 유지 보수",
          ],
        },
      ],
    },
    developers: {
      label: "개발진",
      people: [
        {
          name: "조준환",
          email: "jjh4450git@gmail.com",
          github: "https://jeje.work/github",
          website: "https://blog.jeje.work",
          responsibilities: [
            "페이지: 메인 / 타임 테이블",
            "요소: 헤더 /푸터",
            "최적화: 이미지 / 메타태그 / 번들링 / 라우팅 / 폰트(pretendard)",
          ],
        },
        {
          name: "정다연",
          email: "glue0440@gmail.com",
          github: "https://github.com/dandamdandam",
          responsibilities: [
            "페이지: 부스 & 푸드 트럭 / 지도 세부 목록",
            "요소: 레이어 및 라우터 구성",
          ],
        },
        {
          name: "김재연",
          email: "hyeseonchoi0512@gmail.com",
          github: "https://github.com/Kim-jaeyeon",
          responsibilities: ["페이지: 공지사항 / QnA / 아티스트 / maker's 페이지 제작"],
        },
        {
          name: "이진호",
          email: "ych0486666@gmail.com",
          github: "https://github.com/treasure-sky",
          responsibilities: ["공지사항 백엔드 서버 구축 및 연동"],
        },
      ],
    },
    designers: {
      label: "디자인",
      people: [
        {
          name: "하나",
          email: "farhanahaslan@gmail.com",
        },
        {
          name: "이예지",
          email: "ydw082504211@gmail.com",
        },
        {
          name: "최혜선",
          email: "jy020507@kangwon.ac.kr",
          github: "https://github.com/hyeseon-cpu",
          responsibilities: ["타임테이블 UI 요소 개선"],
        },
      ],
    },
  },
};
