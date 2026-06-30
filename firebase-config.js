// 👑 LEGACY 2026 - Imperial Gold Glass Configuration
// Firebase: dhsy-73aef | Cloudinary: tqhozkme
// ✨ PREMIUM: Notifications + Compact Grid + Delete Videos

const firebaseConfig = {
    apiKey: "AIzaSyDMk8rOKHA5WGCtn41gWxxvapImfbtZfhk",
    authDomain: "dhsy-73aef.firebaseapp.com",
    databaseURL: "https://dhsy-73aef-default-rtdb.firebaseio.com",
    projectId: "dhsy-73aef",
    storageBucket: "dhsy-73aef.firebasestorage.app",
    messagingSenderId: "688252698433",
    appId: "1:688252698433:web:45fbf68b6ad99a1750ebc0",
    measurementId: "G-5CVKTDXN65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "tqhozkme";
const UPLOAD_PRESET = "se33_g";

// 👑 LEGACY Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #1a1a1a, #2d2d2d, #3d3d3d)",
    "linear-gradient(135deg, #0d0d0d, #1a1a1a, #2d2d2d)",
    "linear-gradient(135deg, #1c1c1c, #2a2a2a, #333333)",
    "linear-gradient(135deg, #2d1f0e, #3d2a14, #4a3519)",
    "linear-gradient(135deg, #1a1206, #2d1f0e, #3d2a14)",
    "linear-gradient(135deg, #0f0f0f, #1c1c1c, #d4a843)"
];

// 👑 App Info
const APP_NAME = "LEGACY";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#d4a843";
const SECONDARY_COLOR = "#b8941f";

console.log('👑 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #d4a843; font-size: 16px; font-weight: bold;');
