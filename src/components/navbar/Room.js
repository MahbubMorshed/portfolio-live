import React from "react";
import { Canvas } from "@react-three/fiber";
import Logo from "./Logo";

function Room() {
  return (
    <div style={{ height: "30px" }}>
      <Canvas
        shadows
        camera={{ fov: 10, near: 0.1, far: 10, position: [0, 1, 6] }}
      >
        <Logo />
      </Canvas>
    </div>
  );
}

export default Room;
