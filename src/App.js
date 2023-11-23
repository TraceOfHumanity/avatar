import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { ShowAvatar } from './components/ShowAvatar';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas shadows>
        <ShowAvatar />
      </Canvas>
    </Suspense>
  );
}

export default App;
