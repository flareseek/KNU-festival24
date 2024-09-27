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

import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  Timestamp,
} from "firebase/firestore/lite";
import { Notice } from "../types/notice";

// 유효성 검사 함수
function validation(notice: Notice) {
  if (!(notice.createdAt instanceof Date)) throw new Error("Invalid or missing createdAt.");
  if (typeof notice.order !== "number" || notice.order < 0)
    throw new Error("Invalid or missing order.");
  if (typeof notice.renewal !== "boolean") throw new Error("Invalid or missing renewal.");
  if (typeof notice.title !== "string" || !notice.title.trim())
    throw new Error("Invalid or missing title.");
  if (typeof notice.contents !== "string" || !notice.contents.trim())
    throw new Error("Invalid or missing contents.");
}

// Firestore data converter
export const noticeConverter: FirestoreDataConverter<Notice> = {
  toFirestore(notice: Notice): DocumentData {
    validation(notice);
    return {
      createdAt: Timestamp.fromDate(notice.createdAt), // Date 객체를 Firestore Timestamp로 변환
      order: notice.order,
      renewal: notice.renewal,
      title: notice.title,
      contents: notice.contents,
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Notice {
    const data = snapshot.data();
    const notice: Notice = {
      createdAt: data.createdAt.toDate(), // Firestore Timestamp를 Date 객체로 변환
      order: data.order,
      renewal: data.renewal,
      title: data.title,
      contents: data.contents,
    };
    validation(notice);
    return notice;
  },
};
