import * as THREE from "three";

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#viewport") as HTMLCanvasElement,
});

renderer.setSize(width, height);

const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xffad00 });

const cube = new THREE.Mesh(geometry, material);

cube.position.z = -5;
cube.position.y = -0.5;
cube.rotation.y = 0.8;
cube.rotation.x = 0.2;

scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 4, 2);

scene.add(light);

renderer.render(scene, mainCamera);
