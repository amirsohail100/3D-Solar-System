import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// PROCEDURAL TEXTURES
function createSunTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    grad.addColorStop(0, '#ff3300'); grad.addColorStop(0.5, '#ff9900'); grad.addColorStop(1, '#ff2200');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 2048, 1024);
    for(let i=0; i<8000; i++) {
        ctx.fillStyle = Math.random() > 0.4 ? 'rgba(255,255,200,0.35)' : 'rgba(180,20,0,0.3)';
        ctx.beginPath(); ctx.arc(Math.random()*2048, Math.random()*1024, Math.random()*16 + 2, 0, Math.PI*2); ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
}
function createMercuryTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#7a7a7a'; ctx.fillRect(0, 0, 1024, 512);
    for(let i = 0; i < 5000; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(40,40,40,0.35)' : 'rgba(220,220,220,0.35)';
        ctx.beginPath(); ctx.arc(Math.random()*1024, Math.random()*512, Math.random()*7 + 1, 0, Math.PI*2); ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
}
function createVenusTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#d49b42'); grad.addColorStop(0.5, '#f3cb78'); grad.addColorStop(1, '#b87d32');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1024, 512);
    ctx.fillStyle = 'rgba(255, 255, 200, 0.25)';
    for(let i=0; i<80; i++) {
        ctx.beginPath(); ctx.ellipse(Math.random()*1024, Math.random()*512, Math.random()*400+100, Math.random()*15+5, Math.random()*0.3, 0, Math.PI*2); ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
}
function createEarthTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1024;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#0f3868'; ctx.fillRect(0, 0, 2048, 1024);
    ctx.fillStyle = '#1e6b32';
    for(let i=0; i<300; i++) {
        ctx.beginPath(); ctx.ellipse(Math.random()*2048, 150 + Math.random()*724, Math.random()*150+30, Math.random()*90+20, Math.random()*Math.PI, 0, Math.PI*2); ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    for(let i=0; i<150; i++) {
        ctx.beginPath(); ctx.ellipse(Math.random()*2048, Math.random()*1024, Math.random()*200+40, Math.random()*18+6, Math.random()*0.4, 0, Math.PI*2); ctx.fill();
    }
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 2048, 50); ctx.fillRect(0, 974, 2048, 50);
    return new THREE.CanvasTexture(canvas);
}
function createMarsTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#bf4311'; ctx.fillRect(0, 0, 1024, 512);
    ctx.fillStyle = 'rgba(50, 15, 5, 0.45)';
    for(let i=0; i<350; i++) {
        ctx.beginPath(); ctx.arc(Math.random()*1024, Math.random()*512, Math.random()*50+10, 0, Math.PI*2); ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
}
function createJupiterTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    const bands = ['#c8b193', '#8c6d4f', '#d6bfa4', '#9e734c', '#e6d5bc', '#6b4d33'];
    for(let y=0; y<1024; y+=12) { ctx.fillStyle = bands[Math.floor(y/12) % bands.length]; ctx.fillRect(0, y, 2048, 12); }
    ctx.fillStyle = '#b83211'; ctx.beginPath(); ctx.ellipse(1300, 640, 110, 65, -0.1, 0, Math.PI*2); ctx.fill();
    return new THREE.CanvasTexture(canvas);
}
function createSaturnTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    const bands = ['#e3cca8', '#c2a882', '#d9c29c', '#b0936b', '#eddcbf'];
    for(let y=0; y<1024; y+=10) { ctx.fillStyle = bands[Math.floor(y/10) % bands.length]; ctx.fillRect(0, y, 2048, 10); }
    return new THREE.CanvasTexture(canvas);
}
function createSaturnRingTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 1;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    grad.addColorStop(0.0, 'rgba(210, 190, 150, 0.0)'); grad.addColorStop(0.2, 'rgba(230, 210, 170, 0.95)');
    grad.addColorStop(0.5, 'rgba(180, 160, 120, 0.9)'); grad.addColorStop(0.6, 'rgba(20, 20, 20, 0.3)');
    grad.addColorStop(0.7, 'rgba(210, 190, 150, 0.85)'); grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1024, 1);
    return new THREE.CanvasTexture(canvas);
}
function createUranusTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#5da1f8'); grad.addColorStop(0.5, '#85ccf7'); grad.addColorStop(1, '#5da1f8');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1024, 512);
    return new THREE.CanvasTexture(canvas);
}
function createNeptuneTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#1f48c7'); grad.addColorStop(0.5, '#3563e3'); grad.addColorStop(1, '#1f48c7');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1024, 512);
    return new THREE.CanvasTexture(canvas);
}

