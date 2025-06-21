import React, { forwardRef } from "react";
import { latLongToVector3 } from "../utils/geo";
import { PIN_RADIUS, SHOW_PINS } from "../GlobeOptions";

const Pin = forwardRef(({ lat, lon, radius = PIN_RADIUS }, ref) => {
  const position = latLongToVector3(lat, lon, radius);

  return (
    <>
      {SHOW_PINS && (
        <mesh ref={ref} position={position}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      )}
    </>
  );
});

export default Pin;
