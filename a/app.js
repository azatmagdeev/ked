import * as THREE from '../i/three.module.js';
import {OrbitControls} from "../i/OrbitControls.js";
import {OBJLoader2} from "./OBJLoader2.js";
import {MTLLoader} from './MTLLoader.js';
import {MtlObjBridge} from './MtlObjBridge.js';

const canvas = document.getElementById('c');
const scene = new THREE.Scene();
scene.background = new THREE.Color('grey');
const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setClearColor(0x888888);
const fov = 45;
const aspect = 2;  // значение для canvas по умолчанию
const near = 0.1;
const far = 10000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 1000);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.update();

const light = new THREE.DirectionalLight(0xffffff, 5);
scene.add(light);


{
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./shoe-model/модель обуви.mtl', (mtlParseResult) => {
        const objLoader = new OBJLoader2();
        const materials =  MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
        objLoader.addMaterials(materials);
        objLoader.load('./shoe-model/модель обуви.obj', (root) => {
            scene.add(root);
        });
    });
}

function render() {

    // if (resizeRendererToDisplaySize(renderer)) {
    //     const canvas = renderer.domElement;
    //     camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //     camera.updateProjectionMatrix();
    // }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

requestAnimationFrame(render);




