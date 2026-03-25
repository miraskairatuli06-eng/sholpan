// BioIntellect Test Data
const testVariants = {
  variant16: [
    {
      number: 1,
      type: "single",
      question: "Жасушаның энергия орталығы?",
      options: ["Рибосома", "Митохондрия", "Ядро", "Лизосома", "Гольджи жиынтығы"],
      answer: 1
    },
    {
      number: 2,
      type: "single",
      question: "ДНҚ мономері?",
      options: ["Аминқышқыл", "Нуклеотид", "Май қышқылы", "Глюкоза", "Глицерин"],
      answer: 1
    },
    {
      number: 3,
      type: "multi",
      question: "Фотосинтезге қажеттілер:",
      options: ["Жарық", "Су", "Оттегі", "Көмірқышқыл газы", "Глюкоза"],
      answers: [0, 1, 3]
    },
    {
      number: 4,
      type: "single",
      question: "Адам организміндегі ең үлкен без?",
      options: ["Қалқанша безі", "Ұйқы безі", "Бауыр", "Гипофиз", "Бүйрекүсті безі"],
      answer: 2
    },
    {
      number: 5,
      type: "multi",
      question: "Эукариотты ағзаларға жататындар:",
      options: ["Бактериялар", "Саңырауқұлақтар", "Көкжасыл балдырлар", "Өсімдіктер", "Жануарлар"],
      answers: [1, 3, 4]
    }
  ],
  variant14: [
    {
      number: 1,
      type: "single",
      question: "Цитоплазманың органоиды емес?",
      options: ["Хромосома", "Митохондрия", "Пластид", "Эндоплазмалық тор"],
      answer: 0
    },
    {
      number: 2,
      type: "single",
      question: "Жапырақтың негізгі қызметі?",
      options: ["Су сору", "Фотосинтез", "Тірек", "Көбейту"],
      answer: 1
    },
    {
      number: 3,
      type: "multi",
      question: "Асқорыту бездеріне жататындар:",
      options: ["Сілекей безі", "Қалқанша безі", "Бауыр", "Ұйқы безі", "Гипофиз"],
      answers: [0, 2, 3]
    }
  ]
};

// Export to window if running in browser
window.testVariants = testVariants;
