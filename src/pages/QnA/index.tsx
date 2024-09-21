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
    title: "무대 공연 입장은 17~18시에만 가능한가요?",
    content: "-> 17~18시는 재학생 우선 입장 시간으로, 이외 시간에도 무대 공연 입장이 가능합니다.",
  },
  {
    id: 2,
    title: "무대 공연 보려면 무조건 재학생 우선 입장 팔찌를 받아야하나요?",
    content:
      "-> 재학생 우선 입장 팔찌는 무대 공연을 보기 위해 조금 더 일찍 입장하고 싶은 재학생을 위한 팔찌로, 팔찌를 수령하지 못한 경우에도 무대 공연 관람이 가능합니다.",
  },
  {
    id: 3,
    title: "대운동장에서 운영하는 부스 운영 시간은 어떻게 되나요?",
    content: "-> 부스 운영 시간은 11~17시입니다.",
  },
  {
    id: 4,
    title: "대운동장과 미래광장에서 진행되는 프로그램은 무엇이 있나요?",
    content:
      "-> 대운동장에서는 코지존, 단과대학 제전, 타투 스티커 부스가 진행되며, 미래광장에서는 티셔츠 커스텀과 그래피티, 낙서도로 프로그램이 진행됩니다.",
  },
  {
    id: 5,
    title: "프로그램 참여는 무료인가요?",
    content:
      "-> 모든 프로그램은 무료로 참가 가능하며 티셔츠 커스텀의 경우 참가 대상이 강원대학교 재학생과 휴학생으로 제한됩니다.",
  },
  {
    id: 6,
    title: "주점과 무대 공연은 재학생만 입장 가능한가요?",
    content:
      "-> 2024 백령대동제 주점 Now or Never와 MAIN STAGE는 강원대학교 재학생 및 휴학생을 포함한 학내 모든 구성원, 춘천시민과 강원도민 모두가 참여 가능합니다.",
  },
  {
    id: 7,
    title: "주점 운영 시간은 어떻게 되나요?",
    content:
      "-> 60주년 기념관에서 진행되는 '백령 Party Pub'의 운영 시간은 18:00~익일 01:00 이며, 미래광장에서 진행되는 '당신을 위하여'의 운영 시간은 18:00~익일 00:00 까지 입니다.",
  },
  {
    id: 8,
    title: "주점 외에 장소에서 음주가 가능한가요?",
    content:
      "-> 교내에서 음주하는 행위는 원칙적으로 불가하나, 대동제 기간 동안 주점 내에서만 일시적으로 허용되는 것이므로 주점 외에 장소에서의 음주는 불가능합니다.",
  },
  {
    id: 9,
    title: "우천 시에도 무대 공연과 주점 운영이 되나요?",
    content:
      "-> 우천 시에도 무대 공연과 주점 운영이 진행되나, 행사를 더이상 진행할 수 없을 정도의 기상 상황이 발생할 경우 행사를 중단할 수 있습니다.",
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
  const filteredNotices = [...QnaData]; // 복사 후 배열을 내림차순으로 정렬

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

                  <div onClick={() => toggleQna(QnaItem.id)} className={qnaContentWrapper}>
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
