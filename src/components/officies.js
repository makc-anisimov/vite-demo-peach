const headerMenuItems = document.querySelectorAll('.officies__menuSmAllItem');
const mapImages = document.querySelectorAll('.officies__mapCities');

function showRegions() {
  headerMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Удаляем активный класс у всех элементов
      headerMenuItems.forEach(i => i.classList.remove('officies__menuSmAllItem_active'));
      // Добавляем активный класс только к текущему элементу
      item.classList.add('officies__menuSmAllItem_active');

      // Получаем id текущего элемента
      const currentId = item.id;

      // Удаляем класс видимости у всех изображений
      mapImages.forEach(img => img.classList.remove('officies__mapCities_visible'));

      // Находим изображение по id и добавляем класс видимости
      const matchingImage = document.querySelectorAll(`.officies__mapCities.officies__map${currentId}`);
      if (matchingImage.length > 0) {
        matchingImage.forEach(img => img.classList.add('officies__mapCities_visible' ));
        // matchingImage.classList.add('officies__mapCities_visible');
      }
    });
  });
}

showRegions();
