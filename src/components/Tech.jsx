import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventSource={document.getElementById("root")}
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: false }}
      >
        <Preload all />
        <View.Port />
      </Canvas>
    </>
  );
};

export default SectionWrapper(Tech, "");
