// источник света
import * as THREE from "./three.module.js";
import scene from "./scene.js";

const lights = [];
const color = 0xFFFFFF;
const intensity = 5;
 lights[1] = new THREE.DirectionalLight(color, intensity-4);
lights[0] = new THREE.PointLight(color, intensity);
lights[1].position.set(-1, 2, 4);
scene.add(lights[0],lights[1]);

export default lights;
//
// {
//     const color = 0xFFFFFF;
//     const intensity = 3;
//     const light = new THREE.PointLight(color, intensity);
//     scene.add(light);
// }