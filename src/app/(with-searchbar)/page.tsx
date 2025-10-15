import styles from './page.module.css';

export default function Home() {
  return <div className={styles.page}>인덱스 페이지</div>;
}

// 리액트 서버 컴포넌트 주의 사항
// 1. 서버 컴포넌트에는 브라우저에서 실행될 코드가 포함되면 안된다. (브라우저 API, useState, useEffect 등)
// 2. 클라이언트 컴포넌트는 클라이언트에서만 실행되지 않는다.
// 사전렌더링을 위해 서버에서 1번 실행 되고, 하이드레이션을 위해서 브라우저에서 1번 실행 총 2번 실행된다.(서버와 클라이너트에서 모두 실행된다.)
// 3. 클라이언트 컴포넌트에서 서버 컴포넌트는 임포트 할 수 없다.
// 4. 서버 컴포넌트에서 클라이언트 컴포넌트에게 직렬화 되지 않은 props를 전달할 수 없다. (함수, 클래스, DOM, Promise 등)
