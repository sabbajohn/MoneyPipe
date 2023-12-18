import axios from "axios";
import { localStorageService } from "./local-storage.service";

export const utilService = {
  debounce,
  makeId,
  getFormatedDigits,
  getCurrencies,
  getSymbolFromCode,
  getIcons,
  getColors,
};

const CURRENCY_API = process.env.REACT_APP_CURRENCY_API;

function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

function makeId(length: number = 6) {
  let txt = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function getFormatedDigits(num: number) {
  return num < 10 ? "0" + num : num;
}

async function getCurrencies() {
  const currenciesData = {
    currencies: {
        "USD": {
            "id":"USD",
            "code":"USD",
            "currencySymbol": "$",
            "currencyName": "United States Dollar"
            // Additional properties if needed
          },
          "EUR": {
            "id":"EUR",
            "code":"EUR",
            "currencySymbol": "€",
            "currencyName": "Euro"
            // Additional properties if needed
          },
          "GBP": {
            "id":"GBP",
            "code":"GBP",
            "currencySymbol": "£",
            "currencyName": "British Pound Sterling"
            // Additional properties if needed
          },
          "JPY": {
            "id":"JPY",
            "code":"JPY",
            "currencySymbol": "¥",
            "currencyName": "Japanese Yen"
            // Additional properties if needed
          },
          "AUD": {
            "id":"AUD",
            "code":"AUD",
            "currencySymbol": "A$",
            "currencyName": "Australian Dollar"
            // Additional properties if needed
          },
          "CAD": {
            "id":"CAD",
            "code":"CAD",
            "currencySymbol": "CA$",
            "currencyName": "Canadian Dollar"
            // Additional properties if needed
          },
          "CNY": {
            "id":"CNY",
            "code":"CNY",
            "currencySymbol": "CN¥",
            "currencyName": "Chinese Yuan"
            // Additional properties if needed
          },
          "INR": {
            "id":"INR",
            "code":"INR",
            "currencySymbol": "₹",
            "currencyName": "Indian Rupee"
            // Additional properties if needed
          },
          "BRL": {
            "id":"BRL",
            "code":"BRL",
            "currencySymbol": "R$",
            "currencyName": "Brazilian Real"
            // Additional properties if needed
          },
          "MXN": {
            "id":"MXN",       
            "code":"MXN",       
            "currencySymbol": "MX$",
            "currencyName": "Mexican Peso"
            // Additional properties if needed
          },
          "ILS":{
            "id":"ILS",
            "code":"ILS",
            "currencySymbol": "₪",
            "currencyName": "Israeli Shekel"
          }

          // Add more currencies as needed
        }
    }
  
  try {
    const currencies = localStorageService.load("currencies");
    if (currencies) {
      return currencies;
    } else {
    //   const res = await axios.get(
    //     `https://free.currconv.com/api/v7/currencies?apiKey=${CURRENCY_API}`
    //   );
      localStorageService.save("currencies", currenciesData.currencies);
      return currenciesData.currencies;
    }
  } catch (err) {
    console.log(err);
  }
}

function getSymbolFromCode(currencyCode: string) {
  const currencies = localStorageService.load("currencies");
  return currencies[currencyCode].currencySymbol;
}

function getIcons() {
  return [
    "shopping-cart",
    "car",
    "bus",
    "train",
    "food",
    "motorcycle",
    "bottles",
    "code",
    "laptop",
    "smartphone",
    "beer",
    "cocktail",
    "smoke",
    "home",
    "money",
    "coins",
    "leaf",
    "travel",
    "fire",
    "music",
    "baby",
    "ball",
    "bicycle",
    "box",
    "book",
    "student",
    "bone",
    "dog",
    "building",
    "camping",
    "camera",
    "capsules",
    "pie-graph",
    "industry",
    "church",
    "exclamation",
    "water",
    "warning",
    "movie",
    "gas",
    "guitar",
    "hamburger",
    "hammer",
    "heart",
    "information",
    "carry",
    "bank",
    "cube",
    "old-phone",
    "text",
    "apple",
    "globe",
    "gym",
    "clothes",
    "plane",
  ];
}

function getColors() {
  return [
    "#a8071a",
    "#cf1322",
    "#f5222d",
    "#ff4d4f",
    "#ad2102",
    "#d4380d",
    "#fa541c",
    "#ff7a45",
    "#ad4e00",
    "#d46b08",
    "#fa8c16",
    "#ffa940",
    "#ad6800",
    "#d48806",
    "#faad14",
    "#ffc53d",
    "#ad8b00",
    "#d4b106",
    "#fadb14",
    "#ffec3d",
    "#5b8c00",
    "#7cb305",
    "#a0d911",
    "#bae637",
    "#237804",
    "#389e0d",
    "#52c41a",
    "#73d13d",
    "#006d75",
    "#08979c",
    "#13c2c2",
    "#36cfc9",
    "#0050b3",
    "#096dd9",
    "#1890ff",
    "#40a9ff",
    "#10239e",
    "#1d39c4",
    "#2f54eb",
    "#597ef7",
    "#391085",
    "#531dab",
    "#722ed1",
    "#9254de",
    "#9e1068",
    "#c41d7f",
    "#eb2f96",
    "#f759ab",
    "#000000",
    "#141414",
    "#1f1f1f",
    "#262626",
  ];
}
