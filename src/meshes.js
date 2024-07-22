import * as THREE from 'three';

// Geometry:
const sphereGeometry = new THREE.SphereGeometry(0.05, 6, 5);

// Materials:
const darkRedMaterial = new THREE.MeshBasicMaterial({ color: '#e80036' });
const midRedMaterial = new THREE.MeshBasicMaterial({ color: '#fa2d5c' });
const pinkMaterial = new THREE.MeshBasicMaterial({ color: '#fc6d8e' });
const hotPinkMaterial = new THREE.MeshBasicMaterial({ color: '#fc6ddb' });
const darkRedPhysicalMaterial = new THREE.MeshPhysicalMaterial({ color: '#e80036' });
const midRedPhysicalMaterial = new THREE.MeshPhysicalMaterial({ color: '#72d647' });
const pinkPhysicalMaterial = new THREE.MeshPhysicalMaterial({ color: '#5d68e3' });
const hotPinkPhysicalMaterial = new THREE.MeshPhysicalMaterial({ color: '#fc6ddb' });
const greenPhongMaterial = new THREE.MeshPhongMaterial({
  color: '#2cf604',
  emissive: '#814f82',
  specular: '#121212',
  shininess: 100
});

// Meshes:
const sphere = new THREE.Mesh(sphereGeometry, darkRedMaterial);
sphere.position.set(0, -0.25, 0); // Bottom sphere

const sphere2 = new THREE.Mesh(sphereGeometry, midRedMaterial);
const sphere3 = new THREE.Mesh(sphereGeometry, midRedMaterial);
const sphere4 = new THREE.Mesh(sphereGeometry, midRedMaterial);
const sphere5 = new THREE.Mesh(sphereGeometry, midRedMaterial);
sphere2.position.set(-0.12, -0.09, 0);
sphere3.position.set(0.12, -0.09, 0);
sphere4.position.set(0, -0.09, 0.12);
sphere5.position.set(0, -0.09, -0.12);

const sphere6 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere7 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere8 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere9 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere10 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere11 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere12 = new THREE.Mesh(sphereGeometry, pinkMaterial);
const sphere13 = new THREE.Mesh(sphereGeometry, pinkMaterial);
sphere9.position.set(0, 0.07, -0.2); // 12 o'clock
sphere11.position.set(0.14, 0.07, -0.14); // between 12 and 3
sphere7.position.set(0.2, 0.07, 0); // 3 o'clock
sphere12.position.set(0.14, 0.07, 0.14); // between 3 and 6
sphere8.position.set(0, 0.07, 0.2); // 6 o'clock
sphere6.position.set(-0.14, 0.07, 0.14); // between 6 and 9
sphere10.position.set(-0.2, 0.07, 0); // 9 o'clock
sphere13.position.set(-0.14, 0.07, -0.1); // between 12 and 3

const sphere14 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere15 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere16 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere17 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere18 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere19 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere20 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere21 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere22 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere23 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere24 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
const sphere25 = new THREE.Mesh(sphereGeometry, hotPinkMaterial);
sphere14.position.set(0, 0.23, -0.25); // 12 o'clock
sphere15.position.set(0.14, 0.23, -0.22); // 1 o'clock
sphere16.position.set(0.22, 0.23, -0.12); // 2 o'clock
sphere17.position.set(0.25, 0.23, 0); // 3 o'clock
sphere18.position.set(0.22, 0.23, 0.12); // 4 o'clock
sphere19.position.set(0.14, 0.23, 0.22); // 5 o'clock
sphere20.position.set(0, 0.23, 0.25); // 6 o'clock
sphere21.position.set(-0.14, 0.23, 0.22); // 7
sphere22.position.set(-0.22, 0.23, 0.12); // 8
sphere23.position.set(-0.25, 0.23, 0); // 9 o'clock
sphere24.position.set(-0.22, 0.23, -0.12); // 10 o'clock
sphere25.position.set(-0.14, 0.23, -0.22); // 11 o'clock

