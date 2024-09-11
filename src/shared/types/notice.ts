// 공지사항 타입
export interface Notice {
  createdAt: Date;
  order: number;
  renewal: boolean;
  title: string;
  contents: string;
}

// 공지사항 반환 타입
export interface NoticeDto extends Notice {
  id: string;
}
