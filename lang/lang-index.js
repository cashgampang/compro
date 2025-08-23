const translations = {
  en: {
    index: {
      hero1_title: "Pure Freshness",
      hero1_text: "Experience the taste of nature",
      hero2_title: "Farm to Table",
      hero2_text: "Direct from our happy cows",
      hero3_title: "Premium Quality",
      hero3_text: "Crafted with care and love",

      about_title: "Fill your day with the freshness of pure milk",
      about_text:
        "Experience the difference that comes from caring about quality, health, and your daily happiness",
      about_promise_title: "Our Promise to You",
      about_promise_text1:
        "Every glass of our milk carries the essence of pure countryside freshness. We believe that quality nutrition should never be compromised, which is why our cows graze on the finest pastures and receive the utmost care.",
      about_promise_text2:
        "When you choose our milk, you're not just nourishing your body – you're elevating your mood, boosting your energy, and connecting with the natural goodness that only comes from truly pure, farm-fresh dairy.",
      about_button: "Learn More About Us",

      why_title: "Our Quality Process",
      why_text:
        "From farm to your table, every step is crafted with precision and care",
      process1_title: "Happy Cows",
      process1_text:
        "Our cows roam freely in lush green pastures, enjoying a natural diet and stress-free environment that directly impacts the quality and taste of their milk.",
      process2_title: "Fresh Milking",
      process2_text:
        "Using state-of-the-art milking technology, we ensure the highest hygiene standards while maintaining the natural goodness and nutritional value of fresh milk.",
      process3_title: "Quality Testing",
      process3_text:
        "Every batch undergoes rigorous quality testing to ensure purity, freshness, and nutritional excellence before it reaches your family.",
      process4_title: "Fresh Delivery",
      process4_text:
        "Our efficient cold-chain delivery system ensures that the milk reaches you within hours of milking, preserving its natural freshness and taste.",

      trust_title: "Trusted by Thousands",
      trust_text: "Join our growing family of satisfied customers",
      stat1_title: "Happy Customers",
      stat2_title: "Liters Sold",
      stat3_title: "Average Rating",
    },
  },

  id: {
    index: {
      hero1_title: "Kesegaran Murni",
      hero1_text: "Rasakan cita rasa alam",
      hero2_title: "Dari Peternakan ke Meja",
      hero2_text: "Langsung dari sapi kami yang bahagia",
      hero3_title: "Kualitas Premium",
      hero3_text: "Dibuat dengan penuh perhatian dan cinta",

      about_title: "Isi hari Anda dengan kesegaran susu murni",
      about_text:
        "Rasakan perbedaan yang datang dari perhatian terhadap kualitas, kesehatan, dan kebahagiaan harian Anda",
      about_promise_title: "Janji Kami kepada Anda",
      about_promise_text1:
        "Setiap gelas susu kami membawa esensi kesegaran pedesaan yang murni. Kami percaya bahwa nutrisi berkualitas tidak boleh dikompromikan, itulah mengapa sapi kami merumput di padang rumput terbaik dan menerima perawatan maksimal.",
      about_promise_text2:
        "Ketika Anda memilih susu kami, Anda tidak hanya menyehatkan tubuh Anda – Anda juga meningkatkan suasana hati, meningkatkan energi, dan terhubung dengan kebaikan alami yang hanya berasal dari susu murni langsung dari peternakan.",
      about_button: "Pelajari Lebih Lanjut Tentang Kami",

      why_title: "Proses Kualitas Kami",
      why_text:
        "Dari peternakan ke meja Anda, setiap langkah dibuat dengan presisi dan perhatian",
      process1_title: "Sapi Bahagia",
      process1_text:
        "Sapi kami berkeliaran bebas di padang rumput hijau yang subur, menikmati makanan alami dan lingkungan tanpa stres yang berdampak langsung pada kualitas dan rasa susu mereka.",
      process2_title: "Pemerahan Segar",
      process2_text:
        "Menggunakan teknologi pemerahan canggih, kami memastikan standar kebersihan tertinggi sambil mempertahankan kebaikan alami dan nilai gizi susu segar.",
      process3_title: "Pengujian Kualitas",
      process3_text:
        "Setiap batch menjalani pengujian kualitas yang ketat untuk memastikan kemurnian, kesegaran, dan keunggulan nutrisi sebelum sampai ke keluarga Anda.",
      process4_title: "Pengiriman Segar",
      process4_text:
        "Sistem pengiriman rantai dingin kami yang efisien memastikan susu sampai kepada Anda dalam hitungan jam setelah pemerahan, menjaga kesegaran dan rasanya yang alami.",

      trust_title: "Dipercaya oleh Ribuan Orang",
      trust_text:
        "Bergabunglah dengan keluarga kami yang terus bertumbuh dari pelanggan yang puas",
      stat1_title: "Pelanggan Bahagia",
      stat2_title: "Liter Terjual",
      stat3_title: "Rata-rata Penilaian",
    },
  },
};

