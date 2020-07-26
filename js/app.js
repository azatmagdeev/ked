
import {OrbitControls} from "../i/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 10000 );
camera.position.set(1000,200,-200);

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xFFFFFF );
document.body.appendChild( renderer.domElement );

const light = new THREE.DirectionalLight( 0xfcf9e8, 1 );
scene.add(light);

var ambiColor = "#cbc9bb";
var ambientLight = new THREE.AmbientLight(ambiColor);
scene.add(ambientLight);

var manager = new THREE.LoadingManager();
var loader  = new THREE.ImageLoader( manager );

manager.onProgress = function ( item, loaded, total ) {

};

var textureSole = new THREE.Texture();
var textureLaces = new THREE.Texture();
var textureBody = new THREE.Texture();
var textureHeel = new THREE.Texture();

var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
};

var onError = function ( xhr ) { };

loader.load( 'model/ked/perf.jpg', function ( image ) {
    textureBody.image = image;
    textureBody.needsUpdate = true;
});

loader.load( 'model/ked/sole.jpg', function ( image ) {
    textureSole.image = image;
    textureSole.needsUpdate = true;
});

loader.load( 'model/ked/laces.jpg', function ( image ) {
    textureLaces.image = image;
    textureLaces.needsUpdate = true;
});

loader.load( 'model/ked/heel.jpg', function ( image ) {
    textureHeel.image = image;
    textureHeel.needsUpdate = true;
});

// var meshes = [];
const ked = new THREE.Object3D();

var objLoader = new THREE.OBJLoader();

objLoader.load( 'shoe/sneaker.obj', function ( object ) {

    object.traverse( function ( child )
    {
        if ( child instanceof THREE.Mesh )
        {
            console.log(child);
            child.material =  new THREE.MeshPhongMaterial({side:THREE.DoubleSide, map: textureLaces, specular: 0xfceed2, bumpScale: 0.4, });
            ked.children.push(child);
        }
    });

    scene.add(ked);

}, onProgress, onError );

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set(300, 100, 0);
controls.update();

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
    makeLine(0,0,1000),
    makeLine(0,0,-1000),
    makeLine(0,1000,0),
    makeLine(0,-1000,0),
    makeLine(1000,0,0),
    makeLine(-1000,0,0),
];

var render = function () {
    requestAnimationFrame( render );
    controls.update();
    renderer.render(scene, camera);
};

render();