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

import React, { useState } from "react";
import { uploadImg } from "../imgService";
function UploadTestComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [downloadURL, setDownloadURL] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("파일이 없습니다.");
      return;
    }

    setUploading(true);
    try {
      const url = await uploadImg(file);
      setDownloadURL(url);
    } catch (e) {
      console.error("업로드 실패:", e);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>파일 업로드 테스트</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "업로드 중..." : "업로드"}
      </button>
      {downloadURL && (
        <div>
          <p>업로드 완료! 다운로드 URL:</p>
          <a href={downloadURL} target="_blank" rel="noopener noreferrer">
            {downloadURL}
          </a>
          <br />
          <img src={downloadURL} alt="업로드된 이미지" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default UploadTestComponent;
