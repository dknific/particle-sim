import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { changeMeshMaterials, MESHES } from './meshes';

// Application Constants:
const MOVEMENT_BUTTON = document.getElementsByClassName('movement-button')[0];
const COLOR_BUTTON = document.getElementsByClassName('color-button')[0];

const MATERIAL_STATES = {
  basic: 'BASIC',
  physical: 'PHYSICAL',
  phong: 'PHONG'
};

const DIRECTIONS = {
  positive: 'POSITIVE',
  negative: 'NEGATIVE'
};

// App State:
let appState = {
  materialState: MATERIAL_STATES.basic,
  spinDirection: DIRECTIONS.positive
};

// Instantiate & Configure Scene Utils:
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
const camera = new THREE.PerspectiveCamera(
  37,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 2.5;

const secondRowSpheres = new THREE.Group();
secondRowSpheres.add(
  MESHES.sphere2,
  MESHES.sphere3,
  MESHES.sphere4,
  MESHES.sphere5
);

const thirdRowSpheres = new THREE.Group();
thirdRowSpheres.add(
  MESHES.sphere6,
  MESHES.sphere7,
  MESHES.sphere8,
  MESHES.sphere9,
  MESHES.sphere10,
  MESHES.sphere11,
  MESHES.sphere12,
  MESHES.sphere13
);

const fourthRowSpheres = new THREE.Group();
fourthRowSpheres.add(
  MESHES.sphere14,
  MESHES.sphere15,
  MESHES.sphere16,
  MESHES.sphere17,
  MESHES.sphere18,
  MESHES.sphere19,
  MESHES.sphere20,
  MESHES.sphere21,
  MESHES.sphere22,
  MESHES.sphere23,
  MESHES.sphere24,
  MESHES.sphere25
);

const pointLight = new THREE.PointLight('#ffe291', 8, 10, 0, 1);
pointLight.position.set(-1, 0.2, 2.5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

scene.add(
  pointLight,
  MESHES.sphere,
  secondRowSpheres,
  thirdRowSpheres,
  fourthRowSpheres
);

// Create & append event handlers for Window-based user actions:
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function handleDirectionBtnClick() {
  let newAppState;

  if (appState.spinDirection === DIRECTIONS.positive) {
    newAppState = { ...appState, spinDirection: DIRECTIONS.negative };
  } else {
    newAppState = { ...appState, spinDirection: DIRECTIONS.positive };
  }
  appState = newAppState;
}

function handleColorBtnClick() {
  let newAppState;
  changeMeshMaterials(appState.materialState);
  
  if (appState.materialState === MATERIAL_STATES.basic) {
    newAppState = { ...appState, materialState: MATERIAL_STATES.physical };
  } else if (appState.materialState === MATERIAL_STATES.phong) {
    newAppState = { ...appState, materialState: MATERIAL_STATES.basic };
  } else if (appState.materialState === MATERIAL_STATES.physical) {
    newAppState = { ...appState, materialState: MATERIAL_STATES.phong };
  }
  appState = newAppState;
}

MOVEMENT_BUTTON.addEventListener('click', handleDirectionBtnClick, false);
COLOR_BUTTON.addEventListener('click', handleColorBtnClick, false);
window.addEventListener('resize', handleWindowResize, false);

// Append Three.js App to the DOM & call Animation function:
document.body.appendChild(renderer.domElement);

function animate() {
  controls.update();

  MESHES.sphere.rotation.y += 0.025;
  MESHES.sphere2.rotation.y += 0.025;
  MESHES.sphere3.rotation.y += 0.025;
  MESHES.sphere4.rotation.y += 0.025;
  MESHES.sphere5.rotation.y += 0.025;
  MESHES.sphere6.rotation.y += 0.025;
  MESHES.sphere7.rotation.y += 0.025;
  MESHES.sphere8.rotation.y += 0.025;
  MESHES.sphere9.rotation.y += 0.025;
  MESHES.sphere10.rotation.y += 0.025;
  MESHES.sphere11.rotation.y += 0.025;

  if (appState.spinDirection === DIRECTIONS.positive) {
    secondRowSpheres.rotation.y -= 0.015;
    thirdRowSpheres.rotation.y += 0.015;
    fourthRowSpheres.rotation.y -= 0.015;
  } else {
    secondRowSpheres.rotation.y += 0.015;
    thirdRowSpheres.rotation.y -= 0.015;
    fourthRowSpheres.rotation.y += 0.015;
  }

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
