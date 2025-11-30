


import React from 'react';
import './CanvasContainer.css';
import { Canvas } from '@react-three/fiber'
import { ColorPicker, Flex } from 'antd';

export const CanvasContainer: React.FC = React.memo(() => {
  return (
    <Flex>
      <ColorPicker defaultValue="#1677ff" open={true} />
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </Flex>

  );
});

export default CanvasContainer;
