import {useGLTF} from "@react-three/drei";
import { useEffect } from "react";

export const Avatar = () => {
  const avatar = useGLTF("/x-bot.glb");

  // const {actions, names } = useAnimations(avatar.animations, avatar.scene);

  useEffect(() => {
    
  }, []);
  

  return <group>
    <primitive object={avatar.scene} />
  </group>;
};