// SCENE SETUP
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.05, 50000);
const solarSystemOffset = new THREE.Vector3(3200, 0, 1500); 
camera.position.set(solarSystemOffset.x, solarSystemOffset.y + 500, solarSystemOffset.z + 1200);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.4;
controls.minDistance = 2;
controls.maxDistance = 35000;
controls.target.copy(solarSystemOffset);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x222244, 0.6);
scene.add(hemiLight);
const sunLight = new THREE.PointLight(0xffffff, 28000, 8000);
scene.add(sunLight);

const hierarchyGroup = new THREE.Group();
scene.add(hierarchyGroup);

// GALAXY WITH CORE & MASSIVE STARS
const galaxyGroup = new THREE.Group();
galaxyGroup.position.set(0, 0, 0);

const galaxyParticleCount = 26000;
const galaxyGeo = new THREE.BufferGeometry();
const galaxyPositions = new Float32Array(galaxyParticleCount * 3);
const galaxyColors = new Float32Array(galaxyParticleCount * 3);

for (let i = 0; i < galaxyParticleCount; i++) {
    const radius = 1000 + Math.random() * 9500; 
    const spinAngle = radius * 0.0006;
    const branchAngle = ((i % 5) / 5) * Math.PI * 2;
    const sprinkleSpread = (Math.random() - 0.5) * 1.5;
    const currentAngle = branchAngle + spinAngle + sprinkleSpread;
    
    galaxyPositions[i * 3] = Math.cos(currentAngle) * radius;
    galaxyPositions[i * 3 + 1] = (Math.random() - 0.5) * (300 + radius * 0.02);
    galaxyPositions[i * 3 + 2] = Math.sin(currentAngle) * radius;

    const mixedColor = new THREE.Color();
    if (i % 5 === 0) mixedColor.setHex(0xffffff);
    else if (Math.random() > 0.4) mixedColor.setHex(0x60a5fa);
    else mixedColor.setHex(0xc084fc);

    galaxyColors[i * 3] = mixedColor.r;
    galaxyColors[i * 3 + 1] = mixedColor.g;
    galaxyColors[i * 3 + 2] = mixedColor.b;
}
galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));

const galaxyMat = new THREE.PointsMaterial({
    size: 6.5, vertexColors: true, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false
});
const milkyWayMesh = new THREE.Points(galaxyGeo, galaxyMat);
milkyWayMesh.userData = { name: 'MilkyWay', scaleTier: 'Galaxy' };
galaxyGroup.add(milkyWayMesh);

// MASSIVE STARS & GALACTIC CORE BULGE
const massiveStarsCount = 4000;
const massiveGeo = new THREE.BufferGeometry();
const massivePos = new Float32Array(massiveStarsCount * 3);
const massiveColors = new Float32Array(massiveStarsCount * 3);

for (let i = 0; i < massiveStarsCount; i++) {
    let radius, currentAngle, yPos;
    if (i < 1800) {
        radius = Math.random() * 1600;
        currentAngle = Math.random() * Math.PI * 2;
        yPos = (Math.random() - 0.5) * 320;
    } else {
        radius = 1200 + Math.random() * 9000;
        const spinAngle = radius * 0.0006;
        const branchAngle = ((i % 4) / 4) * Math.PI * 2;
        currentAngle = branchAngle + spinAngle + (Math.random() - 0.5) * 0.5;
        yPos = (Math.random() - 0.5) * 100;
    }

    massivePos[i * 3] = Math.cos(currentAngle) * radius;
    massivePos[i * 3 + 1] = yPos;
    massivePos[i * 3 + 2] = Math.sin(currentAngle) * radius;

    const color = new THREE.Color();
    if (radius < 1600) color.setHex(0xffea9f);
    else color.setHex(Math.random() > 0.4 ? 0x93c5fd : 0xffffff);
    
    massiveColors[i * 3] = color.r;
    massiveColors[i * 3 + 1] = color.g;
    massiveColors[i * 3 + 2] = color.b;
}

