
// ======================== 行状态 ========================

let lineStates = []; // {phase:"idle"|"burning"|"done", progress:0-1}
let nextLineIndex = 0;
let lineWidths = [];
let keepWordPositions = [];
let customFont; // 👈 新增：存放 loadFont 载入的字体

// ======================== 样式 ========================

let textSizeValue = 25;
let textFontValue = "usefont";
let lineSpacing = 48;

// ======================== 背景 ========================

let bgImg;
let bgLoaded = false;

// ⭐改成你的背景图片文件名
const bgImgPath = "paper1.png";

// ======================== 摄像头 + handpose ========================

let video;
let handpose;
let predictions = [];

let thumbHistory = [];
let historyLength = 10;
let swipeReady = true;
let swipeCooldown = 0;
let debugDx = 0;

// ======================== preload ========================

function preload() {
  customFont = loadFont('usefont.ttf');
  bgImg = loadImage(
    bgImgPath,
    () => { bgLoaded = true; console.log("Background loaded"); },
    () => { bgLoaded = false; console.warn("Failed to load background"); }
  );
}

// ======================== setup ========================
