const STORAGE_KEY = "kalmius-lang";
const DEFAULT_LANG = "ru";

const languages = {
  ru: { code: "RU", flag: "🇷🇺", html: "ru", dir: "ltr" },
  en: { code: "EN", flag: "🇬🇧", html: "en", dir: "ltr" },
  uz: { code: "UZ", flag: "🇺🇿", html: "uz", dir: "ltr" },
  kk: { code: "KK", flag: "🇰🇿", html: "kk", dir: "ltr" },
  de: { code: "DE", flag: "🇩🇪", html: "de", dir: "ltr" },
  tr: { code: "TR", flag: "🇹🇷", html: "tr", dir: "ltr" },
  fr: { code: "FR", flag: "🇫🇷", html: "fr", dir: "ltr" },
  es: { code: "ES", flag: "🇪🇸", html: "es", dir: "ltr" },
  zh: { code: "ZH", flag: "🇨🇳", html: "zh-CN", dir: "ltr" },
  ar: { code: "AR", flag: "🇸🇦", html: "ar", dir: "rtl" },
};

const translations = {
  ru: {
    meta: {
      title: "Хостел в Донецке «Кальмиус» — койко-место, ночлег и общежитие для бригад",
      description: "Хостел «Кальмиус» в Донецке: койко-место от 475₽, недорогой ночлег и комфортное проживание. Общежитие для рабочих и строительных бригад до 200 человек. Гостиница в центре — ул. Левобережная, 60. Где переночевать в Донецке — звоните +7 (949) 459-34-45.",
    },
    logo: { aria: "Хостел Кальмиус", mark: "К", name: "Хостел «Кальмиус»", slogan: "Комфорт, Уют, Забота" },
    nav: { aria: "Основное меню", home: "Главная", about: "О нас", rooms: "Номера и Цены", amenities: "Удобства", rules: "Правила и Оплата", location: "Локация и Карта" },
    header: { menuOpen: "Открыть меню", menuClose: "Закрыть меню", phones: "Все телефоны", telegram: "Telegram" },
    lang: { label: "Выбор языка", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Хостел «Кальмиус»",
      place: "Общежитие повышенной комфортности в центре города",
      title: "Комфортное проживание в Донецке",
      tagline: "Комфорт, Уют, Забота",
      badge: "До 200 человек • сотрудники предприятий и строительные бригады",
    },
    about: {
      kicker: "О нас",
      title: "Хостел «Кальмиус»",
      text: "Общежитие повышенной комфортности в центре города. Размещаем сотрудников предприятий и строительные бригады — до 200 человек.",
    },
    booking: {
      aria: "Быстрое бронирование",
      name: "Имя",
      namePlaceholder: "Ваше имя",
      phone: "Телефон",
      phonePlaceholder: "+7 (___) ___-__-__",
      date: "Дата заезда",
      room: "Тип места",
      optionEconomy: "Эконом койко-место",
      optionStandard: "Стандарт койко-место",
      optionComfort: "Комфорт / Групповой блок",
      submit: "Забронировать",
      success: "Спасибо! Мы свяжемся с вами для подтверждения брони.",
    },
    rooms: {
      kicker: "Номера и цены",
      title: "Категории мест",
      lead: "Эконом, стандарт, повышенный комфорт и размещение бригад — подберите вариант под задачу.",
      priceRange: "койко-место от 475₽ в сутки",
      economy: { tag: "Эконом", title: "Эконом койко-место", price: "от 475₽", unit: "/ койко-место в сутки", f1: "Удобные двухъярусные кровати", f2: "Бесплатный Wi-Fi", f3: "Чистое постельное бельё", f4: "Общая кухня, душ и туалет", book: "Забронировать" },
      standard: { tag: "Стандарт", title: "Стандарт койко-место", price: "от 850₽", unit: "/ койко-место в сутки", f1: "Комфортные полуторные кровати", f2: "Номера для семейных пар / супругов", f3: "В комнате: шифоньер, тумбочки, стол и стулья", f4: "Бесплатный Wi-Fi", book: "Забронировать" },
      plus: { tag: "Комфорт Plus", title: "Номера повышенной комфортности", price: "По запросу", unit: "уточняйте цену", f1: "Отдельный вход и современные санузлы", f2: "Мебель и матрасы высокого качества", f3: "Техника: холодильник, стиральная машина, микроволновка, чайник, кофеварка", f4: "Бесплатный Wi-Fi", book: "Забронировать / Уточнить" },
      groups: { tag: "Для компаний", title: "Групповое размещение бригад", price: "от 570₽", unit: "/ сутки", f1: "Специальные предложения для рабочих бригад и предприятий", f2: "Размещение групп до 200 человек", f3: "Гибкие формы оплаты", f4: "Бесплатный Wi-Fi", book: "Запросить размещение" },
    },
    amenities: {
      kicker: "Удобства",
      title: "Комфорт на территории",
      lead: "Всё для комфортного проживания сотрудников, бригад и гостей города.",
      water: { title: "Постоянное водоснабжение", text: "Горячая и холодная вода 24/7." },
      kitchen: { title: "Оборудованные кухни", text: "Плиты, микроволновки, холодильники, посуда." },
      bath: { title: "Чистые душевые и санузлы", text: "Регулярный уход за санитарными зонами." },
      wifi: { title: "Бесплатный Wi-Fi", text: "Интернет на всей территории хостела." },
      parking: { title: "Бесплатная охраняемая парковка", text: "Автомобиль можно оставить на территории." },
      linen: { title: "Постель и уборка", text: "Регулярная смена постельного белья и уборка." },
      security: { title: "Охрана и видеонаблюдение", text: "Круглосуточная охрана и видеонаблюдение на территории." },
    },
    info: {
      kicker: "Правила и оплата",
      title: "Важная информация",
      lead: "Заезд, выезд и расчёт — в том числе для юридических лиц.",
      checkin: { title: "Заезд и выезд", times: "Заезд с 14:00, выезд до 12:00", note: "Круглосуточная стойка регистрации." },
      payment: { title: "Оплата", text: "Наличный и безналичный расчет с оформлением документов для организаций." },
    },
    contact: {
      kicker: "Локация и карта",
      title: "Контакты и адрес",
      intro: "Хостел «Кальмиус» — общежитие повышенной комфортности в центре города. Звоните или пишите в Telegram.",
      addressLabel: "Адрес",
      address: "г. Донецк, ул. Левобережная, 60",
      phonesLabel: "Телефоны",
      emailLabel: "Email",
      phone1: "+7 (949) 459-34-45",
      phone2: "+7 (949) 621-14-20",
      phone3: "+7 (949) 373-66-42",
      email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Позвонить",
      telegram: "Написать в Telegram",
      formAria: "Форма заявки",
      formTitle: "Оставить заявку",
      formName: "Имя",
      formNamePlaceholder: "Ваше имя",
      formPhone: "Телефон",
      formPhonePlaceholder: "+7 (___) ___-__-__",
      formMessage: "Сообщение",
      formMessagePlaceholder: "Даты заезда, количество мест или вопрос…",
      formSubmit: "Отправить",
      formSuccess: "Заявка получена. Мы свяжемся с вами в ближайшее время.",
    },
    maps: { yandex: "Открыть в Яндекс.Картах", google: "Открыть в Google Maps", tabYandex: "Яндекс", tabGoogle: "Google", iframeTitle: "Хостел «Кальмиус» на карте" },
    sticky: { call: "Позвонить", telegram: "Написать в Telegram" },
    footer: { copy: "© 2026 Хостел «Кальмиус». г. Донецк, ул. Левобережная, 60", call: "Позвонить", telegram: "Написать в Telegram" },
    admin: { status: "Режим редактирования", save: "Сохранить", logout: "Выйти", loginTitle: "Вход администратора", password: "Пароль", passwordPlaceholder: "••••••••", error: "Неверный пароль", cancel: "Отмена", enter: "Войти", toastOk: "Изменения успешно сохранены!", toastFail: "Не удалось сохранить. Запустите PHP-сервер в папке сайта.", edit: "Редактировать", lock: "Вход администратора" },
  },
  en: {
    meta: { title: "Kalmius Hostel — Donetsk", description: "Kalmius Hostel is an enhanced-comfort dormitory in central Donetsk. Beds from 475₽ to 850₽ per day. Corporate stays for company staff and construction crews of up to 200 people." },
    logo: { aria: "Kalmius Hostel", mark: "К", name: "Kalmius Hostel", slogan: "Comfort, Coziness, Care" },
    nav: { aria: "Main menu", home: "Home", about: "About us", rooms: "Rooms & Prices", amenities: "Amenities", rules: "Rules & Payment", location: "Location & Map" },
    header: { menuOpen: "Open menu", menuClose: "Close menu", phones: "All phone numbers", telegram: "Telegram" },
    lang: { label: "Choose language", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Kalmius Hostel",
      place: "Enhanced-comfort dormitory in the city center",
      title: "Comfortable stay in Donetsk",
      tagline: "Comfort, Coziness, Care",
      badge: "Up to 200 people • company staff and construction crews",
    },
    about: {
      kicker: "About us",
      title: "Kalmius Hostel",
      text: "An enhanced-comfort dormitory in the city center. We accommodate company staff and construction crews — up to 200 people.",
    },
    booking: {
      aria: "Quick booking", name: "Name", namePlaceholder: "Your name", phone: "Phone", phonePlaceholder: "+7 (___) ___-__-__", date: "Check-in date", room: "Bed type",
      optionEconomy: "Economy bed", optionStandard: "Standard bed", optionComfort: "Comfort / Group block",
      submit: "Book now", success: "Thank you! We will contact you to confirm your booking.",
    },
    rooms: {
      kicker: "Rooms & prices", title: "Room categories", lead: "Economy, standard, comfort plus, or group stays for crews — choose what fits.",
      priceRange: "beds from 475₽ per day",
      economy: { tag: "Economy", title: "Economy bed", price: "from 475₽", unit: "/ bed per day", f1: "Comfortable bunk beds", f2: "Free Wi-Fi", f3: "Clean bed linen", f4: "Shared kitchen, shower and toilet", book: "Book now" },
      standard: { tag: "Standard", title: "Standard bed", price: "from 850₽", unit: "/ bed per day", f1: "Comfortable 1.5 beds", f2: "Rooms for couples / spouses", f3: "In the room: wardrobe, nightstands, table and chairs", f4: "Free Wi-Fi", book: "Book now" },
      plus: { tag: "Comfort Plus", title: "Enhanced-comfort rooms", price: "On request", unit: "ask for the price", f1: "Private entrance and modern bathrooms", f2: "High-quality furniture and mattresses", f3: "Fridge, washing machine, microwave, kettle, coffee maker", f4: "Free Wi-Fi", book: "Book / Ask" },
      groups: { tag: "For companies", title: "Group stays for crews", price: "from 570₽", unit: "/ day", f1: "Special offers for work crews and companies", f2: "Groups of up to 200 people", f3: "Flexible payment options", f4: "Free Wi-Fi", book: "Request a stay" },
    },
    amenities: {
      kicker: "Amenities", title: "Comfort on site", lead: "Everything for a comfortable stay for staff, crews, and city guests.",
      water: { title: "Uninterrupted water supply", text: "Hot and cold water 24/7." },
      kitchen: { title: "Fully equipped kitchens", text: "Stoves, microwaves, fridges, and dishes." },
      bath: { title: "Clean showers & bathrooms", text: "Sanitary areas are maintained regularly." },
      wifi: { title: "Free Wi-Fi", text: "Internet across the entire hostel." },
      parking: { title: "Free secured parking", text: "Leave your car on the premises." },
      linen: { title: "Linen & cleaning", text: "Regular linen change and housekeeping." },
      security: { title: "Security & CCTV", text: "24/7 security and video surveillance on site." },
    },
    info: {
      kicker: "Rules & payment", title: "Important information", lead: "Check-in, check-out, and payment — including for legal entities.",
      checkin: { title: "Check-in and check-out", times: "Check-in from 14:00, check-out until 12:00", note: "24/7 reception." },
      payment: { title: "Payment", text: "Cash and bank transfer with documents issued for organizations." },
    },
    contact: {
      kicker: "Location & map", title: "Contact & address", intro: "Kalmius Hostel is an enhanced-comfort dormitory in the city center. Call or message us on Telegram.",
      addressLabel: "Address", address: "Donetsk, Levoberezhnaya St., 60", phonesLabel: "Phones", emailLabel: "Email",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Call now", telegram: "Message on Telegram", formAria: "Inquiry form", formTitle: "Send a request",
      formName: "Name", formNamePlaceholder: "Your name", formPhone: "Phone", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Message",
      formMessagePlaceholder: "Check-in dates, number of beds, or a question…", formSubmit: "Send", formSuccess: "Request received. We will contact you shortly.",
    },
    maps: { yandex: "Open in Yandex Maps", google: "Open in Google Maps", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "Kalmius Hostel on the map" },
    sticky: { call: "Call now", telegram: "Message on Telegram" },
    footer: { copy: "© 2026 Kalmius Hostel. Donetsk, Levoberezhnaya St., 60", call: "Call now", telegram: "Message on Telegram" },
    admin: { status: "Editing mode", save: "Save", logout: "Log out", loginTitle: "Admin login", password: "Password", passwordPlaceholder: "••••••••", error: "Incorrect password", cancel: "Cancel", enter: "Sign in", toastOk: "Changes saved successfully!", toastFail: "Could not save. Run a PHP server in the site folder.", edit: "Edit", lock: "Admin login" },
  },
  uz: {
    meta: { title: "Kalmius hosteli — Donetsk", description: "Kalmius hosteli — shahar markazidagi yuqori qulaylikdagi yotoqxona. O‘rin 475₽ dan 850₽ gacha. Korxona xodimlari va qurilish brigadalari uchun 200 kishigacha." },
    logo: { aria: "Kalmius hosteli", mark: "К", name: "Kalmius hosteli", slogan: "Qulaylik, Iliqlik, G‘amxo‘rlik" },
    nav: { aria: "Asosiy menyu", home: "Asosiy", about: "Biz haqimizda", rooms: "Xonalar va Narxlar", amenities: "Sharoitlar", rules: "Qoidalar va To‘lov", location: "Manzil va Xarita" },
    header: { menuOpen: "Menyuni ochish", menuClose: "Menyuni yopish", phones: "Barcha telefonlar", telegram: "Telegram" },
    lang: { label: "Tilni tanlash", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Kalmius hosteli", place: "Shahar markazidagi yuqori qulaylikdagi yotoqxona",
      title: "Donetskda qulay yashash", tagline: "Qulaylik, Iliqlik, G‘amxo‘rlik",
      badge: "200 kishigacha • korxona xodimlari va qurilish brigadalari",
    },
    about: {
      kicker: "Biz haqimizda",
      title: "Kalmius hosteli",
      text: "Shahar markazidagi yuqori qulaylikdagi yotoqxona. Korxona xodimlari va qurilish brigadalarini — 200 kishigacha joylashtiramiz.",
    },
    booking: {
      aria: "Tezkor bron", name: "Ism", namePlaceholder: "Ismingiz", phone: "Telefon", phonePlaceholder: "+7 (___) ___-__-__", date: "Kirish sanasi", room: "O‘rin turi",
      optionEconomy: "Ekonom o‘rin", optionStandard: "Standart o‘rin", optionComfort: "Komfort / Guruh bloki",
      submit: "Band qilish", success: "Rahmat! Bronni tasdiqlash uchun bog‘lanamiz.",
    },
    rooms: {
      kicker: "Xonalar va narxlar", title: "O‘rin toifalari", lead: "Ekonom, standart, yuqori qulaylik va brigadalar uchun joylashuv — o‘zingizga mosini tanlang.",
      priceRange: "o‘rin sutkasiga 475₽ dan",
      economy: { tag: "Ekonom", title: "Ekonom o‘rin", price: "475₽ dan", unit: "/ o‘rin sutkasiga", f1: "Qulay ikki qavatli karavotlar", f2: "Bepul Wi-Fi", f3: "Toza choyshablar", f4: "Umumiy oshxona, dush va hojatxona", book: "Band qilish" },
      standard: { tag: "Standart", title: "Standart o‘rin", price: "850₽ dan", unit: "/ o‘rin sutkasiga", f1: "Qulay bir yarim karavotlar", f2: "Er-xotin / oilaviy juftliklar uchun xonalar", f3: "Xonada: shifonyer, tumbochka, stol va stullar", f4: "Bepul Wi-Fi", book: "Band qilish" },
      plus: { tag: "Komfort Plus", title: "Yuqori qulaylikdagi xonalar", price: "So‘rov bo‘yicha", unit: "narxni aniqlang", f1: "Alohida kirish va zamonaviy sanuzellar", f2: "Yuqori sifatli mebel va matraslar", f3: "Texnika: muzlatgich, kir yuvish mashinasi, mikroto‘lqin, choynak, kofe qaynatgich", f4: "Bepul Wi-Fi", book: "Band qilish / Aniqlash" },
      groups: { tag: "Kompaniyalar uchun", title: "Brigadalar uchun guruh joylashuvi", price: "570₽ dan", unit: "/ sutka", f1: "Ishchi brigadalar va korxonalar uchun maxsus takliflar", f2: "200 kishigacha guruhlar", f3: "Moslashuvchan to‘lov shakllari", f4: "Bepul Wi-Fi", book: "Joy so‘rash" },
    },
    amenities: {
      kicker: "Sharoitlar", title: "Hududdagi qulaylik", lead: "Xodimlar, brigadalar va shahar mehmonlari uchun qulay yashash.",
      water: { title: "Doimiy suv ta’minoti", text: "Issiq va sovuq suv 24/7." },
      kitchen: { title: "Jihozlangan oshxonalar", text: "Plita, mikroto‘lqin, muzlatgich, idishlar." },
      bath: { title: "Toza dush va hojatxonalar", text: "Sanitariya zonalari muntazam parvarishlanadi." },
      wifi: { title: "Bepul Wi-Fi", text: "Butun hududda internet." },
      parking: { title: "Bepul qo‘riqlanadigan parking", text: "Avtomobilni hududda qoldirish mumkin." },
      linen: { title: "Choyshab va tozalash", text: "Choyshab almashtirish va muntazam tozalash." },
      security: { title: "Qo‘riqlash va videokuzatuv", text: "Hududda 24/7 qo‘riqlash va kuzatuv." },
    },
    info: {
      kicker: "Qoidalar va to‘lov", title: "Muhim ma’lumot", lead: "Kirish, chiqish va to‘lov — yuridik shaxslar uchun ham.",
      checkin: { title: "Kirish va chiqish", times: "Kirish 14:00 dan, chiqish 12:00 gacha", note: "24/7 qabulxona." },
      payment: { title: "To‘lov", text: "Naqd va naqd pulsiz hisob-kitob, tashkilotlar uchun hujjatlar rasmiylashtiriladi." },
    },
    contact: {
      kicker: "Manzil va xarita", title: "Kontaktlar va manzil", intro: "Kalmius hosteli — shahar markazidagi yuqori qulaylikdagi yotoqxona. Qo‘ng‘iroq qiling yoki Telegramda yozing.",
      addressLabel: "Manzil", address: "Donetsk sh., Levoberejnaya ko‘chasi, 60", phonesLabel: "Telefonlar", emailLabel: "Email",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Qo‘ng‘iroq", telegram: "Telegramda yozish", formAria: "Ariza formasi", formTitle: "Ariza qoldirish",
      formName: "Ism", formNamePlaceholder: "Ismingiz", formPhone: "Telefon", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Xabar",
      formMessagePlaceholder: "Kirish sanalari, o‘rinlar soni yoki savol…", formSubmit: "Yuborish", formSuccess: "Ariza qabul qilindi. Tez orada bog‘lanamiz.",
    },
    maps: { yandex: "Yandex.Xaritalarda ochish", google: "Google Mapsda ochish", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "Kalmius hosteli xaritada" },
    sticky: { call: "Qo‘ng‘iroq", telegram: "Telegramda yozish" },
    footer: { copy: "© 2026 Kalmius hosteli. Donetsk sh., Levoberejnaya ko‘chasi, 60", call: "Qo‘ng‘iroq", telegram: "Telegramda yozish" },
    admin: { status: "Tahrirlash rejimi", save: "Saqlash", logout: "Chiqish", loginTitle: "Admin kirishi", password: "Parol", passwordPlaceholder: "••••••••", error: "Noto‘g‘ri parol", cancel: "Bekor qilish", enter: "Kirish", toastOk: "O‘zgarishlar saqlandi!", toastFail: "Saqlab bo‘lmadi. Sayt papkasida PHP-serverni ishga tushiring.", edit: "Tahrirlash", lock: "Admin kirishi" },
  },
  kk: {
    meta: { title: "«Кальмиус» хостелі — Донецк", description: "«Кальмиус» хостелі — қала орталығындағы жоғары жайлы жатақхана. Орын 475₽-дан 850₽-ға дейін. Кәсіпорын қызметкерлері мен құрылыс бригадаларына 200 адамға дейін." },
    logo: { aria: "Кальмиус хостелі", mark: "К", name: "«Кальмиус» хостелі", slogan: "Жайлылық, Жылылық, Қамқорлық" },
    nav: { aria: "Негізгі мәзір", home: "Басты бет", about: "Біз туралы", rooms: "Бөлмелер мен бағалар", amenities: "Жайлылықтар", rules: "Ережелер мен төлем", location: "Орналасқан жері мен карта" },
    header: { menuOpen: "Мәзірді ашу", menuClose: "Мәзірді жабу", phones: "Барлық телефондар", telegram: "Telegram" },
    lang: { label: "Тілді таңдау", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "«Кальмиус» хостелі", place: "Қала орталығындағы жоғары жайлы жатақхана",
      title: "Донецкте жайлы тұру", tagline: "Жайлылық, Жылылық, Қамқорлық",
      badge: "200 адамға дейін • кәсіпорын қызметкерлері мен құрылыс бригадалары",
    },
    about: {
      kicker: "Біз туралы",
      title: "«Кальмиус» хостелі",
      text: "Қала орталығындағы жоғары жайлы жатақхана. Кәсіпорын қызметкерлері мен құрылыс бригадаларын — 200 адамға дейін орналастырамыз.",
    },
    booking: {
      aria: "Жылдам брондау", name: "Аты", namePlaceholder: "Атыңыз", phone: "Телефон", phonePlaceholder: "+7 (___) ___-__-__", date: "Кіру күні", room: "Орын түрі",
      optionEconomy: "Эконом орын", optionStandard: "Стандарт орын", optionComfort: "Комфорт / Топтық блок",
      submit: "Брондау", success: "Рахмет! Бронды растау үшін хабарласамыз.",
    },
    rooms: {
      kicker: "Бөлмелер мен бағалар", title: "Орын санаттары", lead: "Эконом, стандарт, жоғары жайлылық және бригадаларға арналған орналастыру — өзіңізге сай таңдаңыз.",
      priceRange: "орын тәулігіне 475₽-дан",
      economy: { tag: "Эконом", title: "Эконом орын", price: "475₽-дан", unit: "/ орын тәулігіне", f1: "Ыңғайлы екі қабатты кереуеттер", f2: "Тегін Wi-Fi", f3: "Таза төсек-орын", f4: "Ортақ асүй, душ және дәретхана", book: "Брондау" },
      standard: { tag: "Стандарт", title: "Стандарт орын", price: "850₽-дан", unit: "/ орын тәулігіне", f1: "Жайлы бір жарым кереуеттер", f2: "Ерлі-зайыптылар / отбасылық жұптарға арналған бөлмелер", f3: "Бөлмеде: шифоньер, тумбочка, үстел және орындықтар", f4: "Тегін Wi-Fi", book: "Брондау" },
      plus: { tag: "Комфорт Plus", title: "Жоғары жайлы бөлмелер", price: "Сұраныс бойынша", unit: "бағаны нақтылаңыз", f1: "Жеке кіреберіс және заманауи санитарлық тораптар", f2: "Жоғары сапалы жиһаз бен матрастар", f3: "Техника: тоңазытқыш, кір жуғыш, микротолқын, шәйнек, кофе қайнатқыш", f4: "Тегін Wi-Fi", book: "Брондау / Нақтылау" },
      groups: { tag: "Компанияларға", title: "Бригадаларды топпен орналастыру", price: "570₽-дан", unit: "/ тәулік", f1: "Жұмыс бригадалары мен кәсіпорындарға арнайы ұсыныстар", f2: "200 адамға дейінгі топтар", f3: "Икемді төлем түрлері", f4: "Тегін Wi-Fi", book: "Орналастыру сұрау" },
    },
    amenities: {
      kicker: "Жайлылықтар", title: "Аумақтағы жайлылық", lead: "Қызметкерлер, бригадалар және қала қонақтары үшін жайлы тұру.",
      water: { title: "Үздіксіз сумен жабдықтау", text: "Ыстық және суық су 24/7." },
      kitchen: { title: "Жабдықталған асүйлер", text: "Плита, микротолқын, тоңазытқыш, ыдыс." },
      bath: { title: "Таза душ пен санитарлық тораптар", text: "Санитарлық аймақтар тұрақты күтіледі." },
      wifi: { title: "Тегін Wi-Fi", text: "Бүкіл аумақта интернет." },
      parking: { title: "Тегін күзетілетін тұрақ", text: "Көлікті аумақта қалдыруға болады." },
      linen: { title: "Төсек-орын және жинау", text: "Төсек-орынды ауыстыру және тұрақты жинау." },
      security: { title: "Күзет және бейнебақылау", text: "Аумақта тәулік бойы күзет пен бақылау." },
    },
    info: {
      kicker: "Ережелер мен төлем", title: "Маңызды ақпарат", lead: "Кіру, шығу және есеп айырысу — заңды тұлғалар үшін де.",
      checkin: { title: "Кіру және шығу", times: "Кіру сағат 14:00-ден, шығу сағат 12:00-ге дейін", note: "Тәулік бойы қабылдау." },
      payment: { title: "Төлем", text: "Қолма-қол және қолма-қолсыз есеп айырысу, ұйымдарға құжаттар ресімделеді." },
    },
    contact: {
      kicker: "Орналасқан жері мен карта", title: "Байланыс пен мекенжай", intro: "«Кальмиус» хостелі — қала орталығындағы жоғары жайлы жатақхана. Қоңырау шалыңыз немесе Telegram-ға жазыңыз.",
      addressLabel: "Мекенжай", address: "Донецк қ., Левобережная к-сі, 60", phonesLabel: "Телефондар", emailLabel: "Email",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Қоңырау", telegram: "Telegram-ға жазу", formAria: "Өтінім нысаны", formTitle: "Өтінім қалдыру",
      formName: "Аты", formNamePlaceholder: "Атыңыз", formPhone: "Телефон", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Хабарлама",
      formMessagePlaceholder: "Кіру күндері, орын саны немесе сұрақ…", formSubmit: "Жіберу", formSuccess: "Өтінім қабылданды. Жақын арада хабарласамыз.",
    },
    maps: { yandex: "Яндекс.Картада ашу", google: "Google Maps-те ашу", tabYandex: "Яндекс", tabGoogle: "Google", iframeTitle: "«Кальмиус» хостелі картада" },
    sticky: { call: "Қоңырау", telegram: "Telegram-ға жазу" },
    footer: { copy: "© 2026 «Кальмиус» хостелі. Донецк қ., Левобережная к-сі, 60", call: "Қоңырау", telegram: "Telegram-ға жазу" },
    admin: { status: "Өңдеу режимі", save: "Сақтау", logout: "Шығу", loginTitle: "Әкімші кіруі", password: "Құпия сөз", passwordPlaceholder: "••••••••", error: "Қате құпия сөз", cancel: "Болдырмау", enter: "Кіру", toastOk: "Өзгерістер сақталды!", toastFail: "Сақталмады. Сайт қалтасында PHP-серверді іске қосыңыз.", edit: "Өңдеу", lock: "Әкімші кіруі" },
  },
  de: {
    meta: { title: "Hostel Kalmius — Donezk", description: "Das Hostel Kalmius ist ein komfortables Wohnheim im Zentrum von Donezk. Betten von 475₽ bis 850₽. Unterkunft für Mitarbeiter und Baubrigaden bis 200 Personen." },
    logo: { aria: "Hostel Kalmius", mark: "К", name: "Hostel Kalmius", slogan: "Komfort, Gemütlichkeit, Fürsorge" },
    nav: { aria: "Hauptmenü", home: "Start", about: "Über uns", rooms: "Zimmer & Preise", amenities: "Ausstattung", rules: "Regeln & Zahlung", location: "Lage & Karte" },
    header: { menuOpen: "Menü öffnen", menuClose: "Menü schließen", phones: "Alle Telefonnummern", telegram: "Telegram" },
    lang: { label: "Sprache wählen", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Hostel Kalmius", place: "Komfortables Wohnheim im Stadtzentrum",
      title: "Komfortabler Aufenthalt in Donezk", tagline: "Komfort, Gemütlichkeit, Fürsorge",
      badge: "Bis 200 Personen • Mitarbeiter und Baubrigaden",
    },
    about: {
      kicker: "Über uns",
      title: "Hostel Kalmius",
      text: "Komfortables Wohnheim im Stadtzentrum. Wir unterbringen Mitarbeiter von Unternehmen und Baubrigaden — bis zu 200 Personen.",
    },
    booking: {
      aria: "Schnellbuchung", name: "Name", namePlaceholder: "Ihr Name", phone: "Telefon", phonePlaceholder: "+7 (___) ___-__-__", date: "Anreisedatum", room: "Betttyp",
      optionEconomy: "Economy-Bett", optionStandard: "Standard-Bett", optionComfort: "Komfort / Gruppenblock",
      submit: "Buchen", success: "Danke! Wir bestätigen Ihre Buchung in Kürze.",
    },
    rooms: {
      kicker: "Zimmer & Preise", title: "Kategorien", lead: "Economy, Standard, Komfort Plus oder Gruppenunterkunft für Brigaden — passend zu Ihrem Bedarf.",
      priceRange: "Bett ab 475₽ pro Tag",
      economy: { tag: "Economy", title: "Economy-Bett", price: "ab 475₽", unit: "/ Bett pro Tag", f1: "Bequeme Etagenbetten", f2: "Kostenloses WLAN", f3: "Saubere Bettwäsche", f4: "Gemeinsame Küche, Dusche und WC", book: "Buchen" },
      standard: { tag: "Standard", title: "Standard-Bett", price: "ab 850₽", unit: "/ Bett pro Tag", f1: "Komfortable Eineinhalb-Betten", f2: "Zimmer für Paare / Eheleute", f3: "Im Zimmer: Schrank, Nachttische, Tisch und Stühle", f4: "Kostenloses WLAN", book: "Buchen" },
      plus: { tag: "Komfort Plus", title: "Zimmer mit erhöhtem Komfort", price: "Auf Anfrage", unit: "Preis erfragen", f1: "Separater Eingang und moderne Bäder", f2: "Möbel und Matratzen in hoher Qualität", f3: "Kühlschrank, Waschmaschine, Mikrowelle, Wasserkocher, Kaffeemaschine", f4: "Kostenloses WLAN", book: "Buchen / Anfragen" },
      groups: { tag: "Für Firmen", title: "Gruppenunterkunft für Brigaden", price: "ab 570₽", unit: "/ Tag", f1: "Sonderangebote für Arbeitsbrigaden und Unternehmen", f2: "Gruppen bis 200 Personen", f3: "Flexible Zahlungsarten", f4: "Kostenloses WLAN", book: "Unterkunft anfragen" },
    },
    amenities: {
      kicker: "Ausstattung", title: "Komfort vor Ort", lead: "Alles für einen komfortablen Aufenthalt von Mitarbeitern, Brigaden und Gästen.",
      water: { title: "Ununterbrochene Wasserversorgung", text: "Warm- und Kaltwasser 24/7." },
      kitchen: { title: "Ausgestattete Küchen", text: "Herde, Mikrowellen, Kühlschränke, Geschirr." },
      bath: { title: "Saubere Duschen und Sanitär", text: "Sanitärbereiche werden regelmäßig gepflegt." },
      wifi: { title: "Kostenloses WLAN", text: "Internet auf dem gesamten Gelände." },
      parking: { title: "Kostenloser bewachter Parkplatz", text: "Das Auto kann auf dem Gelände bleiben." },
      linen: { title: "Bettwäsche und Reinigung", text: "Regelmäßiger Wäschewechsel und Reinigung." },
      security: { title: "Sicherheit und Videoüberwachung", text: "Sicherheit und Kameras rund um die Uhr." },
    },
    info: {
      kicker: "Regeln & Zahlung", title: "Wichtige Informationen", lead: "Anreise, Abreise und Zahlung — auch für juristische Personen.",
      checkin: { title: "Check-in und Check-out", times: "Check-in ab 14:00, Check-out bis 12:00", note: "Rezeption rund um die Uhr." },
      payment: { title: "Zahlung", text: "Bar- und Überweisungszahlung mit Dokumenten für Organisationen." },
    },
    contact: {
      kicker: "Lage & Karte", title: "Kontakt und Adresse", intro: "Das Hostel Kalmius ist ein komfortables Wohnheim im Stadtzentrum. Rufen Sie an oder schreiben Sie in Telegram.",
      addressLabel: "Adresse", address: "Donezk, Levoberezhnaya-Str. 60", phonesLabel: "Telefone", emailLabel: "E-Mail",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Anrufen", telegram: "In Telegram schreiben", formAria: "Anfrageformular", formTitle: "Anfrage senden",
      formName: "Name", formNamePlaceholder: "Ihr Name", formPhone: "Telefon", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Nachricht",
      formMessagePlaceholder: "Anreisedatum, Anzahl der Betten oder eine Frage…", formSubmit: "Senden", formSuccess: "Anfrage erhalten. Wir melden uns in Kürze.",
    },
    maps: { yandex: "In Yandex Maps öffnen", google: "In Google Maps öffnen", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "Hostel Kalmius auf der Karte" },
    sticky: { call: "Anrufen", telegram: "In Telegram schreiben" },
    footer: { copy: "© 2026 Hostel Kalmius. Donezk, Levoberezhnaya-Str. 60", call: "Anrufen", telegram: "In Telegram schreiben" },
    admin: { status: "Bearbeitungsmodus", save: "Speichern", logout: "Abmelden", loginTitle: "Admin-Anmeldung", password: "Passwort", passwordPlaceholder: "••••••••", error: "Falsches Passwort", cancel: "Abbrechen", enter: "Anmelden", toastOk: "Änderungen gespeichert!", toastFail: "Speichern fehlgeschlagen. Starten Sie einen PHP-Server im Site-Ordner.", edit: "Bearbeiten", lock: "Admin-Anmeldung" },
  },
  tr: {
    meta: { title: "Kalmius Hostel — Donetsk", description: "Kalmius Hostel, şehir merkezinde yüksek konforlu bir yurttur. Yatak 475₽–850₽. Şirket çalışanları ve inşaat ekipleri için 200 kişiye kadar konaklama." },
    logo: { aria: "Kalmius Hostel", mark: "К", name: "Kalmius Hostel", slogan: "Konfor, Sıcaklık, Özen" },
    nav: { aria: "Ana menü", home: "Ana sayfa", about: "Hakkımızda", rooms: "Odalar ve Fiyatlar", amenities: "Olanaklar", rules: "Kurallar ve Ödeme", location: "Konum ve Harita" },
    header: { menuOpen: "Menüyü aç", menuClose: "Menüyü kapat", phones: "Tüm telefonlar", telegram: "Telegram" },
    lang: { label: "Dil seçin", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Kalmius Hostel", place: "Şehir merkezinde yüksek konforlu yurt",
      title: "Donetsk’te konforlu konaklama", tagline: "Konfor, Sıcaklık, Özen",
      badge: "200 kişiye kadar • şirket çalışanları ve inşaat ekipleri",
    },
    about: {
      kicker: "Hakkımızda",
      title: "Kalmius Hostel",
      text: "Şehir merkezinde yüksek konforlu yurt. Şirket çalışanları ve inşaat ekiplerini — 200 kişiye kadar ağırlıyoruz.",
    },
    booking: {
      aria: "Hızlı rezervasyon", name: "Ad", namePlaceholder: "Adınız", phone: "Telefon", phonePlaceholder: "+7 (___) ___-__-__", date: "Giriş tarihi", room: "Yatak türü",
      optionEconomy: "Ekonomik yatak", optionStandard: "Standart yatak", optionComfort: "Konfor / Grup bloğu",
      submit: "Rezervasyon yap", success: "Teşekkürler! Rezervasyonu onaylamak için sizinle iletişime geçeceğiz.",
    },
    rooms: {
      kicker: "Odalar ve fiyatlar", title: "Kategoriler", lead: "Ekonomik, standart, konfor plus veya ekipler için grup konaklama — ihtiyacınıza göre seçin.",
      priceRange: "yatak günde 475₽’den",
      economy: { tag: "Ekonomik", title: "Ekonomik yatak", price: "475₽’den", unit: "/ yatak günlük", f1: "Rahat ranza yataklar", f2: "Ücretsiz Wi-Fi", f3: "Temiz nevresim", f4: "Ortak mutfak, duş ve tuvalet", book: "Rezervasyon yap" },
      standard: { tag: "Standart", title: "Standart yatak", price: "850₽’den", unit: "/ yatak günlük", f1: "Konforlu bir buçuk yataklar", f2: "Çiftler / eşler için odalar", f3: "Odada: gardırop, komodin, masa ve sandalyeler", f4: "Ücretsiz Wi-Fi", book: "Rezervasyon yap" },
      plus: { tag: "Konfor Plus", title: "Yüksek konforlu odalar", price: "Talep üzerine", unit: "fiyatı sorun", f1: "Ayrı giriş ve modern banyolar", f2: "Yüksek kaliteli mobilya ve yataklar", f3: "Buzdolabı, çamaşır makinesi, mikrodalga, kettle, kahve makinesi", f4: "Ücretsiz Wi-Fi", book: "Rezervasyon / Sor" },
      groups: { tag: "Şirketler için", title: "Ekipler için grup konaklama", price: "570₽’den", unit: "/ gün", f1: "İş ekipleri ve şirketlere özel teklifler", f2: "200 kişiye kadar gruplar", f3: "Esnek ödeme seçenekleri", f4: "Ücretsiz Wi-Fi", book: "Konaklama talep et" },
    },
    amenities: {
      kicker: "Olanaklar", title: "Tesis konforu", lead: "Çalışanlar, ekipler ve şehir misafirleri için konforlu konaklama.",
      water: { title: "Kesintisiz su", text: "Sıcak ve soğuk su 7/24." },
      kitchen: { title: "Donanımlı mutfaklar", text: "Ocak, mikrodalga, buzdolabı, mutfak eşyası." },
      bath: { title: "Temiz duş ve banyolar", text: "Islak hacimler düzenli bakılır." },
      wifi: { title: "Ücretsiz Wi-Fi", text: "Tüm alanda internet." },
      parking: { title: "Ücretsiz güvenli otopark", text: "Aracınızı tesis içinde bırakabilirsiniz." },
      linen: { title: "Nevresim ve temizlik", text: "Düzenli nevresim değişimi ve temizlik." },
      security: { title: "Güvenlik ve kamera", text: "Sahada 7/24 güvenlik ve kamera sistemi." },
    },
    info: {
      kicker: "Kurallar ve ödeme", title: "Önemli bilgiler", lead: "Giriş, çıkış ve ödeme — tüzel kişiler dahil.",
      checkin: { title: "Giriş ve çıkış", times: "Giriş 14:00’ten, çıkış 12:00’ye kadar", note: "7/24 resepsiyon." },
      payment: { title: "Ödeme", text: "Nakit ve havale; kuruluşlar için belgeler düzenlenir." },
    },
    contact: {
      kicker: "Konum ve harita", title: "İletişim ve adres", intro: "Kalmius Hostel, şehir merkezinde yüksek konforlu bir yurttur. Arayın veya Telegram’dan yazın.",
      addressLabel: "Adres", address: "Donetsk, Levoberejnaya Cad. 60", phonesLabel: "Telefonlar", emailLabel: "E-posta",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Ara", telegram: "Telegram’dan yaz", formAria: "Talep formu", formTitle: "Talep bırakın",
      formName: "Ad", formNamePlaceholder: "Adınız", formPhone: "Telefon", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Mesaj",
      formMessagePlaceholder: "Giriş tarihleri, yatak sayısı veya sorunuz…", formSubmit: "Gönder", formSuccess: "Talebiniz alındı. Kısa süre içinde sizinle iletişime geçeceğiz.",
    },
    maps: { yandex: "Yandex Haritalar’da aç", google: "Google Maps’te aç", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "Kalmius Hostel haritada" },
    sticky: { call: "Ara", telegram: "Telegram’dan yaz" },
    footer: { copy: "© 2026 Kalmius Hostel. Donetsk, Levoberejnaya Cad. 60", call: "Ara", telegram: "Telegram’dan yaz" },
    admin: { status: "Düzenleme modu", save: "Kaydet", logout: "Çıkış", loginTitle: "Yönetici girişi", password: "Şifre", passwordPlaceholder: "••••••••", error: "Yanlış şifre", cancel: "İptal", enter: "Giriş", toastOk: "Değişiklikler kaydedildi!", toastFail: "Kaydedilemedi. Site klasöründe PHP sunucusu çalıştırın.", edit: "Düzenle", lock: "Yönetici girişi" },
  },
  fr: {
    meta: { title: "Hostel Kalmius — Donetsk", description: "Le hostel Kalmius est un foyer tout confort au centre de Donetsk. Lits de 475₽ à 850₽. Hébergement du personnel et des brigades jusqu’à 200 personnes." },
    logo: { aria: "Hostel Kalmius", mark: "К", name: "Hostel Kalmius", slogan: "Confort, Chaleur, Attention" },
    nav: { aria: "Menu principal", home: "Accueil", about: "À propos", rooms: "Chambres et tarifs", amenities: "Équipements", rules: "Règles et paiement", location: "Lieu et carte" },
    header: { menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu", phones: "Tous les téléphones", telegram: "Telegram" },
    lang: { label: "Choisir la langue", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Hostel Kalmius", place: "Foyer tout confort au centre-ville",
      title: "Un séjour confortable à Donetsk", tagline: "Confort, Chaleur, Attention",
      badge: "Jusqu’à 200 personnes • personnel d’entreprise et brigades du bâtiment",
    },
    about: {
      kicker: "À propos",
      title: "Hostel Kalmius",
      text: "Un foyer tout confort au centre-ville. Nous accueillons le personnel d’entreprise et les brigades du bâtiment — jusqu’à 200 personnes.",
    },
    booking: {
      aria: "Réservation rapide", name: "Nom", namePlaceholder: "Votre nom", phone: "Téléphone", phonePlaceholder: "+7 (___) ___-__-__", date: "Date d’arrivée", room: "Type de lit",
      optionEconomy: "Lit économique", optionStandard: "Lit standard", optionComfort: "Confort / Bloc groupe",
      submit: "Réserver", success: "Merci ! Nous confirmerons votre réservation rapidement.",
    },
    rooms: {
      kicker: "Chambres et tarifs", title: "Catégories", lead: "Économique, standard, confort plus ou hébergement de brigades — selon votre besoin.",
      priceRange: "lit dès 475₽ par jour",
      economy: { tag: "Éco", title: "Lit économique", price: "dès 475₽", unit: "/ lit par jour", f1: "Lits superposés confortables", f2: "Wi-Fi gratuit", f3: "Linge de lit propre", f4: "Cuisine, douche et WC communs", book: "Réserver" },
      standard: { tag: "Standard", title: "Lit standard", price: "dès 850₽", unit: "/ lit par jour", f1: "Lits une place et demie confortables", f2: "Chambres pour couples / époux", f3: "Dans la chambre : armoire, tables de chevet, table et chaises", f4: "Wi-Fi gratuit", book: "Réserver" },
      plus: { tag: "Confort Plus", title: "Chambres à confort supérieur", price: "Sur demande", unit: "demandez le tarif", f1: "Entrée séparée et salles de bain modernes", f2: "Meubles et matelas de haute qualité", f3: "Réfrigérateur, lave-linge, micro-ondes, bouilloire, cafetière", f4: "Wi-Fi gratuit", book: "Réserver / Demander" },
      groups: { tag: "Entreprises", title: "Hébergement de groupes / brigades", price: "dès 570₽", unit: "/ jour", f1: "Offres spéciales pour brigades et entreprises", f2: "Groupes jusqu’à 200 personnes", f3: "Modes de paiement flexibles", f4: "Wi-Fi gratuit", book: "Demander un séjour" },
    },
    amenities: {
      kicker: "Équipements", title: "Confort sur place", lead: "Tout pour un séjour confortable du personnel, des brigades et des visiteurs.",
      water: { title: "Eau en continu", text: "Eau chaude et froide 24h/24." },
      kitchen: { title: "Cuisines équipées", text: "Plaques, micro-ondes, réfrigérateurs, vaisselle." },
      bath: { title: "Douches et sanitaires propres", text: "Espaces sanitaires entretenus régulièrement." },
      wifi: { title: "Wi-Fi gratuit", text: "Internet sur tout le site." },
      parking: { title: "Parking gratuit et sécurisé", text: "Vous pouvez laisser la voiture sur place." },
      linen: { title: "Linge et ménage", text: "Changement de linge et ménage réguliers." },
      security: { title: "Sécurité et vidéosurveillance", text: "Sécurité et caméras 24h/24 sur le site." },
    },
    info: {
      kicker: "Règles et paiement", title: "Informations importantes", lead: "Arrivée, départ et paiement — y compris pour les personnes morales.",
      checkin: { title: "Arrivée et départ", times: "Arrivée à partir de 14h00, départ jusqu’à 12h00", note: "Réception 24h/24." },
      payment: { title: "Paiement", text: "Espèces et virement, avec documents pour les organisations." },
    },
    contact: {
      kicker: "Lieu et carte", title: "Contact et adresse", intro: "Le hostel Kalmius est un foyer tout confort au centre-ville. Appelez-nous ou écrivez sur Telegram.",
      addressLabel: "Adresse", address: "Donetsk, rue Levoberejnaya, 60", phonesLabel: "Téléphones", emailLabel: "E-mail",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Appeler", telegram: "Écrire sur Telegram", formAria: "Formulaire de demande", formTitle: "Envoyer une demande",
      formName: "Nom", formNamePlaceholder: "Votre nom", formPhone: "Téléphone", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Message",
      formMessagePlaceholder: "Dates d’arrivée, nombre de lits ou une question…", formSubmit: "Envoyer", formSuccess: "Demande reçue. Nous vous recontacterons bientôt.",
    },
    maps: { yandex: "Ouvrir dans Yandex Cartes", google: "Ouvrir dans Google Maps", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "Hostel Kalmius sur la carte" },
    sticky: { call: "Appeler", telegram: "Écrire sur Telegram" },
    footer: { copy: "© 2026 Hostel Kalmius. Donetsk, rue Levoberejnaya, 60", call: "Appeler", telegram: "Écrire sur Telegram" },
    admin: { status: "Mode édition", save: "Enregistrer", logout: "Quitter", loginTitle: "Connexion admin", password: "Mot de passe", passwordPlaceholder: "••••••••", error: "Mot de passe incorrect", cancel: "Annuler", enter: "Connexion", toastOk: "Modifications enregistrées !", toastFail: "Enregistrement impossible. Lancez un serveur PHP dans le dossier du site.", edit: "Modifier", lock: "Connexion admin" },
  },
  es: {
    meta: { title: "Hostel Kalmius — Donetsk", description: "El hostel Kalmius es una residencia de mayor confort en el centro de Donetsk. Camas de 475₽ a 850₽. Alojamiento para personal y brigadas de hasta 200 personas." },
    logo: { aria: "Hostel Kalmius", mark: "К", name: "Hostel Kalmius", slogan: "Confort, Calidez, Cuidado" },
    nav: { aria: "Menú principal", home: "Inicio", about: "Sobre nosotros", rooms: "Habitaciones y precios", amenities: "Servicios", rules: "Normas y pago", location: "Ubicación y mapa" },
    header: { menuOpen: "Abrir menú", menuClose: "Cerrar menú", phones: "Todos los teléfonos", telegram: "Telegram" },
    lang: { label: "Elegir idioma", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "Hostel Kalmius", place: "Residencia de mayor confort en el centro de la ciudad",
      title: "Estancia cómoda en Donetsk", tagline: "Confort, Calidez, Cuidado",
      badge: "Hasta 200 personas • personal de empresas y brigadas de construcción",
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Hostel Kalmius",
      text: "Residencia de mayor confort en el centro de la ciudad. Alojamos personal de empresas y brigadas de construcción — hasta 200 personas.",
    },
    booking: {
      aria: "Reserva rápida", name: "Nombre", namePlaceholder: "Su nombre", phone: "Teléfono", phonePlaceholder: "+7 (___) ___-__-__", date: "Fecha de llegada", room: "Tipo de cama",
      optionEconomy: "Cama económica", optionStandard: "Cama estándar", optionComfort: "Confort / Bloque grupal",
      submit: "Reservar", success: "¡Gracias! Confirmaremos su reserva en breve.",
    },
    rooms: {
      kicker: "Habitaciones y precios", title: "Categorías", lead: "Económica, estándar, confort plus o alojamiento para brigadas, según su necesidad.",
      priceRange: "cama desde 475₽ al día",
      economy: { tag: "Económica", title: "Cama económica", price: "desde 475₽", unit: "/ cama al día", f1: "Literas cómodas", f2: "Wi-Fi gratuito", f3: "Ropa de cama limpia", f4: "Cocina, ducha y baño compartidos", book: "Reservar" },
      standard: { tag: "Estándar", title: "Cama estándar", price: "desde 850₽", unit: "/ cama al día", f1: "Camas de plaza y media cómodas", f2: "Habitaciones para parejas / cónyuges", f3: "En la habitación: armario, mesitas, mesa y sillas", f4: "Wi-Fi gratuito", book: "Reservar" },
      plus: { tag: "Confort Plus", title: "Habitaciones de mayor confort", price: "Bajo consulta", unit: "consulte el precio", f1: "Entrada independiente y baños modernos", f2: "Muebles y colchones de alta calidad", f3: "Nevera, lavadora, microondas, hervidor, cafetera", f4: "Wi-Fi gratuito", book: "Reservar / Consultar" },
      groups: { tag: "Empresas", title: "Alojamiento grupal para brigadas", price: "desde 570₽", unit: "/ día", f1: "Ofertas especiales para brigadas y empresas", f2: "Grupos de hasta 200 personas", f3: "Formas de pago flexibles", f4: "Wi-Fi gratuito", book: "Solicitar estancia" },
    },
    amenities: {
      kicker: "Servicios", title: "Confort en el recinto", lead: "Todo para una estancia cómoda de personal, brigadas y visitantes.",
      water: { title: "Suministro de agua constante", text: "Agua caliente y fría 24/7." },
      kitchen: { title: "Cocinas equipadas", text: "Fogones, microondas, neveras y vajilla." },
      bath: { title: "Duchas y baños limpios", text: "Las zonas sanitarias se mantienen con regularidad." },
      wifi: { title: "Wi-Fi gratis", text: "Internet en todo el recinto." },
      parking: { title: "Aparcamiento gratis y vigilado", text: "Puede dejar el coche en el recinto." },
      linen: { title: "Ropa de cama y limpieza", text: "Cambio de sábanas y limpieza regular." },
      security: { title: "Seguridad y videovigilancia", text: "Seguridad y cámaras 24/7 en el recinto." },
    },
    info: {
      kicker: "Normas y pago", title: "Información importante", lead: "Entrada, salida y pago, también para personas jurídicas.",
      checkin: { title: "Entrada y salida", times: "Entrada desde las 14:00, salida hasta las 12:00", note: "Recepción 24/7." },
      payment: { title: "Pago", text: "Efectivo y transferencia, con documentos para organizaciones." },
    },
    contact: {
      kicker: "Ubicación y mapa", title: "Contacto y dirección", intro: "El hostel Kalmius es una residencia de mayor confort en el centro. Llame o escriba por Telegram.",
      addressLabel: "Dirección", address: "Donetsk, calle Levoberezhnaya, 60", phonesLabel: "Teléfonos", emailLabel: "Correo",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "Llamar", telegram: "Escribir por Telegram", formAria: "Formulario de consulta", formTitle: "Enviar solicitud",
      formName: "Nombre", formNamePlaceholder: "Su nombre", formPhone: "Teléfono", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "Mensaje",
      formMessagePlaceholder: "Fechas de llegada, número de camas o una pregunta…", formSubmit: "Enviar", formSuccess: "Solicitud recibida. Nos pondremos en contacto pronto.",
    },
    maps: { yandex: "Abrir en Yandex Maps", google: "Abrir en Google Maps", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "Hostel Kalmius en el mapa" },
    sticky: { call: "Llamar", telegram: "Escribir por Telegram" },
    footer: { copy: "© 2026 Hostel Kalmius. Donetsk, calle Levoberezhnaya, 60", call: "Llamar", telegram: "Escribir por Telegram" },
    admin: { status: "Modo de edición", save: "Guardar", logout: "Salir", loginTitle: "Acceso de administrador", password: "Contraseña", passwordPlaceholder: "••••••••", error: "Contraseña incorrecta", cancel: "Cancelar", enter: "Entrar", toastOk: "Cambios guardados.", toastFail: "No se pudo guardar. Inicie un servidor PHP en la carpeta del sitio.", edit: "Editar", lock: "Acceso de administrador" },
  },
  zh: {
    meta: { title: "卡尔米乌斯旅舍 — 顿涅茨克", description: "卡尔米乌斯旅舍位于市中心，提供高舒适度住宿。床位每天 475₽ 至 850₽。可接待企业员工与施工队最多 200 人。" },
    logo: { aria: "卡尔米乌斯旅舍", mark: "К", name: "卡尔米乌斯旅舍", slogan: "舒适、温馨、关怀" },
    nav: { aria: "主导航", home: "首页", about: "关于我们", rooms: "房间与价格", amenities: "设施", rules: "规则与付款", location: "位置与地图" },
    header: { menuOpen: "打开菜单", menuClose: "关闭菜单", phones: "全部电话", telegram: "Telegram" },
    lang: { label: "选择语言", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "卡尔米乌斯旅舍", place: "位于市中心的高舒适度宿舍",
      title: "在顿涅茨克舒适入住", tagline: "舒适、温馨、关怀",
      badge: "最多 200 人 • 企业员工与施工队",
    },
    about: {
      kicker: "关于我们",
      title: "卡尔米乌斯旅舍",
      text: "位于市中心的高舒适度宿舍。可接待企业员工与施工队，最多 200 人。",
    },
    booking: {
      aria: "快速预订", name: "姓名", namePlaceholder: "您的姓名", phone: "电话", phonePlaceholder: "+7 (___) ___-__-__", date: "入住日期", room: "床位类型",
      optionEconomy: "经济床位", optionStandard: "标准床位", optionComfort: "舒适 / 团体区块",
      submit: "立即预订", success: "谢谢！我们将尽快确认预订。",
    },
    rooms: {
      kicker: "房间与价格", title: "床位类型", lead: "经济、标准、舒适加强或施工队团体入住，按需求选择。",
      priceRange: "床位每天起价 475₽",
      economy: { tag: "经济", title: "经济床位", price: "起价 475₽", unit: "/ 床位每天", f1: "舒适双层床", f2: "免费 Wi-Fi", f3: "干净床品", f4: "公共卫生间、淋浴与厨房", book: "立即预订" },
      standard: { tag: "标准", title: "标准床位", price: "起价 850₽", unit: "/ 床位每天", f1: "舒适单人加宽床", f2: "适合夫妻 / 伴侣的房间", f3: "房间内：衣柜、床头柜、桌椅", f4: "免费 Wi-Fi", book: "立即预订" },
      plus: { tag: "舒适 Plus", title: "高舒适度房间", price: "价格面议", unit: "请咨询房价", f1: "独立入口与现代卫浴", f2: "高品质家具与床垫", f3: "冰箱、洗衣机、微波炉、电水壶、咖啡机", f4: "免费 Wi-Fi", book: "预订 / 咨询" },
      groups: { tag: "企业团体", title: "施工队团体入住", price: "起价 570₽", unit: "/ 每天", f1: "面向施工队与企业的特别优惠", f2: "最多可接待 200 人", f3: "灵活付款方式", f4: "免费 Wi-Fi", book: "申请住宿" },
    },
    amenities: {
      kicker: "设施", title: "场地内的舒适配套", lead: "为企业员工、施工队和城市访客提供舒适住宿。",
      water: { title: "不间断供水", text: "冷热水全天 24 小时供应。" },
      kitchen: { title: "配备齐全的厨房", text: "炉灶、微波炉、冰箱和餐具。" },
      bath: { title: "干净的淋浴与卫生间", text: "卫生区域定期维护。" },
      wifi: { title: "免费 Wi-Fi", text: "全区域覆盖互联网。" },
      parking: { title: "免费安保停车场", text: "车辆可停在场地内。" },
      linen: { title: "床品与清洁", text: "定期更换床品并打扫。" },
      security: { title: "安保与监控", text: "场地内 24 小时安保与监控。" },
    },
    info: {
      kicker: "规则与付款", title: "重要信息", lead: "入住、退房与付款，含对公结算。",
      checkin: { title: "入住与退房", times: "入住 14:00 起，退房至 12:00", note: "24 小时前台。" },
      payment: { title: "付款", text: "现金与对公转账，可为机构开具文件。" },
    },
    contact: {
      kicker: "位置与地图", title: "联系方式与地址", intro: "卡尔米乌斯旅舍位于市中心。请致电或通过 Telegram 联系我们。",
      addressLabel: "地址", address: "顿涅茨克市，左岸街 60 号", phonesLabel: "电话", emailLabel: "邮箱",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "拨打电话", telegram: "通过 Telegram 留言", formAria: "咨询表单", formTitle: "提交申请",
      formName: "姓名", formNamePlaceholder: "您的姓名", formPhone: "电话", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "留言",
      formMessagePlaceholder: "入住日期、床位数或问题…", formSubmit: "发送", formSuccess: "申请已收到。我们将尽快与您联系。",
    },
    maps: { yandex: "在 Yandex 地图中打开", google: "在 Google 地图中打开", tabYandex: "Yandex", tabGoogle: "Google", iframeTitle: "卡尔米乌斯旅舍地图位置" },
    sticky: { call: "拨打电话", telegram: "通过 Telegram 留言" },
    footer: { copy: "© 2026 卡尔米乌斯旅舍。顿涅茨克市，左岸街 60 号", call: "拨打电话", telegram: "通过 Telegram 留言" },
    admin: { status: "编辑模式", save: "保存", logout: "退出", loginTitle: "管理员登录", password: "密码", passwordPlaceholder: "••••••••", error: "密码不正确", cancel: "取消", enter: "登录", toastOk: "已成功保存更改！", toastFail: "无法保存。请在网站文件夹中运行 PHP 服务器。", edit: "编辑", lock: "管理员登录" },
  },
  ar: {
    meta: { title: "نزل كالميوس — دونيتسك", description: "نزل كالميوس سكن مريح في وسط المدينة. الأسرة من 475₽ إلى 850₽ يوميًا. إقامة موظفي الشركات وفرق البناء حتى 200 شخص." },
    logo: { aria: "نزل كالميوس", mark: "К", name: "نزل «كالميوس»", slogan: "راحة، دفء، عناية" },
    nav: { aria: "القائمة الرئيسية", home: "الرئيسية", about: "من نحن", rooms: "الغرف والأسعار", amenities: "المرافق", rules: "القواعد والدفع", location: "الموقع والخريطة" },
    header: { menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة", phones: "جميع الهواتف", telegram: "تيليغرام" },
    lang: { label: "اختيار اللغة", ru: "Русский", en: "English", uz: "O‘zbekcha", kk: "Қазақша", de: "Deutsch", tr: "Türkçe", fr: "Français", es: "Español", zh: "中文", ar: "العربية" },
    hero: {
      kicker: "نزل «كالميوس»", place: "سكن عالي الراحة في وسط المدينة",
      title: "إقامة مريحة في دونيتسك", tagline: "راحة، دفء، عناية",
      badge: "حتى 200 شخص • موظفو الشركات وفرق البناء",
    },
    about: {
      kicker: "من نحن",
      title: "نزل «كالميوس»",
      text: "سكن عالي الراحة في وسط المدينة. نستقبل موظفي الشركات وفرق البناء — حتى 200 شخص.",
    },
    booking: {
      aria: "حجز سريع", name: "الاسم", namePlaceholder: "اسمك", phone: "الهاتف", phonePlaceholder: "+7 (___) ___-__-__", date: "تاريخ الوصول", room: "نوع السرير",
      optionEconomy: "سرير اقتصادي", optionStandard: "سرير قياسي", optionComfort: "مريح / جناح جماعي",
      submit: "احجز الآن", success: "شكرًا لك! سنتواصل معك لتأكيد الحجز.",
    },
    rooms: {
      kicker: "الغرف والأسعار", title: "فئات الأسرّة", lead: "اقتصادي أو قياسي أو مريح بلس أو إقامة جماعية للأطقم حسب احتياجك.",
      priceRange: "السرير من 475₽ في اليوم",
      economy: { tag: "اقتصادي", title: "سرير اقتصادي", price: "من 475₽", unit: "/ سرير في اليوم", f1: "أسرّة طابقية مريحة", f2: "واي فاي مجاني", f3: "أغطية سرير نظيفة", f4: "مطبخ ودوش ومرحاض مشتركة", book: "احجز الآن" },
      standard: { tag: "قياسي", title: "سرير قياسي", price: "من 850₽", unit: "/ سرير في اليوم", f1: "أسرّة مريحة بعرض سرير ونصف", f2: "غرف للأزواج", f3: "في الغرفة: خزانة وطاولات بجانب السرير وطاولة وكراسٍ", f4: "واي فاي مجاني", book: "احجز الآن" },
      plus: { tag: "مريح بلس", title: "غرف برفاهية أعلى", price: "حسب الطلب", unit: "اسأل عن السعر", f1: "مدخل مستقل ودورات مياه حديثة", f2: "أثاث ومراتب عالية الجودة", f3: "ثلاجة وغسالة وميكروويف وغلاية وماكينة قهوة", f4: "واي فاي مجاني", book: "احجز / استفسر" },
      groups: { tag: "للشركات", title: "إقامة جماعية للأطقم", price: "من 570₽", unit: "/ يوم", f1: "عروض خاصة لأطقم العمل والشركات", f2: "مجموعات حتى 200 شخص", f3: "طرق دفع مرنة", f4: "واي فاي مجاني", book: "طلب إقامة" },
    },
    amenities: {
      kicker: "المرافق", title: "الراحة في المجمع", lead: "كل ما يلزم لإقامة مريحة للموظفين والفرق وضيوف المدينة.",
      water: { title: "إمداد مياه مستمر", text: "ماء ساخن وبارد على مدار الساعة." },
      kitchen: { title: "مطابخ مجهزة", text: "أفران وميكروويف وثلاجات وأوانٍ." },
      bath: { title: "دوشات ودورات مياه نظيفة", text: "تُصان المناطق الصحية بانتظام." },
      wifi: { title: "واي فاي مجاني", text: "إنترنت في جميع أنحاء النزل." },
      parking: { title: "موقف مجاني مؤمَّن", text: "يمكن ترك السيارة داخل المجمع." },
      linen: { title: "أغطية وتنظيف", text: "تغيير منتظم للأغطية وتنظيف دوري." },
      security: { title: "حراسة ومراقبة بالفيديو", text: "حراسة وكاميرات على مدار الساعة." },
    },
    info: {
      kicker: "القواعد والدفع", title: "معلومات مهمة", lead: "الوصول والمغادرة والدفع، بما في ذلك للجهات الاعتبارية.",
      checkin: { title: "الوصول والمغادرة", times: "الوصول من 14:00، المغادرة حتى 12:00", note: "استقبال على مدار الساعة." },
      payment: { title: "الدفع", text: "نقدًا وتحويل مصرفي مع إصدار مستندات للمؤسسات." },
    },
    contact: {
      kicker: "الموقع والخريطة", title: "جهات الاتصال والعنوان", intro: "نزل «كالميوس» سكن عالي الراحة في وسط المدينة. اتصل بنا أو راسلنا عبر تيليغرام.",
      addressLabel: "العنوان", address: "دونيتسك، شارع ليفوبيريجنايا، 60", phonesLabel: "الهواتف", emailLabel: "البريد الإلكتروني",
      phone1: "+7 (949) 459-34-45", phone2: "+7 (949) 621-14-20", phone3: "+7 (949) 373-66-42", email: "sergeyisdonetsk@yandex.ru", telegramLabel: "Telegram", telegramHandle: "@hostel_donetsk",
      call: "اتصال", telegram: "راسلنا عبر تيليغرام", formAria: "نموذج الطلب", formTitle: "أرسل طلبًا",
      formName: "الاسم", formNamePlaceholder: "اسمك", formPhone: "الهاتف", formPhonePlaceholder: "+7 (___) ___-__-__", formMessage: "الرسالة",
      formMessagePlaceholder: "تواريخ الوصول أو عدد الأسرّة أو سؤال…", formSubmit: "إرسال", formSuccess: "تم استلام الطلب. سنتواصل معك قريبًا.",
    },
    maps: { yandex: "فتح في خرائط ياندكس", google: "فتح في خرائط جوجل", tabYandex: "ياندكس", tabGoogle: "جوجل", iframeTitle: "نزل كالميوس على الخريطة" },
    sticky: { call: "اتصال", telegram: "راسلنا عبر تيليغرام" },
    footer: { copy: "© 2026 نزل «كالميوس». دونيتسك، شارع ليفوبيريجنايا، 60", call: "اتصال", telegram: "راسلنا عبر تيليغرام" },
    admin: { status: "وضع التحرير", save: "حفظ", logout: "خروج", loginTitle: "دخول المسؤول", password: "كلمة المرور", passwordPlaceholder: "••••••••", error: "كلمة مرور غير صحيحة", cancel: "إلغاء", enter: "دخول", toastOk: "تم حفظ التغييرات بنجاح!", toastFail: "تعذر الحفظ. شغّل خادم PHP في مجلد الموقع.", edit: "تحرير", lock: "دخول المسؤول" },
  },
};

function getValue(dict, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
}

function currentLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return translations[stored] ? stored : DEFAULT_LANG;
}

function t(path) {
  const lang = currentLang();
  const value = getValue(translations[lang], path);
  if (typeof value === "string") return value;
  const fallback = getValue(translations[DEFAULT_LANG], path);
  return typeof fallback === "string" ? fallback : "";
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];
  const meta = languages[lang] || languages[DEFAULT_LANG];

  document.documentElement.lang = meta.html;
  document.documentElement.dir = meta.dir;
  document.title = dict.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict.meta.description);

  const socialDescription = dict.meta.description;
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((el) => {
    el.setAttribute("content", dict.meta.title);
  });
  document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach((el) => {
    el.setAttribute("content", socialDescription);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.isContentEditable) return;
    const value = getValue(dict, el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = getValue(dict, el.dataset.i18nPlaceholder);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = getValue(dict, el.dataset.i18nAria);
    if (typeof value === "string") el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = getValue(dict, el.dataset.i18nAlt);
    if (typeof value === "string") el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const value = getValue(dict, el.dataset.i18nTitle);
    if (typeof value === "string") {
      el.setAttribute("title", value);
      el.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll(".cms-pencil").forEach((pencil) => {
    pencil.title = t("admin.edit");
    pencil.setAttribute("aria-label", t("admin.edit"));
  });

  const langCode = document.getElementById("langCode");
  if (langCode) langCode.textContent = meta.code;

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-selected", String(btn.dataset.lang === lang));
  });

  applyCmsData();
}

