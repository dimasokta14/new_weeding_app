import { render } from "react-dom";
import React, { Component, useState } from "react";
import { Spring, animated, interpolate } from "react-spring";
import { Gesture } from "react-with-gesture";

import imgp1 from "../assets/p1.png";
import imgp2 from "../assets/p2.png";
import imgp3 from "../assets/p3.png";
import imgp4 from "../assets/p4.png";

const pages = [imgp1, imgp2, imgp3, imgp4];

const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

class Deck extends Component {
	gone = {}; // used for tracking of removed cards - not using state as we're updating during render

	calculateX(index, down, xDir, xDelta) {
		if (this.gone[index]) {
			// calculate a position off-screen & use x direction to decide on which side of screen
			return (200 + window.innerWidth) * (xDir < 0 ? -1 : 1);
		} else {
			// track cursor if touched
			return down ? xDelta : 0;
		}
	}

	render() {
		return pages.map(
			(url, index) =>
				!this.gone[index] && (
					<Gesture key={index}>
						{({ down, delta: [xDelta], direction: [xDir], velocity }) => {
							// Attention! Order matters - first check if gone than calculate x position
							if (!down && velocity > 1.5 && !this.gone[index]) {
								this.gone[index] = true;
							}
							const x = this.calculateX(index, down, xDir, xDelta);
							return (
								<Spring
									native
									to={{ x }}
									immediate={down}
									config={{ friction: 50, tension: 500 }}
								>
									{({ x }) => (
										<animated.div
											style={{
												transform: x.interpolate(
													(x) => `translate3d(${x}px,${index * -4}px,0)`
												),
											}}
										>
											<animated.div
												style={{ backgroundImage: `url(${url})` }}
											/>
										</animated.div>
									)}
								</Spring>
							);
						}}
					</Gesture>
				)
		);
	}
}

export default Deck;
