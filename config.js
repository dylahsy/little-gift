/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "frans hendra winata",
  photo: "./img/frans.jpeg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi bubub",
      subtitle: "i want to tell you somethings!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! :D",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday to youu!! \n 10 Juni adalah hari yang sangat spesial, hari ketika dunia menghadirkan seseorang yang menjadi alasan banyaknya senyum, doa, dan rasa syukur dalam hidupku.  Hari ketika lahir seseorang dengan hati yang begitu hangat, seseorang yang selalu berusaha kuat meski sering menyimpan lelahnya sendiri, seseorang yang mungkin tidak sempurna, tetapi selalu berhasil menjadi orang yang paling berarti bagiku. \n Di hari ulang tahun ini, aku mau mengingatkan satu hal! Bububku adalah seseorang yang sangat berharga. Lebih berharga dari yang bubub sadari. Yang kehadirannya membawa kebahagiaan bagi banyak orang, termasuk aku yang sangat bersyukur bisa mengenal dan mencintai ayang seperti sekarang. Terima kasih karena sudah lahir ke dunia ini. Terima kasih karena telah menjadi bagian dari hidup aku, dan terima kasih karena sampai hari ini masih memilih untuk bertahan. \n Semoga di usia yang baru ini, semua doa baik yang ayang simpan diam-diam menemukan jalannya untuk dikabulkan. Semoga setiap langkah ayang dipenuhi kemudahan, setiap kesedihan digantikan dengan kebahagiaan, dan setiap harapan menemukan kenyataannya. \n Selamat bertambah usia sayangku, wishing you a wonderful year ahead filled with joy, love, and endless happiness! 🫶🏻❤️",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "Maaf ya hadiahnya nyusul :(",
        "I want it to be something special.",
        "especially for My <strong>Bubub</strong>.",
        "Because,",
        "you are one of the most beautiful things that ever happened in my life  <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "Teruntuk manusia favoritku, semoga segala hal baik selalu punya cara untuk menuju kearahmu.",
      author: "hasyadilla",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May the happines always be with you! ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Udah abis bubub hehe, last words ''I Love You''.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
