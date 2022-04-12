import React, { useEffect, useState } from "react";
import { Container, Grid, Card } from "semantic-ui-react";
import styled from "styled-components";
import ImageFlower from "../assets/justmarried.png";
import { useSpring, animated } from "react-spring";

const AttendersWrapper = styled(Container)`
	background: #f8fffb;
	width: 100%;
	max-width: 100%;
	padding: 20px;
	border-radius: 15px;
	background-repeat: no-repeat !important;
	background-size: cover !important;
`;

const JustPrantaWrapper = styled(Container)`
	background-repeat: no-repeat !important;
	background-size: cover !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	flex-direction: column;
`;

const StyledText = styled.h1`
	font-size: 28px;
	font-weight: 700;
	margin-top: 0px;
	margin-bottom: 2rem;
	text-align: center;
`;

const DateText = styled.p`
	font-weight: 800;
	font-size: 16px;
	margin-bottom: 40px !important;
`;

const AttendersCard = styled.div`
	background: rgb(255 255 255 / 50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	border-radius: 10px;
	font-size: 0.9rem;
	font-weight: 600;
`;

const AttendeesName = styled.span`
	font-size: 1.25rem;
	font-weight: 700;
	margin: 10px 0px;
`;

const AttendersComponent = () => {
	const styles = useSpring({
		from: { opacity: 0 },
		to: [{ opacity: 1 }],
		config: { duration: "500" },
		loop: false,
	});

	return (
		<AttendersWrapper>
			<Grid.Column mobile={16} computer={16} tablet={16}>
				<animated.div style={styles}>
					<JustPrantaWrapper>
						<img src={ImageFlower} width="300px" />
						<p style={{ fontSize: "20px", fontWeight: "600" }}>
							The Wedding of
						</p>
						<StyledText>Praatfika & Ratna</StyledText>
						<DateText>08 Mei 2022</DateText>
						{/* <AttendersCard>
							<i style={{ textAlign: "center" }}>
								Kepada Yth <br /> Bapak/Ibu/Saudara/i
							</i>
							<AttendeesName>Dr. Cahyo Wibowo Odum</AttendeesName>
							<span style={{ fontStyle: "italic" }}>di Jember</span>
						</AttendersCard> */}
					</JustPrantaWrapper>
				</animated.div>
			</Grid.Column>
		</AttendersWrapper>
	);
};

export default AttendersComponent;