massiveGeo.setAttribute('position', new THREE.BufferAttribute(massivePos, 3));
massiveGeo.setAttribute('color', new THREE.BufferAttribute(massiveColors, 3));

const massiveMat = new THREE.PointsMaterial({
    size: 11, vertexColors: true, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false
});

const massiveStarsMesh = new THREE.Points(massiveGeo, massiveMat);
massiveStarsMesh.userData = { name: 'MilkyWay', scaleTier: 'Galaxy' };
galaxyGroup.add(massiveStarsMesh);
hierarchyGroup.add(galaxyGroup);

// SUPERMASSIVE BLACK HOLE
const blackHoleGroup = new THREE.Group();
blackHoleGroup.position.set(-6000, 500, -4000);

const bhCore = new THREE.Mesh(
    new THREE.SphereGeometry(40, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x000000 })
);
blackHoleGroup.add(bhCore);

const bhDiskGeo = new THREE.RingGeometry(50, 250, 64);
const bhDiskMat = new THREE.MeshBasicMaterial({
    color: 0xff5500, side: THREE.DoubleSide, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
});
const bhDisk = new THREE.Mesh(bhDiskGeo, bhDiskMat);
bhDisk.rotation.x = Math.PI / 2;
blackHoleGroup.add(bhDisk);

const bhGlowGeo = new THREE.RingGeometry(250, 450, 64);
const bhGlowMat = new THREE.MeshBasicMaterial({
    color: 0x9900ff, side: THREE.DoubleSide, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending
});
const bhGlow = new THREE.Mesh(bhGlowGeo, bhGlowMat);
bhGlow.rotation.x = Math.PI / 2;
blackHoleGroup.add(bhGlow);
blackHoleGroup.userData = { name: 'BlackHole', scaleTier: 'Phenomenon' };
hierarchyGroup.add(blackHoleGroup);
const interactableObjects = [];

// MULTIVERSE DOMAINS
const multiverseGroup = new THREE.Group();
const multiverseGeom = new THREE.SphereGeometry(700, 32, 32);
for (let i = 0; i < 12; i++) {
    const mMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.85, 0.65),
        wireframe: true, transparent: true, opacity: 0.0 
    });
    const mMesh = new THREE.Mesh(multiverseGeom, mMat);
    const dist = 22000 + Math.random() * 10000;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    mMesh.position.set(dist * Math.sin(phi) * Math.cos(theta), dist * Math.sin(phi) * Math.sin(theta), dist * Math.cos(phi));
    mMesh.userData = { name: 'Multiverse', scaleTier: 'Multiverse' };
    multiverseGroup.add(mMesh);
}
hierarchyGroup.add(multiverseGroup);

// BACKGROUND STARS
const starsCount = 18000;
const starsGeo = new THREE.BufferGeometry();
const posArray = new Float32Array(starsCount * 3);
const colorArray = new Float32Array(starsCount * 3);

for (let i = 0; i < starsCount; i++) {
    const r = 8000 + Math.random() * 25000;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);

    posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    posArray[i * 3 + 2] = r * Math.cos(phi);

    const color = new THREE.Color();
    const p = Math.random();
    if (p > 0.8) color.setHex(0x93c5fd);
    else if (p > 0.6) color.setHex(0xfde047);
    else color.setHex(0xffffff);

    colorArray[i * 3] = color.r;
    colorArray[i * 3 + 1] = color.g;
    colorArray[i * 3 + 2] = color.b;
}

starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
starsGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

const starsMat = new THREE.PointsMaterial({ size: 3.5, sizeAttenuation: true, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false });
const starMesh = new THREE.Points(starsGeo, starsMat);
scene.add(starMesh);

// EXTRA ZOOM-OUT STARS
const zoomOutStarsCount = 10000;
const zoomOutGeo = new THREE.BufferGeometry();
const zoPos = new Float32Array(zoomOutStarsCount * 3);
for(let i=0; i<zoomOutStarsCount; i++) {
    const r = 18000 + Math.random() * 16000;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    zoPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
    zoPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    zoPos[i*3+2] = r * Math.cos(phi);
}
zoomOutGeo.setAttribute('position', new THREE.BufferAttribute(zoPos, 3));
const zoomOutMat = new THREE.PointsMaterial({ size: 4.0, color: 0x93c5fd, transparent: true, opacity: 0.0, depthWrite: false, blending: THREE.AdditiveBlending });
const zoomOutStarMesh = new THREE.Points(zoomOutGeo, zoomOutMat);
scene.add(zoomOutStarMesh);

