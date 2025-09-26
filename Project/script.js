const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

const translations = {
  id: {
    subtitle: "✨ Selamat Datang di Proyek Kami ✨",
    instagram: "Ikuti saya !!!",
    github: "Kunjungi saya",
    whatsapp: "Chat sekarang!",
    portfolio: "Kunjungi Proyek",
  },
  en: {
    subtitle: "✨ Welcome To Our Project ✨",
    instagram: "Follow me !!!",
    github: "Visit me",
    whatsapp: "Chat me now!",
    portfolio: "Visit The Project",
  },
  jp: {
    subtitle: "✨ 私たちのプロジェクトへようこそ ✨",
    instagram: "フォローしてください !!!",
    github: "見に来てね",
    whatsapp: "今すぐチャット!",
    portfolio: "プロジェクトを見る",
  },
  ar: {
    subtitle: "✨ مرحبًا بكم في مشروعنا ✨",
    instagram: "تابعني !!!",
    github: "زرني",
    whatsapp: "تحدث معي الآن!",
    portfolio: "زيارة المشروع",
  },
};

const langSelect = document.getElementById("langSelect");
langSelect.addEventListener("change", (e) => {
  const lang = translations[e.target.value];
  document.getElementById(
    "subtitle"
  ).innerHTML = `<strong>${lang.subtitle}</strong>`;
  document.getElementById("instagramDesc").textContent = lang.instagram;
  document.getElementById("githubDesc").textContent = lang.github;
  document.getElementById("whatsappDesc").textContent = lang.whatsapp;
  document.getElementById("portofolioDesc").textContent = lang.portfolio;
});
