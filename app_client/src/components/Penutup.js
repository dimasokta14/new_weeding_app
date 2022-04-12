import React from "react";
import styled from "styled-components";
import { Button, Grid } from "semantic-ui-react";
import { animated, useSpring } from "react-spring";
import Decor from "../assets/decor.svg";

import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
} from "../helpers/animation";

const Ayat = styled.span`
	font-family: "Spectral", serif;
	line-height: 2;
	font-weight: 500;
	color: #e3c7ca;
	font-size: 14px;
`;
const EmptySpace = styled.div``;
const AnimatedGrid = animated(Grid);

const Penutup = () => {
	const animated_penutup = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "500" },
		loop: false,
	});
	return (
		<>
			{" "}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginBottom: "10px",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ScaleUpImageDecorAnimation src={Decor} />
				<FlipUpTitleAnimation text="Penutup" />
			</div>
			<AnimatedGrid columns="equal" style={animated_penutup}>
				<Grid.Column mobile={16} computer={16} tablet={16}>
					<p className="paragraph">
						Merupakan suatu Kehormatan dan Kebahagiaan kami, Apabila
						Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
						kedua mempelai.
					</p>
					<p
						className="paragraph"
						style={{ fontStyle: "italic", fontSize: "12px" }}
					>
						Wassalamualaikum Warahmatullahi Wabarakaatuh
					</p>
					<p>
						Kel. Bapak Jawardi <br />
						Kel. Bapak Sutikno <br />
						Pra’atfika & Ratna Yulianti
					</p>
					<EmptySpace />
					<p className="paragraph">
						”Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
						untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
						dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
						kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
						terdapat tanda-tanda bagi kaum yang berfikir.”
						<br />
						<Ayat>QS Ar-Rum 21</Ayat>
					</p>
				</Grid.Column>
			</AnimatedGrid>
		</>
	);
};

export default Penutup;
