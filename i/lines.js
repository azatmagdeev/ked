import * as THREE from "./three.module.js";
import scene from "./scene.js";

function makeLine(x,y,z){

    const geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0,0,0));
    geometry.vertices.push(new THREE.Vector3(x,y,z));
    const material = new THREE.LineBasicMaterial({color: 0x0000ff});
    const line = new THREE.Line(geometry,material);
    console.log(line);
    scene.add(line);
    return line;
}


const lines = [
    makeLine(0,0,100),
    makeLine(0,0,-100),
    makeLine(0,10,0),
    makeLine(0,-10,0),
    makeLine(10,0,0),
    makeLine(-10,0,0),
];

export  default lines;