function getCurrentPage() {
  // misal simple: ambil nama file tanpa .html
  const path = window.location.pathname.split("/");
  const file = path[path.length - 1] || "index.html";
  return file.replace(".html", "");
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  updateContent(lang);
}

function updateContent(lang) {
  const translation = translations[lang] || translations["en"];
  const page = getCurrentPage();

  if (page === "index") {
    // Hero Slider Section
    document.querySelector(
      "#hero-section .hero-slider > div:nth-child(1) h1"
    ).textContent = translation.index.hero1_title;
    document.querySelector(
      "#hero-section .hero-slider > div:nth-child(1) p"
    ).textContent = translation.index.hero1_text;
    document.querySelector(
      "#hero-section .hero-slider > div:nth-child(2) h1"
    ).textContent = translation.index.hero2_title;
    document.querySelector(
      "#hero-section .hero-slider > div:nth-child(2) p"
    ).textContent = translation.index.hero2_text;
    document.querySelector(
      "#hero-section .hero-slider > div:nth-child(3) h1"
    ).textContent = translation.index.hero3_title;
    document.querySelector(
      "#hero-section .hero-slider > div:nth-child(3) p"
    ).textContent = translation.index.hero3_text;

    // About Us Section
    document.querySelector("#us h2").textContent =
      translation.index.about_title;
    document.querySelector("#us .text-center p").textContent =
      translation.index.about_text;
    document.querySelector("#us h3").textContent =
      translation.index.about_promise_title;
    document.querySelector(
      "#us .grid > div:nth-child(1) p:nth-child(2)"
    ).textContent = translation.index.about_promise_text1;
    document.querySelector(
      "#us .grid > div:nth-child(1) p:nth-child(3)"
    ).textContent = translation.index.about_promise_text2;
    document.querySelector("#us button").textContent =
      translation.index.about_button;

    // Why Choose Us Section
    document.querySelector("#why_should_us h2").textContent =
      translation.index.why_title;
    document.querySelector("#why_should_us .text-center p").textContent =
      translation.index.why_text;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(1) h3"
    ).textContent = translation.index.process1_title;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(1) p"
    ).textContent = translation.index.process1_text;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(2) h3"
    ).textContent = translation.index.process2_title;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(2) p"
    ).textContent = translation.index.process2_text;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(3) h3"
    ).textContent = translation.index.process3_title;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(3) p"
    ).textContent = translation.index.process3_text;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(4) h3"
    ).textContent = translation.index.process4_title;
    document.querySelector(
      "#why_should_us .space-y-20 > div:nth-child(4) p"
    ).textContent = translation.index.process4_text;

    // Trust & Reviews Section
    document.querySelector("#trust h2").textContent =
      translation.index.trust_title;
    document.querySelector("#trust .text-center p").textContent =
      translation.index.trust_text;
    document.querySelector(
      "#trust .grid > div:nth-child(1) > div:nth-child(2)"
    ).textContent = translation.index.stat1_title;
    document.querySelector(
      "#trust .grid > div:nth-child(2) > div:nth-child(2)"
    ).textContent = translation.index.stat2_title;
    document.querySelector(
      "#trust .grid > div:nth-child(3) > div:nth-child(2)"
    ).textContent = translation.index.stat3_title;
  }
}

// auto jalan pas load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  updateContent(savedLang);
});
