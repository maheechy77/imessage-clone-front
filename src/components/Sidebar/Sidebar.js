import React, { useEffect, useState } from "react";
import "./Sidebar.css";

//Icons
import { Search, RateReviewOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase";

const Sidebar = () => {
	const user = useSelector(selectUser);
	const [chats, setChats] = useState([]);

	const addChat = () => {
		const chatName = prompt("Please Enter a Chat Name:");

		if (chatName) {
			db.collection("chats").add({
				chatName: chatName,
			});
		}
	};

	useEffect(() => {
		db.collection("chats").onSnapshot((snapshot) => {
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	const logout = () => {
		auth.signOut();
	};
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<Avatar onClick={logout} className="sidebar_avatar" src={user.photo} />
				<div className="sidebar_input">
					<Search />
					<input placeholder="Search" />
				</div>
				<IconButton variant="outlined" className="sidebar_inputButton">
					<RateReviewOutlined onClick={addChat} />
				</IconButton>
			</div>
			<div className="sidebar_chats">
				{chats.map(({ id, data: { chatName } }) => (
					<SidebarChat key={id} id={id} chatName={chatName} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
