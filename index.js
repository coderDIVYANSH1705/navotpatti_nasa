import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js'; // Ensure this path is correct for your setup
import getStarfield from "./src/getStarfield.js";
import { getFresnelMat } from "./src/getFresnelMat.js";

// scene elements
const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 70;  
//  renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

// Starfield background
const stars = getStarfield({ numStars: 1000 });
scene.add(stars);

//  sunlight
const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

//  (main camera)
let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25;  
controls.enableZoom = true;     
// click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Planet information
const planetInfo = [
  { name: "GJ 1252", description: "GJ 1252 b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.32 Earths, it takes 0.5 days to complete one orbit of its star, and is 0.00915 AU from its star. Its discovery was announced in 2020."
  },


  { name: "NGTS-16", description: "NGTS-16 b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.667 Jupiters, it takes 4.8 days to complete one orbit of its star, and is 0.0523 AU from its star. Its discovery was announced in 2021."},


  { name:  "GJ 1252 b", description: "GJ 1252 b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.32 Earths, it takes 0.5 days to complete one orbit of its star, and is 0.00915 AU from its star. Its discovery was announced in 2020."},
 
  { name:  "Kepler-174 b", description: "Kepler-174 b is a super Earth exoplanet that orbits a K-type star. Its mass is 4.5 Earths, it takes 14 days to complete one orbit of its star, and is 0.1 AU from its star. Its discovery was announced in 2014."},

  { name:  "Kepler-174 c", description: "Kepler-174 c is a super Earth exoplanet that orbits a K-type star. Its mass is 2.83 Earths, it takes 44 days to complete one orbit of its star, and is 0.214 AU from its star. Its discovery was announced in 2014."},

  { name:  "TOI-700 e", description: "TOI-700 e is a terrestrial exoplanet that orbits an M-type star. Its mass is 0.818 Earths, it takes 27.8 days to complete one orbit of its star, and is 0.134 AU from its star. Its discovery was announced in 2023."},


  { name:  "HD 147513 b", description: "HD 147513 b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.21 Jupiters, it takes 1.4 years to complete one orbit of its star, and is 1.32 AU from its star. Its discovery was announced in 2003."},


  { name:  "GJ_504_b", description: "If we could travel to this giant planet, we would see a world still glowing from the heat of its formation with a color reminiscent of a dark cherry blossom, a dull magenta."},

  { name:  "HD_189733", description: "This far-off blue planet may look like a friendly haven – but don’t be deceived! Weather here is deadly. The planet’s cobalt blue color comes from a hazy, blow-torched atmosphere containing clouds laced with glass."},

  { name:  "HAT-P-11 b", description: "HAT-P-11 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 26.69772 Earths, it takes 4.9 days to complete one orbit of its star, and is 0.05254 AU from its star. Its discovery was announced in 2008."},

  { name:  "Kepler-22_b", description: "A possible ocean world orbiting in the habitable zone—the region around a star where the temperature is right for liquid water, a requirement for life on Earth."},

  { name:  "Kepler-452_b", description: "An Earth-cousin that orbits a star like our sun in the habitable zone, where liquid water could exist."},



 { name:  "Proxima Centauri b", description: "Proxima Centauri b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.07 Earths, it takes 11.2 days to complete one orbit of its star, and is 0.04856 AU from its star. Its discovery was announced in 2016."},


 { name:  "YZ Ceti d", description: "YZ Ceti d is a super Earth exoplanet that orbits an M-type star. Its mass is 1.09 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.02851 AU from its star. Its discovery was announced in 2017."},

 { name:  "OGLE-2005-BLG-390L b", description: "OGLE-2005-BLG-390L b is a Neptune-like exoplanet that orbits an unknown-type star. Its mass is 5.5 Earths, it takes 9 years to complete one orbit of its star, and is 2.6 AU from its star. Its discovery was announced in 2005."},

 { name:  "kepler_186f", description: "Kepler-186 f is a super Earth exoplanet that orbits an M-type star. Its mass is 1.71 Earths, it takes 129.9 days to complete one orbit of its star, and is 0.432 AU from its star. Its discovery was announced in 2014."},
 { name:  "51 Pegasi b", description: "51 Pegasi b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.46 Jupiters, it takes 4.2 days to complete one orbit of its star, and is 0.0527 AU from its star. Its discovery was announced in 1995."},

 
 

   ];

// Texture 
const planetTextures = [
  "textures/texture2.jpeg",
  "textures/NGTS-16.jpg", 
  "textures/WhatsApp Image 2024-10-05 at 17.03.06_9a7a5a3d.jpg",
  "textures/planet4.jpg",
  "textures/Planet5.jpg",
  "textures/kepler_174_b_cloud[1].jpg",
  "textures/kepler_174_c_cloud[1].jpg",
  "textures/toi_700_e_surface_color[1].jpg",
  
  "textures/hd147513ab[1].jpg",
  
  "textures/GJ_504_b[1].jpg",
  "textures/HD_189733_b[1].jpg",
  "textures/HAT-P-11_b[1].jpg",
  "textures/Kepler-22_b[1].jpg",
  "textures/Kepler-452_b[1].jpg",
  "textures/Proxima_Cen_b[1].jpg",
  "textures/YZ_Cet_d[1].jpg",
  "textures/OGLE-2005-BLG-390L_b[1].jpg",
   "textures/kepler_186f_map_2k_by_greaterhtrae_di8ozk5-414w-2x.jpg",
   "textures/51pegasib[1].jpg",

];


