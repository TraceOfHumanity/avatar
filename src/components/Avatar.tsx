import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

export const Avatar = () => {
  const avatar = useGLTF("/x-bot.glb");

  const {actions, names} = useAnimations(avatar.animations, avatar.scene);
  console.log(actions, names)
  useEffect(() => {
    if (actions["rotateLeftHend"]) {
      actions["rotateLeftHend"].play();
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <group>
      <primitive object={avatar.scene} />
    </group>
  );
};
