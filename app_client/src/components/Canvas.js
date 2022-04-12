import { useRef, FC, useEffect, useState } from "react";

import { CanvasContext } from "../context/CanvasContext";
import useResponsiveSize from "../context/useResponsive";
import Wave from "./SineWave";

const Canvas = () => {
	const canvasRef = useRef < HTMLCanvasElement > null;
	const { width, height } = useResponsiveSize();

	const [context, setContext] = useState();

	useEffect(() => {
		const ctx = canvasRef?.current?.getContext("2d");
		if (ctx) setContext(ctx);
	}, []);

	return (
		<>
			<CanvasContext.Provider value={{ context: context }}>
				<canvas
					id="canvas"
					ref={canvasRef}
					width={width}
					height={height}
				></canvas>
				<Wave />
			</CanvasContext.Provider>
		</>
	);
};

export default Canvas;
