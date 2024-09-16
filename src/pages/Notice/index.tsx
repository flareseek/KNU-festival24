import React, { useState, useEffect } from "react";
import {
  mid,
  notice,
  noticeList,
  noticeContentWrapper,
  noticeTitle,
  noticeContainer,
  searchbar,
  searchContainer,
  noticeNumber,
  noticeDetail,
  arrowButton,
  newBadge,
  pageButton,
  activePageButton,
  emptyListAlert,
} from "./notice.css.ts"; // 스타일 가져오기
import { getNoticeList } from "../../shared/firebase/noticeService"; // Firebase에서 getNoticeList 가져오기
import { NoticeDto } from "../../shared/types/notice"; // NoticeDto 타입 정의

function Notice() {
  const [notices, setNotices] = useState<NoticeDto[]>([]); // 공지사항 목록 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [query, setQuery] = useState<string>(""); // 검색어 상태
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(null); // 확장된 공지 ID를 관리
  const itemsPerPage = 6; // 페이지당 항목 수

  // Firebase에서 공지사항 데이터를 가져오는 함수
  const fetchNotices = async () => {
    try {
      const noticeList = await getNoticeList(); // Firebase에서 데이터 가져오기
      setNotices(noticeList); // 데이터를 상태에 저장
      setLoading(false); // 로딩 완료
    } catch (error) {
      console.error("Error fetching notices:", error);
      setLoading(false); // 에러가 발생해도 로딩 완료로 변경
    }
  };

  // 컴포넌트가 처음 렌더링될 때 Firebase에서 데이터를 가져옴
  useEffect(() => {
    fetchNotices();
  }, []);

  // 검색어 입력 시 상태 업데이트
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  // 공지사항 토글 로직 (한 게시글만 확장되도록 수정)
  const toggleNotice = (id: string) => {
    setExpandedNoticeId((prevId) => (prevId === id ? null : id)); // 같은 게시글 클릭 시 축소, 다른 게시글 클릭 시 확장
  };

  // 필터링된 공지사항 목록 (검색어 적용 및 내림차순 정렬)
  const filteredNotices = notices
    .filter((noticeItem) => {
      const searchText = query.toLowerCase();
      return (
        noticeItem.title.toLowerCase().includes(searchText) ||
        noticeItem.contents.toLowerCase().includes(searchText)
      );
    })
    .reverse(); // 공지사항을 내림차순으로 정렬 (최신 공지사항이 제일 위로 오게)

  // 현재 페이지에 맞는 데이터 추출
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 수 계산
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 로딩 중일 때 로딩 메시지 표시
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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

        {/* 공지사항 목록 렌더링 */}
        <div className={noticeList}>
          {filteredNotices.length === 0 ? (
            <p className={emptyListAlert}>해당하는 게시글이 없어요!</p>
          ) : (
            currentNotices.map((noticeItem, index) => (
              <div className={noticeContainer} key={noticeItem.id}>
                <div className={notice}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={noticeNumber}>{index + 1 + (currentPage - 1) * itemsPerPage}</p>
                    {/* 공지사항의 renewal이 true일 경우 'New' 배지를 표시 */}
                    {noticeItem.renewal && <span className={newBadge}>New</span>}
                  </div>

                  <div className={noticeContentWrapper}>
                    <p className={noticeTitle}>{noticeItem.title}</p>
                  </div>

                  {/* downbtn을 클릭하면 토글 */}
                  <button onClick={() => toggleNotice(noticeItem.id)} className={arrowButton}>
                    <span className="material-symbols-outlined">
                      {expandedNoticeId === noticeItem.id ? "arrow_drop_up" : "arrow_drop_down"}
                    </span>
                  </button>
                </div>

                {/* 상세 내용 표시 - 확장 시만 보여줌 */}
                {expandedNoticeId === noticeItem.id && (
                  <div className={noticeDetail}>{noticeItem.contents}</div>
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
    </div>
  );
}

export default Notice;
