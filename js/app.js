// import * as THREE from "./three.min.js";
// const three = new THREE();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 10000 );

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xFFFFFF );
document.body.appendChild( renderer.domElement );

camera.position.z = 1500;

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

var meshes = [];

var objLoader = new THREE.OBJLoader();

objLoader.load( 'model/ked/Красовок.obj', function ( object ) {



    object.traverse( function ( child )
    {
        if ( child instanceof THREE.Mesh )
        {
            meshes.push(child);
        }
    });
    // var sole = meshes[0,1,2];
    // var laces = meshes[11];
    // var body = meshes[3,4,6,7,8,9,10];
    // var heel = meshes[5];

    // head.position.y = -80;
    // body.position.y = -80;
    //
    // head.rotation.y = Math.PI/3;
    // body.rotation.y = Math.PI/3;

    meshes.map(mesh=>{
        console.log(mesh);
        mesh.material = new THREE.MeshPhongMaterial({map: textureBody, specular: 0xfceed2, bumpScale: 0.4, shininess: 25});
        scene.add(mesh);
    })
    meshes[0].material = new THREE.MeshPhongMaterial({map: textureLaces, specular: 0xfceed2, bumpScale: 0.4, shininess: 25});

    // var mapHeightBody = new THREE.TextureLoader().load( "model/BODY bump MAP.jpg" );
    // var mapHeightHead = new THREE.TextureLoader().load( "model/HEAD bump MAP.jpg" );
    //
    // sole.material = new THREE.MeshPhongMaterial({map: textureSole, specular: 0xfceed2, bumpScale: 0.4, shininess: 25});
    // body.material = new THREE.MeshPhongMaterial({map: textureBody, specular: 0xfceed2, bumpScale: 0.4, shininess: 25});
    // laces.material = new THREE.MeshPhongMaterial({map: textureLaces, specular: 0xfceed2, bumpScale: 0.4, shininess: 25});
    // heel.material = new THREE.MeshPhongMaterial({map: textureHeel, specular: 0xfceed2, bumpScale: 0.4, shininess: 25});

    // console.log('head', head);
    //
    // scene.add(sole);
    // scene.add(body);
    // scene.add(laces);
    // scene.add(heel);


}, onProgress, onError );

const controls = new THREE.TrackballControls( camera );

controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;

var render = function () {
    requestAnimationFrame( render );
    controls.update();
    renderer.render(scene, camera);
};

render();