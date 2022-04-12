import React, { useState } from "react";
import { Button, Modal, Grid, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

import BcaLogo from "../assets/bca.jpg";
import MandiriLogo from "../assets/mandiri.jpg";
import DummayQrCode from "../assets/qrcodedummy.svg";

const ModalReducer = (state, action) => {
	switch (action.type) {
		case "OPEN_MODAL":
			return { open: true };
			break;
		case "CLOSE_MODAL":
			return { open: false };
		default:
			throw new Error();
	}
};

const CloseButton = styled.button`
	background: transparent;
	border-radius: 50%;
	max-width: 50px;
	border: none;
	position: absolute;
	bottom: -20px;
	right: 0;
	font-size: 20px;
	font-weight: 700;
`;

const Title = styled.span`
	font-size: 20px;
	font-weight: 600;
`;

const Text = styled.p`
	font-size: 16px;
`;

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
	bottom: 100px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InfoWrapper = styled.div``;

const BankCard = ({ bank_name, rekening, img, issuer }) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyTextToClipboard = async (text) => {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("copy", true, text);
		}
	};

	const handleCopyClick = () => {
		copyTextToClipboard(rekening)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Grid.Row
			columns={2}
			style={{ borderBottom: "1px solid #e0e0e0", padding: "10px 0px" }}
			centered
			verticalAlign="middle"
		>
			<Grid.Column floated="left">
				<Title style={{ fontSize: "16px" }}>{bank_name}</Title>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						height: "100%",
						width: "150px",
						// justifyContent: "center",
						alignItems: "center",
					}}
					onClick={handleCopyClick}
				>
					<input
						type="text"
						value={rekening}
						readOnly
						style={{ border: "none", maxWidth: "100px" }}
					/>
					<Icon
						name="copy outline"
						style={{
							color: "#e3c7ca",
						}}
					/>
					{isCopied && <span>copied!</span>}
				</div>
				<p>a/n {issuer}</p>
			</Grid.Column>
			<Grid.Column floated="right">
				<Image src={img} width="100px" style={{ float: "right" }} />
			</Grid.Column>
		</Grid.Row>
	);
};

export const GiftModal = () => {
	const [state, dispatch] = React.useReducer(ModalReducer, { open: false });
	const { open } = state;
	return (
		<>
			<FloatingButton onClick={() => dispatch({ type: "OPEN_MODAL" })}>
				<Icon name="gift" size="large" />
			</FloatingButton>

			<Modal
				dimmer="blurring"
				open={open}
				onClose={() => dispatch({ type: "CLOSE_MODAL" })}
			>
				<Modal.Header>
					<Grid>
						<Grid.Row centered verticalAlign="middle">
							<Grid.Column width={12} floated="left">
								Kirim Hadiah
							</Grid.Column>
							<Grid.Column width={4} floated="right">
								<CloseButton onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
									x
								</CloseButton>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Modal.Header>
				<Modal.Content>
					<Grid>
						<Grid.Column mobile={16} tablet={16} computer={16}>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									textAlign: "center",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Icon name="gift" size="huge" />
								<Title>Kirim Hadiah</Title>
								<Text>Untuk Praatfika & Ratna</Text>
							</div>
						</Grid.Column>
						<Grid>
							<BankCard
								bank_name="BCA"
								img={BcaLogo}
								rekening="123123123"
								issuer="Praatfika"
							/>
							<BankCard
								bank_name="Mandiri"
								img={MandiriLogo}
								rekening="123123123"
								issuer="Ratna"
							/>
						</Grid>
						<Grid.Column mobile={16} tablet={16} computer={16}>
							<InfoWrapper>
								<Image src={DummayQrCode} />
							</InfoWrapper>
						</Grid.Column>
					</Grid>
				</Modal.Content>
			</Modal>
		</>
	);
};
