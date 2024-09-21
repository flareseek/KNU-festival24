# 24 대동제 축제 사이트

## Wiki link

[Environment Setup](https://github.com/flareseek/KNU-festival24/wiki/Environment-Setup)<br/>
[Git Convention](https://github.com/flareseek/KNU-festival24/wiki/Git-Convention)<br/>
[Code Convention](https://github.com/flareseek/KNU-festival24/wiki/Code-Convention)<br/>
[Folder Structure](https://github.com/flareseek/KNU-festival24/wiki/Folder-Structure)<br/>

## 목차

Environment Setup (wiki 참조) <br/>
[Git Convention](#git-convention) <br/>
[Code Convention](#code-convention) <br/>
[Folder Structure](#folder-structures) <br/>

## Git Convention

[Commit](#commit) <br/>
[Branch](#branch) <br/>
[PR](#pr) <br/>

### Commit

#### 작업태그

| 접두사       | 설명                                |
| ------------ | ----------------------------------- |
| **init**     | 프로젝트 초기 설정                  |
| **feat**     | 새 기능 추가                        |
| **fix**      | 버그 수정                           |
| **style**    | 코드 스타일 변경 (세미콜론 누락 등) |
| **docs**     | 문서 (README.md 등)                 |
| **refactor** | 리팩토링                            |
| **hotfix**   | 핫픽스                              |
| **chore**    | 기타 작업                           |

#### Commit message 형태

- `작업태그(키워드): 작업내용 (#이슈번호)`
- 작업태그: [작업태그](#작업태그) 확인
- 키워드 (생략 가능): 작업 키워드
- 작업내용: 한국어 또는 영어로 작성하며, 영어로 작성 시에는 동사원형으로 시작
- 이슈번호 (생략 가능): Github issue 번호
- e.g
  - `feat(time_table): create TimeTable (#1)`
  - `fix(booth): 부스 데이터 수정 (#5)`

### Branch

- release

  - 최종 배포 branch

- develop

  - 개발 메인 branch
  - develop branch로 merge시 PR 작성
  - PR Approve 2명 이상 필요

- feat/\*\*

  - 기능 구현 시 branch 이름을 `feat/featureName`로 분기
  - e.g
    - `feat/main-page`

- fix/\*\*

  - 오류 수정시 branch 이름을 `fix/bugName`로 분기
  - e.g
    - `fix/booth-page-ui`

### PR

- PR Template에 맞춰 작성

## Code Convention

[CSS](#css)<br/>
[Code style](#code-style) <br/>
[Naming](#naming)<br/>
[Image import](#image-import)<br/>
[Secret key](#secret-key)<br/>

### CSS

- CSS 파일은 동일 폴더내에 `컴포넌트명.css.ts` 로 관리합니다. <br/>

```typescript
// app.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: "lightblue",
});
```

```jsx
// App.tsx
import { container } from "./App.css.ts";
function App() {
  return (
    <div>
      <h1 className={container}>Hello, KNU Festival!</h1>
    </div>
  );
}
export default App;
```

### Code style

- prettier에서 자동으로 교정
- 코드 작성후 commit 및 PR 시에 `npm run check` 명령어 실행하여 확인
- 만약 prettier에서 오류가 뜬다면 `npm run prettier`로 코드 스타일 변경

### Naming

#### 함수명

- jsx를 반환하는 함수 PascalCase
- 그렇지 않다면 camelCase

```typescript
// PascalCase
function Home() {
  return <div>Hello</div>;
}

// camelCase
function sum() {
  return 1+2;
}
```

#### 변수명

- camelCase로 작성
- 변하지 않는 값은 대문자로 작성

```typescript
// camelCase
const person: Person = { name: "Kim", age: 20 };

const PIE = 3.14;
```

#### 타입, 클래스

- PascalCase로 작성

```typescript
type Person = { name: string; age: number };
```

#### 확장자명

- 코드에서 jsx를 포함하고 있으면 파일명 `PascalCase.tsx`
- 그렇지 않다면 `camelCase.ts`

```typescript
// Home.tsx
function Home() {
  return <div>Hello</div>;
}

// sum.ts
function sum() {
  return 1+2;
}
```

### Image import

- 이미지 경로 작성시 **절대로** `string` 및 `require` **사용 금지**
- import 이용

```typescript
import image1 from "../assets/image.png";

const App = () => {
  // 좋은 예
  return <img src={image1} />

  // 나쁜 예 1: <img src="../assets/image.png" />
  // 나쁜 예 2: <img src=require("../assets/image.png")>
}
```

### Secret key

- `.env` 에서 key 관리
- **절대로 git에 올리지 말것**

## Folder Structures

[public](#public-폴더)<br/>
[src](#src-폴더)<br/>
[src/assets](#asset-폴더)<br/>
[src/components](#components-폴더)<br/>
[src/pages](#pages-폴더)<br/>
[src/resources](#resources-폴더)<br/>
[src/shared](#shared-폴더)<br/>
[src/App.tsx](#apptsx)<br/>
[src/main.tsx](#maintsx)<br/>
[src/vite-env.d.ts](#vite-envdts)<br/>
[나머지](#나머지)<br/>

```
├── root
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── resources
│   │   ├── shared
│   │   │   ├── firebase
│   │   │   ├── types
│   │   │   └── util
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.ts
```

### public 폴더

- `robots.txt` 와 같이 소스 코드에서 참조되지 않는 에셋 저장
- URL을 얻기 위해 굳이 `import` 할 필요 없는 에셋 저장

### src 폴더

#### asset 폴더

- 코드에 사용될 에셋 저장

#### components 폴더

- 앱 component 저장

#### pages 폴더

- 앱 page component 저장

#### resources 폴더

- 코드 내 하드코딩이 필요한 데이터 저장

#### shared 폴더

- 여러 component에서 사용되는 코드들 저장
- `shared/firebase`: firebase
- `shared/types`: type 저장
- `shared/util`: 유틸 함수 저장

#### App.tsx

- 앱 메인 진입점

#### main.tsx

- root에서 Wrapper 필요할시 해당 파일에서 감싸기

```typescript
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// StrictMode Wrapper
```

#### vite-env.d.ts

- vite에서 build시 확인하는 global types

### 나머지

- 이하 생략 ...
