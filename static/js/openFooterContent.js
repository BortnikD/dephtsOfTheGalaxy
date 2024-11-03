$(document).ready(function () {
    // Обрабатываем событие click для каждого элемента .footer-list__item
    $('.footer-list__item').each(function() {
        const $item = $(this); // Сохраняем ссылку на текущий элемент

        // Обработчик клика для первой линии списка
        $item.find('.li-first-line').click(function(event) {
            // Останавливаем любую текущую анимацию и переключаем панель с эффектом слайда
            $item.find('.footer-content').stop(true, true).slideToggle(300); // Настройте скорость, как нужно
            
            // Переключаем класс expanded у элемента
            $item.toggleClass('expanded');
        });

        // Предотвращаем закрытие меню при нажатии внутри footer-content
        $item.find('.footer-content').click(function(event) {
            event.stopPropagation();
        });
    });
});