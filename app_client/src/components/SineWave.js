import React from "react";
import { useCanvasContext } from "../context/CanvasContext";
import useResponsiveSize from "../context/useResponsive";
import WaveEntity from "../actions/WaveEntity";
import useColor from "../context/useColor";

const SineWave = () => {
	const { context } = useCanvasContext();
	const { width, height } = useResponsiveSize();
	const { generateColor } = useColor();
	let frequency = 0.013;
	let colors = generateColor();
	let timer = 1;
	const waves = {
		frontWave: new WaveEntity([0.0211, 0.028, 0.015], "rgba(255,179,0,0.88)"),
		backWave: new WaveEntity([0.0122, 0.018, 0.005], "rgba(255,179,0,0.48)"),
	};

	const render = () => {
		context?.clearRect(0, 0, width, height);
		Object.entries(waves).forEach(([waveName, wave]) => {
			wave.waveColor = colors[waveName];
			wave.draw(context, width, height, frequency);
		});
		if (timer === 500) {
			colors = generateColor();
			timer = 1;
		}
		timer++;
		frequency += 0.013;
		requestAnimationFrame(render);
	};
	if (context) render();
	return null;
};

export default SineWave;
