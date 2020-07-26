import * as THREE from "./three.module.js";

const fov = 45;
const aspect = 2;  // значение для canvas по умолчанию
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;
camera.position.x = 5;
camera.position.y = 5;
camera.lookAt(0,2,0);

export default camera;