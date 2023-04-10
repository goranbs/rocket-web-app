
let defaultkey: string | undefined | null;
let defaultangle: number | undefined | null;
defaultkey = "no key pressed";
defaultangle = 45;

let keypressed = document.createElement('h1');
let angle = document.createElement('h1');

keypressed.textContent = defaultkey;
keypressed.id = "keypressed";
angle.textContent = defaultangle.toString();
angle.id = "angle";
angle.style.position = "absolute";
angle.style.top = "50px";

document.body.appendChild(keypressed)
document.body.appendChild(angle)


let x_dir: number = 1;
let y_dir: number = 0;
let deg: number = defaultangle;


// write a function that loads an image from using typescript
function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = () => {
            let message = `Could not load image at ${url}`;
            reject(new Error(message));
        };
        image.src = url;
    });
}



// write a function that ajusts the image size and rotation
function adjustImage(image: HTMLImageElement, width: number, height: number, rotation: number) {
    image.width = width;
    image.height = height;
    image.style.transform = `rotate(${rotation}deg)`;
}

function updateImageAngle(image: HTMLImageElement, rotation: number) {
    image.style.transform = `rotate(${rotation}deg)`;
}


// write a function that updates the image position
function updateImagePosition(image: HTMLImageElement, x: number, y: number) {
    image.style.position = 'absolute';
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
}

// write a function that moves the image every x seconds if image is not at the end of the screen
function moveImage(image: HTMLImageElement, 
                    x: number, y: number,
                    interval: number) {
    let currentX = x;
    let currentY = y;
    let imagesizeX = window.innerWidth - image.width;
    let imagesizeY = window.innerHeight - image.height;
    setInterval(() => {
        currentX += x_dir;
        currentY += y_dir;
        if (currentX > imagesizeX) {
            currentX = 0;
        }
        if (currentY > imagesizeY) {
            currentY = 0;
        }
        if (currentX < 0) {
            currentX = imagesizeX;
        }
        if (currentY < 0) {
            currentY = imagesizeY;
        }
        updateImagePosition(image, currentX, currentY);
        updateImageAngle(image, deg);
    }, interval);
}

// write a function that obtains arrow keys from keyboard input
function getArrowKeys() {
    let keys = {
        left: false,
        right: false,
        up: false,
        down: false
    };
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                keys.left = true;
                break;
            case 'ArrowRight':
                keys.right = true;
                break;
            case 'ArrowUp':
                keys.up = true;
                break;
            case 'ArrowDown':
                keys.down = true;
                break;
        }
    });
    window.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                keys.left = false;
                break;
            case 'ArrowRight':
                keys.right = false;
                break;
            case 'ArrowUp':
                keys.up = false;
                break;
            case 'ArrowDown':
                keys.down = false;
                break;
        }
    });
    return keys;
}

// function that detects arrow keys and prints them to the screen
function detectArrowKeys() {
    let keys = getArrowKeys();
    setInterval(() => {
        if (keys.left) {
            keypressed.textContent = "Left";
            x_dir = -1;
            y_dir = 0;
            deg = 225;
        }
        if (keys.right) {
            keypressed.textContent = "Right";
            x_dir = 1;
            y_dir = 0;
            deg = 45;
        }
        if (keys.up) {
            keypressed.textContent = "Up";
            y_dir = -1;
            x_dir = 0;
            deg = -45;
        }
        if (keys.down) {
            keypressed.textContent = "Down";
            y_dir = 1;
            x_dir = 0;
            deg = 135;
        }
        angle.textContent = deg.toString();
    }, 100);
}

// event listener for detectArrowKeys function
window.addEventListener('keydown', detectArrowKeys);

// take the loaded image and apply adjustImage
loadImage('https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png')
    .then(image => {
        adjustImage(image, 30, 30, deg);
        moveImage(image, 200, 200, 1.0);
        document.body.appendChild(image);
    }
);
