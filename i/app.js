import * as THREE from './three.module.js';
import scene from './scene.js';
import cubes from './cubes.js';
import light from './light.js';
import camera from './camera.js';
import parent from "./text.js";
import lines from './lines.js'
// import ked from './ked.js'
console.log(light);

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

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

    cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });

    // textMesh.position.y += .01;
    // textMesh.rotation.y += .01;
    parent.rotation.x += .03;


    resizeRendererToDisplaySize(renderer);
    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
render(10);