// SOLAR SYSTEM GROUP
const solarSystemGroup = new THREE.Group();
solarSystemGroup.position.copy(solarSystemOffset);
solarSystemGroup.name = "SolarSystemGroup";
hierarchyGroup.add(solarSystemGroup);

const orbitLines = [];
const sphereGeo = new THREE.SphereGeometry(1, 64, 64);

const sunRadius = 25;
const sunMass = 120;
const sunMesh = new THREE.Mesh(new THREE.SphereGeometry(sunRadius, 64, 64), new THREE.MeshBasicMaterial({ map: createSunTexture() }));
sunMesh.userData = { name: 'Sun', radius: sunRadius, mass: sunMass, scaleTier: 'SolarSystem' };
solarSystemGroup.add(sunMesh);
interactableObjects.push(sunMesh);

const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(sunRadius + 4, 64, 64), new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false }));
const sunGlowOuter = new THREE.Mesh(new THREE.SphereGeometry(sunRadius + 14, 64, 64), new THREE.MeshBasicMaterial({ color: 0xff2200, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false }));
solarSystemGroup.add(sunGlow); solarSystemGroup.add(sunGlowOuter);

const planetsData = [
    { name: 'Mercury', radius: 1.2, distance: 75, mass: 15, speed: 0.035, rotSpeed: 0.01, texture: createMercuryTexture(), roughness: 0.6 },
    { name: 'Venus', radius: 2.2, distance: 110, mass: 22, speed: 0.022, rotSpeed: -0.004, texture: createVenusTexture(), roughness: 0.3 },
    { name: 'Earth', radius: 2.5, distance: 150, mass: 25, speed: 0.015, rotSpeed: 0.02, texture: createEarthTexture(), roughness: 0.25 },
    { name: 'Mars', radius: 1.6, distance: 210, mass: 18, speed: 0.011, rotSpeed: 0.018, texture: createMarsTexture(), roughness: 0.65 },
    { name: 'Jupiter', radius: 9.0, distance: 420, mass: 65, speed: 0.005, rotSpeed: 0.04, texture: createJupiterTexture(), roughness: 0.4 },
    { 
        name: 'Saturn', radius: 7.5, distance: 650, mass: 50, speed: 0.003, rotSpeed: 0.038, texture: createSaturnTexture(), roughness: 0.35,
        rings: { inner: 10, outer: 20, texture: createSaturnRingTexture() }
    },
    { name: 'Uranus', radius: 4.5, distance: 1000, mass: 35, speed: 0.0018, rotSpeed: -0.03, texture: createUranusTexture(), roughness: 0.3, rings: { inner: 6, outer: 9, texture: createSaturnRingTexture() } },
    { name: 'Neptune', radius: 4.2, distance: 1350, mass: 35, speed: 0.001, rotSpeed: 0.032, texture: createNeptuneTexture(), roughness: 0.3 }
];

const planets = [];
planetsData.forEach(data => {
    const points = [];
    for (let i = 0; i <= 300; i++) {
        const angle = (i / 300) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * data.distance, 0, Math.sin(angle) * data.distance));
    }
    const pathGeo = new THREE.BufferGeometry().setFromPoints(points);
    const orbitLine = new THREE.Line(pathGeo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, depthWrite: false }));
    solarSystemGroup.add(orbitLine);
    orbitLines.push(orbitLine);

    const mat = new THREE.MeshStandardMaterial({ map: data.texture, roughness: data.roughness, metalness: 0.05 });
    const mesh = new THREE.Mesh(sphereGeo, mat);
    mesh.scale.setScalar(data.radius);
    mesh.userData = { name: data.name, radius: data.radius, mass: data.mass, scaleTier: 'SolarSystem' };
    
    const startAngle = Math.random() * Math.PI * 2;
    mesh.position.set(Math.cos(startAngle) * data.distance, 0, Math.sin(startAngle) * data.distance);

    if (data.rings) {
        const ringGeo = new THREE.RingGeometry(data.rings.inner, data.rings.outer, 80);
        let pos = ringGeo.attributes.position;
        let v3 = new THREE.Vector3();
        for (let i = 0; i < pos.count; i++){
            v3.fromBufferAttribute(pos, i);
            ringGeo.attributes.uv.setXY(i, v3.length() < (data.rings.inner + data.rings.outer)/2 ? 0 : 1, 1);
        }
        const ringMat = new THREE.MeshStandardMaterial({ map: data.rings.texture, side: THREE.DoubleSide, transparent: true, opacity: 0.9, roughness: 0.25, depthWrite: false });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2 + 0.15;
        mesh.add(ringMesh);
    }

    solarSystemGroup.add(mesh);
    interactableObjects.push(mesh);
    planets.push({ ...data, mesh: mesh, angle: startAngle, lastPos: mesh.position.clone() });
});

