import _ from "lodash";
import React, { useEffect, useState, useCallback } from "react";
import {
	Container,
	Grid,
	Segment,
	Card,
	Loader,
	Icon,
} from "semantic-ui-react";
import styled from "styled-components";
import Decor from "./assets/decor.svg";
import FlowerPattern from "./assets/floral.png";

import CoverImg from "./assets/hero.png";
import { useSpring, animated } from "react-spring";
import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
	DownUpAnimation,
	LeftRightAnimation,
	RightLeftAnimation,
} from "./helpers/animation";
import music_acc from "./assets/audio.mp3";

import useWindowPosition from "./hooks/useWindowPosition";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import DayDate from "./components/DayDate";

import PhotoDeck from "./components/PhotoDeck";

import Penutup from "./components/Penutup";
import RSVP from "./components/RSVP";

// img
import FmImg from "./assets/asset_fm.png";
import MImg from "./assets/asset_m.png";
import FlowerF from "./assets/ff.png";
import FlowerFl from "./assets/ff_l.png";

import AttendersComponent from "./components/AttendersComponent";
import CovidProtocol from "./components/CovidProtocol";
import CountDownMap from "./components/CountDownMap";
import { GiftModal } from "./components/GiftModal";
import { rgba } from "@react-spring/shared";
import { RsvpProvider } from "./context/RsvpContext";

const StyledCard = styled(Card)`
	min-height: 100vh !important;
	min-width: 100% !important;
	box-shadow: none !important;
	background: #f8fffb !important;
	&:after {
		background-image: url(${FlowerPattern}) !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		background-position-x: center !important;
		background-position-y: -30px !important;
		opacity: 0.4;
	}
`;

const MainContent = styled(Container)`
	background: #f8fffb;
	padding: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0px !important;
`;
const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: bottom;
	padding-top: 30%;
`;

const FooterFlowerMain = styled.div`
	background: url(${FlowerF}), url(${FlowerFl});
	background-repeat: no-repeat, no-repeat;
	background-size: 180px, 180px;
	background-position-y: -100px, -100px;
	background-position-x: -50px, 180px;
	min-height: 20%;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 15px;
`;

const FotterWave = styled.div`
	display: block;
	width: 100%;
	height: 60px;
	max-height: 60px;
	margin: 0;
	z-index: 1;
	bottom: 0;
	position: absolute;

	&:before,
	&:after {
		content: "";
		position: absolute;
		// left: 50%;
		min-width: 100vw;
		min-height: 100vw;
		background-color: #fcfff5;
		animation-name: rotate;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	&:before {
		bottom: 15vh;
		border-radius: 45%;
		animation-duration: 10s;
	}

	&:after {
		bottom: 12vh;
		opacity: 0.5;
		border-radius: 47%;
		animation-duration: 10s;
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, 0) rotateZ(0deg);
		}
		50% {
			transform: translate(-50%, -2%) rotateZ(180deg);
		}
		100% {
			transform: translate(-50%, 0%) rotateZ(360deg);
		}
	}
`;

const Wrapper = styled.div`
	padding: 80px 20px;
	margin-top: 20px;
`;

const StyledContainerDayDate = styled.div`
	margin: 0px !important;
`;

const BrideContainer = animated(Grid);
const FloatingButton = styled.a`
	width: 62px;
	height: 62px;
	line-height: 62px;
	display: block;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	border: 2px solid #d991a4;
	text-align: center;
	display: inline-block;
	vertical-align: middle;
	position: fixed;
	z-index: 10;
	color: #fff;
	background-color: #d991a4;
	bottom: 20px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Loading = () => (
	<Segment
		style={{ background: "transparent", boxShadow: "none", border: "none" }}
	>
		<Loader size="large" active inline="centered" />
	</Segment>
);

