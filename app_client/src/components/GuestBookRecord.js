import React from "react";
import styled from "styled-components";
import { Feed, Label } from "semantic-ui-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { animated, useSpring } from "react-spring";

dayjs.extend(relativeTime);

const BookWrapper = styled.div`
	width: 100%;
	border-radius: 0.28571429rem;
	border: 1px solid rgba(34, 36, 38, 0.15);
	padding: 30px 10px;
	margin-top: 50px;
	background: white;
	max-height: 400px;
	overflow-y: auto;
`;

const AnimatedBookWrapper = animated(BookWrapper);

// const feed_data = [
// 	{
// 		name: "Hafiz Ramadhan",
// 		text: "Yuhukeun Praaaa !",
// 		status: "Hadir",
// 		date: "01-03-2022",
// 	},
// 	{
// 		name: "Endro Wahyono",
// 		text: "Siap Hadir lekuu !",
// 		status: "Hadir",
// 		date: "07-02-2022",
// 	},
// 	{
// 		name: "Nanang Ahmad",
// 		text: "jancukkk !",
// 		status: "Hadir",
// 		date: "01-04-2022",
// 	},
// 	{
// 		name: "Dimas Okta",
// 		text: "Siap Hadir lekuu !",
// 		status: "Hadir",
// 		date: "01-04-2022",
// 	},
// 	{
// 		name: "Ki Joko Bodo",
// 		text: "Buah jambu Buah kedondong, uhuy akhirnya kawanku nikah dong. Semoga menjadi keluarga sakinah, mawadah, warahmah aamiin!",
// 		status: "Belum Tahu",
// 		date: "03-03-2022",
// 	},
// 	{
// 		name: "Pak Bambang",
// 		status: "Tidak Hadir",
// 		date: "01-03-2022",
// 	},
// ];

const FeedEvent = ({ name, status, date_time, text }) => {
	return (
		<Feed.Event>
			<Feed.Content
				style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}
			>
				<Feed.Summary>
					<Feed.User>{name}</Feed.User>
					<Label
						color={
							status === "Hadir"
								? "green"
								: status === "Tidak Hadir"
								? "red"
								: "orange"
						}
					>
						{status}
					</Label>
					<Feed.Date>{dayjs().to(dayjs(date_time))}</Feed.Date>
				</Feed.Summary>
				{text && <Feed.Extra text>{text}</Feed.Extra>}
			</Feed.Content>
		</Feed.Event>
	);
};

const GuestBookRecord = ({ feed_data }) => {
	const animated_style_book = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "1000" },
		loop: false,
	});
	return (
		<AnimatedBookWrapper>
			<Feed>
				{feed_data?.length > 0 &&
					feed_data.map((data) => {
						return (
							<FeedEvent
								text={data?.greet}
								name={data.name}
								date_time={data.date}
								status={data.status}
							/>
						);
					})}
			</Feed>
		</AnimatedBookWrapper>
	);
};

export default GuestBookRecord;
