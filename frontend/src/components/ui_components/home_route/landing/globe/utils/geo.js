import * as THREE from "three";

export function latLongToVector3(lat, lon, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Converts lat/lon to rotation angles (radians) for globe orientation
export function latLonToRotation(lat, lon) {
  // Convert to radians
  const phi = THREE.MathUtils.degToRad(90 + lat); // longitudes affect Y-axis rotation
  const theta = THREE.MathUtils.degToRad(lon + 90); // optional if you want vertical alignment

  // Globe default orientation has 0 lon at center, so we rotate opposite
  const rotationX = phi - Math.PI / 2;
  const rotationY = -theta;

  return { rotationX, rotationY };
}