function App() {
	const [renderSplashScreen, setRenderSplashScreen] = useState(true);
	const [is_playing_music, setIsPlayingMusic] = useState(true);
	const music = new Audio(music_acc);
	const animated_deck_photo = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "500" },
		loop: false,
	});
	const [{ scroll, xy }, set] = useSpring(() => ({ scroll: 0, xy: [0, 0] }));
	const onScroll = useCallback(
		(e) => set({ scroll: e.target.scrollTop / 30 }),
		[]
	);

	useEffect(() => {
		setTimeout(() => setRenderSplashScreen(!renderSplashScreen), 2000);
	}, []);

	useEffect(() => {
		if (is_playing_music) {
			music.play();
		} else {
			music.pause();
			music.currentTime = 0;
		}
	}, [is_playing_music]);

	const pos_section = useWindowPosition();

	const animated_bride = useSpring({
		from: { transform: "translateY(100%)", opacity: 0 },
		to: [{ transform: "translateY(0%)", opacity: 1 }],
		config: { duration: "300" },
		loop: false,
	});

	return (
		<Container
			style={{
				background: "#f8fffb",
			}}
		>
			<Navbar />
			<MainContent>
				<Grid columns="equal">
					<Grid.Column
						mobile={16}
						computer={16}
						tablet={16}
						style={{ margin: "0px", padding: "0px" }}
					>
						<StyledCard>
							<Card.Content
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<AttendersComponent />
							</Card.Content>
						</StyledCard>
					</Grid.Column>
				</Grid>
			</MainContent>
			{pos_section > 300 && <CovidProtocol />}
			<Wrapper
				offset={scroll}
				pos={0}
				start={0}
				end={0.5}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
				id="second-section"
			>
				{pos_section > 900 && (
					<>
						<ScaleUpImageDecorAnimation src={Decor} />
						<FlipUpTitleAnimation text="Groom & Bride" />
						<DownUpAnimation>
							<i style={{ marginBottom: "10px" }}>
								Assalamu’alaikum Warahmatullahi Wabarakatuh
							</i>
							<Grid columns="equal">
								<Grid.Column mobile={16} computer={16} tablet={16}>
									<p className="paragraph" style={{ textAlign: "center" }}>
										Maha Suci Allah yang telah menciptakan mahluk-Nya
										berpasang-pasangan. Ya Allah yang Maha Pengasih, dengan
										ridho-Mu Kau mempertemukan kami dalam suatu ikatan
										pernikahan suci.
									</p>
								</Grid.Column>
							</Grid>
						</DownUpAnimation>
					</>
				)}
				{pos_section > 1100 && (
					<LeftRightAnimation>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<img
								src={FlowerPattern}
								width="100%"
								style={{ borderRadius: "10px" }}
							/>
						</Grid.Column>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<h3 className="title">Ratna Yulianti</h3>
							<p className="paragraph">
								Putri Pertama dari pasangan Bapak <b>Jawardi</b> dan Ibu
								<b> Endang Sri Rahayuningsih</b>
							</p>
							<p className="subtitle">
								Dk. Pendem RT02/RW06, Ds. Jarum, Kec. Bayat, Kab. Klaten, Jawa
								Tengah
							</p>
						</Grid.Column>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<h3 className="title" style={{ textAlign: "right" }}>
								Pra'atfika
							</h3>
							<p className="subtitle" style={{ textAlign: "right" }}>
								Putra Kedua dari Bapak <b>Sutikno</b> dan Ibu <b>Nurjanah</b>
							</p>
							<p className="subtitle" style={{ textAlign: "right" }}>
								Dk. Pendem RT02/RW06, Ds. Jarum, Kec. Bayat, Kab. Klaten, Jawa
								Tengah
							</p>
						</Grid.Column>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<img
								src={FlowerPattern}
								width="100%"
								style={{ borderRadius: "10px" }}
							/>
						</Grid.Column>
					</LeftRightAnimation>
				)}
			</Wrapper>
			<Wrapper
				offset={scroll}
				pos={0.5}
				start={1}
				end={0.5}
				style={{ margin: "0px", padding: "0px" }}
			>
				{pos_section > 1100 && <DayDate post_section={pos_section} />}
			</Wrapper>
			<Container>
				<Wrapper offset={scroll} pos={1} start={0.5} end={1}>
					{pos_section > 1300 && <CountDownMap post_section={pos_section} />}
				</Wrapper>
			</Container>
			<Container>
				<Wrapper offset={scroll} pos={1.5} start={1.5} end={2}>
					<RsvpProvider>
						<RSVP />
					</RsvpProvider>
				</Wrapper>
			</Container>
			<Container>
				<Wrapper offset={scroll} pos={2} start={2} end={2.5}>
					<Penutup />
				</Wrapper>
			</Container>
			{/* <Container>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "80px",
					}}
				>
					<ScaleUpImageDecorAnimation src={Decor} />
					<FlipUpTitleAnimation text="Our Gallery" />
				</div>
				<animated.div id="pdeck" style={animated_deck_photo}>
					<PhotoDeck />
				</animated.div>
			</Container> */}
			{/* <GiftModal /> */}
			<FloatingButton
				onClick={(e) => {
					e.preventDefault();
					setIsPlayingMusic(!is_playing_music);
				}}
			>
				<Icon
					name={is_playing_music ? "pause" : "play"}
					size="large"
					color="white"
				/>
			</FloatingButton>
			{/* <BottomNav /> */}
		</Container>
	);
}

export default App;
