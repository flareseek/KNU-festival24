// App.tsx
import React, { useState } from "react";
import {
  container,
  mid,
  notice,
  noticeList,
  noticeContainer,
  searchbar,
  searchButton,
  searchContainer,
} from "./pages/Notice/notice.css.ts"; // 스타일 가져오기

function Notice() {
  const [query, setQuery] = useState("");

  // 검색어 입력 시 상태 업데이트
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // 버튼 클릭 시 실행할 로직
  const handleButtonClick = () => {
    alert(`Searching for: ${query}`);
  };

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
          <button onClick={handleButtonClick} className={searchButton}></button>
        </div>
        <div className={noticeList}>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
          <div className={noticeContainer}>
            <div className={notice}></div>
          </div>
        </div>
      </div>
      <div className={container}></div>
    </div>
  );
}

export default Notice;
