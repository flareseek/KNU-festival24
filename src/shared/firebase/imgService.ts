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

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";
/**
 * 이미지를 업로드하고 해당 이미지의 URL을 반환하는 함수
 * @param file 업로드할 이미지 file(blob) 객체
 * @returns 업로드된 이미지 URL
 */
export async function uploadImg(file: File): Promise<string> {
  // 파일 타입 검증
  if (!file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 업로드할 수 있습니다.");
  }

  // 원본 파일 이름에서 확장자와 이름 분리
  const originalFileName = file.name;
  const fileExtension = originalFileName.split(".").pop();
  const baseFileName = originalFileName.substring(0, originalFileName.lastIndexOf("."));

  // 파일 이름에 사용할 수 없는 문자 제거 및 소문자로 변환
  const sanitizedBaseFileName = baseFileName.replace(/[^a-z0-9가-힣]/gi, "_").toLowerCase();

  // 고유한 파일 이름 생성 (타임스탬프 + 원본 파일 이름 + 확장자)
  const timestamp = Date.now();
  const fileName = `img/${timestamp}_${sanitizedBaseFileName}.${fileExtension}`;

  try {
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (e) {
    throw new Error("Error uploading img: " + e);
  }
}
