import React, { useEffect, useRef } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import { useSpring, Spring, animated } from "react-spring";
import useWindowPosition from "../hooks/useWindowPosition";
import { Title } from "./Title";
import MaskerImg from "../assets/masker.png";
import DistanceImg from "../assets/distance.png";
import SalamImg from "../assets/salam.png";
import WashImg from "../assets/wash.png";

const Wrapper = styled(Container)`
	padding: 80px 20px;
	text-align: center;
`;

const ProtocolTitle = styled.span`
	font-weight: 700;
	border-bottom: solid 1px #000;
	display: inline-block;
	margin-bottom: 10px;
	font-size: 1.2rem;
`;

const InfoCard = ({ image, text }) => {
	return (
		<Grid.Column
			width={8}
			style={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Image src={image} width="80px" />
			<p>{text}</p>
		</Grid.Column>
	);
};

const CovidProtocol = () => {
	const styles = useSpring({
		from: { transform: "translateY(100%)", opacity: 0 },
		to: [{ transform: "translateY(0%)", opacity: 1 }],
		config: { duration: "500" },
		loop: false,
	});

	const is_on_section_first = useWindowPosition();
	return (
		<>
			{is_on_section_first && (
				<animated.div style={styles}>
					<Wrapper>
						<Grid columns="equal">
							<Grid.Column mobile={16} computer={16} tablet={16}>
								<Title title="Informasi" />
								<ProtocolTitle>Protocol Covid-19</ProtocolTitle>
								<p style={{ marginBottom: 10 }}>
									Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi,
									kami harapkan kedatangan para tamu undangan agar menjalankan
									protokol yang berlaku.
								</p>
							</Grid.Column>
							<Grid.Row>
								<InfoCard image={MaskerImg} text="Wajib Menggunakan Masker" />
								<InfoCard
									image={DistanceImg}
									text="Saling Menjaga Jarak di Dalam Acara"
								/>
							</Grid.Row>
							<Grid.Row>
								<InfoCard
									image={SalamImg}
									text="Menggunakan salam namastee sebagai ganti berjabat tangan"
								/>
								<InfoCard
									image={WashImg}
									text="Jaga Kebersihan dengan Mencuci Tangan atau Handsanitizer"
								/>
							</Grid.Row>
						</Grid>
					</Wrapper>
				</animated.div>
			)}
		</>
	);
};

export default CovidProtocol;
