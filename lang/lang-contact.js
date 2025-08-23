const translations = {
  en: {
    contact: {
      // Banner Section
      banner_title: "Contact Us",
      banner_text: "We're here to connect with you",

      // Contact Information Section
      contact_info_title: "Contact Information",
      contact_info_text: "We're here to answer all your questions",

      // Phone Card
      phone_title: "Phone",
      phone_text: "Reach us anytime",
      phone_number1: "+62 895 2828 6844",
      phone_number2: "+62 895 2828 6844",

      // Email Card
      email_title: "Email",
      email_text: "Send us a message",
      email_address1: "info@puremilkco.com",
      email_address2: "support@puremilkco.com",

      // Address Card
      address_title: "Address",
      address_text: "Visit our office",
      address_line1: "Jl. Sudirman No. 123",
      address_line2: "Jakarta Pusat, 10220",

      // Our Location Section
      location_title: "Our Location",
      location_text: "Find us on the map",
      location_details_title: "Location Details",
      company_name: "PT. Pure Milk Indonesia",
      location_address1: "Jl. Jenderal Sudirman No. 123",
      location_address2: "Karet Tengsin, Tanah Abang",
      location_address3: "Jakarta Pusat 10220, Indonesia",

      // FAQ Section
      faq_title: "Frequently Asked Questions",
      faq_text: "Find answers to common questions",
      faq_question1: "What makes your milk different from others?",
      faq_answer1:
        "Our milk comes from grass-fed cows at local farms, ensuring top quality and freshness. We use no artificial additives and maintain strict quality control during production.",
      faq_question2: "Do you offer home delivery?",
      faq_answer2:
        "Yes! We offer daily home delivery in Jakarta and surrounding areas. Orders placed before 6 PM are delivered the next morning between 6 AM and 9 AM.",
      faq_question3: "How long does your milk stay fresh?",
      faq_answer3:
        "Our milk stays fresh for 5-7 days when properly refrigerated. We recommend consuming it within 3 days of opening for the best taste and quality.",
      faq_question4: "Can I customize my order?",
      faq_answer4:
        "You can mix and match different milk types, adjust delivery frequency, and even pause deliveries when you're away. Contact our customer service for personalized orders.",
      faq_question5: "What payment methods do you accept?",
      faq_answer5:
        "We accept cash on delivery, bank transfers, credit/debit cards, and popular e-wallet services like GoPay, OVO, and DANA for your convenience.",
    },
  },
  id: {
    contact: {
      // Banner Section
      banner_title: "Hubungi Kami",
      banner_text: "Kami di sini untuk terhubung dengan Anda",

      // Contact Information Section
      contact_info_title: "Informasi Kontak",
      contact_info_text: "Kami di sini untuk menjawab segala pertanyaan Anda",

      // Phone Card
      phone_title: "Telepon",
      phone_text: "Hubungi kami kapan saja",
      phone_number1: "+62 895 2828 6844",
      phone_number2: "+62 895 2828 6844",

      // Email Card
      email_title: "Email",
      email_text: "Kirimkan pesan kepada kami",
      email_address1: "info@puremilkco.com",
      email_address2: "dukungan@puremilkco.com",

      // Address Card
      address_title: "Alamat",
      address_text: "Kunjungi kantor kami",
      address_line1: "Jl. Sudirman No. 123",
      address_line2: "Jakarta Pusat, 10220",

      // Our Location Section
      location_title: "Lokasi Kami",
      location_text: "Temukan kami di peta",
      location_details_title: "Detail Lokasi",
      company_name: "PT. Pure Milk Indonesia",
      location_address1: "Jl. Jenderal Sudirman No. 123",
      location_address2: "Karet Tengsin, Tanah Abang",
      location_address3: "Jakarta Pusat 10220, Indonesia",

      // FAQ Section
      faq_title: "Pertanyaan yang Sering Diajukan",
      faq_text: "Temukan jawaban untuk pertanyaan umum",
      faq_question1: "Apa yang membuat susu Anda berbeda dari yang lain?",
      faq_answer1:
        "Susu kami berasal dari sapi yang diberi makan rumput di peternakan lokal, memastikan kualitas dan kesegaran terbaik. Kami tidak menggunakan bahan tambahan buatan dan menjaga kontrol kualitas yang ketat selama proses produksi.",
      faq_question2: "Apakah Anda menawarkan pengiriman ke rumah?",
      faq_answer2:
        "Ya! Kami menawarkan layanan pengiriman ke rumah setiap hari di wilayah Jakarta dan sekitarnya. Pesanan yang dilakukan sebelum pukul 18.00 akan dikirim keesokan paginya antara pukul 06.00-09.00.",
      faq_question3: "Berapa lama susu tetap segar?",
      faq_answer3:
        "Susu kami tetap segar selama 5-7 hari jika disimpan dengan benar di kulkas. Kami menyarankan untuk mengonsumsinya dalam waktu 3 hari setelah dibuka untuk rasa dan kualitas terbaik.",
      faq_question4: "Bisakah saya menyesuaikan pesanan saya?",
      faq_answer4:
        "Anda dapat mencampur dan memilih berbagai jenis susu, menyesuaikan frekuensi pengiriman, dan bahkan menjeda pengiriman saat Anda sedang tidak di rumah. Hubungi layanan pelanggan kami untuk pesanan yang dipersonalisasi.",
      faq_question5: "Metode pembayaran apa yang Anda terima?",
      faq_answer5:
        "Kami menerima pembayaran tunai saat pengiriman, transfer bank, kartu kredit/debit, dan layanan e-wallet populer seperti GoPay, OVO, dan DANA untuk kenyamanan Anda.",
    },
  },
};

function getCurrentPage() {
  const path = window.location.pathname.split("/");
  const file = path[path.length - 1] || "contact.html";
  return file.replace(".html", "");
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  updateContent(lang);
}

function updateContent(lang) {
  const translation = translations[lang] || translations["id"];
  const page = getCurrentPage();

  // Select all elements with data-translate attribute
  const elements = document.querySelectorAll("[data-translate]");
  
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const keys = key.split(".");
    let value = translation;
    
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    
    if (value) {
      element.textContent = value;
    }
  });
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "id";
  updateContent(savedLang);

  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
});