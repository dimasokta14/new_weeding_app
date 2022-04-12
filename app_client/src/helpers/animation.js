import React from "react";
import { useSpring, animated } from "react-spring";
import { Grid } from "semantic-ui-react";
import { Title } from "../components/Title";

const AnimatedGrid = animated(Grid);
const TitleAnimated = animated(Title);

export const ScaleUpImageDecorAnimation = ({ children, src }) => {
	const animated_scale = useSpring({
		from: { transform: "scale(0)" },
		to: { transform: "scale(1)" },
		config: { duration: "500" },
		loop: false,
	});
	return (
		<animated.img
			src={src}
			style={{ ...animated_scale, margin: "10px 0px" }}
			height="30px"
		/>
	);
};

export const FlipUpTitleAnimation = ({ children, text }) => {
	const animated_flipup = useSpring({
		from: {
			transform: "perspective(2500px) rotateX(-100deg)",
			transitionDelay: 0,
		},
		to: {
			transitionDelay: 0.2,
			transform: "perspective(2500px) rotateX(0)",
			transitionDuration: 0.4,
			transitionTimingFunction: "ease",
			backfaceVisibility: "hidden",
			transitionProperty: "transform",
		},
		config: { duration: "500" },
		loop: false,
	});
	return <TitleAnimated title={text} style={animated_flipup} />;
};

export const LeftRightAnimation = ({ children, style }) => {
	const animated_left_right = useSpring({
		from: { transform: "translateX(-100%)", opacity: 0 },
		to: [{ transform: "translateX(0%)", opacity: 1 }],
		config: { duration: "1000" },
		loop: false,
	});
	return (
		<AnimatedGrid
			columns="equal"
			style={{
				...animated_left_right,
				...style,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				marginBottom: "40px",
				marginTop: "20px",
			}}
		>
			{children}
		</AnimatedGrid>
	);
};

export const RightLeftAnimation = ({ children, style }) => {
	const animated_left_right = useSpring({
		from: { transform: "translateX(100%)", opacity: 0 },
		to: [{ transform: "translateX(0%)", opacity: 1 }],
		config: { duration: "1000" },
		loop: false,
	});
	return (
		<AnimatedGrid
			columns="equal"
			style={{
				...animated_left_right,
				...style,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: "40px",
				marginTop: "20px",
			}}
		>
			{children}
		</AnimatedGrid>
	);
};

export const DownUpAnimation = ({ children }) => {
	const animated_down_up = useSpring({
		from: { transform: "translateY(100%)", opacity: 0 },
		to: [{ transform: "translateY(0%)", opacity: 1 }],
		config: { duration: "300" },
		loop: false,
	});
	return (
		<AnimatedGrid
			style={{
				...animated_down_up,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: "40px",
				marginTop: "40px",
			}}
		>
			{children}
		</AnimatedGrid>
	);
};
