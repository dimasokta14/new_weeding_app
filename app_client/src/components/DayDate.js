import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Grid, Button, Segment } from "semantic-ui-react";
import Decor from "../assets/decor.svg";
import { animated, useSpring } from "react-spring";

import { useTimer } from "react-timer-hook";
import Dot from "../assets/dot.png";
import { Title } from "./Title";
import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
} from "../helpers/animation";
import useWindowPosition from "../hooks/useWindowPosition";

const StyledButton = styled(Button)`
	border-radius: 20px !important;
	background: #e3c7ca !important;
	color: black !important;
`;

const StyledWrapperAbs = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
`;

const ContainerDateTime = styled.div`
	background: #fff;
`;

const BackgroundOverlay = styled.div`
	object-fit: cover;
	width: 100%;
	// height: 250px;
	position: relative;
	top: 0;
	left: 0;
	background-color: rgb(0, 0, 0, 0.4);
	transition: 0.5s ease-out;
	z-index: 99;
`;

const ScheduleCard = styled.div`
	background: rgba(255, 240, 241, 0.8);
	color: #333;
	margin-bottom: 10px;
	border-radius: 10px;
	box-shadow: 2px 2px 10px rgb(0 0 0 / 10%);
	height: 100% !important;
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-clip: border-box;
	width: 90%;
	padding: 30px 15px;
`;

const AnimatedScheduleCard = animated(ScheduleCard);

const DateText = styled.span`
	text-align: center;
	font-size: 18px;
	font-weight: 700;
`;

const WeddingTimer = ({ expiryTimestamp }) => {
	const { seconds, minutes, hours, days, start } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn("expired"),
	});

	useEffect(() => {
		start();
	}, []);

	return (
		<div id="timer">
			<div className="number-list">
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{days}</h3>
						<span className="separator">:</span>
					</div>
					<span className="unit">Hari</span>
				</div>
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{hours}</h3>
						<span className="separator">:</span>
					</div>
					<span className="unit">Jam</span>
				</div>
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{minutes}</h3>
						<span className="separator">:</span>
					</div>
					<span className="unit">Minute</span>
				</div>
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{days}</h3>
					</div>
					<span className="unit">Detik</span>
				</div>
			</div>
		</div>
	);
};

const DayDate = ({ post_section }) => {
	const time = new Date(2021, 6, 25, 11);
	time.setSeconds(time.getSeconds() + 600);
	const style_scale_up = useSpring({
		from: { transform: "translateX(-100%)", opacity: 0 },
		to: [{ transform: "translateX(0%)", opacity: 1 }],
		config: { duration: "1000" },
		loop: false,
	});
	return (
		<div className="anim-pic">
			<Grid
				columns="equal"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						marginBottom: "40px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ScaleUpImageDecorAnimation src={Decor} />
					<FlipUpTitleAnimation text="Weeding Schedule" />
				</div>
				<AnimatedScheduleCard style={style_scale_up}>
					<Grid.Column
						mobile={16}
						computer={16}
						tablet={16}
						style={{
							padding: "1.25rem",
							minHeigth: "1px",
							flex: "1 1 auto",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<h2>Akad Nikah</h2>
						<div style={{ margin: "20px 0px" }}>
							<DateText>Minggu, 08 Mei 2022</DateText>
							<hr className="styled" />
						</div>
						<p
							className="paragraph"
							style={{
								textAlign: "center",
								fontSize: "16px",
								fontStyle: "italic",
							}}
						>
							09:00 WIB <br />
							Dk. Pendem RT02/RW06, Ds. Jarum, Kec. Bayat, Kab. Klaten, Prov
							Jawa Tengah
						</p>
					</Grid.Column>
				</AnimatedScheduleCard>
				<AnimatedScheduleCard style={style_scale_up}>
					<Grid.Column
						mobile={16}
						computer={16}
						tablet={16}
						style={{
							padding: "1.25rem",
							minHeigth: "1px",
							flex: "1 1 auto",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<h2>Resepsi</h2>
						<div style={{ margin: "20px 0px" }}>
							<DateText>Minggu, 08 Mei 2022</DateText>
							<hr className="styled" />
						</div>
						<p
							className="paragraph"
							style={{
								textAlign: "center",
								fontSize: "16px",
								fontStyle: "italic",
							}}
						>
							12:30 WIB <br />
							Dk. Pendem RT02/RW06, Ds. Jarum, Kec. Bayat, Kab. Klaten, Prov
							Jawa Tengah
						</p>
					</Grid.Column>
				</AnimatedScheduleCard>
			</Grid>
		</div>
	);
};

export default DayDate;