function setLanguage(lang) {
  const next = translations[lang] ? lang : DEFAULT_LANG;
  localStorage.setItem(STORAGE_KEY, next);
  applyTranslations(next);
}

function initLanguage() {
  setLanguage(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
}

function bindMenu(root, button, menu) {
  const closeMenu = () => {
    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = menu.hidden;
    menu.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  return closeMenu;
}

function initLangSwitcher() {
  const closeMenu = bindMenu(
    document.getElementById("langSwitcher"),
    document.getElementById("langBtn"),
    document.getElementById("langMenu")
  );

  document.querySelectorAll("[data-lang]").forEach((option) => {
    option.addEventListener("click", () => {
      setLanguage(option.dataset.lang);
      closeMenu();
    });
  });
}

function initPhones() {
  bindMenu(
    document.getElementById("phonesSwitcher"),
    document.getElementById("phonesBtn"),
    document.getElementById("phonesMenu")
  );
}

function initUi() {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  const closeMobileNav = () => {
    nav.classList.remove("is-open");
    menuBtn.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", t("header.menuOpen"));
    document.body.classList.remove("nav-open");
  };

  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", t(open ? "header.menuClose" : "header.menuOpen"));
    document.body.classList.toggle("nav-open", open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNav();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1281px)").matches) closeMobileNav();
  });
}

