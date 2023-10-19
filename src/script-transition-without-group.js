import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Object

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#f00" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 2;
mesh.position.set(0.7, -0.6, 1);

// console.log("mesh.position.length()", mesh.position.length());
// mesh.position.normalize(); // => mesh.position.length() 变为整数

// scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(3, 0, 0));
camera.lookAt(mesh.position);

console.log(
  "mesh.position.distanceTo(camera.position)",
  mesh.position.distanceTo(camera.position)
);
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
