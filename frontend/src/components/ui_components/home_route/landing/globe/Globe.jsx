import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import EarthMesh from "./globe_components/EarthMesh";
import Lighting from "./globe_components/Lighting";
import Pin from "./globe_components/Pin";
import Helpers from "../globe/Helpers";
import { latLonToRotation } from "../globe/utils/geo";
import { SHOW_TRAVEL_PINS } from "../globe/Helpers";
import { getCatmullRomPoint } from "../globe/utils/catmullRomCurve3";
import {
  GLOBE_ORBIT_CONTROL_MIN_DIST,
  GLOBE_ORBIT_CONTROL_MAX_DIST,
  GLOBE_INITIAL_ANIMATION_SPEED,
  GLOBE_INITIAL_ANIMATION_DURATION,
  DEFAULT_TRAVEL_PATH,
  TRAVEL_PATH,
  PINS,
} from "../globe/GlobeOptions";

export default function Globe() {
  const lightRef = useRef();
  const travelPath = TRAVEL_PATH;
  const pins = PINS;
  const rotationRef = useRef([0, 0, 0]);
  const pinRefs = useRef(pins.map(() => React.createRef()));
  const travelRefs = useRef(travelPath.map(() => React.createRef()));

  useEffect(() => {
    const path = travelPath.length >= 2 ? travelPath : DEFAULT_TRAVEL_PATH;

    // Convert lat/lon to rotation points (Vector2)
    const rotations = path.map(({ lat, lon }) => {
      const { rotationX, rotationY } = latLonToRotation(lat, lon);
      return new THREE.Vector2(rotationX, rotationY);
    });

    const state = { progress: 0 };

    gsap.to(state, {
      progress: GLOBE_INITIAL_ANIMATION_SPEED,
      duration: GLOBE_INITIAL_ANIMATION_DURATION,
      ease: "power2.inOut",
      onUpdate: () => {
        const point = getCatmullRomPoint(rotations, state.progress);
        rotationRef.current = [point.x, point.y, 0];
      },
    });
  }, [travelPath]);

  return (
    <div className="w-full h-full bg-transparent">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Lighting lightRef={lightRef} />

        <EarthMesh rotationRef={rotationRef}>
          {pins.map(({ lat, lon }, i) => (
            <Pin
              key={`pin-${i}`}
              ref={pinRefs.current[i]}
              lat={lat}
              lon={lon}
            />
          ))}

          {SHOW_TRAVEL_PINS &&
            travelPath.map(({ lat, lon }, i) => (
              <Pin
                key={`travel-${i}`}
                ref={travelRefs.current[i]}
                lat={lat}
                lon={lon}
              />
            ))}
        </EarthMesh>

        <OrbitControls
          enablePan={false}
          minDistance={GLOBE_ORBIT_CONTROL_MIN_DIST}
          maxDistance={GLOBE_ORBIT_CONTROL_MAX_DIST}
        />

        <Helpers
          directionalLightRef={lightRef}
          pinRefs={pinRefs.current}
          travelRefs={travelRefs.current}
        />
      </Canvas>
    </div>
  );
}
