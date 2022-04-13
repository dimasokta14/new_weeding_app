import React from "react";
import styled from "styled-components";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

const StyledMap = styled(GoogleMap)`
	position: relative !important;
	width: 100% !important;
	height: 50vh !important;
	margin: 20px 0px;
`;

const containerStyle = {
	position: "relative !important",
	width: "100% !important",
	height: "50vh !important",
	margin: "20px 0px",
};

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "YOUR_API_KEY",
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={{
				lat: -7.8023177,
				lng: 110.6471676,
			}}
			zoom={17}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker
				onClick={this.handleClickMarker}
				name="Lokasi Resepsi"
				style={{ background: "black" }}
			/>
			<Marker
				name={this.props.name}
				onClick={this.handleClickMarker}
				position={{ lat: this.props.mLat, lng: this.props.mLng }}
			/>
			<InfoWindow
				marker={this.state.activeMarker}
				visible={this.state.showingInfoWindow}
				onClose={this.onClose}
			>
				<div>
					<h4>{this.state.selectedPlace.name}</h4>
				</div>
			</InfoWindow>
		</GoogleMap>
	) : (
		<></>
	);
};

// export class GoogleMap extends React.Component {
// 	state = {
// 		showingInfoWindow: true,
// 		activeMarker: {},
// 		selectedPlace: {},
// 	};

// 	handleClickMarker = (props, marker, e) => {
// 		this.setState({
// 			showingInfoWindow: true,
// 			activeMarker: marker,
// 			selectedPlace: props,
// 		});
// 	};

// 	handleClose = (props) => {
// 		if (this.state.showingInfoWindow) {
// 			this.setState({
// 				showingInfoWindow: false,
// 				activeMarker: null,
// 			});
// 		}
// 	};

// 	render() {
// 		return (
// 			<StyledMap
// 				google={this.props.google}
// 				zoom={17}
// 				initialCenter={{
// 					lat: -7.8023177,
// 					lng: 110.6471676,
// 				}}
// 			>
// 				<Marker
// 					onClick={this.handleClickMarker}
// 					name="Lokasi Resepsi"
// 					style={{ background: "black" }}
// 				/>
// 				<Marker
// 					name={this.props.name}
// 					onClick={this.handleClickMarker}
// 					position={{ lat: this.props.mLat, lng: this.props.mLng }}
// 				/>
// 				<InfoWindow
// 					marker={this.state.activeMarker}
// 					visible={this.state.showingInfoWindow}
// 					onClose={this.onClose}
// 				>
// 					<div>
// 						<h4>{this.state.selectedPlace.name}</h4>
// 					</div>
// 				</InfoWindow>
// 			</StyledMap>
// 		);
// 	}
// }

// export default GoogleApiWrapper({
// 	apiKey: "",
// })(GoogleMap);

export default React.memo(Map);