// SPACE FABRIC
const fabricSize = 3500;
let spaceFabricMesh = null;
let fabricMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.35, depthWrite: false });

function rebuildFabricGeometry(segments) {
    if (spaceFabricMesh) { solarSystemGroup.remove(spaceFabricMesh); spaceFabricMesh.geometry.dispose(); }
    const fabricGeo = new THREE.PlaneGeometry(fabricSize, fabricSize, segments, segments);
    fabricGeo.rotateX(-Math.PI / 2);
    spaceFabricMesh = new THREE.Mesh(fabricGeo, fabricMat);
    spaceFabricMesh.visible = document.getElementById('toggle-fabric').checked;
    solarSystemGroup.add(spaceFabricMesh);
    document.getElementById('fabric-poly-info').innerText = `HD Polys: ${segments}x${segments}`;
}
rebuildFabricGeometry(120);

function updateSpaceFabric() {
    if (!spaceFabricMesh || !spaceFabricMesh.visible) return;
    const fabricPositions = spaceFabricMesh.geometry.attributes.position;
    const posArray = fabricPositions.array;
    
    for (let i = 0; i < fabricPositions.count; i++) {
        const vx = posArray[i * 3];
        const vz = posArray[i * 3 + 2];
        let totalDepression = 0;
        totalDepression += (sunMass * 900) / ((vx * vx + vz * vz) + 1400);

        planets.forEach(p => {
            const dx = vx - p.mesh.position.x;
            const dz = vz - p.mesh.position.z;
            totalDepression += (p.mass * 400) / ((dx * dx + dz * dz) + 300);
        });
        posArray[i * 3 + 1] = -totalDepression;
    }
    fabricPositions.needsUpdate = true;
}

// MOUSE INTERACTION FOR BLACK HOLE
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// TRUE BIG BANG STARBURST & NEWBORN PLANETS SYSTEM
let isBigBangActive = false;
let bigBangStage = 0; // 0: Normal, 1: Singularity collapse, 2: Cataclysmic Star/Planet birth blast

// Massive Starburst Particles
const bigBangStarCount = 20000;
const bbStarsGeo = new THREE.BufferGeometry();
const bbStarsPos = new Float32Array(bigBangStarCount * 3);
const bbStarsVel = [];
const bbStarsColors = new Float32Array(bigBangStarCount * 3);

