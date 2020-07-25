import * as THREE from "./three.module.js";
import scene from "./scene.js";

//many cubes
function makeInstance( color, x, width) {
    const geometry = new THREE.BoxGeometry(width, width, width);
    const material = new THREE.MeshPhongMaterial({color});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    cube.position.y = 1;
    return cube;
}

const cubes = [
    makeInstance(0x44aa88, 0, .5),
    makeInstance(0x8844aa, -2,.2),
    makeInstance(0xaa8844, 2,.3),
];

export default cubes;