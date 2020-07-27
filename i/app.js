import * as THREE from './three.module.js';
import scene from './scene.js';
// import cubes from './cubes.js';
import lights from './light.js';
import camera from './camera.js';
// import parent from "./text.js";
import lines from './lines.js';
// import objects from './sun_sistem.js';
import {OrbitControls} from './OrbitControls.js';
import {OBJLoader} from "./OBJLoader.js";

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 2, 0);
controls.update();

console.log(lights);

const ked = new THREE.Object3D();

var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
};

var onError = function ( xhr ) { };

const objLoader = new OBJLoader();
objLoader.load('1.obj',function(o){
    o.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            console.log(child);
            child.material =  new THREE.MeshBasicMaterial();
            ked.add(child);
        }
    });
    scene.add(ked);
}, onProgress, onError);


function resizeRendererToDisplaySize(renderer) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    }
    return needResize;
}

// анимация
function render(time) {
    time *= 0.001;  // конвертировать время в секунды

    // cubes.forEach((cube, ndx) => {
    //     const speed = 1 + ndx * .1;
    //     const rot = time * speed;
    //     cube.rotation.x = rot;
    //     cube.rotation.y = rot;
    // });

    // textMesh.position.y += .01;
    // textMesh.rotation.y += .01;
    // parent.rotation.x += .03;

    // objects.map(o=>{
    //     o.rotation.y += -.01;
    // })



    resizeRendererToDisplaySize(renderer);
    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
render(10);


