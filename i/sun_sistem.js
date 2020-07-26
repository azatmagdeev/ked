import * as THREE from "./three.module.js";
import scene from "./scene.js";

const objects = [];

const solarSystem = new THREE.Object3D();
scene.add(solarSystem);
objects.push(solarSystem);

const radius = 1;
const widthSegments = 6;
const heightSegments = 6;
const sphereGeometry = new THREE.SphereBufferGeometry(
    radius, widthSegments, heightSegments);

const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
// sunMesh.scale.set(2, 2, 2);  // сделать солнце большим
solarSystem.add(sunMesh);
objects.push(sunMesh);

const earthOrbit = new THREE.Object3D();
earthOrbit.position.x = 4;
solarSystem.add(earthOrbit);
objects.push(earthOrbit);

const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
// earthMesh.position.x = 4;
earthMesh.scale.set(.5,.5,.5);
earthOrbit.add(earthMesh);

const moonOrbit = new THREE.Object3D();
moonOrbit.position.x = 1;
earthOrbit.add(moonOrbit);

const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
moonMesh.scale.set(.25, .25, .25);
moonOrbit.add(moonMesh);
objects.push(moonMesh);

// scene.add(earthMesh);
objects.push(earthMesh);

// objects.forEach((node) => {
//     const axes = new THREE.AxesHelper();
//     axes.material.depthTest = false;
//     axes.renderOrder = 1;
//     node.add(axes);
// });

export default objects;
