import {Canvas} from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { OrbitControls } from "@react-three/drei";

export const AvatarCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} intensity={2}/>
      <OrbitControls />
      <Avatar />
    </Canvas>
  );
};
