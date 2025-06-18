let discoveredFish = [];
let currentDepth = 0;
let monkeyName = "Monkey";

function updateDepth() {
    currentDepth = Math.floor(window.scrollY / 10);
    let depthDisplay = document.getElementById('depth-display');
    if (depthDisplay) {
        depthDisplay.textContent = currentDepth + " meters";
        if (currentDepth > 100) {
            depthDisplay.style.color = "#FF4500";
        } else if (currentDepth > 50) {
            depthDisplay.style.color = "#FFD700";
        } else {
            depthDisplay.style.color = "#00FFFF";
        }
    }
}

function resetDepth() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    currentDepth = 0;
    let depthDisplay = document.getElementById('depth-display');
    if (depthDisplay) {
        depthDisplay.textContent = "0 meters";
        depthDisplay.style.color = "#00FFFF";
    }
}

function startExploration() {
    let welcomeMsg = document.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
        welcomeMsg.innerHTML = "<h2>🐠 Happy Exploring! 🐠</h2><p>Scroll down and click to the sea creatures!</p>";
        
        setTimeout(function() {
            welcomeMsg.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        }, 2000);
    }
}

function fishClick(fishNumber) {
    let fishNames = ["Great white shark", "Red comb star", "Loggerhead sea turtle", "Spotted porcupinefish", "Common Octopus"];
    let fishName = fishNames[fishNumber - 1];
    
    if (!discoveredFish.includes(fishName)) {
        discoveredFish.push(fishName);
        
        let discoveryLog = document.getElementById('fish-discoveries');
        if (discoveryLog) {
            if (discoveredFish.length === 1) {
                discoveryLog.innerHTML = "";
            }
            let newDiscovery = document.createElement('p');
            newDiscovery.textContent = "🐟 " + fishName;
            newDiscovery.style.color = "#FFD700";
            discoveryLog.appendChild(newDiscovery);
        }
        
        let fishElement = document.querySelector('.fish' + fishNumber);
        if (fishElement) {
            fishElement.style.transform = "scale(0.8) rotate(360deg)";
            fishElement.style.opacity = "0.7";
        }
    }
}

function spinMonkey() {
    let monkey = document.getElementById('monkey');
    if (monkey) {
        monkey.style.transform = "rotate(360deg)";
    }
}

function growBanana() {
    let banana = document.querySelector('.banana');
    if (banana) {
        banana.style.transform = "scale(1.5)";
    }
}

function shrinkBanana() {
    let banana = document.querySelector('.banana');
    if (banana) {
        banana.style.transform = "scale(1)";
    }
}

function updateMonkeyName() {
    let nameInput = document.getElementById('monkey-name');
    let greeting = document.getElementById('monkey-greeting');
    
    if (nameInput && greeting) {
        if (nameInput.value.trim() !== "") {
            monkeyName = nameInput.value.trim();
            greeting.textContent = "Hi I'm " + monkeyName + "!";
            greeting.style.color = "#FFD700";
        } else {
            greeting.textContent = "Hi I'm Monkey!";
            greeting.style.color = "white";
        }
    }
}

function treeShake() {
    let tree = document.querySelector('.tree');
    let factDisplay = document.getElementById('jungle-fact');
    let facts = [
        "jungles cover only 6% of Earth but contain 50% of all species!",
        "a single rainforest tree can be home to over 1,000 species!",
        "rainforests produce 20% of the world's oxygen!",
        "some jungle trees can live for over 1,000 years!",
        "jungles are home to 80% of the world's insects!"
    ];
    
    if (tree) {
        tree.style.transform = "translateX(-50%) rotate(5deg)";
        setTimeout(function() {
            tree.style.transform = "translateX(-50%) rotate(-5deg)";
        }, 100);
        setTimeout(function() {
            tree.style.transform = "translateX(-50%) rotate(0deg)";
        }, 200);
    }
    
    if (factDisplay) {
        let randomFact = facts[Math.floor(Math.random() * facts.length)];
        factDisplay.textContent = randomFact;
        factDisplay.style.color = "#90EE90";
        }
}

window.addEventListener('scroll', updateDepth);

if (document.getElementById('depth-display')) {
    updateDepth();
}

let startBtn = document.getElementById('start-btn');
if (startBtn) {
    startBtn.addEventListener('click', startExploration);
}

let resetBtn = document.getElementById('reset-btn');
if (resetBtn) {
    resetBtn.addEventListener('click', resetDepth);
}

let fish1 = document.querySelector('.fish1');
if (fish1) {
    fish1.addEventListener("click", function() { fishClick(1); });
}

let fish2 = document.querySelector('.fish2');
if (fish2) {
    fish2.addEventListener("click", function() { fishClick(2); });
}

let fish3 = document.querySelector('.fish3');
if (fish3) {
    fish3.addEventListener("click", function() { fishClick(3); });
}

let fish4 = document.querySelector('.fish4');
if (fish4) {
    fish4.addEventListener("click", function() { fishClick(4); });
}

let fish5 = document.querySelector('.fish5');
if (fish5) {
    fish5.addEventListener("click", function() { fishClick(5); });
}

let monkey = document.getElementById('monkey');
if (monkey) {
    monkey.addEventListener('click', spinMonkey);
}

let banana = document.querySelector('.banana');
if (banana) {
    banana.addEventListener('mouseover', growBanana);
    banana.addEventListener('mouseout', shrinkBanana);
}

let nameInput = document.getElementById('monkey-name');
if (nameInput) {
    nameInput.addEventListener('input', updateMonkeyName);
}

let tree = document.querySelector('.tree');
if (tree) {
    tree.addEventListener('click', treeShake);
}