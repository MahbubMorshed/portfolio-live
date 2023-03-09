import { Center, Float, PresentationControls, Text3D } from "@react-three/drei";
import React from "react";

function Logo() {
  return (
    <>
      {/* <color args={["#ffffff"]} attach="background" /> */}

      <Center>
        <PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.2, 0.1]}>
          <Float>
            <Text3D
              font="./helvetiker_regular.typeface.json"
              size={0.75}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              Mahbub Morshed
              <meshNormalMaterial />
            </Text3D>
          </Float>
        </PresentationControls>
      </Center>
    </>
  );
}

export default Logo;
