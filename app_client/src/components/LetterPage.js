import React from "react";
import { Container, Grid, Card, Button } from "semantic-ui-react";
import Navbar from "./Navbar";
import styled from "styled-components";
import FlowerPattern from "../assets/floral.png";
import AttendersComponent from "./AttendersComponent";
import { useHistory } from "react-router-dom";

const MainContent = styled(Container)`
	background: #f8fffb;
	padding: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0px !important;
`;
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
export const LetterPage = () => {
	const history = useHistory();
	return (
		<Container
			style={{
				height: "100vh",
				background: "#f8fffb !important",
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
							<div
								style={{
									position: "absolute",
									bottom: "20%",
									left: "25%",
								}}
							>
								<Button color="teal" onClick={() => history.push("/main")}>
									<p>Buka Undangan</p>
								</Button>
							</div>
						</StyledCard>
					</Grid.Column>
				</Grid>
			</MainContent>
			<Navbar is_inverted />
		</Container>
	);
};
