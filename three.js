var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75,	window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.z = 3;
var renderer = new THREE.WebGLRenderer({antialias: true});


renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize' , () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
})


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( {color: 0xFFCC00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

cone.position.x = -1;
cone.position.y = -1;

var light = new THREE.PointLight(0xFFFFFF);
const helper = new THREE.PointLightHelper( light, 5 );
scene.add( helper );


var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}


var render = function() {
	requestAnimationFrame(render);
	light.position.set(cursorX ,1 , cursorY);
	scene.add( light);

	renderer.render(scene, camera);
}

render();