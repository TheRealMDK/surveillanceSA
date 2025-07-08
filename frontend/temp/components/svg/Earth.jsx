import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

export default function Earth() {
  const mountRef = useRef();

  useEffect(() => {
    // Set up scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // transparent black (alpha = 0)
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(ambientLight, directionalLight);

    // Load Textures
    const loader = new THREE.TextureLoader();
    const colorMap = loader.load("/textures/earthmap1k.jpg");
    const bumpMap = loader.load("/textures/bumpmap1k.jpg");
    const specMap = loader.load("/textures/earthspec1k.jpg");
    colorMap.encoding = THREE.sRGBEncoding;

    // Material
    const material = new THREE.MeshPhongMaterial({
      map: colorMap,
      bumpMap: bumpMap,
      bumpScale: 0.05,
      specularMap: specMap,
      specular: new THREE.Color("grey"),
    });

    // Geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64); // 64 segments is plenty for 1K texture
    const earthMesh = new THREE.Mesh(geometry, material);
    scene.add(earthMesh);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;

    // SOUTH AFRICA POSITION (approx. Bloemfontein)
    const lat = THREE.MathUtils.degToRad(-29.1);
    const lon = THREE.MathUtils.degToRad(26.2);
    const radius = 1;

    const adjustedLon = lon - Math.PI / 3.5; // rotate globe 90° to match texture alignment

    const x = radius * Math.cos(lat) * Math.cos(adjustedLon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.sin(adjustedLon);

    let hasZoomed = false;

    function checkAndZoom() {
      if (hasZoomed) return;

      const targetDir = new THREE.Vector3(x, y, z).normalize();
      const cameraDir = new THREE.Vector3();
      camera.getWorldDirection(cameraDir);

      const dot = targetDir.dot(cameraDir);
      if (dot < -0.9) {
        hasZoomed = true;

        gsap.to(camera.position, {
          duration: 2,
          x: x * 1.7,
          y: y * 1.7,
          z: z * 1.7,
          ease: "power2.inOut",
          onUpdate: () => controls.update(),
        });

        gsap.to(controls.target, {
          duration: 2,
          x,
          y,
          z,
          ease: "power2.inOut",
          onUpdate: () => controls.update(),
          onComplete: () => {
            controls.autoRotate = false;
          },
        });
      }
    }

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      checkAndZoom();
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