const infoDiv = document.createElement('div');
infoDiv.id = 'info';
infoDiv.style.position = 'absolute';
infoDiv.style.top = '10px';
infoDiv.style.left = '10px';
infoDiv.style.color = 'white';
infoDiv.style.background = 'rgba(0, 0, 0, 0.5)';
infoDiv.style.padding = '10px';
infoDiv.style.borderRadius = '5px';
infoDiv.style.display = 'none';  
document.body.appendChild(infoDiv);


function updateInfoDisplay(planetIndex) {
  const nameElement = document.createElement('h3');
  const descriptionElement = document.createElement('p');
  const detailsElement = document.createElement('p');
  
  nameElement.innerText = planetInfo[planetIndex].name;
  descriptionElement.innerText = planetInfo[planetIndex].description;
  detailsElement.innerText = planetInfo[planetIndex].details;

  infoDiv.innerHTML = '';  
  infoDiv.appendChild(nameElement);
  infoDiv.appendChild(descriptionElement);
  infoDiv.appendChild(detailsElement);
  infoDiv.style.display = 'block';  
}


const planets = [];
const planetCameras = []; 
const planetSize = 2.8; 
const planetDistance = 100;  

const textureLoader = new THREE.TextureLoader();


const loadedTextures = planetTextures.map((texturePath) => textureLoader.load(texturePath));


for (let i = 0; i < 20; i++) {
  // Planet Geometry 
  const planetGeometry = new THREE.IcosahedronGeometry(planetSize, 12);
  const planetMaterial = new THREE.MeshPhongMaterial({
    map: loadedTextures[i],  // Use different texture for each planet
  });

  // Planet Mesh
  const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);


function getRandomSphericalPosition(radius) {
  const theta = Math.random() * 2 * Math.PI; // Random angle around the Z-axis
  const phi = Math.acos((Math.random() * 2) - 1); // Random angle from the Y-axis
  const r = radius * Math.cbrt(Math.random()); // Random distance within the radius

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.sin(phi) * Math.sin(theta);
  const z = r * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}


const planetPosition = getRandomSphericalPosition(planetDistance);
planetMesh.position.set(planetPosition.x, planetPosition.y, planetPosition.z);


  planets.push(planetMesh);
  scene.add(planetMesh);

  
  const planetCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
  
  
  
  const lightDirection = new THREE.Vector3().subVectors(planetMesh.position, sunLight.position).normalize();
   // Position the camera on the brighter side (towards the sunlight)
   const cameraDistance = 20;  // Distance from the planet to place the camera
   const cameraPosition = new THREE.Vector3().copy(planetMesh.position).add(lightDirection.multiplyScalar(cameraDistance));
    // Set the camera position and make it look at the planet
  planetCamera.position.copy(cameraPosition);
  planetCamera.lookAt(planetMesh.position);

// planet's camera
  planetCameras.push(planetCamera);

}
// Add ambient light to slightly illuminate the darker sides
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);  // Soft white light, adjust intensity as needed
scene.add(ambientLight);


// Animation loop for rotation and rendering
let activeCamera = camera; // Initially, the active camera is the main camera
let activeControls = controls; // Currently active OrbitControls

function animate() {
  requestAnimationFrame(animate);

  // Rotate all planets on their own axes
  planets.forEach((planet) => {
    planet.rotation.y += 0.003;  // Rotate on its own axis
  });

  // Move stars slowly
  stars.rotation.y += 0.0001;

  // Update the controls for smooth camera movements
  if (activeControls) {
    activeControls.update();
  }

  // Render the scene with the active camera
  renderer.render(scene, activeCamera);
}

// Start the animation
animate();

// Handle mouse clicks for planet interaction
function onMouseClick(event) {
  // Convert mouse coordinates to normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, activeCamera);

  // Calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(planets);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    const planetIndex = planets.indexOf(clickedObject);

    if (planetIndex !== -1) {
      // Switch to the planet's camera
      switchToPlanetCamera(planetIndex);
      updateInfoDisplay(planetIndex);  // Show information for the clicked planet
    }
  } else {
    // If clicked outside any planet, switch back to the main camera
    switchToMainCamera();
    infoDiv.style.display = 'none';  // Hide the info div
  }
}

// Function to switch to a planet-specific camera
function switchToPlanetCamera(index) {
  if (index < 0 || index >= planetCameras.length) return;

  // Update the active camera
  activeCamera = planetCameras[index];

  // Dispose the current controls
  if (activeControls) {
    activeControls.dispose();
  }

  // Initialize OrbitControls for the new active camera
  activeControls = new OrbitControls(activeCamera, renderer.domElement);
  activeControls.enableDamping = true;
  activeControls.dampingFactor = 0.25;
  activeControls.enableZoom = true;
}

// Function to switch back to the main camera
function switchToMainCamera() {
  activeCamera = camera;

  // Dispose the current controls
  if (activeControls) {
    activeControls.dispose();
  }

  // Re-initialize OrbitControls for the main camera
  activeControls = new OrbitControls(camera, renderer.domElement);
  activeControls.enableDamping = true;
  activeControls.dampingFactor = 0.25;
  activeControls.enableZoom = true;
}

// Listen for mouse click events
window.addEventListener('click', onMouseClick, false);

// Handle window resizing for responsive rendering
function handleWindowResize() {
  const newW = window.innerWidth;
  const newH = window.innerHeight;

  // Update main camera
  camera.aspect = newW / newH;
  camera.updateProjectionMatrix();

  // Update planet cameras
  planetCameras.forEach((planetCamera) => {
    planetCamera.aspect = newW / newH;
    planetCamera.updateProjectionMatrix();
  });

  // Update renderer size
  renderer.setSize(newW, newH);
}

// Listen for window resize events
window.addEventListener('resize', handleWindowResize, false);
