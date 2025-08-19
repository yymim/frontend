import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const memoizedHeader = memo(Header);

export default memoizedHeader;

// export default memo(Header); 로 한줄로 사용할 수도 있음