import Articles from "../ArticlesFirstAid/ArticlesFirstAid";

const Data = () => {
  const data = [
    {
      id: 0,
      title: "1. Ушиб, вывих, перелом, растяжение",
      text: "При ушибе следует обеспечить покой",
      arttitle: "Ушиб, вывих, перелом, растяжение",
      arttext: [
        "1.При ушибе следует обеспечить покой ушибленной части тела, к ушибленному месту приложить холод (лед, холодную воду, смоченную холодной водой ткань).",
        "Не допускается смазывать ушибленное место йодом, растирать его, делать массаж.",
        "При подозрении на ушибы внутренних органов до прибытия скорой помощи необходимо освободить пострадавшего от стесняющей его одежды и положить на ровное место.",
        "2.При растяжении необходимо также приложить холод и наложить мягкую фиксирующую повязку.",
        "3.При вывихе необходимо обеспечить полную неподвижность в суставе. Вправлять вывихнутый сустав самостоятельно запрещается.",
        "4.При любом повреждении кожи и тканей следует смазать йодом кожу вокруг раны, закрыть рану стерильным материалом (бинтом, салфеткой) и наложить повязку.",
        "Промывать рану и извлекать из нее инородные тела самостоятельно запрещается.",
        "5.При переломе конечностей необходимо обеспечить неподвижность кости путем наложения шины из специальных или подручных материалов (доски, планки, фанеры, палки), длина которой должна быть такой, чтобы она заходила за те два сустава конечности, между которыми произошел перелом.",
        "При подозрении на перелом позвоночника пострадавшего следует уложить животом вниз на жесткие носилки или щит из досок (дверь, крышку от стола, толстый фанерный лист). Вопрос о его транспортировке решает только медицинский работник.",
        "При открытом переломе на поврежденное место следует дополнительно наложить стерильную повязку. Извлекать и трогать костные обломки запрещается.",
      ],
      questions: [
        {
          question: "Что делать при растяжении?",
          options: [
            "Приложить тёплую грелку",
            "Наложить мягкую фиксирующую повязку",
            "Намазать йодом",
            "Сделать массаж",
          ],
          correctAnswer: "Наложить мягкую фиксирующую повязку",
        },
        {
          question: "Что делать при закрытом переломе конечности?",
          options: [
            "Наложить шину",
            "Приложить холод",
            "Помочь дойти до мед.пункта",
            "Наложить мягкую повязку",
          ],
          correctAnswer: "Наложить шину",
        },
      ],
    },
    {
      id: 1,
      title: "2. Ожоги общие сведения",
      text: "Первая помощь пострадавшим от ожогов",
      arttitle: "Ожоги общие сведения",
      img: ["/burns.jpg"],
      arttext: [
        "Первая помощь пострадавшим от ожогов должна оказываться сразу, уже на месте происшествия. Сначала необходимо прекратить действие термического агента и, по возможности, удалить все материалы, соприкасающихся с обожженной поверхностью (одежда, обувь, украшения).",
        "Никакие манипуляции на ранах при этом не проводятся. Нельзя прокалывать и удалять пузыри, отделять приставшие предметы (одежду, битум, брызги металла, пластика). Прилипшую одежду нельзя отрывать от обожженной поверхности, лучше ее отрезать вокруг раны.",
        "Необходимо не позднее, чем через 10-15 минут после травмы охладить обожженную поверхность проточной водой. Это сокращает время перегревания тканей, препятствуя углублению ожога. Охлаждение уменьшает отек и снимает боль, оказывает благоприятное влияние на дальнейшее заживление ожоговых ран.",
        "Пострадавшему с ожогом следует дать обезболивающие (например, таблетка анальгина, пенталгина или кетанала) и антигистаминные препараты (например, таблетка супрастина, тавегила или кларитина), а при отсутствии рвоты, особенно при обширных ожогах, напоить. В качестве «противошокой терапии» до приезда скорой помощи лучше всего давать пить минеральную воду без газа или воду с растворенной в ней содой и солью (на 1 л воды – 1 ч.л. соли и 0,5 ч.л. соды) в количестве 1-1,5 л в час.",
        "Что запрещено делать?",
        "Первая реакция на повреждение кожного покрова очень важна. От действий пострадавшего или его близких зависят дальнейшее заживление раны и возможные осложнения.",
        "Запомните, чего делать нельзя во избежание ухудшения состояния:",
        "Касаться поврежденной зоны.",
        "Вскрывать пузыри. Следует дождаться, пока они лопнут сами.",
        "Прикладывать лед непосредственно к обожженному участку. Если охлаждение производится с помощью кубиков, то между ними и кожей должна быть тканевая повязка.",
        "Использовать вату при обработке раны. Ее волокна прилипнут, а вычистить их можно будет только хирургическим путем.",
        "Наносить средства от ожогов на открытую рану. Это допустимо только при травмах первой степени, когда кожа лишь покраснела, но сохранила целостность.",
        "Важно учитывать и травмирующий фактор. Если человек обжегся кипятком или паром, промывание водой обязательно, а если кислотой — это запрещено до полного удаления вещества.",
        "После ожога нужно срочно вызвать скорую медицинскую помощь или при отсутствии такой возможности — обратится в ближайшую больницу, если у вас:",
        "1) Площадь ожога составляет больше 5% поверхности тела (1% поверхности тела примерно равен площади ладони пострадавшего)",
        "Для определения обгоревшей площади на глаз используют правило девяток, согласно которому по 9% тела занимают:",
        "голова с шеей;",
        "рука полностью;",
        "бедро;",
        "голень со стопой.",
        "На заднюю и переднюю поверхности туловища приходится по 18%.",
        "2) Имеется подозрение на глубокий ожог III степени;",
        "3) Обожжены глаза, лицо, уши, кисти, стопы, область крупных суставов, промежность или половые органы;",
        "4) Ожоговые раны расположены циркулярно на конечностях;",
        "5) Было поражение электротоком, в том числе молнией;",
        "6) Имеется подозрение на ожог дыхательных путей или отравление продуктами горения;",
        "7) Ожог у ребенка или пожилого человека;",
        "8) Имеются ожоги, а также тяжелые сопутствующие заболевания, например, сахарный диабет.",
        "Когда требуется госпитализация?",
        "Если обожжено более 10% тела, есть риск развития ожоговой болезни. В таких случаях пострадавших непременно госпитализируют.",
        "Но есть и другие показания, соблюдаемые даже при локальных травмах:",
        "Возраст менее 2 и более 60 лет.",
        "Повреждение тканей лица, промежности, стоп и кистей второй степени и выше.",
        "Лечение, которое затруднительно провести в домашних условиях.",
        "Угроза сепсиса.",
        "Нарушение работы других органов.",
      ],
      questions: [
        {
          question: "Сколько есть степеней ожогов?",
          options: ["Один", "Два", "Три", "Четыре"],
          correctAnswer: "Четыре",
        },
        {
          question: "Как оказать помощь при ожоге?",
          options: [
            "Приложить лёд к поврежденной области",
            "Нанести масло на ожог",
            "Промыть ожог холодной водой",
            "Покрыть ожог маской",
          ],
          correctAnswer: "Промыть ожог холодной водой",
        },
      ],
    },
    {
      id: 2,
      title: "3. Статья",
      text: "Текст текст",
      arttitle: "Статья",
      arttext: ["Текст текст"],
      questions: [
        {
          question: "Вопрос?",
          options: ["Ответ 1", "Ответ 2", "Сложно", "Ответ 4"],
          correctAnswer: "Сложно",
        },
      ],
    },
    {
      id: 3,
      title: "4. Статья",
      text: "Текст текст",
      arttitle: "Статья",
      arttext: ["Текст текст"],
      questions: [
        {
          question: "Вопрос?",
          options: ["Ответ 1", "Ответ 2", "Сложно", "Ответ 4"],
          correctAnswer: "Сложно",
        },
      ],
    },
    {
      id: 4,
      title: "5. Статья",
      text: "Текст текст",
      arttitle: "Статья",
      arttext: ["Текст текст"],
      questions: [
        {
          question: "Вопрос?",
          options: ["Ответ 1", "Ответ 2", "Сложно", "Ответ 4"],
          correctAnswer: "Сложно",
        },
      ],
    },
  ];

  return <Articles data={data} />;
};

export default Data;
