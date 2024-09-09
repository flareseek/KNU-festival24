import React, { useState, useEffect, useRef } from "react";
import {
  container,
  mid,
  notice,
  noticeList,
  noticeContentWrapper, // 추가된 래퍼 스타일
  noticeContent,
  noticeContainer,
  searchbar,
  searchButton,
  searchContainer,
  copyright,
  noticeNumber,
  noticeDownBtn,
  noticeDetail,
} from "./notice.css.ts"; // 스타일 가져오기

// NoticeItem 타입 정의: 제목은 string, 콘텐츠는 JSX.Element로 지정
interface NoticeItem {
  id: number;
  title: string;
  content: JSX.Element; // 콘텐츠는 JSX로 처리
  detail: JSX.Element; // 상세 내용을 위한 필드 추가
}

// 임시 데이터 예시
const noticeData: NoticeItem[] = [
  {
    id: 1,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This 강원대 the content for notice 1.</p>,
    detail: <p>여기는 강원대 내용입니다. Notice 1에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 2,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This is the content for notice 2.</p>,
    detail: <p>여기는 상세 내용입니다. Notice 2에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 3,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This 강원대 the content for notice 1.</p>,
    detail: <p>여기는 강원대 내용입니다. Notice 1에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 4,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This is the content for notice 2.</p>,
    detail: <p>여기는 상세 내용입니다. Notice 2에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 5,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This 강원대 the content for notice 1.</p>,
    detail: <p>여기는 강원대 내용입니다. Notice 1에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 6,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This is the content for notice 2.</p>,
    detail: <p>여기는 상세 내용입니다. Notice 2에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 7,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This 강원대 the content for notice 1.</p>,
    detail: <p>여기는 강원대 내용입니다. Notice 1에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 8,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This is the content for notice 2.</p>,
    detail: <p>여기는 상세 내용입니다. Notice 2에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 9,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This 강원대 the content for notice 1.</p>,
    detail: <p>여기는 강원대 내용입니다. Notice 1에 대한 정보가 더 있습니다.</p>,
  },
  {
    id: 10,
    title: "2024 강원대학교 백령대동제 개최 안내",
    content: <p>This is the content for notice 2.</p>,
    detail: <p>여기는 상세 내용입니다. Notice 2에 대한 정보가 더 있습니다잇.</p>,
  },
  // 나머지 공지사항 추가
];

function Notice() {
  const [query, setQuery] = useState<string>(""); // 검색어의 타입을 string으로 지정
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [expandedNotices, setExpandedNotices] = useState<number[]>([]); // 확장된 공지 ID들을 관리
  const itemsPerPage = 6; // 한 페이지에 표시할 최대 noticeContainer 개수

  // 각 공지사항의 애니메이션 상태를 관리하는 배열
  const [animated, setAnimated] = useState<boolean[]>(Array(noticeData.length).fill(false));

  // 공지사항의 텍스트 길이를 확인하여 애니메이션을 적용할지 여부를 결정
  const noticeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    noticeRefs.current.forEach((ref, index) => {
      if (ref) {
        const contentWidth = ref.scrollWidth;
        const wrapperWidth = ref.clientWidth;
        // 텍스트가 컨테이너를 넘으면 애니메이션을 적용
        setAnimated((prev) => {
          const updated = [...prev];
          updated[index] = contentWidth > wrapperWidth;
          return updated;
        });
      }
    });
  }, [query, currentPage]);

  // 검색어 입력 시 상태 업데이트
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setCurrentPage(1); // 검색어가 변경되면 첫 페이지로 이동
  };

  // downbtn 클릭 시 상세 내용을 보여주는 로직
  const toggleNotice = (id: number) => {
    setExpandedNotices((prev) =>
      prev.includes(id) ? prev.filter((noticeId) => noticeId !== id) : [...prev, id],
    );
  };

  // 필터링 로직: query가 있으면 해당 키워드가 포함된 공지만, 없으면 모든 공지를 보여줌
  const filteredNotices = noticeData
    .filter((noticeItem) => {
      const searchText = query.toLowerCase(); // 검색어를 소문자로 변환
      return (
        noticeItem.title.toLowerCase().includes(searchText) || // 제목에 검색어가 포함되었는지 확인
        noticeItem.detail.props.children.toString().toLowerCase().includes(searchText) // 내용에 검색어가 포함되었는지 확인
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
      <div className={container}></div>
      <div className={mid}>
        <div className={searchContainer}>
          <input
            placeholder="키워드 검색"
            type="text"
            value={query}
            onChange={handleSearch}
            className={searchbar}
          />
          <button onClick={() => alert(`Searching for: ${query}`)} className={searchButton}>
            검색
          </button>
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
                    {/* noticeNumber가 1인 게시글에만 'New' 표시 */}
                    {index + 1 + (currentPage - 1) * itemsPerPage === 1 && (
                      <span
                        style={{
                          marginLeft: "10px",
                          padding: "3px 6px",
                          backgroundColor: "#e74c3c",
                          color: "#fff",
                          borderRadius: "3px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        New
                      </span>
                    )}
                  </div>
                  {/* 공지사항 콘텐츠에 스크롤 애니메이션 추가 */}
                  <div
                    className={noticeContentWrapper}
                    ref={(el) => (noticeRefs.current[index] = el)}
                  >
                    <p
                      className={animated[index] ? noticeContent : ""}
                      style={animated[index] ? {} : { animation: "none" }}
                    >
                      {noticeItem.title}
                    </p>
                  </div>
                  {/* downbtn을 클릭하면 토글 */}
                  <button
                    className={noticeDownBtn}
                    onClick={() => toggleNotice(noticeItem.id)}
                  ></button>
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
                style={{
                  margin: "5px",
                  marginTop: "15px",
                  padding: "5px 10px",
                  backgroundColor: currentPage === pageNumber ? "#3498db" : "#ddd",
                  color: currentPage === pageNumber ? "#fff" : "#000",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={container}>
        <div className={copyright}></div>
      </div>
    </div>
  );
}

export default Notice;