const ADMIN_PASS = "admin123";
const ADMIN_SESSION_KEY = "kalmius-admin";
let cmsStore = {};

function applyLinkFromCms(el, value) {
  if (el.tagName !== "A") return;
  const href = el.getAttribute("href") || "";
  if (href.startsWith("tel:")) {
    const digits = String(value).replace(/\D/g, "");
    if (digits) el.setAttribute("href", "tel:+" + digits);
    el.setAttribute("title", value);
  }
  if (href.startsWith("mailto:")) {
    el.setAttribute("href", "mailto:" + String(value).trim());
  }
}

function applyCmsData() {
  document.querySelectorAll("[data-cms-key]").forEach((el) => {
    const key = el.dataset.cmsKey;
    if (cmsStore[key] == null || cmsStore[key] === "") return;
    el.textContent = cmsStore[key];
    applyLinkFromCms(el, cmsStore[key]);
  });
}

function collectCmsData() {
  const data = {};
  document.querySelectorAll("[data-cms-key]").forEach((el) => {
    data[el.dataset.cmsKey] = el.textContent.replace(/\s+/g, " ").trim();
  });
  return data;
}

function showToast(message, isError) {
  const toast = document.getElementById("cmsToast");
  toast.textContent = message;
  toast.classList.toggle("is-error", Boolean(isError));
  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

function startEditing(el) {
  document.querySelectorAll("[data-cms-key].is-editing").forEach((item) => {
    item.classList.remove("is-editing");
    item.removeAttribute("contenteditable");
  });
  el.contentEditable = "true";
  el.classList.add("is-editing");
  el.focus();
}

function wrapCmsElements() {
  document.querySelectorAll("[data-cms-key]").forEach((el) => {
    if (el.closest(".cms-wrap")) return;
    const wrap = document.createElement("span");
    wrap.className = "cms-wrap";
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
    const pencil = document.createElement("button");
    pencil.type = "button";
    pencil.className = "cms-pencil";
    pencil.title = t("admin.edit");
    pencil.setAttribute("aria-label", t("admin.edit"));
    pencil.textContent = "✏️";
    wrap.appendChild(pencil);
  });
}

function unwrapCmsElements() {
  document.querySelectorAll(".cms-wrap").forEach((wrap) => {
    const el = wrap.querySelector("[data-cms-key]");
    if (!el) return;
    el.removeAttribute("contenteditable");
    el.classList.remove("is-editing");
    wrap.parentNode.insertBefore(el, wrap);
    wrap.remove();
  });
}

function setAdminMode(active) {
  document.documentElement.classList.toggle("is-admin", active);
  document.body.classList.toggle("is-admin", active);
  document.getElementById("adminBar").hidden = !active;
  if (active) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
    wrapCmsElements();
  } else {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    unwrapCmsElements();
  }
}

