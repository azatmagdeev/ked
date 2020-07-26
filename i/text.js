import * as THREE from "./three.module.js";
import scene from "./scene.js";

const parent = new THREE.Object3D();

const loader = new THREE.FontLoader();

loader.load('./font.json', (font) => {
    const geometry = new THREE.TextBufferGeometry('three.js', {
        font: font,
        size: .5,
        height: .2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: .05,
        bevelSegments: 2,
    });

    geometry.computeBoundingBox();
    geometry.boundingBox.getCenter(parent.position).multiplyScalar(-1);

    const textMesh = new THREE.Mesh(geometry,new THREE.MeshPhongMaterial({color:0xff0000,}));
    parent.add(textMesh);
    parent.position.y = -2
    scene.add(parent);
});

export default parent;