for(let i=0; i<bigBangStarCount; i++) {
    bbStarsPos[i*3] = solarSystemOffset.x;
    bbStarsPos[i*3+1] = solarSystemOffset.y;
    bbStarsPos[i*3+2] = solarSystemOffset.z;

    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = 40 + Math.random() * 250; // High speed outward blast
    bbStarsVel.push(new THREE.Vector3(
        speed * Math.sin(phi) * Math.cos(theta),
        speed * Math.sin(phi) * Math.sin(theta),
        speed * Math.cos(phi)
    ));

    const color = new THREE.Color();
    const randCol = Math.random();
    if(randCol > 0.6) color.setHex(0xffaa33); // Orange/Gold
    else if(randCol > 0.3) color.setHex(0x38bdf8); // Cyan/Blue
    else color.setHex(0xffffff); // Bright White

    bbStarsColors[i*3] = color.r;
    bbStarsColors[i*3+1] = color.g;
    bbStarsColors[i*3+2] = color.b;
}
bbStarsGeo.setAttribute('position', new THREE.BufferAttribute(bbStarsPos, 3));
bbStarsGeo.setAttribute('color', new THREE.BufferAttribute(bbStarsColors, 3));
const bbStarsMat = new THREE.PointsMaterial({ size: 5.5, vertexColors: true, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
const bbStarsMesh = new THREE.Points(bbStarsGeo, bbStarsMat);
scene.add(bbStarsMesh);

// Newborn Giant Glowing Orbs/Planets flying outward off-screen
const newbornOrbsGroup = new THREE.Group();
newbornOrbsGroup.position.copy(solarSystemOffset);
scene.add(newbornOrbsGroup);

const newbornPlanets = [];
for(let i=0; i<5; i++) {
    const orbGeo = new THREE.SphereGeometry(15 + Math.random() * 15, 32, 32);
    const orbMat = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color().setHSL(Math.random(), 0.9, 0.6), 
        transparent: true, 
        opacity: 0,
        blending: THREE.AdditiveBlending 
    });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    orbMesh.position.copy(solarSystemOffset);
    newbornOrbsGroup.add(orbMesh);

    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
    ).normalize();
    newbornPlanets.push({ mesh: orbMesh, dir: dir, speed: 30 + Math.random() * 60 });
}

document.getElementById('btn-big-bang').addEventListener('click', () => {
    if (isBigBangActive) return;
    isBigBangActive = true;
    bigBangStage = 1;

    // Flash light & fade/collapse existing universe into singularity
    gsap.to(sunLight, { intensity: 200000, duration: 0.4, yoyo: true, repeat: 1 });
    
    // Step 1: Current universe shrinks completely into a point
    gsap.to(hierarchyGroup.scale, { 
        x: 0.0001, y: 0.0001, z: 0.0001, 
        duration: 1.2, 
        ease: "power4.in", 
        onComplete: () => {
            bigBangStage = 2; // Step 2: Explosion of new stars and giant proto-planets
            bbStarsMat.opacity = 1.0;
            newbornPlanets.forEach(p => p.mesh.material.opacity = 0.9);
            
            // Keep old universe hidden while new cosmic birth expands
            hierarchyGroup.scale.set(0, 0, 0);

            // Expand starburst and new planets massively off-screen
            gsap.to(bbStarsMat, { opacity: 0, duration: 6.0, delay: 2.0 });
            gsap.setTimeout ? setTimeout(() => {
                // Restore and reset universe with fresh state after cataclysmic blast
                hierarchyGroup.scale.set(1, 1, 1);
                isBigBangActive = false;
                bigBangStage = 0;
            }, 6000) : setTimeout(() => {
                hierarchyGroup.scale.set(1, 1, 1);
                isBigBangActive = false;
                bigBangStage = 0;
            }, 6000);
        }
    });
});

// UI & CUSTOM DROPDOWN LOGIC
let isPlaying = true, timeScale = 1.0, currentTarget = null, isAnimatingCamera = false;
const uiPanel = document.getElementById('ui-panel');
document.getElementById('btn-toggle-menu').addEventListener('click', () => uiPanel.classList.toggle('collapsed'));
document.getElementById('btn-close-menu').addEventListener('click', () => uiPanel.classList.add('collapsed'));

const zoomSlider = document.getElementById('zoom-slider'), zoomDisplay = document.getElementById('zoom-display');
const activeTargetName = document.getElementById('active-target-name'), tierIndicator = document.getElementById('tier-indicator');

const customDropdown = document.getElementById('customDropdown');
const dropdownSelected = customDropdown.querySelector('.dropdown-selected');
const dropdownOptions = document.getElementById('dropdownOptions');
const selectedText = document.getElementById('selectedText');
const options = dropdownOptions.querySelectorAll('.dropdown-option');

dropdownSelected.addEventListener('click', (e) => {
    e.stopPropagation();
    customDropdown.classList.toggle('active');
});

window.addEventListener('click', () => {
    customDropdown.classList.remove('active');
});

options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedText.innerHTML = option.innerHTML;
        customDropdown.classList.remove('active');
        
        const targetVal = option.getAttribute('data-value');
        focusOnTarget(targetVal);
    });
});