async function saveCms() {
  cmsStore = collectCmsData();
  try {
    const response = await fetch("save.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: ADMIN_PASS, content: cmsStore }),
    });
    if (!response.ok) throw new Error("save failed");
    const result = await response.json();
    if (!result.ok) throw new Error("save failed");
    showToast(t("admin.toastOk"));
  } catch (_) {
    showToast(t("admin.toastFail"), true);
  }
}

async function loadCms() {
  try {
    const response = await fetch("site-data.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    if (data && typeof data === "object") cmsStore = data;
    applyCmsData();
  } catch (_) {
    /* defaults remain */
  }
}

function initCms() {
  const modal = document.getElementById("adminModal");
  const passwordInput = document.getElementById("adminPassword");
  const error = document.getElementById("adminError");

  const closeModal = () => {
    modal.hidden = true;
    error.hidden = true;
    passwordInput.value = "";
  };

  const tryLogin = () => {
    if (passwordInput.value === ADMIN_PASS) {
      closeModal();
      setAdminMode(true);
      return;
    }
    error.hidden = false;
  };

  document.getElementById("adminLoginBtn").addEventListener("click", () => {
    modal.hidden = false;
    passwordInput.focus();
  });
  document.getElementById("adminCancelBtn").addEventListener("click", closeModal);
  document.getElementById("adminSubmitBtn").addEventListener("click", tryLogin);
  passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") tryLogin();
    if (event.key === "Escape") closeModal();
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.getElementById("adminLogoutBtn").addEventListener("click", () => setAdminMode(false));
  document.getElementById("adminSaveBtn").addEventListener("click", saveCms);

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("is-admin")) return;
    const pencil = event.target.closest(".cms-pencil");
    const field = event.target.closest("[data-cms-key]");
    if (pencil) {
      event.preventDefault();
      startEditing(pencil.parentElement.querySelector("[data-cms-key]"));
      return;
    }
    if (field) {
      event.preventDefault();
      startEditing(field);
    }
  });

  document.addEventListener("input", (event) => {
    const field = event.target.closest("[data-cms-key]");
    if (!field) return;
    const key = field.dataset.cmsKey;
    const value = field.textContent.replace(/\s+/g, " ").trim();
    cmsStore[key] = value;
    document.querySelectorAll(`[data-cms-key="${key}"]`).forEach((el) => {
      if (el !== field) {
        el.textContent = field.textContent;
        applyLinkFromCms(el, value);
      }
    });
    applyLinkFromCms(field, value);
  });

  loadCms().then(() => {
    if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "1") setAdminMode(true);
  });
}

