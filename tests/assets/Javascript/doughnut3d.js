var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("myCanvas") });

renderer.setSize( window.innerWidth, window.innerHeight );

var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
var material = new THREE.MeshBasicMaterial( { color: 0x3d3d3d } );
var doughnut = new THREE.Mesh( geometry, material );

scene.add( doughnut );
camera.position.z = 30;
renderer.render( scene, camera );

function animate() {
    requestAnimationFrame( animate );
    doughnut.rotation.x += 0.01;
    doughnut.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
