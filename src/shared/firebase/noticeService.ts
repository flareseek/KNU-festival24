import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore/lite";
import { Notice, NoticeDto } from "../types/notice";
import { db } from "./firebaseConfig";
import { noticeConverter } from "./noticeConverter";
import { getAuth } from "firebase/auth";

/**
 * 공지사항 생성
 * @param newNotice 생성할 공지사항의 Notice 객체
 * @returns 생성된 공지사항의 ID
 */
export async function createNotice(newNotice: Notice): Promise<string> {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("login required");
  }
  try {
    const docRef = await addDoc(collection(db, "notice").withConverter(noticeConverter), newNotice);
    return docRef.id;
  } catch (e) {
    throw new Error("Error adding document: " + e);
  }
}

/**
 * 전체 공지사항 조회
 * @returns NoticeDto 객체 배열
 */
export async function getNoticeList(): Promise<NoticeDto[]> {
  try {
    const q = query(
      collection(db, "notice").withConverter(noticeConverter),
      orderBy("order", "asc"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);
    const result: NoticeDto[] = [];
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
  } catch (e) {
    throw new Error("Error getting documents: " + e);
  }
}

/**
 * ID를 통한 공지사항 조회
 * @param noticeId 조회할 공지사항의 ID
 * @returns NoticeDto 객체
 */
export async function getNoticeById(noticeId: string): Promise<NoticeDto> {
  try {
    const docRef = doc(db, "notice", noticeId).withConverter(noticeConverter);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      throw new Error("No document found with id " + noticeId); // 문서가 없는 경우 예외 처리
    }

    return { id: docSnapshot.id, ...docSnapshot.data() };
  } catch (e) {
    throw new Error("Error getting document: " + e);
  }
}

/**
 * 공지사항 수정
 * @param noticeId 수정할 공지사항의 ID
 * @param newNotice 수정할 내용이 담긴 Notice 객체
 */
export async function updateNotice(noticeId: string, newNotice: Notice) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("login required");
  }
  try {
    const docRef = doc(db, "notice", noticeId).withConverter(noticeConverter);
    await updateDoc(docRef, { ...newNotice });
  } catch (error) {
    throw new Error("Error updating document: " + error);
  }
}

/**
 * 공지사항 삭제
 * @param noticeId 삭제할 공지사항의 ID
 */
export async function deleteNotice(noticeId: string) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("login required");
  }
  try {
    await deleteDoc(doc(db, "notice", noticeId));
  } catch (error) {
    throw new Error("Error removing document: " + error);
  }
}
