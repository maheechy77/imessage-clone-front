import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";

const Login = () => {
	const signin = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login_logo">
				<img src="https://www.logolynx.com/images/logolynx/7b/7b85bb5e6e26199c6af7ada1d1a5b2d5.png" />
				<h1>IMessage</h1>
			</div>
			<Button onClick={signin}>Sign-In</Button>
		</div>
	);
};

export default Login;
