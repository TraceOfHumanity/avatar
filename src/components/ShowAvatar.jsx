import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Avatar } from "./Avatar";

export const ShowAvatar = () => {
  return (
    <>
      <OrbitControls />
      <pointLight position={[5, 2, 2]} intensity={10} />
      <ambientLight intensity={4} />
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh> */}
      <Avatar />
    </>
  );
};
