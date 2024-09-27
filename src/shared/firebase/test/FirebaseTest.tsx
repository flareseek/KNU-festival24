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

import { useState } from "react";
import {
  createNotice,
  getNoticeList,
  getNoticeById,
  updateNotice,
  deleteNotice,
} from "../noticeService";
import { NoticeDto } from "../../types/notice";

// 테스트용 컴포넌트 추후 삭제 예정
function FirebaseTest() {
  const [order, setOrder] = useState<number>(0);
  const [renewal, setRenewal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<Date>(new Date());
  const [notices, setNotices] = useState<NoticeDto[]>([]);
  const [noticeId, setNoticeId] = useState<string>("");
  return (
    <>
      <div>
        <h1>공지사항 생성</h1>
        <label>
          제목:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          내용:
          <input type="text" value={contents} onChange={(e) => setContents(e.target.value)} />
        </label>
        <label>
          순서:
          <input type="text" value={order} onChange={(e) => setOrder(parseInt(e.target.value))} />
        </label>
        <label>
          new 표시 여부:
          <input type="checkbox" checked={renewal} onChange={(e) => setRenewal(e.target.checked)} />
        </label>
        <button
          onClick={async () => {
            await createNotice({
              createdAt: new Date(), // 현재 시간으로 업데이트
              order,
              renewal,
              title,
              contents,
            });
          }}
        >
          생성
        </button>
      </div>
      <div>
        <h1>전체 공지사항 조회</h1>
        <button
          onClick={async () => {
            const list = await getNoticeList();
            setNotices(list);
          }}
        >
          조회
        </button>
        <div>
          {notices.map((notice, index) => (
            <div key={index}>
              {`ID: ${notice.id}, title: ${notice.title}, contents: ${notice.contents}, order: ${notice.order}, renewal: ${notice.renewal ? "O" : "X"}, createdAt: ${notice.createdAt}`}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>공지사항 조회 / 수정</h1>
        <label>
          공지사항 ID:
          <input type="text" value={noticeId} onChange={(e) => setNoticeId(e.target.value)} />
        </label>
        <button
          onClick={async () => {
            const notice = await getNoticeById(noticeId);
            setNoticeId(notice.id);
            setTitle(notice.title);
            setContents(notice.contents);
            setOrder(notice.order);
            setRenewal(notice.renewal);
            setCreatedAt(notice.createdAt);
          }}
        >
          조회
        </button>
        <label>
          제목:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          내용:
          <input type="text" value={contents} onChange={(e) => setContents(e.target.value)} />
        </label>
        <label>
          순서:
          <input type="text" value={order} onChange={(e) => setOrder(parseInt(e.target.value))} />
        </label>
        <label>
          new 표시 여부:
          <input type="checkbox" checked={renewal} onChange={(e) => setRenewal(e.target.checked)} />
        </label>
        <button
          onClick={async () => {
            await updateNotice(noticeId, {
              createdAt,
              order,
              renewal,
              title,
              contents,
            });
          }}
        >
          수정
        </button>
        <button
          onClick={async () => {
            await deleteNotice(noticeId);
          }}
        >
          삭제
        </button>
      </div>
    </>
  );
}

export default FirebaseTest;
