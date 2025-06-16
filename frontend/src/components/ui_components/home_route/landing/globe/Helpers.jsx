import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ENABLE_HELPERS } from "../globe/GlobeOptions";

const SHOW_HELPERS = ENABLE_HELPERS ? import.meta.env.DEV : false;
const SHOW_CAMERA_HELPER = SHOW_HELPERS;
const SHOW_LIGHT_HELPER = SHOW_HELPERS;
const SHOW_GLOBE_AXES = SHOW_HELPERS;
const SHOW_PIN_AXES = SHOW_HELPERS;
const SHOW_TRAVEL_PINS_AXES = SHOW_HELPERS;
export const SHOW_TRAVEL_PINS = SHOW_HELPERS;

export default function Helpers({
  directionalLightRef,
  pinRefs = [],
  travelRefs = [],
}) {
  const { camera, scene } = useThree();
  const camHelperRef = useRef();
  const pinHelperRefs = useRef([]);
  const travelPinHelperRefs = useRef([]);

  // Directional Light Helper
  useEffect(() => {
    if (SHOW_LIGHT_HELPER && directionalLightRef?.current) {
      const helper = new THREE.DirectionalLightHelper(
        directionalLightRef.current,
        1,
        0xffcc00,
      );
      scene.add(helper);
      return () => {
        scene.remove(helper);
        helper.dispose?.();
      };
    }
  }, [directionalLightRef, scene]);

  // Camera Helper
  useEffect(() => {
    if (SHOW_CAMERA_HELPER) {
      const helper = new THREE.CameraHelper(camera);
      scene.add(helper);
      camHelperRef.current = helper;
      return () => scene.remove(helper);
    }
  }, [camera, scene]);

  // Globe Axes Helper
  useEffect(() => {
    if (SHOW_GLOBE_AXES) {
      const axes = new THREE.AxesHelper(3);
      scene.add(axes);
      return () => scene.remove(axes);
    }
  }, [scene]);

  pinHelperRefs;

  // Pin Axes Helper

  useEffect(() => {
    if (!SHOW_PIN_AXES) return;

    pinHelperRefs.current.forEach((h) => scene.remove(h));
    pinHelperRefs.current = [];

    const helpers = pinRefs.map(() => {
      const axes = new THREE.AxesHelper(0.05);
      scene.add(axes);
      return axes;
    });

    pinHelperRefs.current = helpers;

    return () => {
      helpers.forEach((axes) => scene.remove(axes));
      pinHelperRefs.current = [];
    };
  }, [pinRefs, scene]);

  // Travel Pin Helper

  travelPinHelperRefs;

  useEffect(() => {
    if (!SHOW_TRAVEL_PINS_AXES) return;

    travelPinHelperRefs.current.forEach((h) => scene.remove(h));
    travelPinHelperRefs.current = [];

    const helpers = travelRefs.map(() => {
      const axes = new THREE.AxesHelper(0.05);
      scene.add(axes);
      return axes;
    });

    travelPinHelperRefs.current = helpers;

    return () => {
      helpers.forEach((axes) => scene.remove(axes));
      travelPinHelperRefs.current = [];
    };
  }, [travelRefs, scene]);

  useFrame(() => {
    if (camHelperRef.current) camHelperRef.current.update();

    pinRefs.forEach((ref, i) => {
      const mesh = ref?.current;
      const axes = pinHelperRefs.current[i];

      if (mesh && axes) {
        const worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        axes.position.copy(worldPos);
      }
    });

    travelRefs.forEach((ref, i) => {
      const mesh = ref?.current;
      const axes = travelPinHelperRefs.current[i];

      if (mesh && axes) {
        const worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        axes.position.copy(worldPos);
      }
    });
  });

  return null;
}
