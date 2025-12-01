import React from 'react';
import { Canvas } from '@react-three/fiber'
import { ColorPicker, Flex } from 'antd';

export const CanvasContainer: React.FC = React.memo(() => {
  return (
    <Flex>
      <ColorPicker defaultValue="#1677ff" open={true} />
      <Canvas>
        <mesh onClick={() => alert('Hellooo')}>
          <boxGeometry args={[2, 4, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </Flex>

  );
});

export default CanvasContainer;
