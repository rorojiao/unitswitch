const I18N = {
  en: {
    siteTitle: "UnitSwitch ⚖️",
    tagline: "Universal Unit Converter",
    home: "Home", length: "Length", weight: "Weight", temperature: "Temperature",
    from: "From", to: "To", swap: "⇅",
    tipText: "Buy me a coffee ☕",
    footer: "Made with 💜 by UnitSwitch",
    // Index
    lengthDesc: "m, km, mi, ft, in, cm, mm, yd",
    weightDesc: "kg, g, lb, oz, ton, 斤, 两",
    tempDesc: "°C, °F, K with live thermometer",
    // Units
    meter:"Meter",kilometer:"Kilometer",mile:"Mile",foot:"Foot",inch:"Inch",centimeter:"Centimeter",millimeter:"Millimeter",yard:"Yard",
    kilogram:"Kilogram",gram:"Gram",pound:"Pound",ounce:"Ounce",ton:"Metric Ton",jin:"Jin (斤)",liang:"Liang (两)",
    celsius:"Celsius (°C)",fahrenheit:"Fahrenheit (°F)",kelvin:"Kelvin (K)"
  },
  zh: {
    siteTitle: "UnitSwitch ⚖️",
    tagline: "万能单位换算工具",
    home: "首页", length: "长度", weight: "重量", temperature: "温度",
    from: "从", to: "到", swap: "⇅",
    tipText: "请我喝杯咖啡 ☕",
    footer: "用 💜 制作 · UnitSwitch",
    lengthDesc: "米、千米、英里、英尺、英寸、厘米、毫米、码",
    weightDesc: "千克、克、磅、盎司、吨、斤、两",
    tempDesc: "摄氏、华氏、开尔文 + 实时温度计",
    meter:"米",kilometer:"千米",mile:"英里",foot:"英尺",inch:"英寸",centimeter:"厘米",millimeter:"毫米",yard:"码",
    kilogram:"千克",gram:"克",pound:"磅",ounce:"盎司",ton:"公吨",jin:"斤",liang:"两",
    celsius:"摄氏 (°C)",fahrenheit:"华氏 (°F)",kelvin:"开尔文 (K)"
  },
  ja: {
    siteTitle: "UnitSwitch ⚖️",
    tagline: "万能単位変換ツール",
    home: "ホーム", length: "長さ", weight: "重さ", temperature: "温度",
    from: "から", to: "へ", swap: "⇅",
    tipText: "コーヒーをおごって ☕",
    footer: "💜で作りました · UnitSwitch",
    lengthDesc: "m, km, mi, ft, in, cm, mm, yd",
    weightDesc: "kg, g, lb, oz, ton, 斤, 两",
    tempDesc: "°C, °F, K リアルタイム温度計付き",
    meter:"メートル",kilometer:"キロメートル",mile:"マイル",foot:"フィート",inch:"インチ",centimeter:"センチ",millimeter:"ミリ",yard:"ヤード",
    kilogram:"キログラム",gram:"グラム",pound:"ポンド",ounce:"オンス",ton:"メトリックトン",jin:"斤",liang:"两",
    celsius:"摂氏 (°C)",fahrenheit:"華氏 (°F)",kelvin:"ケルビン (K)"
  },
  ko: {
    siteTitle: "UnitSwitch ⚖️",
    tagline: "만능 단위 변환기",
    home: "홈", length: "길이", weight: "무게", temperature: "온도",
    from: "에서", to: "으로", swap: "⇅",
    tipText: "커피 한잔 사주세요 ☕",
    footer: "💜로 만들었습니다 · UnitSwitch",
    lengthDesc: "m, km, mi, ft, in, cm, mm, yd",
    weightDesc: "kg, g, lb, oz, ton, 斤, 两",
    tempDesc: "°C, °F, K 실시간 온도계 포함",
    meter:"미터",kilometer:"킬로미터",mile:"마일",foot:"피트",inch:"인치",centimeter:"센티미터",millimeter:"밀리미터",yard:"야드",
    kilogram:"킬로그램",gram:"그램",pound:"파운드",ounce:"온스",ton:"메트릭 톤",jin:"진 (斤)",liang:"량 (两)",
    celsius:"섭씨 (°C)",fahrenheit:"화씨 (°F)",kelvin:"켈빈 (K)"
  },
  es: {
    siteTitle: "UnitSwitch ⚖️",
    tagline: "Conversor Universal de Unidades",
    home: "Inicio", length: "Longitud", weight: "Peso", temperature: "Temperatura",
    from: "De", to: "A", swap: "⇅",
    tipText: "Invítame un café ☕",
    footer: "Hecho con 💜 por UnitSwitch",
    lengthDesc: "m, km, mi, ft, in, cm, mm, yd",
    weightDesc: "kg, g, lb, oz, ton, 斤, 两",
    tempDesc: "°C, °F, K con termómetro en vivo",
    meter:"Metro",kilometer:"Kilómetro",mile:"Milla",foot:"Pie",inch:"Pulgada",centimeter:"Centímetro",millimeter:"Milímetro",yard:"Yarda",
    kilogram:"Kilogramo",gram:"Gramo",pound:"Libra",ounce:"Onza",ton:"Tonelada métrica",jin:"Jin (斤)",liang:"Liang (两)",
    celsius:"Celsius (°C)",fahrenheit:"Fahrenheit (°F)",kelvin:"Kelvin (K)"
  }
};

let currentLang = localStorage.getItem('unitswitch-lang') || 'en';

function t(key) { return (I18N[currentLang] || I18N.en)[key] || key; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('unitswitch-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  if (typeof onLangChange === 'function') onLangChange();
}

function initLang() {
  const sel = document.getElementById('langSel');
  if (sel) { sel.value = currentLang; sel.addEventListener('change', e => setLang(e.target.value)); }
  setLang(currentLang);
}

document.addEventListener('DOMContentLoaded', initLang);
