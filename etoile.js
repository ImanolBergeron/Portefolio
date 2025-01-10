// Initialisation de la scène, de la caméra et du renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Créer les étoiles
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    opacity: 0.7,
});

const starPositions = [];
for (let i = 0; i < 40000; i++) { // Augmentation du nombre d'étoiles
    const x = (Math.random() - 0.5) * 800; // Étendue élargie pour les étoiles
    const y = (Math.random() - 0.5) * 800;
    const z = (Math.random() - 0.5) * 800;
    starPositions.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Animation
let isHyperspaceActive = false;
const totalX = 0;
const totalY = 0;
function animate() {
    requestAnimationFrame(animate);

    if (!isHyperspaceActive) {
        stars.rotation.x += 0.001; // Rotation lente sur l'axe X
        stars.rotation.y += 0.001; // Rotation lente sur l'axe Y
    }

    renderer.render(scene, camera);
}
animate();


// Position de la caméra
camera.position.z = 75; // Recule la caméra pour qu'elle ne soit pas "dans" les étoiles


// Adapter la taille du canvas à la fenêtre
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Variables pour l'effet d'hyperespace
let isTransitioning = false;

const buttons = document.querySelectorAll('.explore-linkFront');
buttons.forEach(button => {
    // Gestion du clic sur le lien "Front"
    button.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la redirection immédiate
        if (!isTransitioning) {
            isTransitioning = true;
            startHyperspaceEffectFront(() => {
                // Redirection une fois l'animation terminée
                window.location.href = button.getAttribute('href');
            });
        }
    });
});


// Fonction pour démarrer l'effet d'hyperespace (vers l'avant)
function startHyperspaceEffectFront(onComplete) {
    isHyperspaceActive = true;
    const speed = { value: 0 }; // Vitesse initiale
    const tween = new TWEEN.Tween(speed)
        .to({ value: 50 }, 1000) // Augmentation de la vitesse sur 1 seconde
        .easing(TWEEN.Easing.Exponential.In)
        .onUpdate(() => {
            // Faire "foncer" les étoiles vers la caméra
            const positions = stars.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 2] += speed.value; // Augmente Z pour rapprocher l'étoile
            }
            stars.geometry.attributes.position.needsUpdate = true; // Mise à jour des positions
        })
        .onComplete(() => {
            onComplete();
        })
        .start();

    animateHyperspaceFront();
}


const buttonsBack = document.querySelectorAll('.explore-linkBack');
buttonsBack.forEach(button => {
    // Gestion du clic sur le lien "Front"
    button.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la redirection immédiate
        if (!isTransitioning) {
            isTransitioning = true;
            startHyperspaceEffectBack(() => {
                // Redirection une fois l'animation terminée
                window.location.href = button.getAttribute('href');
            });
        }
    });
});

function startHyperspaceEffectBack(onComplete) {
    isHyperspaceActive = true;
    const speed = { value: 0 }; // Vitesse initiale
    const tween = new TWEEN.Tween(speed)
        .to({ value: 50 }, 1000) // Augmentation de la vitesse sur 1 seconde
        .easing(TWEEN.Easing.Exponential.In)
        .onUpdate(() => {
            // Faire "foncer" les étoiles vers la caméra
            const positions = stars.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 2] -= speed.value; // Diminue Z pour eloigner l'étoile
            }
            stars.geometry.attributes.position.needsUpdate = true; // Mise à jour des positions
        })
        .onComplete(() => {
            onComplete();
        })
        .start();

    animateHyperspaceBack();
}


// Fonction pour animer l'effet "Front"
function animateHyperspaceFront() {
    if (!isTransitioning) return; // Arrêter si plus nécessaire
    requestAnimationFrame(animateHyperspaceFront);
    TWEEN.update(); // Met à jour l'animation Tween.js
    renderer.render(scene, camera); // Redessine la scène
}

// Fonction pour animer l'effet "Back"
function animateHyperspaceBack() {
    if (!isTransitioning) return; // Arrêter si plus nécessaire
    requestAnimationFrame(animateHyperspaceBack);
    TWEEN.update(); // Met à jour l'animation Tween.js
    renderer.render(scene, camera); // Redessine la scène
}

