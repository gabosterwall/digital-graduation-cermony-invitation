//import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

interface ConfettiExplosionProps {
  numberOfPieces?: number; // number of confetti pieces
}

export default function ConfettiExplosion({
  numberOfPieces, // default to 50 pieces
}: ConfettiExplosionProps) {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      confettiSource={{
        w: 10,
        h: 10,
        x: width / 2,
        y: height,
      }}
      gravity={0.1}
      height={height}
      initialVelocityX={4}
      initialVelocityY={18}
      numberOfPieces={numberOfPieces}
      recycle={false}
      width={width}
    />
  );
}
