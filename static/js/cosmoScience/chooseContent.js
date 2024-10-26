const btnAstronomy = document.querySelector('#astronomy');
const btnBlackHole = document.querySelector('#black-hole');
const btnCosmoTech = document.querySelector('#cosmo-technologies');
const btnColonia = document.querySelector('#colonia');

var mainContent = document.querySelector('.science-main');

var contentList = [
    `<h1>Астрономия: Снимки глубокого космоса и новые открытия</h1>

<p>Астрономия — одна из самых древних наук, которая продолжает вдохновлять людей на изучение бескрайних просторов Вселенной. В последние десятилетия технологии шагнули далеко вперед, что позволило астрономам делать поразительные снимки глубокого космоса и открывать новые планеты за пределами нашей Солнечной системы — экзопланеты. Изучение галактик помогает нам лучше понять происхождение и эволюцию Вселенной.</p>

<h2>Снимки глубокого космоса</h2>
<img src="../static/images/cosmo_science/article/cosmos.png" class="article-image">

<p>Современные космические телескопы, такие как «Хаббл» и «Джеймс Уэбб», предоставляют человечеству уникальную возможность заглянуть в глубины космоса. Они фиксируют изображения объектов, расположенных на расстояниях в миллиарды световых лет от Земли. Эти снимки позволяют не только любоваться красотой далеких галактик, но и изучать процессы, происходящие в них.</p>

<p>Например, Туманность Орла с ее знаменитыми «столпами творения» является родильным домом для новых звезд. Эти изображения открывают астрономам тайны формирования звездных систем и показывают, как межзвездный газ и пыль собираются в плотные облака, где затем возникают звезды.</p>

<p>Телескоп «Джеймс Уэбб» недавно сделал прорыв, запечатлев самые ранние галактики, образовавшиеся после Большого взрыва. Эти снимки позволяют изучать химический состав, распределение материи и скорость формирования звезд, что помогает понять, как Вселенная развивалась на ранних этапах своего существования.</p>

<h2>Открытия экзопланет</h2>
<img src="../static/images/cosmo_science/article/exoplanets.png" class="article-image">

<p>Еще одной важной областью астрономических исследований являются экзопланеты — планеты, вращающиеся вокруг других звезд. С момента первого открытия экзопланеты в 1992 году астрономы обнаружили тысячи таких объектов. Некоторые из них имеют условия, схожие с земными, что дает надежду на возможность существования жизни за пределами Земли.</p>

<p>С помощью космического телескопа «Кеплер» и других исследовательских миссий ученые находят планеты разных типов: от газовых гигантов, подобных Юпитеру, до землеподобных планет, которые могут иметь твердые поверхности и воду в жидком виде. Одним из самых интересных открытий является система TRAPPIST-1, где сразу несколько планет находятся в «зоне обитаемости» — области вокруг звезды, где может существовать вода в жидком состоянии.</p>

<p>Недавние исследования показывают, что атмосферы некоторых экзопланет могут содержать молекулы, свидетельствующие о потенциальной биологической активности. Например, присутствие водяного пара, метана и углекислого газа на определенных планетах может указывать на условия, схожие с земными.</p>

<h2>Изучение галактик</h2>
<p>Галактики — это огромные звездные системы, в которых могут находиться миллионы и даже миллиарды звезд. Изучение галактик дает представление о том, как они формируются, эволюционируют и взаимодействуют друг с другом. Некоторые из них находятся в процессе столкновения, что приводит к активному звездообразованию.</p>

<img src="../static/images/cosmo_science/article/galaxy.png" class="article-image">

<p>Снимки таких галактик, как Андромеда или Центавр А, поражают своим величием. Благодаря им ученые могут исследовать структуру галактик, их ядра, а также сверхмассивные черные дыры, которые часто находятся в центрах галактик.</p>

<p>Недавние исследования подтверждают, что столкновения галактик играют ключевую роль в их эволюции. Такие взаимодействия могут способствовать активному образованию новых звезд, что делает их важными объектами для понимания процессов звездообразования. Ученые также изучают, как темная материя влияет на структуру и поведение галактик, что остается одной из наиболее загадочных областей астрофизики.</p>

<h2>Заключение</h2>
<p>Современные достижения астрономии позволяют нам взглянуть на Вселенную с новых позиций. Снимки глубокого космоса и открытия экзопланет открывают перед учеными новые горизонты для исследований и делают космос еще более загадочным и увлекательным для человечества. Продолжая исследования, ученые надеются разгадать еще больше тайн, стоящих за процессами, формирующими наш космос.</p>
`,

`<h1>Физика черных дыр</h1>

        <p>Черные дыры — это одни из самых загадочных и экзотических объектов во Вселенной. Они представляют собой
            области пространства с гравитацией настолько мощной, что ни свет, ни материя не могут покинуть их пределы.
            Исследование черных дыр — важная часть современной астрофизики, поскольку они открывают двери в понимание
            гравитации, релятивистской физики и даже квантовой механики.</p>
        <img src="../static/images/cosmo_science/article/physicsBlackHole.png" class="article-image">
        <h2>Теория относительности и гравитация</h2>
        <p>Феномен черных дыр впервые был предсказан в рамках теории общей относительности Альберта Эйнштейна. Согласно
            этой теории, гравитация — это искривление пространства-времени под воздействием массивных объектов. Черные
            дыры являются крайней формой такого искривления. Когда звезда с массой значительно превышающей солнечную
            исчерпывает своё топливо и начинает коллапсировать, гравитация сжимает её до такой степени, что она
            превращается в черную дыру, создавая так называемый "горизонт событий" — границу, за пределами которой нет
            возврата.</p>
        <img src="../static/images/cosmo_science/article/relative.png" class="article-image">

        <p>Именно благодаря Эйнштейновской теории мы смогли понять, что черные дыры могут искривлять время и
            пространство. Для наблюдателя, находящегося на расстоянии, время кажется замедленным для объекта,
            приближающегося к горизонту событий. Этот эффект известен как "временное расширение". Вблизи черной дыры
            пространство настолько искривлено, что все пути ведут внутрь, и объект не может избежать притяжения, даже
            двигаясь со скоростью света.</p>

        <h2>Типы черных дыр</h2>
        <img src="../static/images/cosmo_science/article/typesBlackHoles.png" class="article-image">

        <p>Астрофизики различают несколько типов черных дыр в зависимости от их массы и происхождения. Существует три
            основные категории:</p>
        <ul>
            <li><strong>Черные дыры звёздной массы</strong> — образуются в результате гравитационного коллапса массивных
                звезд. Их масса может составлять от нескольких солнечных масс до десятков. Именно такие черные дыры
                наиболее распространены во Вселенной.</li>
            <li><strong>Сверхмассивные черные дыры</strong> — эти объекты находятся в центрах большинства галактик и
                могут иметь массу, равную миллионам и даже миллиардам солнечных масс. Считается, что такие черные дыры
                играют важную роль в эволюции галактик и могут оказывать значительное влияние на их формирование и
                динамику.</li>
            <li><strong>Промежуточные черные дыры</strong> — объекты со средней массой, существование которых долгое
                время было теоретическим. Недавние открытия показали, что такие черные дыры могут формироваться при
                слиянии звёздных объектов или в условиях плотных звездных скоплений.</li>
        </ul>

        <h2>Горизонт событий и внутренняя структура</h2>
        <p>Горизонт событий — это своеобразная граница черной дыры, за которую свет и материя не могут вернуться. На
            уровне горизонта событий гравитация столь сильна, что даже фотоны (частицы света) не могут преодолеть её
            притяжение. Но что находится за горизонтом событий, остаётся загадкой. Считается, что все вещество,
            попадающее в черную дыру, сжимается в сингулярность — точку бесконечной плотности, где законы физики, как мы
            их знаем, перестают действовать.</p>

        <p>Современные теории, такие как теория струн и квантовая гравитация, пытаются объяснить природу сингулярности.
            Одной из гипотез является то, что сингулярность на самом деле не является точкой, а представляет собой
            структуру, связанную с квантовыми эффектами, которые мы ещё не до конца понимаем. Исследование этих явлений
            может помочь ученым объединить общую теорию относительности и квантовую механику.</p>

        <h2>Испарение черных дыр — теория Хокинга</h2>
        <p>В 1974 году Стивен Хокинг выдвинул теорию, которая изменила наше понимание черных дыр. Согласно Хокингу,
            черные дыры не являются полностью "черными" и могут испускать излучение, которое получило название
            "излучение Хокинга". Этот процесс приводит к тому, что черные дыры теряют массу и со временем могут
            полностью испариться. Это явление вызвало интерес, так как оно показывает, что черные дыры подвержены
            квантовым эффектам, и даже такие массивные объекты не могут существовать вечно.</p>
            <img src="../static/images/cosmo_science/article/hawking.png" class="article-image">

        <p>Излучение Хокинга также вызывает вопросы о судьбе информации, попадающей в черную дыру. По законам квантовой
            механики информация не должна исчезать, однако, если черная дыра испаряется, то что происходит с этой
            информацией? Этот вопрос, известный как "парадокс потери информации", до сих пор является одним из самых
            загадочных вопросов в физике.</p>

        <h2>Исследования с помощью телескопа Event Horizon</h2>
    
        <p>Проект Event Horizon Telescope (EHT) — международная сеть радиотелескопов, объединённых для создания единого
            "телескопа размером с Землю". В 2019 году EHT удалось запечатлеть первое изображение горизонта событий
            черной дыры в галактике М87. Это достижение подтвердило теоретические предсказания и предоставило уникальные
            данные о природе черных дыр и их окружении.</p>

        <p>Дальнейшие наблюдения с помощью EHT и других телескопов помогут изучить магнитные поля и динамику вещества,
            окружающего черные дыры. Эти данные могут пролить свет на процессы аккреции — процесса, при котором материя
            падает в черную дыру, формируя вокруг нее горячий аккреционный диск. Эти диски излучают мощные потоки
            энергии и могут оказывать влияние на всю галактику.</p>

        <h2>Квантовая гравитация и гипотезы о червоточинах</h2>
        <p>Одной из интереснейших тем, связанных с черными дырами, является гипотеза о существовании червоточин, или
            "кротовых нор" — гипотетических туннелей, соединяющих разные части Вселенной. Некоторые ученые предполагают,
            что черные дыры могут быть входами в такие червоточины, что потенциально делает возможным путешествия через
            пространство и время. Однако эта идея пока остаётся на уровне теоретической физики, и её проверка требует
            объединения квантовой теории и теории гравитации.</p>

        <img src="../static/images/cosmo_science/article/quante.png" class="article-image">

        <p>Квантовая гравитация — одна из наиболее активно изучаемых областей современной физики. Она пытается
            объединить теорию относительности Эйнштейна, описывающую гравитацию, и квантовую механику, управляющую
            микромиром. Исследования черных дыр могут стать ключом к созданию единой теории, объясняющей все
            фундаментальные силы природы.</p>

        <h2>Заключение</h2>
        <p>Черные дыры остаются одними из самых загадочных объектов во Вселенной. Исследования в области физики черных
            дыр не только помогают глубже понять природу гравитации и квантовой механики, но и открывают новые горизонты
            для изучения фундаментальных законов мироздания. Вопросы о судьбе информации, природе сингулярности и
            возможности существования червоточин продолжают стимулировать ученых к поиску ответов, приближая нас к
            раскрытию тайн самой структуры Вселенной.</p>
`,

`<h1>Космические технологии</h1>

        <p>Космические технологии являются основой для многих современных открытий в астрономии и астрофизике. Благодаря
            развитию высокочувствительных телескопов, а также рентгеновских и инфракрасных наблюдений, учёные могут
            исследовать самые удаленные и труднодоступные объекты во Вселенной. Эти технологии позволяют наблюдать
            галактики, черные дыры, звезды и даже экзопланеты с невероятной точностью, открывая перед нами тайны
            космоса, которые раньше были недоступны.</p>

        <h2>Новые телескопы</h2>
        <img src="../static/images/cosmo_science/article/telescope.png" class="article-image">

        <p>Современные телескопы представляют собой сложные научные инструменты, работающие в различных спектрах
            электромагнитного излучения. Наиболее известные из них, такие как телескопы «Хаббл» и «Джеймс Уэбб», стали
            символами прорывных исследований и достижений в астрономии. Однако помимо них, сегодня создаются и
            запускаются новые телескопы, которые позволят исследовать ещё более далекие уголки космоса и обнаруживать
            тонкие детали межзвездного пространства.</p>

        <p><strong>Космический телескоп "Джеймс Уэбб"</strong> — это один из самых мощных инфракрасных телескопов,
            предназначенный для изучения самых ранних галактик, которые возникли вскоре после Большого взрыва. Телескоп
            позволяет видеть объекты, находящиеся на огромных расстояниях, и детально изучать их состав и структуру.
            Благодаря инфракрасному диапазону "Джеймс Уэбб" может проникать сквозь облака пыли, которые блокируют
            видимый свет, и исследовать области, где формируются звезды и планетные системы.</p>


        <p><strong>Планы на будущие телескопы</strong> включают такие проекты, как телескоп «Нэнси Грейс Роман», который
            будет работать в инфракрасном диапазоне и сможет картографировать огромные участки неба с высоким
            разрешением. Этот телескоп поможет астрономам исследовать темную энергию, экзопланеты и историю формирования
            галактик.</p>

        <h2>Рентгеновские наблюдения</h2>
        <p>Рентгеновские наблюдения открывают перед учеными возможность заглянуть в такие экстремальные регионы
            Вселенной, как ядра галактик, области вокруг черных дыр и места взрыва сверхновых. Рентгеновское излучение
            возникает при высокоэнергетических процессах и позволяет изучать физику объектов, недоступных для наблюдения
            в видимом свете.</p>
        <img src="../static/images/cosmo_science/article/rentgen.png" class="article-image">

        <p><strong>Обсерватория "Чандра"</strong> — это рентгеновская обсерватория НАСА, которая работает на орбите
            Земли с 1999 года. Она дала человечеству уникальную возможность наблюдать рентгеновское излучение, исходящее
            от черных дыр, нейтронных звезд и газовых скоплений. Благодаря "Чандре" астрономы обнаружили структуры в
            галактиках и квазарах, которые невозможно увидеть в других диапазонах, что позволяет изучать процессы,
            происходящие при сверхвысоких температурах.</p>

        <p>Современные рентгеновские обсерватории продолжают развитие в этой области. Новые миссии, такие как
            <strong>телескоп eROSITA</strong> (расширенная рентгеновская обсерватория спектроскопии и наблюдения),
            предназначены для создания рентгеновской карты всего неба с целью поиска горячего газа, темной материи и
            других объектов, излучающих в рентгеновском спектре.</p>

        <h2>Инфракрасные наблюдения</h2>
        <p>Инфракрасное излучение позволяет изучать космос через густые облака газа и пыли, что делает этот спектр
            крайне важным для астрономов. В то время как видимый свет блокируется космической пылью, инфракрасное
            излучение может проходить через эти препятствия и достигать телескопов, давая ученым возможность наблюдать
            процессы, которые в других диапазонах остаются скрытыми.</p>
        <img src="../static/images/cosmo_science/article/red.png" class="article-image">
        <p>Помимо телескопа "Джеймс Уэбб", другой важной инфракрасной обсерваторией является <strong>Космическая
                инфракрасная обсерватория (ISO)</strong> Европейского космического агентства, которая помогла астрономам
            исследовать процессы звездообразования, протопланетные диски и эволюцию галактик. Несмотря на завершение
            миссии, её данные продолжают использоваться для анализа процессов в пылевых туманностях и на ранних стадиях
            формирования звездных систем.</p>

        <p><strong>Телескоп Спитцер</strong>, работавший с 2003 по 2020 год, также сыграл значительную роль в
            инфракрасной астрономии. Его наблюдения позволили открыть экзопланеты и изучить их атмосферы, а также
            исследовать области космоса, где возникают звезды и планеты. Спитцер, подобно "Джеймсу Уэббу", мог наблюдать
            сквозь толстые слои пыли и фиксировать скрытые процессы, происходящие в космосе.</p>

        <h3>Адаптивная оптика и передовые наземные телескопы</h3>
        <p>Хотя космические телескопы позволяют наблюдать космос из-за пределов атмосферы Земли, наземные обсерватории
            также достигли значительного прогресса благодаря технологиям адаптивной оптики. Эти технологии корректируют
            искажения, вызванные атмосферой Земли, и позволяют получать изображения с высоким разрешением.</p>

        <p><strong>Очень Большой Телескоп (VLT)</strong> в Чили — одна из самых передовых наземных обсерваторий,
            использующая адаптивную оптику для изучения звезд, экзопланет и галактик. Система из четырех телескопов,
            каждый из которых имеет диаметр 8,2 метра, работает в видимом и инфракрасном диапазонах, и её данные
            сопоставимы по качеству с космическими наблюдениями.</p>

        <p><strong>Будущий Экстремально Большой Телескоп (ELT)</strong>, также строящийся в Чили, будет крупнейшим
            оптическим и инфракрасным телескопом в мире. С диаметром зеркала 39 метров, ELT сможет наблюдать объекты,
            недоступные другим телескопам, и изучать экзопланеты, далёкие галактики и даже химический состав звёздных
            систем с беспрецедентной детализацией.</p>

        <h2>Революция в области астрофизики</h2>
        <p>Развитие космических технологий кардинально изменило возможности астрономии и астрофизики. Мы не только можем
            видеть объекты в видимом свете, но также получать данные из инфракрасного, рентгеновского, ультрафиолетового
            и других диапазонов. Эти наблюдения открывают новую эру в изучении объектов и процессов, которые ранее были
            за пределами нашего понимания.</p>

        <p>С помощью многоволновых наблюдений учёные могут сопоставлять данные из разных диапазонов, что позволяет
            получить более полную картину о физических процессах в космосе. Например, рентгеновские и инфракрасные
            данные о звездообразовании, гравитационных взаимодействиях и эволюции галактик помогают глубже понять
            происхождение и развитие нашей Вселенной.</p>

        <h2>Заключение</h2>
        <p>Космические технологии продолжают расширять наши горизонты, позволяя заглядывать все глубже в тайны
            Вселенной. Новые телескопы и технологии рентгеновских и инфракрасных наблюдений играют важную роль в
            понимании процессов, происходящих в самых удалённых и скрытых областях космоса. Современные исследования с
            помощью этих инструментов приближают нас к разгадке фундаментальных вопросов о строении и эволюции
            Вселенной, делая каждое новое открытие важным шагом на пути к постижению законов мироздания.</p>
`,
`<h1>Будущее колонизации космоса</h1>

        <p>Колонизация космоса давно перестала быть фантазией и превратилась в реальную цель, к которой стремятся
            ведущие космические агентства и частные компании. Первым шагом к освоению дальнего космоса станет создание
            баз на Луне и Марсе. Эти базы откроют новые горизонты для научных исследований и дадут человечеству
            возможность сделать космос постоянной частью нашей жизни.</p>

        <h2>Исследования лунных баз</h2>
        <p>Луна — ближайший к Земле космический объект и идеальная площадка для отработки технологий, необходимых для
            освоения дальнего космоса. В последние годы интерес к Луне значительно возрос, благодаря программам, как
            «Артемида» от NASA, которая нацелена на возвращение людей на Луну и создание постоянной исследовательской
            базы.</p>
        <img src="../static/images/cosmo_science/article/moon.png" class="article-image">

        <p>Основной целью лунных баз является создание автономных жилых комплексов, которые обеспечат защиту от радиации
            и экстремальных температур. Это потребует создания куполов или подземных сооружений, защищающих от вредного
            солнечного и космического излучения. Ожидается, что первая постоянная лунная база сможет обеспечить
            комфортные условия для пребывания людей до нескольких месяцев.</p>

        <p><strong>Ресурсы Луны</strong> также представляют большой интерес. На полюсах Луны ученые обнаружили залежи
            водяного льда, которые можно использовать для производства кислорода и водорода — жизненно важных
            компонентов для создания топлива. Исследования лунного грунта показали, что его можно использовать в
            качестве строительного материала, что сделает возведение баз более экономичным.</p>

        <p>Роботизированные миссии, такие как луноходы, уже активно исследуют потенциальные локации для будущих баз и
            анализируют ресурсы. В дальнейшем лунная база сможет стать перевалочным пунктом для экспедиций к Марсу и
            другим объектам Солнечной системы.</p>

        <h3>Исследования марсианских баз</h3>
        <p>Марс — следующий этап в колонизации космоса и одна из главных целей научных и исследовательских миссий. В
            отличие от Луны, Марс обладает атмосферой, пусть и тонкой, а также сезонными изменениями и полярными
            шапками. Однако марсианская атмосфера содержит в основном углекислый газ, и базам на Марсе потребуются
            системы для создания замкнутой экосистемы и производства кислорода.</p>
        <img src="../static/images/cosmo_science/article/mars.png" class="article-image">
        <p>Одной из важнейших задач для создания базы на Марсе является <strong>обеспечение автономности</strong> и
            жизнеобеспечения. Так как Марс находится дальше от Земли, базам потребуется гораздо больше автономных
            решений, чем на Луне. Прототипы замкнутых экосистем, в которых перерабатываются отходы, выращиваются
            растения и производится вода, уже тестируются на Земле. Эти технологии помогут будущим марсианским
            поселенцам длительное время обходиться без поставок с Земли.</p>

        <p><strong>Транспорт и доставка материалов</strong> также играют ключевую роль. Основные транспортные компании,
            такие как SpaceX и NASA, разрабатывают новые ракеты, которые смогут доставить на Марс крупные грузы и даже
            обеспечить возвращение экипажей на Землю. Starship, разрабатываемый SpaceX, будет способен перевозить до 100
            человек за один рейс, что откроет путь к массовой колонизации.</p>

        <h2>Роль роботов и автоматизации</h2>
        <p>Важным аспектом строительства и обслуживания космических баз будет использование роботов и автоматизированных
            систем. На Луне и Марсе роботы смогут возводить защитные конструкции, собирать ресурсы и выполнять задачи по
            техническому обслуживанию, что снизит риск для астронавтов. Например, автономные роботы будут использоваться
            для добычи водяного льда, добычи ресурсов из марсианского грунта и создания жилищных модулей.</p>
        <img src="../static/images/cosmo_science/article/robot.png" class="article-image">
        <p>На Луне уже проходят испытания технологии 3D-печати с использованием местного грунта, что позволяет создавать
            строительные блоки для будущих поселений. Эти технологии могут быть адаптированы и для условий Марса, чтобы
            возводить долговременные конструкции, минимизируя зависимость от земных ресурсов.</p>

        <h2>Психологические и социальные аспекты колонизации</h2>
        <p>Проживание на отдаленных планетах ставит перед человечеством не только технические, но и психологические
            вызовы. Для длительного пребывания на Луне и Марсе необходимо создание комфортной среды, которая будет
            учитывать психологическое состояние астронавтов. Изоляция, ограниченное пространство и длительное пребывание
            вдали от Земли требуют разработки новых подходов к психологической поддержке космонавтов.</p>

        <p>Исследования показывают, что искусственная гравитация, гибридные жилые модули, оптимальное распределение
            работы и времени отдыха могут помочь снизить уровень стресса и усталости. Социальные аспекты, такие как
            командная работа и развитие сообществ, также играют важную роль, поскольку от взаимодействия экипажа зависит
            эффективность выполнения миссий и общее благополучие поселенцев.</p>

        <h2>Заключение</h2>
        <p>Будущее колонизации космоса ближе, чем когда-либо. Лунные и марсианские базы станут первыми шагами на пути к
            обитаемым поселениям в космосе, открывая перед человечеством новую эру исследований и освоения других
            планет. Несмотря на технические и психологические сложности, эти базы помогут накопить ценный опыт, который
            в дальнейшем будет использован для создания постоянных поселений на Марсе и других объектах Солнечной
            системы.</p>

`,
]

