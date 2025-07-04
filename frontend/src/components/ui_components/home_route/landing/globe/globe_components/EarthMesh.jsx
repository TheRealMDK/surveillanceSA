import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { latLongToVector3 } from "../utils/geo";
import {
  GLOBE_SIZE,
  SHOW_CLOUDS,
  CLOUD_ROTATION_SPEED,
  CLOUD_MESH_SIZE,
  CLOUD_TRANSPARENCY,
  CLOUD_OPACITY,
  SHOW_GRID,
  GRID_LINE_COLOR,
  GRID_LINE_TRANSPARENCY,
  GRID_LINE_OPACITY,
  TOTAL_GRID_LAT_LINES,
  TOTAL_GRID_LON_LINES,
  GRID_LINE_RADIUS,
  GRID_ROTATION_SPEED,
} from "../GlobeOptions";

export default function EarthMesh({ children, rotationRef }) {
  const meshRef = useRef();
  const cloudRef = useRef();
  const gridRef = useRef();

  useFrame(() => {
    if (meshRef.current && rotationRef.current) {
      meshRef.current.rotation.set(...rotationRef.current);
    }

    if (cloudRef.current) {
      // Slow, subtle cloud movement (adjust speed to taste)
      cloudRef.current.rotation.y += CLOUD_ROTATION_SPEED;
    }

    if (gridRef.current) {
      // Slow, subtle cloud movement (adjust speed to taste)
      gridRef.current.rotation.y += GRID_ROTATION_SPEED;
    }
  });

  const earthtexture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    return loader.load("/textures/earth.jpg");
  }, []);

  const cloudTexture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    return loader.load("/textures/2k_earth_clouds.jpg");
  }, []);

  const gridGroup = useMemo(() => {
    const group = new THREE.Group();
    const latLines = TOTAL_GRID_LAT_LINES;
    const lonLines = TOTAL_GRID_LON_LINES;
    const radius = GRID_LINE_RADIUS;

    const gridLineMaterial = new THREE.LineBasicMaterial({
      color: GRID_LINE_COLOR,
      transparent: GRID_LINE_TRANSPARENCY,
      opacity: GRID_LINE_OPACITY,
    });

    // Latitude lines (horizontal rings, vary lat)
    for (let i = 1; i < latLines; i++) {
      const lat = -90 + (i * 180) / latLines; // from -90 to +90
      const points = [];
      for (let lon = -180; lon <= 180; lon += 5) {
        points.push(latLongToVector3(lat, lon, radius));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      group.add(new THREE.Line(geometry, gridLineMaterial));
    }

    // Longitude lines (vertical curves, vary lon)
    for (let i = 0; i < lonLines; i++) {
      const lon = -180 + (i * 360) / lonLines;
      const points = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLongToVector3(lat, lon, radius));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      group.add(new THREE.Line(geometry, gridLineMaterial));
    }

    return group;
  }, []);

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[GLOBE_SIZE, 64, 64]} />
        <meshStandardMaterial map={earthtexture} />
        {children}
      </mesh>
      {SHOW_CLOUDS && (
        <mesh ref={cloudRef}>
          <sphereGeometry args={[CLOUD_MESH_SIZE, 64, 64]} />
          <meshStandardMaterial
            map={cloudTexture}
            transparent={CLOUD_TRANSPARENCY}
            opacity={CLOUD_OPACITY}
            depthWrite={false} // Prevent z-buffer issues with glow/light
          />
        </mesh>
      )}
      {SHOW_GRID && <primitive object={gridGroup} ref={gridRef} />}
    </>
  );
}
