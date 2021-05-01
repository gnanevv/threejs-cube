import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import "./index.css";

const App = () => {
  return (
    <Canvas>
      <OrbitControls></OrbitControls>
      <Stars></Stars>
      <ambientLight intensity={0.8}></ambientLight>
      <spotLight position={[9, 15, 11]} angle={0.3}></spotLight>
      <Sphere visible position={[0, 0, 0]} args={[1, 16, 200]}>
        <MeshDistortMaterial
          color="#EB1E99"
          attach="material"
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0}
        />
      </Sphere>
    </Canvas>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