function stopCameraTweens() { gsap.killTweensOf(camera.position); gsap.killTweensOf(controls.target); isAnimatingCamera = false; }

function setZoomDistance(newDistance) {
    stopCameraTweens();
    const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
    camera.position.copy(controls.target).addScaledVector(direction, newDistance);
    controls.update();
    updateZoomUI(newDistance);
}

function updateZoomUI(distance) {
    const roundedDist = Math.round(distance);
    zoomSlider.value = roundedDist;
    zoomDisplay.innerText = roundedDist;

    if (roundedDist > 12000) {
        tierIndicator.innerText = "Current Scale: Multiverse Tier";
        galaxyMat.opacity = 1.0;
        massiveMat.opacity = 1.0;
        zoomOutStarMesh.material.opacity = Math.min(0.8, (roundedDist - 12000) / 10000);
        multiverseGroup.children.forEach(m => m.material.opacity = Math.min(0.4, (roundedDist - 12000) / 10000));
    } else if (roundedDist > 2500) {
        tierIndicator.innerText = "Current Scale: Galaxy Tier (Milky Way)";
        const op = Math.max(0.0, Math.min(0.95, (roundedDist - 2500) / 7500));
        galaxyMat.opacity = op;
        massiveMat.opacity = op;
        zoomOutStarMesh.material.opacity = 0;
        multiverseGroup.children.forEach(m => m.material.opacity = 0);
    } else {
        tierIndicator.innerText = "Current Scale: Solar System Tier";
        galaxyMat.opacity = 0;
        massiveMat.opacity = 0;
        zoomOutStarMesh.material.opacity = 0;
        multiverseGroup.children.forEach(m => m.material.opacity = 0);
    }
}

zoomSlider.addEventListener('input', (e) => setZoomDistance(parseFloat(e.target.value)));
document.getElementById('btn-zoom-in').addEventListener('click', () => setZoomDistance(Math.max(2, camera.position.distanceTo(controls.target) * 0.7)));
document.getElementById('btn-zoom-out').addEventListener('click', () => setZoomDistance(Math.min(35000, camera.position.distanceTo(controls.target) * 1.4)));

controls.addEventListener('change', () => updateZoomUI(camera.position.distanceTo(controls.target)));
controls.addEventListener('start', () => stopCameraTweens());

document.getElementById('btn-play-pause').addEventListener('click', (e) => {
    isPlaying = !isPlaying;
    e.target.innerText = isPlaying ? "Pause" : "Play";
    e.target.className = isPlaying ? "bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-3 py-1 rounded-md transition-all w-16 font-semibold" : "bg-amber-600 hover:bg-amber-500 active:scale-95 text-white px-3 py-1 rounded-md transition-all w-16 font-semibold";
});

document.getElementById('speed-slider').addEventListener('input', (e) => {
    timeScale = parseFloat(e.target.value);
    document.getElementById('speed-display').innerText = timeScale.toFixed(1) + "x";
});

document.getElementById('toggle-orbits').addEventListener('change', (e) => orbitLines.forEach(l => l.visible = e.target.checked));
document.getElementById('toggle-fabric').addEventListener('change', (e) => { if (spaceFabricMesh) spaceFabricMesh.visible = e.target.checked; });

const raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2();
window.addEventListener('click', (event) => {
    if (event.target.closest('#ui-panel') || event.target.closest('#btn-toggle-menu')) return;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactableObjects);
    if (intersects.length > 0) {
        const name = intersects[0].object.userData.name;
        options.forEach(opt => { if(opt.getAttribute('data-value') === name) opt.click(); });
    }
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function focusOnTarget(targetName) {
    stopCameraTweens();
    isAnimatingCamera = true;
    let endPos, targetLookAt, displayName = targetName;

    if (targetName === 'BlackHole') {
        endPos = blackHoleGroup.position.clone().add(new THREE.Vector3(0, 150, 400));
        targetLookAt = blackHoleGroup.position.clone();
        displayName = "Supermassive Black Hole";
        currentTarget = 'BlackHole';
    } else if (targetName === 'Multiverse') {
        endPos = new THREE.Vector3(0, 8000, 26000); targetLookAt = new THREE.Vector3(0, 0, 0); displayName = "Multiverse Domains"; currentTarget = null;
    } else if (targetName === 'MilkyWay') {
        endPos = new THREE.Vector3(0, 2500, 8000); targetLookAt = new THREE.Vector3(0, 0, 0); displayName = "Milky Way Galaxy"; currentTarget = null;
    } else if (targetName === 'System') {
        endPos = solarSystemOffset.clone().add(new THREE.Vector3(0, 500, 1200)); targetLookAt = solarSystemOffset.clone(); displayName = "Full Solar System"; currentTarget = null;
    } else if (targetName === 'Sun') {
        endPos = solarSystemOffset.clone().add(new THREE.Vector3(0, 35, 75)); targetLookAt = solarSystemOffset.clone(); displayName = "The Sun"; currentTarget = 'Sun';
    } else {
        let obj = planets.find(p => p.name === targetName);
        if (!obj) return;
        const offset = new THREE.Vector3(obj.radius * 3.5, obj.radius * 1.5, obj.radius * 4.0);
        endPos = obj.mesh.position.clone().add(solarSystemOffset).add(offset);
        targetLookAt = obj.mesh.position.clone().add(solarSystemOffset);
        currentTarget = targetName;
    }

    activeTargetName.innerText = displayName;
    gsap.to(controls.target, { x: targetLookAt.x, y: targetLookAt.y, z: targetLookAt.z, duration: 1.5, ease: "power2.inOut", onComplete: () => { isAnimatingCamera = false; } });
    gsap.to(camera.position, { x: endPos.x, y: endPos.y, z: endPos.z, duration: 1.5, ease: "power2.inOut", onUpdate: () => updateZoomUI(camera.position.distanceTo(controls.target)) });
}

// ANIMATION LOOP
function animate() {
    requestAnimationFrame(animate);

    starMesh.rotation.y += 0.00015 * timeScale;
    zoomOutStarMesh.rotation.y += 0.0001 * timeScale;
    milkyWayMesh.rotation.y += 0.0004 * timeScale;
    massiveStarsMesh.rotation.y += 0.0004 * timeScale;
    multiverseGroup.rotation.y += 0.00008 * timeScale;

    // Black Hole rotation & mouse parallax effect
    bhDisk.rotation.z += 0.015 * timeScale;
    bhGlow.rotation.z -= 0.01 * timeScale;
    blackHoleGroup.rotation.x = mouseY * 0.15;
    blackHoleGroup.rotation.y = mouseX * 0.15;

    // True Big Bang Starburst & Expanding Newborn Orbs Animation
    if (isBigBangActive && bigBangStage === 2) {
        const pos = bbStarsGeo.attributes.position.array;
        for(let i=0; i<bigBangStarCount; i++) {
            pos[i*3] += bbStarsVel[i].x * timeScale * 0.8;
            pos[i*3+1] += bbStarsVel[i].y * timeScale * 0.8;
            pos[i*3+2] += bbStarsVel[i].z * timeScale * 0.8;
        }
        bbStarsGeo.attributes.position.needsUpdate = true;

        newbornPlanets.forEach(p => {
            p.mesh.position.addScaledVector(p.dir, p.speed * timeScale);
            p.mesh.scale.addScalar(0.015 * timeScale); // Grow giant as they fly out
        });
    }

    sunMesh.rotation.y += 0.002 * timeScale;
    sunGlowOuter.rotation.y -= 0.003 * timeScale;

    planets.forEach(p => {
        if (isPlaying) {
            p.angle += p.speed * timeScale;
            p.mesh.position.set(Math.cos(p.angle) * p.distance, 0, Math.sin(p.angle) * p.distance);
        }
        p.mesh.rotation.y += p.rotSpeed * timeScale;

        if (currentTarget === p.name && !isAnimatingCamera) {
            const delta = p.mesh.position.clone().sub(p.lastPos);
            camera.position.add(delta);
            solarSystemOffset.add(delta);
            solarSystemGroup.position.copy(solarSystemOffset);
            controls.target.copy(p.mesh.position.clone().add(solarSystemOffset));
        }
        p.lastPos.copy(p.mesh.position);
    });

    updateSpaceFabric();
    controls.update();
    renderer.render(scene, camera);
}

<<<<<<< HEAD
animate();
=======
animate(); 
>>>>>>> b9f42ee3b3dec761c4543021eb76ba4531f3b461
