import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const Hello = () => {
	return <div>hello</div>;
}


ReactDOM.createRoot(document.getElementById('root')).render(
	<App /> 
	// App 컴포넌트 -> root 컴포넌트
	// 여기 Hello 컴포넌트를 추가할 수도 있다. (예: <Hello />
)
