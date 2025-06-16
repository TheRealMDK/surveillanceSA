import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import {
  MAKE_LIGHT_GREEN,
  DIRECTIONAL_LIGHT_INTENSITY,
  AMBIENT_LIGHT_INTENSITY,
  DISTANCE_FROM_CAMERA,
} from "../GlobeOptions";

export default function Lighting({ lightRef }) {
  const { scene, camera } = useThree();
  const targetRef = useRef(new THREE.Object3D());

  useEffect(() => {
    const light = MAKE_LIGHT_GREEN
      ? new THREE.DirectionalLight(0x009a99, DIRECTIONAL_LIGHT_INTENSITY)
      : new THREE.DirectionalLight(0xffffff, DIRECTIONAL_LIGHT_INTENSITY);
    lightRef.current = light;

    const ambient = MAKE_LIGHT_GREEN
      ? new THREE.AmbientLight(0x009a99, AMBIENT_LIGHT_INTENSITY)
      : new THREE.AmbientLight(0xffffff, AMBIENT_LIGHT_INTENSITY);
    scene.add(light);
    scene.add(ambient);

    targetRef.current.position.set(0, 0, 0);
    light.target = targetRef.current;
    scene.add(targetRef.current);

    return () => {
      scene.remove(light);
      scene.remove(ambient);
      scene.remove(targetRef.current);
    };
  }, [scene]);

  useFrame(() => {
    if (!lightRef.current) return;

    const cameraDir = camera.position.clone().normalize();
    const distanceFromCamera = DISTANCE_FROM_CAMERA;

    const newLightPos = camera.position
      .clone()
      .add(cameraDir.multiplyScalar(distanceFromCamera));

    lightRef.current.position.copy(newLightPos);

    lightRef.current.target.updateMatrixWorld();
  });

  return null;
}
