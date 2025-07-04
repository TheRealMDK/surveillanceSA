import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import {
  AMBIENT_LIGHT_COLOR,
  DIRECTIONAL_LIGHT_COLOR,
  CHANGE_AMBIENT_LIGHT_COLOR,
  CHANGE_DIRECTIONAL_LIGHT_COLOR,
  DIRECTIONAL_LIGHT_INTENSITY,
  AMBIENT_LIGHT_INTENSITY,
  DISTANCE_FROM_CAMERA,
} from "../GlobeOptions";

export default function Lighting({ lightRef }) {
  const { scene, camera } = useThree();
  const targetRef = useRef(new THREE.Object3D());

  useEffect(() => {
    const light = CHANGE_DIRECTIONAL_LIGHT_COLOR
      ? new THREE.DirectionalLight(
          DIRECTIONAL_LIGHT_COLOR,
          DIRECTIONAL_LIGHT_INTENSITY,
        )
      : new THREE.DirectionalLight(0xffffff, DIRECTIONAL_LIGHT_INTENSITY);
    lightRef.current = light;

    const ambient = CHANGE_AMBIENT_LIGHT_COLOR
      ? new THREE.AmbientLight(AMBIENT_LIGHT_COLOR, AMBIENT_LIGHT_INTENSITY)
      : new THREE.AmbientLight(0xffffff, AMBIENT_LIGHT_INTENSITY);
    scene.add(light);
    scene.add(ambient);

    const target = targetRef.current;
    target.position.set(0, 0, 0);
    light.target = target;
    scene.add(target);

    return () => {
      scene.remove(light);
      scene.remove(ambient);
      scene.remove(target);
    };
  }, [scene, lightRef]);

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
