import React, { useEffect, useState } from "react";
import axios from "axios";

const RsvpContext = React.createContext();

const RsvpProvider = ({ children }) => {
	const [rsvp_lists, setRsvpLists] = useState([
		{
			id: "",
			name: "",
			num_attend: 0,
			greet: "",
			phone: "",
		},
	]);
	const getAttenders = () => {
		try {
			axios
				.get("https://wedding-pra-ratna.herokuapp.com/api/attenders")
				.then((res) => setRsvpLists(res?.data));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(getAttenders, []);
	const postAttenders = async (data) => {
		try {
			await axios
				.post("https://wedding-pra-ratna.herokuapp.com/api/attenders", data)
				.then((res) => console.log(res));
		} catch (error) {
			console.log(error);
		} finally {
			getAttenders();
		}
	};
	return (
		<RsvpContext.Provider
			value={{
				rsvp_lists,
				postAttenders,
			}}
		>
			{children}
		</RsvpContext.Provider>
	);
};

export { RsvpContext, RsvpProvider };
