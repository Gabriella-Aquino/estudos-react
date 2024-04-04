import React, { useState } from 'react';
import { LampContainer } from './style';
import ImgOn from '../../img/lampada-acesa.png';
import ImgOff from '../../img/lampada-apagada.png';

interface lampadaProps {
  toggleBackground: () => void;
}

function Lampada({ toggleBackground }: lampadaProps) {
  const [isOn, setIsOn] = useState<boolean>(false);
  const toggle = () => {
    setIsOn(!isOn);
    toggleBackground()
  };
  return (
    <LampContainer>
      <img src={isOn ? ImgOn : ImgOff} onClick={toggle}></img>
    </LampContainer>
  );
}

export default Lampada;
