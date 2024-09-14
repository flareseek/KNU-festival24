import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { Notice, NoticeDto } from "../types/notice";
import { db } from "./firebaseConfig";
import { noticeConverter } from "./noticeConverter";

// 공지사항 생성
export async function createNotice(newNotice: Notice) {
  try {
    const docRef = await addDoc(collection(db, "notice").withConverter(noticeConverter), newNotice);
    return docRef.id;
  } catch (e) {
    throw new Error("Error adding document: " + e);
  }
}

// 전체 공지사항 조회
export async function getNoticeList(): Promise<NoticeDto[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "notice").withConverter(noticeConverter));
    const result: NoticeDto[] = [];
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
  } catch (e) {
    throw new Error("Error getting documents: " + e);
  }
}

// 공지사항 조회
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

// 공지사항 수정
export async function updateNotice(noticeId: string, newNotice: Notice) {
  try {
    const docRef = doc(db, "notice", noticeId).withConverter(noticeConverter);
    await updateDoc(docRef, { ...newNotice });
  } catch (error) {
    throw new Error("Error updating document: " + error);
  }
}

// 공지사항 삭제
export async function deleteNotice(noticeId: string) {
  try {
    await deleteDoc(doc(db, "notice", noticeId));
  } catch (error) {
    throw new Error("Error removing document: " + error);
  }
}
