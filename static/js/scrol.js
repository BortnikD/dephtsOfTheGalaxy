const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

const listItem = document.querySelector('.interesting-now-list-item');
const listItemContent = document.querySelector('.interesting-now-list-item-content');

const backgroundsUrls = [
    '../static/images/cosmo_science/theBlackHole.png',
    '../static/images/cosmo_science/asteroid.png',
    '../static/images/cosmo_science/gammaBurst.png'
];

const contentSlides = [
    "<h3>Первые результаты рентгеновского космического телескопа XRISM раскрывают секреты черных дыр и сверхновых</h3><p>Менее чем через год после запуска в космос японского космического телескопа по рентгеновской визуализации и спектроскопии появились первые результаты, и они ошеломляют.</p><p>Рентгеновский телескоп, также известный как XRISM, эксплуатируется Японским агентством аэрокосмических исследований (JAXA) при участии Европейского космического агентства (ESA). Его первые наблюдения зафиксировали структуру,движение и температуру вещества, вращающегося вокруг сверхмассивной черной дыры, а также динамику крушения сверхновой,которое знаменует собой смерть массивной звезды.</p><p>«Эти новые наблюдения предоставляют важную информацию для понимания того, как растут черные дыры, захватывая окружающую материю, и предлагают новый взгляд на жизнь и смерть массивных звезд», — сказал в своем заявлении ученый проекта ESA XRISM Маттео Гуайнацци. «Они демонстрируют исключительные возможности миссии в исследовании высокоэнергетической Вселенной».</p>",
  
    "<h3>Рентгеновские лучи от ядерного взрыва могут перенаправить астероид</h3><p>Когда в голливудских фильмах астероиды летят к Земле, астронавты часто используют против них ядерные боеголовки, чтобы спасти человечество. Теперь ученые обнаружили, что эта стратегия может помочь отклонить приближающийся космический удар — не взорвав астероид ядерной бомбой, а взорвав его на высоте более мили над его поверхностью, чтобы обрушить на него рентгеновское излучение.</p><p>Как показывает катастрофический конец эпохи динозавров около 66 миллионов лет назад, космические столкновения могут иметь катастрофические последствия для жизни на Земле . «Астероиды — это не просто история, они все еще воздействуют на Землю сегодня», — сказал Натан Мур, физик из Sandia National Laboratories в Альбукерке, штат Нью-Мексико, в интервью Space.com. «Апофис, околоземный объект размером с Олимпийский стадион, пролетел мимо Земли буквально на прошлой неделе».</p>",

    "<h3>Астрономы зарегистрировали более 500 чрезвычайно мощных космических взрывов</h3><p>Астрономы составили потрясающий каталог, содержащий более 500 самых мощных взрывов во Вселенной. </p><p>Эти так называемые гамма-всплески, или GRB, настолько энергичны, что если бы хотя бы один из них произошел в пределах 1000 световых лет от Земли, он мог бы уничтожить нашу атмосферу с катастрофическими последствиями для жизни на нашей планете. К счастью, однако, ближайший GRB в этой новой серии из 535 наблюдений находится в 77 миллионах световых лет от Земли.</p><p>Новый каталог был создан глобальной армией из 50 астрономов во главе с Марией Джованной Дайнотти из Национальной астрономической обсерватории Японии с использованием данных с 455 телескопов по всей Земле. По важности каталог может соперничать с каталогом Мессье из 110 объектов глубокого космоса, созданным французским астрономом Шарлем Мессье 250 лет назад — каталогом, который до сих пор используют астрономы всех уровней квалификации.</p>"
];
  

var counterBackground = 0;
var countBackgrounds = backgroundsUrls.length;

function changeBackground() {
    listItem.style.backgroundImage = `url(${backgroundsUrls[counterBackground]})`;
    listItemContent.innerHTML = contentSlides[counterBackground];
}

function PrevBackground() {
    if (counterBackground === 0) {
        counterBackground = countBackgrounds - 1;
    } else {
        counterBackground--;
    }
    changeBackground();
}

function NextBackground() {
    if (counterBackground === countBackgrounds - 1) {
        counterBackground = 0;
    } else {
        counterBackground++;
    }
    changeBackground();
}


btnPrev.addEventListener('click', PrevBackground);
btnNext.addEventListener('click', NextBackground);
