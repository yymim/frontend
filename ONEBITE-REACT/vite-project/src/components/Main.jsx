import "./Main.css";

const Main = () => {
	const user = {
		name: "윤영민",
		isLogin: false, // 로그인 여부
	};

	if (user.isLogin) {
		return (
			<div className="logout">
				로그아웃
			</div>
		);
	} else {
		return <div className="login">로그인</div>;
	}

	// return (
	// 	<>
	// 		{user.isLogin ? (
	// 			<div className="logout">로그아웃</div>
	// 		) : (
	// 			<div className="login">로그인</div>
	// 		)}
	// 	</>
	// );
};

export default Main;
