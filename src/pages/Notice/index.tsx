import React, { useState } from "react";
import {
  container,
  titleText,
  mid,
  notice,
  noticeList,
  noticeContentWrapper,
  noticeContent,
  noticeContainer,
  searchbar,
  searchContainer,
  noticeNumber,
  noticeDetail,
  arrowButton,
  newBadge,
  pageButton,
  activePageButton,
} from "./notice.css.ts"; // 스타일 가져오기

// NoticeItem 타입 정의: 제목은 string, 콘텐츠는 JSX.Element로 지정
interface NoticeItem {
  id: number;
  title: string;
  content: string;
  detail: string;
}

// 임시 데이터 예시
const noticeData: NoticeItem[] = [
  {
    id: 1,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 2,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 3,
    title: "랄랄라 신규 게시물",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 4,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 5,
    title: "랄랄라 신규 게시물",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 6,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 7,
    title: "랄랄라 신규 게시물",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 세부내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 8,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 룰루입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  {
    id: 9,
    title: "랄랄라 신규 게시물",
    content: "This 강원대 the content for notice 1.",
    detail: "여기는 부스내용입니다. Notice 1에 대한 정보가 더 있습니다.",
  },
  // 나머지 공지사항 추가
];

function Notice() {
  const [query, setQuery] = useState<string>(""); // 검색어의 타입을 string으로 지정
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [expandedNotices, setExpandedNotices] = useState<number[]>([]); // 확장된 공지 ID들을 관리
  const itemsPerPage = 6;

  // 가장 최근 게시물의 ID 찾기 (ID가 제일 큰 것이 최신 게시물이라고 가정)
  const mostRecentNoticeId = Math.max(...noticeData.map((notice) => notice.id));

  // 검색어 입력 시 상태 업데이트
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  // downbtn 클릭 시 상세 내용을 보여주는 로직
  const toggleNotice = (id: number) => {
    setExpandedNotices((prev) =>
      prev.includes(id) ? prev.filter((noticeId) => noticeId !== id) : [...prev, id],
    );
  };

  // 필터링 로직
  const filteredNotices = noticeData
    .filter((noticeItem) => {
      const searchText = query.toLowerCase();
      return (
        noticeItem.title.toLowerCase().includes(searchText) ||
        noticeItem.detail.toLowerCase().includes(searchText)
      );
    })
    .reverse(); // 공지사항을 내림차순으로 정렬 (마지막 공지사항이 제일 위로 오게)

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
      <div className={container}>
        <p className={titleText}>공지사항</p>
      </div>
      <div className={mid}>
        <div className={searchContainer}>
          <input
            placeholder="키워드 검색"
            type="text"
            value={query}
            onChange={handleSearch}
            className={searchbar}
          />
        </div>

        {/* noticeList 렌더링 */}
        <div className={noticeList}>
          {filteredNotices.length === 0 ? (
            <p style={{ textAlign: "center", color: "white", fontSize: "18px" }}>
              해당하는 게시글이 없어요!
            </p>
          ) : (
            currentNotices.map((noticeItem, index) => (
              <div className={noticeContainer} key={noticeItem.id}>
                <div className={notice}>
                  {/* 번호와 제목 표시 */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={noticeNumber}>{index + 1 + (currentPage - 1) * itemsPerPage}</p>
                    {/* 가장 최근 게시물에만 'New' 표시 */}
                    {noticeItem.id === mostRecentNoticeId && <span className={newBadge}>New</span>}
                  </div>

                  <div className={noticeContentWrapper}>
                    <p className={noticeContent}>{noticeItem.title}</p>
                  </div>
                  {/* downbtn을 클릭하면 토글 */}
                  <button onClick={() => toggleNotice(noticeItem.id)} className={arrowButton}>
                    <span className="material-symbols-outlined">
                      {expandedNotices.includes(noticeItem.id)
                        ? "arrow_drop_up"
                        : "arrow_drop_down"}
                    </span>
                  </button>
                </div>

                {/* 상세 내용 표시 - 확장 시만 보여줌 */}
                {expandedNotices.includes(noticeItem.id) && (
                  <div className={noticeDetail}>{noticeItem.detail}</div>
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
                className={currentPage === pageNumber ? activePageButton : pageButton}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={container}></div>
    </div>
  );
}

export default Notice;
