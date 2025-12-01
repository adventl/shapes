import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { ColorPicker, Flex } from 'antd';
import { OrbitControls } from '@react-three/drei';
import type { ColorPickerProps, GetProp } from 'antd';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;

export const CanvasContainer: React.FC = React.memo(() => {
  const [color, setColor] = useState<Color>('#ffffff');

  const hexString = React.useMemo<string>(
    () => (typeof color === 'string' ? color : color?.toHexString()),
    [color],
  );

  return (
    <Flex justify='center' vertical className='h-full w-full bg-red-200'>
      <ColorPicker defaultValue={color} open={true} onChange={setColor} />
      <Canvas>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={hexString} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[1, 1000, 1000]} />
          <meshNormalMaterial />
        </mesh>
        <ambientLight intensity={1} />
        <spotLight position={[0, 0, 0]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} color={color.toString()} />
      </Canvas>
    </Flex>

  );
});

export default CanvasContainer;