function initAutumnLeaves() {
  const canvas = document.getElementById("heroLeaves");
  const hero = document.getElementById("hero");
  if (!canvas || !hero) return;

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery.matches) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const COLORS = ["#e2a838", "#d97724", "#c85a28"];
  let leaves = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let lastTime = 0;
  let running = false;

  const rand = (min, max) => min + Math.random() * (max - min);

  const leafCount = (w) => Math.max(12, Math.min(20, Math.round(w / 80)));

  const createLeaf = (fromTop) => {
    const size = rand(10, 22);
    return {
      x: rand(0, Math.max(width, 1)),
      y: fromTop ? -size - rand(0, 90) : rand(-40, height),
      size,
      speedY: rand(16, 38),
      sway: rand(16, 34),
      swaySpeed: rand(0.55, 1.15),
      phase: rand(0, Math.PI * 2),
      rotation: rand(0, Math.PI * 2),
      spin: rand(-1.2, 1.2),
      color: COLORS[(Math.random() * COLORS.length) | 0],
      alpha: rand(0.58, 0.92),
      tilt: rand(0.72, 1),
    };
  };

  const resetLeaf = (leaf) => {
    Object.assign(leaf, createLeaf(true));
  };

  const drawLeaf = (leaf) => {
    const s = leaf.size;
    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.rotation);
    ctx.scale(leaf.tilt, 1);
    ctx.globalAlpha = leaf.alpha;
    ctx.fillStyle = leaf.color;
    ctx.strokeStyle = leaf.color;

    ctx.beginPath();
    ctx.moveTo(0, -s * 0.52);
    ctx.bezierCurveTo(s * 0.22, -s * 0.46, s * 0.58, -s * 0.16, s * 0.38, s * 0.06);
    ctx.bezierCurveTo(s * 0.56, s * 0.16, s * 0.24, s * 0.4, 0, s * 0.5);
    ctx.bezierCurveTo(-s * 0.24, s * 0.4, -s * 0.56, s * 0.16, -s * 0.38, s * 0.06);
    ctx.bezierCurveTo(-s * 0.58, -s * 0.16, -s * 0.22, -s * 0.46, 0, -s * 0.52);
    ctx.closePath();
    ctx.fill();

    ctx.globalAlpha = leaf.alpha * 0.75;
    ctx.lineWidth = Math.max(0.7, s * 0.055);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.22);
    ctx.quadraticCurveTo(s * 0.04, s * 0.12, 0, s * 0.58);
    ctx.stroke();

    ctx.restore();
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = leafCount(width);
    if (leaves.length !== count) {
      leaves = Array.from({ length: count }, (_, index) => {
        const leaf = createLeaf(false);
        const slot = width / count;
        leaf.x = slot * index + rand(slot * 0.15, slot * 0.85);
        return leaf;
      });
    }
  };

  const tick = (now) => {
    if (!running) return;
    frame = requestAnimationFrame(tick);
    const dt = Math.min(0.048, (now - lastTime) / 1000 || 0.016);
    lastTime = now;

    ctx.clearRect(0, 0, width, height);

    for (const leaf of leaves) {
      leaf.phase += leaf.swaySpeed * dt;
      leaf.x += Math.sin(leaf.phase) * leaf.sway * dt * 1.8;
      leaf.y += leaf.speedY * dt;
      leaf.rotation += leaf.spin * dt;
      leaf.tilt = 0.7 + Math.abs(Math.sin(leaf.phase * 0.9)) * 0.3;

      if (leaf.x < -28) leaf.x = width + 18;
      if (leaf.x > width + 28) leaf.x = -18;

      if (leaf.y > height + leaf.size) resetLeaf(leaf);

      drawLeaf(leaf);
    }
  };

  const start = () => {
    if (running) return;
    running = true;
    lastTime = performance.now();
    frame = requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    cancelAnimationFrame(frame);
  };

  resize();
  start();

  const observer = new ResizeObserver(resize);
  observer.observe(hero);

  const visibility = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    },
    { threshold: 0.05 }
  );
  visibility.observe(hero);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (hero.getBoundingClientRect().bottom > 0) start();
  });
}

initLanguage();
initLangSwitcher();
initPhones();
initUi();
initCms();
initAutumnLeaves();
