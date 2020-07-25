// источник света
import * as THREE from "./three.module.js";
import scene from "./scene.js";

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

export default light;