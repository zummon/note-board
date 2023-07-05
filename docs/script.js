document
  .querySelector("input[type=checkbox]")
  .addEventListener("change", function (e) {
    document.documentElement.classList.toggle("dark", e.target.checked);
  });

document.addEventListener("DOMContentLoaded", function () {
  // store all languages as an array of objects
  var languages = [
    {
      locale: "en",
      name: "English",
      theButton: "Enter",
      content: [
        {
          title: "Lorem",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          title: "Volup",
          desc: "Voluptate est vero id, aperiam magni eveniet eius",
        },
        {
          title: "Asperior",
          desc: "asperiores amet nam veniam ut ipsum, quam iste",
        },
        {
          title: "Autem perspicia",
          desc: "autem perspiciatis minima quibusdam, possimus et.",
        },
      ],
      madeBy: "Made by zummon (Teerapat Anantarattanachai)",
    },
    {
      locale: "zh",
      name: "中国人",
      theButton: "进入",
      content: [
        {
          title: "色刈来月",
          desc: "色刈来月郷連新将用聴作査刊城農東題提温。読並詳高省生将報万力強続強辞点。",
        },
        {
          title: "話浮紙",
          desc: "話浮紙究日水能禁必市得健材悩部。道表航集航問馬最川開語早響境。",
        },
        {
          title: "更伎宿聞権刊石",
          desc: "更伎宿聞権刊石禁字利追係見徴働文講。高糊試月社覧刊回行委持問話布泣。",
        },
        {
          title: "読一甘両合",
          desc: "読一甘両合道福全伝同一夢治。阻数鈴求数風円入口属国意。治骨込井辛品樽新入子加玲。更中切切手流福能金住表料敗見挑景来。",
        },
      ],
      madeBy: "由 ZUMMON 制造",
    },
  ];
  // to keep current language, set an empty object first
  var language = {};
  // get user's setting
  var user_setting = languages[0].locale; //localStorage.getItem("language")

  // a function to change current language
  function handleLanguage(locale) {
    // if don't get the parameter, will automatically get from user's setting
    if (typeof locale === "undefined") {
      locale = user_setting;
    }
    // find the language in languages variable
    var filtered = languages.filter(function (item) {
      return item.locale === locale;
    });
    // get the actual existing language
    if (filtered.length >= 1) {
      language = filtered[0];
    } else {
      language = languages[0];
    }

    // change to appropriate attribute
    document.documentElement.lang = language.locale;

    // change translation texts
    document
      .querySelectorAll('[data-content="title"]')
      .forEach(function (elem, index) {
        elem.textContent = language.content[index].title;
      });
    document
      .querySelectorAll('[data-content="desc"]')
      .forEach(function (elem, index) {
        elem.textContent = language.content[index].desc;
      });
    document
      .querySelectorAll('[data-content="button"]')
      .forEach(function (elem) {
        elem.textContent = language.theButton;
      });
    document.querySelector("#madeBy").textContent = language.madeBy;

    // save to user's setting
    // localStorage.setItem("language", language.locale)
  }

  // get the element for an user to interact to change the language
  var element_setting = document.querySelector("select");

  // do stuff when this website loads or an user opens this website
  // run the function when this website is opening
  handleLanguage();

  // build options to the element for an user to select
  languages.forEach(function (item) {
    var node_option = document.createElement("option");
    node_option.value = item.locale;
    node_option.text = item.name;

    element_setting.appendChild(node_option);
  });
  // automatically select the current language
  element_setting.value = language.locale;

  // set the function to run when an user changes the language
  element_setting.addEventListener("change", function (event) {
    handleLanguage(event.currentTarget.value);
  });
});
