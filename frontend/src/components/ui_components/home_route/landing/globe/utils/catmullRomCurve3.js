import * as THREE from "three";

/**
 * Returns a smooth interpolated Vector2 on a Catmull-Rom spline curve given
 * an array of Vector2 points and a t between 0 and 1.
 */
export function getCatmullRomPoint(points, t) {
  // Number of segments
  const l = points.length;
  if (l < 2) return points[0] || new THREE.Vector2(0, 0);

  // Scale t to the number of segments
  const scaledT = t * (l - 1);
  const seg = Math.floor(scaledT);
  const localT = scaledT - seg;

  // Get control points p0, p1, p2, p3 for Catmull-Rom
  // Clamp indices to valid range
  const p0 = points[Math.max(seg - 1, 0)];
  const p1 = points[seg];
  const p2 = points[Math.min(seg + 1, l - 1)];
  const p3 = points[Math.min(seg + 2, l - 1)];

  // Catmull-Rom spline formula for interpolation
  const t2 = localT * localT;
  const t3 = t2 * localT;

  // Interpolate X
  const x =
    0.5 *
    (2 * p1.x +
      (p2.x - p0.x) * localT +
      (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
      (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);

  // Interpolate Y
  const y =
    0.5 *
    (2 * p1.y +
      (p2.y - p0.y) * localT +
      (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
      (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);

  return new THREE.Vector2(x, y);
}
