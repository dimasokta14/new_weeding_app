import React from "react";
import styled from "styled-components";
import { Grid, Button, Tab, Segment } from "semantic-ui-react";

import MapComponent from "./GoogleMap";

const TabWrapper = styled.div`
	& div {
		display: flex;
		flex-direction: column-reverse;
		width: 100%;
	}
	& div.ui.menu:first-child {
		flex-direction: row !important;
		margin-top: 20px !important;
		border: none !important;
		box-shadow: none !important;
		background: #f8fffb;
		justify-content: center;
	}
	& div.ui.menu:first-child a.item:last-child:before {
		background: none !important;
	}
`;
const Maps = styled(MapComponent)``;

const panes = [
	{
		menuItem: "Parkir Mobil",
		render: () => (
			<Tab.Pane attached={false}>
				<MapComponent
					name="Parkiran Mobil"
					mLat="-7.8023177"
					mLng="110.6471676"
				/>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Parkir Motor",
		render: () => (
			<Tab.Pane attached={false}>
				<MapComponent
					name="Parkiran Motor"
					mLat="-7.8023177"
					mLng="110.6471676"
				/>
			</Tab.Pane>
		),
	},
];

const Map = () => {
	return (
		<Grid columns="equal" style={{ width: "100%" }}>
			<Grid.Column mobile={16} computer={16} tablet={16} textAlign="center">
				<MapComponent
					name="Lokasi Acara"
					mLat="-7.8023177"
					mLng="110.6471676"
				/>
			</Grid.Column>
		</Grid>
	);
};

export default Map;
