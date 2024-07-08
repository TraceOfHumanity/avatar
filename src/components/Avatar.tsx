import {Html, useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useState} from "react";

export const Avatar = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const avatar = useGLTF("/x-bot.glb");

  const {actions, names} = useAnimations(avatar.animations, avatar.scene);
  console.log(actions, names);
  
  useEffect(() => {
    actions[names[activeIndex]]?.reset().fadeIn(0.9).play();

    return () => {
      actions[names[activeIndex]]?.fadeOut(0.9);
    };
  }, [
    activeIndex,
    actions,
    names,
  ]);

  useEffect(() => {}, []);

  return (
    <group>
      <primitive object={avatar.scene} />
      <Html 
      position={[2, 0, 0]}
      >
        <button
          onClick={() => {
            setActiveIndex((prev) => (prev + 1) % names.length);
          }}
        >click me</button>
      </Html>
    </group>
  );
};
