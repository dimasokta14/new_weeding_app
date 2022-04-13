import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useTimer } from "react-timer-hook";
import { Grid } from "semantic-ui-react";
import Decor from "../assets/decor.svg";
import { Title } from "./Title";
import Map from "./Map";
import styled from "styled-components";
import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
} from "../helpers/animation";
import { animated, useSpring } from "react-spring";
import mapboxgl from "!mapbox-gl";
import ReactTooltip from "react-tooltip";

const StyledButtonCalendar = styled.a`
	background-color: #eb7b8b;
	border-color: #eb7b8b;
	color: #fff;
	border-radius: 20px;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	margin: 20px 0px;
`;

const containerStyle = {
	position: "relative !important",
	width: "100% !important",
	height: "50vh !important",
	margin: "20px 0px 100px 0px",
};

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

const CountDownMap = ({ pos_section }) => {
	mapboxgl.accessToken =
		"pk.eyJ1IjoiZGltYXNva3RhMTQiLCJhIjoiY2tqeTMxcXU2MDAxNDJ3bHExcjN5MGNlciJ9.6z10085mzokFoSyIysGnTw";
	const time = new Date(2022, 4, 8, 9);
	time.setSeconds(time.getSeconds() + 600);

	const style_timer_animated = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "1000" },
		loop: false,
	});

	const mapContainer = useRef(null);
	const map = useRef(null);
	const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
	const [lng, setLng] = useState(110.6471676);
	const [lat, setLat] = useState(-7.8023177);
	const [zoom, setZoom] = useState(12);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
		// map.current.addControl(new mapboxgl.FullscreenControl());
		// const tooltipNode = document.createElement("div");
		// ReactDOM.render(
		// 	<>
		// 		<p data-for="happyFace">Lokasi resepsi</p>
		// 		{/* <ReactTooltip id="happyFace" type="info">
		// 			<span>Show happy face</span>
		// 		</ReactTooltip> */}
		// 	</>,
		// 	tooltipNode
		// );
		// tooltipRef.current
		// 	.setLngLat([lng, lat])
		// 	.setDOMContent(tooltipNode)
		// 	.addTo(map);
	});

	return (
		<div
			style={{
				marginBottom: "40px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}
		>
			<ScaleUpImageDecorAnimation src={Decor} />
			<FlipUpTitleAnimation text="Countdown" />
			<animated.div style={style_timer_animated}>
				<WeddingTimer expiryTimestamp={time} />
			</animated.div>
			<animated.div
				style={{
					...style_timer_animated,
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div style={containerStyle}>
					<div
						ref={mapContainer}
						className="map-container"
						style={{
							height: "300px",
						}}
					/>
				</div>
				<StyledButtonCalendar
					href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20220508T020000Z/20220508T050000Z&text=Praatfike+%26+Ratna+Wedding&details=Praatfika+%26+Ratna+Wedding+on+Sunday,+08+May+2022&location=Jl.%20Pendem%20Raya%20RT.%2002%20/%20RW.%2006%20Dusun,%20Jl.%20Pendem%20Raya%20Dusun%20II,%20Jarum,%20Kec.%20Bayat,%20Kabupaten%20Klaten,%20Jawa%20Tengah%2057462"
					target="_blank"
				>
					Tambahkan ke kalender
				</StyledButtonCalendar>
			</animated.div>
		</div>
	);
};

export default CountDownMap;