function changeMainContent(btnName) {
    delActiveElements();
    switch (btnName) {
        case 'astronomy':
            btnAstronomy.classList.add('active-science');
            smoothTransition(0);
            break;
        case 'blackHole':
            btnBlackHole.classList.add('active-science');
            smoothTransition(1);
            break;
        case 'cosmoTech':
            btnCosmoTech.classList.add('active-science');
            smoothTransition(2);
            break;
        case 'colonia':
            btnColonia.classList.add('active-science');
            smoothTransition(3);
            break;
    }
}

function smoothTransition(numb) {
    mainContent.classList.add('hidden');
    setTimeout(() => {
        mainContent.innerHTML = contentList[numb];
        mainContent.classList.remove('hidden');
    }, 400);
}

function delActiveElements() {
    btnAstronomy.classList.remove('active-science');
    btnBlackHole.classList.remove('active-science');
    btnColonia.classList.remove('active-science');
    btnCosmoTech.classList.remove('active-science');
}

function astronomyClicked() {
    changeMainContent('astronomy');
}

function blackHoleClicked() {
    changeMainContent('blackHole');
}

function cosmoTechClicked() {
    changeMainContent('cosmoTech');
}

function coloniaClicked() {
    changeMainContent('colonia');
}

btnAstronomy.addEventListener('click', astronomyClicked);
btnBlackHole.addEventListener('click', blackHoleClicked);
btnCosmoTech.addEventListener('click', cosmoTechClicked);
btnColonia.addEventListener('click', coloniaClicked);