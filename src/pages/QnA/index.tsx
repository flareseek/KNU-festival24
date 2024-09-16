import { useState } from "react";
import {
  mid,
  qna,
  qnaList,
  qnaContentWrapper,
  qnaContent,
  qnaContainer,
  qnaNumber,
  qnaDetail,
  subTitleText,
  subTitleContainer,
  pageButton,
  activePageButton,
  arrowButton,
} from "./qna.css.ts"; // 스타일 가져오기

// 타입 정의
interface QnaItem {
  id: number;
  title: string;
  content: string;
}

// 임시 데이터 예시
const QnaData: QnaItem[] = [
  {
    id: 1,
    title: "질문이 있어요1",
    content:
      "~~~~해서 ~~~~하시길 바랍니다!~~~~해서 ~~~~하시길 바랍니다!~~~~해서 ~~~~하시길 바랍니다!~~~~해서 ~~~~하시길 바랍니다!~~~~해서 ~~~~하시길 바랍니다!",
  },
  {
    id: 2,
    title: "질문이 있어요2",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 3,
    title: "질문이 있어요3",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 4,
    title: "질문이 있어요4",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 5,
    title: "질문이 있어요5",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 6,
    title: "질문이 있어요6",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 7,
    title: "질문이 있어요7",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 8,
    title: "질문이 있어요8",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  {
    id: 9,
    title: "질문이 있어요9",
    content: "~~~~해서 ~~~~하시길 바랍니다.",
  },
  // 나머지 공지사항 추가
];

function QnA() {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [expandedQna, setExpandedQna] = useState<number[]>([]); // 확장된 공지 ID들을 관리
  const itemsPerPage = 6;

  // downbtn 클릭 시 상세 내용을 보여주는 로직
  const toggleQna = (id: number) => {
    setExpandedQna((prev) =>
      prev.includes(id) ? prev.filter((noticeId) => noticeId !== id) : [...prev, id],
    );
  };

  // 원본 배열을 복사한 후 reverse
  const filteredNotices = [...QnaData].reverse(); // 복사 후 배열을 내림차순으로 정렬

  // 현재 페이지에 맞는 데이터 추출
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 수 계산
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
  
      <div className={mid}>
        <div className={subTitleContainer}>
          <p className={subTitleText}>자주 하는 질문</p>
        </div>

        {/* noticeList 렌더링 */}
        <div className={qnaList}>
          {filteredNotices.length === 0 ? (
            <p style={{ textAlign: "center", color: "white", fontSize: "18px" }}>
              해당하는 게시글이 없어요!
            </p>
          ) : (
            currentNotices.map((QnaItem, index) => (
              <div className={qnaContainer} key={QnaItem.id}>
                <div className={qna}>
                  {/* 번호와 제목 표시 */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={qnaNumber}>{index + 1 + (currentPage - 1) * itemsPerPage}</p>
                  </div>

                  <div className={qnaContentWrapper}>
                    <p className={qnaContent}>{QnaItem.title}</p>
                  </div>
                  {/* downbtn을 클릭하면 토글 */}
                  <button
                    onClick={() => toggleQna(QnaItem.id)}
                    className={arrowButton} // 스타일 추가
                  >
                    <span className="material-symbols-outlined">
                      {expandedQna.includes(QnaItem.id) ? "arrow_drop_up" : "arrow_drop_down"}
                    </span>
                  </button>
                </div>

                {/* 상세 내용 표시 - 확장 시만 보여줌 */}
                {expandedQna.includes(QnaItem.id) && (
                  <div className={qnaDetail}>{QnaItem.content}</div>
                )}
              </div>
            ))
          )}
        </div>

        {/* 페이지네이션 */}
        {filteredNotices.length > 0 && (
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={currentPage === pageNumber ? activePageButton : pageButton} // 스타일 적용
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>


    </div>
  );
}

export default QnA;
