import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const LOCATIONS = {
  mosselbaai: { lat: -34.1831, lon: 22.1397 },
  capitals: [
    { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
    { name: "Bloemfontein", lat: -29.0852, lon: 26.1596 },
    { name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
    { name: "Nelspruit", lat: -25.4753, lon: 30.9694 },
    { name: "Polokwane", lat: -23.8962, lon: 29.4486 },
    { name: "Kimberley", lat: -28.7383, lon: 24.7635 },
    { name: "Mahikeng", lat: -25.8562, lon: 25.6419 },
    { name: "Pietermaritzburg", lat: -29.6006, lon: 30.3794 },
    { name: "Bhisho", lat: -32.8473, lon: 27.4422 },
  ],
};

function latLonToVector3(lat, lon, radius = 1.01) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function Arc({ from, to, visible }) {
  const start = latLonToVector3(from.lat, from.lon);
  const end = latLonToVector3(to.lat, to.lon);
  const mid = start
    .clone()
    .add(end)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(1.3);
  const curve = new THREE.CatmullRomCurve3([start, mid, end]);

  const geometry = new THREE.TubeGeometry(curve, 64, 0.003, 8, false);
  const material = new THREE.MeshBasicMaterial({
    color: "#00ff80",
    transparent: true,
    opacity: 0.8,
  });

  if (!visible) return null;
  return <primitive object={new THREE.Mesh(geometry, material)} />;
}

function ArcGroup() {
  const [visibleArcs, setVisibleArcs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleArcs((prev) => Math.min(prev + 1, LOCATIONS.capitals.length));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {LOCATIONS.capitals.map((capital, i) => (
        <Arc
          key={i}
          from={LOCATIONS.mosselbaai}
          to={capital}
          visible={i < visibleArcs}
        />
      ))}
    </>
  );
}

function Earth() {
  const earthRef = useRef();

  const colorMap = useLoader(THREE.TextureLoader, "/textures/day_map.jpg");
  const bumpMap = useLoader(
    THREE.TextureLoader,
    "/textures/8081_earthbump2k.jpg",
  );
  const specularMap = useLoader(
    THREE.TextureLoader,
    "/textures/8081_earthspec2k.jpg",
  );

  // useFrame(() => {
  //   if (earthRef.current) {
  //     earthRef.current.rotation.y += 0.0005;
  //   }
  // });

  return (
    <mesh ref={earthRef} rotation={[0.4, 1.5, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={specularMap}
        specular={new THREE.Color("gray")}
      />
    </mesh>
  );
}

export function GlobeSouthAfrica() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [2.5, 1.5, 2.5], fov: 45 }}>
        <ambientLight intensity={5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        {/* <Stars radius={100} depth={50} count={5000} factor={4} fade /> */}
        <Suspense fallback={null}>
          <Earth />
          {/* <ArcGroup /> */}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}
