import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import OrbitControls from "../components/orbitControls";
import Dragable from "../components/Dragable";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
          <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <Dragable>
            <Box rotateX={3} rotateY={0.2} />
            </Dragable>
          <OrbitControls />
          <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
