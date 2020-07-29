import {OrbitControls} from "../i/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(1000, 200, -200);

const renderer = new THREE.WebGLRenderer({antialias: true,logarithmicDepthBuffer: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x888888);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
scene.add(light);

var ambiColor = "#cbc9bb";
var ambientLight = new THREE.AmbientLight(ambiColor);
scene.add(ambientLight);

var manager = new THREE.LoadingManager();
var loader = new THREE.ImageLoader(manager);

manager.onProgress = function (item, loaded, total) {

};

var textureSole = new THREE.Texture();
var textureLaces = new THREE.Texture();
var textureBody = new THREE.Texture();
var textureHeel = new THREE.Texture();

var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
};

var onError = function (xhr) {
};

loader.load('model/ked/basic_color.jpg', function (image) {
    textureBody.image = image;
    textureBody.needsUpdate = true;
});

loader.load('model/ked/sole.jpg', function (image) {
    textureSole.image = image;
    textureSole.needsUpdate = true;
});

loader.load('model/ked/laces.jpg', function (image) {
    textureLaces.image = image;
    textureLaces.needsUpdate = true;
});

loader.load('model/ked/heel.jpg', function (image) {
    textureHeel.image = image;
    textureHeel.needsUpdate = true;
});

// var meshes = [];
const ked = new THREE.Object3D();

var objLoader = new THREE.OBJLoader();

objLoader.load('shoe/sneaker.obj', function (object) {

    object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            console.log(child);
            child.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide,});
            if (child.name === 'slipsole001' || child.name === 'sole_stitch001' || child.name === 'sole_003') {
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureSole,
                    // specular: 0xfceed2,
                    bumpScale: 0.4,
                });
            }
            if (

                child.name === 'leather_black_004'/*outsidetongue*/

                || child.name === 'leather_black001'/*body*/


                || child.name === 'Object005'/*fromlaces*/

            ) {
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureBody,
                    // specular: 0xfceed2,
                    // bumpScale: 0,
                });
            }
            if(
                child.name === 'leather_black_005'/*insidetongue*/
                ||child.name === 'Object001'/*heel*/
                || child.name === 'Object006'/*heeltop*/
                || child.name === 'Object004'/*backinsidebody*/
                || child.name === 'Object003'/*frontinsidebody*/
            ){
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureHeel,
                    // specular: 0xfceed2,
                    // bumpScale: 0.4,
                });
            }
            ked.children.push(child);
        }
    });
    console.log(ked.children[11].name)

    ked.children[11].material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        map: textureLaces,
        // specular: 0xfceed2,
        // bumpScale: 0.4,
    });

    scene.add(ked);

}, onProgress, onError);
objLoader.load('i/Красовок.obj', function (object) {

    object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            console.log(child);
            child.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide,});
            if (child.name === 'slipsole001' || child.name === 'sole_stitch001' || child.name === 'sole_003') {
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureSole,
                    // specular: 0xfceed2,
                    bumpScale: 0.4,
                });
            }
            if (

                child.name === 'leather_black_004'/*outsidetongue*/

                || child.name === 'leather_black001'/*body*/


                || child.name === 'Object005'/*fromlaces*/

            ) {
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureBody,
                    // specular: 0xfceed2,
                    // bumpScale: 0,
                });
            }
            if(
                child.name === 'leather_black_005'/*insidetongue*/
                ||child.name === 'Object001'/*heel*/
                || child.name === 'Object006'/*heeltop*/
                || child.name === 'Object004'/*backinsidebody*/
                || child.name === 'Object003'/*frontinsidebody*/
            ){
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureHeel,
                    // specular: 0xfceed2,
                    // bumpScale: 0.4,
                });
            }
            ked.children.push(child);
        }
    });
    console.log(ked.children[11].name)

    ked.children[11].material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        map: textureLaces,
        // specular: 0xfceed2,
        // bumpScale: 0.4,
    });

    scene.add(ked);

}, onProgress, onError);
objLoader.load('i/1.obj', function (object) {

    object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            console.log(child);
            child.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide,});
            if (child.name === 'slipsole001' || child.name === 'sole_stitch001' || child.name === 'sole_003') {
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureSole,
                    // specular: 0xfceed2,
                    bumpScale: 0.4,
                });
            }
            if (

                child.name === 'leather_black_004'/*outsidetongue*/

                || child.name === 'leather_black001'/*body*/


                || child.name === 'Object005'/*fromlaces*/

            ) {
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureBody,
                    // specular: 0xfceed2,
                    // bumpScale: 0,
                });
            }
            if(
                child.name === 'leather_black_005'/*insidetongue*/
                ||child.name === 'Object001'/*heel*/
                || child.name === 'Object006'/*heeltop*/
                || child.name === 'Object004'/*backinsidebody*/
                || child.name === 'Object003'/*frontinsidebody*/
            ){
                child.material = new THREE.MeshLambertMaterial({
                    side: THREE.DoubleSide,
                    map: textureHeel,
                    // specular: 0xfceed2,
                    // bumpScale: 0.4,
                });
            }
            ked.children.push(child);
        }
    });
    console.log(ked.children[11].name)

    ked.children[11].material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        map: textureLaces,
        // specular: 0xfceed2,
        // bumpScale: 0.4,
    });

    scene.add(ked);

}, onProgress, onError);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(300, 100, 0);
controls.update();

// function makeLine(x, y, z) {
//
//     const geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(0, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(x, y, z));
//     const material = new THREE.LineBasicMaterial({color: 0x0000ff});
//     const line = new THREE.Line(geometry, material);
//     console.log(line);
//     scene.add(line);
//     return line;
// }
//
//
// const lines = [
//     makeLine(0, 0, 1000),
//     makeLine(0, 0, -1000),
//     makeLine(0, 1000, 0),
//     makeLine(0, -1000, 0),
//     makeLine(1000, 0, 0),
//     makeLine(-1000, 0, 0),
// ];

var render = function () {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
};

render();

let i = 0;
document.addEventListener('dblclick',()=>{
    console.log(ked.children[i++].material);
    ked.children[i++].material.emissive = 'purple'
})