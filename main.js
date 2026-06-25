const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

window.addEventListener("DOMContentLoaded", () => {

  const projects = [
  { id: 1, title: "Сайт-визитка", category: "frontend", description: "Разработка адаптивного одностраничного сайта" },
  { id: 2, title: "Таск-трекер", category: "backend", description: "Простое приложение для управления задачами" },
  { id: 3, title: "Макет мобильного приложения", category: "design", description: "Проектирование пользовательского интерфейса"},
  { id: 4, title: "Игра на чистом JS", category: "frontend", description: "Разработка интерактивной мини-игры"}
];

const container = document.getElementById("project-container");

function renderProject(data) {
  if (!container) return;

  container.innerHTML = "";

  data.forEach((project, index) => {
    const html = `
    <article style="animation-delay: ${index * 0.15}s;">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      </article>
      `;
      container.insertAdjacentHTML("beforeend", html);
  });
}

renderProject(projects);

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    const filtered = filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

    renderProject(filtered);
  });
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  renderProject(filtered);
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

console.log("Привет! Скрипт подключен и работает.");

// Поиск элемента по ID и вывод текущей даты
const dateSpan = document.getElementById("update-date");
const today = new Date();

if (dateSpan) {
  dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("expanded");
  toggleBtn.textContent = extraInfo.classList.contains("expanded")
    ? "Скрыть"
    : "Показать больше";
});

const form = document.getElementById("contact-form");

if (form) {
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Введите имя";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Введите корректный email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (isValid) {
    alert("Форма заполнена верно! (отправка на сервер не настроена)");
    form.reset();
  }
});
}
});

