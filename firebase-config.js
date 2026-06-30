// 💙 X-CLIP 2026 - Sky Blue Glass Configuration
// Firebase: dhsy-73aef | Cloudinary: se33_g
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
const CLOUD_NAME = "se33_g";
const UPLOAD_PRESET = "tqhozkme";

// 💙 X-CLIP Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #0369a1, #0284c7, #0ea5e9)",
    "linear-gradient(135deg, #075985, #0369a1, #0284c7)",
    "linear-gradient(135deg, #0c4a6e, #075985, #0369a1)",
    "linear-gradient(135deg, #38bdf8, #0ea5e9, #0284c7)",
    "linear-gradient(135deg, #7dd3fc, #38bdf8, #0ea5e9)",
    "linear-gradient(135deg, #0a1628, #0f2640, #38bdf8)"
];

// 💙 App Info
const APP_NAME = "X-CLIP";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#0ea5e9";
const SECONDARY_COLOR = "#38bdf8";

console.log('💙 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #0ea5e9; font-size: 16px; font-weight: bold;');
