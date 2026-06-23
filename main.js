console.log("Привет! Скрипт подключен и работает.");

// Поиск элемента по ID и вывод текущей даты
const dateSpan = document.getElementById("update-date");
const today = new Date();

if (dateSpan) {
  dateSpan.textContent = today.toLocaleDateString("ru-RU");
}