export function changeMeshMaterials(currentColorState) {
  if (currentColorState === 'BASIC') {
    sphere.material = hotPinkPhysicalMaterial;

    sphere2.material = pinkPhysicalMaterial;
    sphere3.material = pinkPhysicalMaterial;
    sphere4.material = pinkPhysicalMaterial;
    sphere5.material = pinkPhysicalMaterial;

    sphere6.material = midRedPhysicalMaterial;
    sphere7.material = midRedPhysicalMaterial;
    sphere8.material = midRedPhysicalMaterial;
    sphere9.material = midRedPhysicalMaterial;
    sphere10.material = midRedPhysicalMaterial;
    sphere11.material = midRedPhysicalMaterial;
    sphere12.material = midRedPhysicalMaterial;
    sphere13.material = midRedPhysicalMaterial;

    sphere14.material = darkRedPhysicalMaterial;
    sphere15.material = darkRedPhysicalMaterial;
    sphere16.material = darkRedPhysicalMaterial;
    sphere17.material = darkRedPhysicalMaterial;
    sphere18.material = darkRedPhysicalMaterial;
    sphere19.material = darkRedPhysicalMaterial;
    sphere20.material = darkRedPhysicalMaterial;
    sphere21.material = darkRedPhysicalMaterial;
    sphere22.material = darkRedPhysicalMaterial;
    sphere23.material = darkRedPhysicalMaterial;
    sphere24.material = darkRedPhysicalMaterial;
    sphere25.material = darkRedPhysicalMaterial;
  } else if (currentColorState === 'PHONG') {
    sphere.material = darkRedMaterial;

    sphere2.material = midRedMaterial;
    sphere3.material = midRedMaterial;
    sphere4.material = midRedMaterial;
    sphere5.material = midRedMaterial;

    sphere6.material = pinkMaterial;
    sphere7.material = pinkMaterial;
    sphere8.material = pinkMaterial;
    sphere9.material = pinkMaterial;
    sphere10.material = pinkMaterial;
    sphere11.material = pinkMaterial;
    sphere12.material = pinkMaterial;
    sphere13.material = pinkMaterial;

    sphere14.material = hotPinkMaterial;
    sphere15.material = hotPinkMaterial;
    sphere16.material = hotPinkMaterial;
    sphere17.material = hotPinkMaterial;
    sphere18.material = hotPinkMaterial;
    sphere19.material = hotPinkMaterial;
    sphere20.material = hotPinkMaterial;
    sphere21.material = hotPinkMaterial;
    sphere22.material = hotPinkMaterial;
    sphere23.material = hotPinkMaterial;
    sphere24.material = hotPinkMaterial;
    sphere25.material = hotPinkMaterial;
  } else if (currentColorState === 'PHYSICAL') {
    sphere.material = greenPhongMaterial;
    sphere2.material = greenPhongMaterial;
    sphere3.material = greenPhongMaterial;
    sphere4.material = greenPhongMaterial;
    sphere5.material = greenPhongMaterial;
    sphere6.material = greenPhongMaterial;
    sphere7.material = greenPhongMaterial;
    sphere8.material = greenPhongMaterial;
    sphere9.material = greenPhongMaterial;
    sphere10.material = greenPhongMaterial;
    sphere11.material = greenPhongMaterial;
    sphere12.material = greenPhongMaterial;
    sphere13.material = greenPhongMaterial;
    sphere14.material = greenPhongMaterial;
    sphere15.material = greenPhongMaterial;
    sphere16.material = greenPhongMaterial;
    sphere17.material = greenPhongMaterial;
    sphere18.material = greenPhongMaterial;
    sphere19.material = greenPhongMaterial;
    sphere20.material = greenPhongMaterial;
    sphere21.material = greenPhongMaterial;
    sphere22.material = greenPhongMaterial;
    sphere23.material = greenPhongMaterial;
    sphere24.material = greenPhongMaterial;
    sphere25.material = greenPhongMaterial;
  }
}

export const MESHES = {
  sphere,
  sphere2,
  sphere3,
  sphere4,
  sphere5,
  sphere6,
  sphere7,
  sphere8,
  sphere9,
  sphere10,
  sphere11,
  sphere12,
  sphere13,
  sphere14,
  sphere15,
  sphere16,
  sphere17,
  sphere18,
  sphere19,
  sphere20,
  sphere21,
  sphere22,
  sphere23,
  sphere24,
  sphere25
};
