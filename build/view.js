/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const API_ENDPOINT = "https://api.coindesk.com/v1/bpi/currentprice.json";
function formatCurrency(value, currencyCode) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}
let previousRates = {
  USD: null,
  GBP: null,
  EUR: null
};
window.updateBitcoinPrices = function () {
  fetch(API_ENDPOINT).then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }).then(data => {
    const bitcoinBlocks = document.querySelectorAll(".bitcoin-price-component");
    const currencies = ["USD", "GBP", "EUR"];
    bitcoinBlocks.forEach(block => {
      currencies.forEach(currency => {
        const ratePlaceholder = block.querySelector(`[data-currency="${currency}"] .rate-placeholder`);
        if (data.bpi[currency] && ratePlaceholder) {
          if (previousRates[currency] !== null) {
            if (previousRates[currency] < data.bpi[currency].rate_float) {
              ratePlaceholder.classList.add("increased");
            } else if (previousRates[currency] > data.bpi[currency].rate_float) {
              ratePlaceholder.classList.add("decreased");
            } else {
              ratePlaceholder.classList.add("unchanged");
            }
          }
          // Remove the classes after 2 seconds
          setTimeout(() => {
            ratePlaceholder.classList.remove("increased", "decreased", "unchanged");
          }, 2000);
        }
        previousRates[currency] = data.bpi[currency].rate_float;
        ratePlaceholder.textContent = formatCurrency(data.bpi[currency].rate_float, currency);
      });
      if (data.disclaimer && block.querySelector(".disclaimer-placeholder")) {
        block.querySelector(".disclaimer-placeholder").textContent = data.disclaimer;
      }
      if (data.time.updated && block.querySelector(".updated-time-placeholder")) {
        block.querySelector(".updated-time-placeholder").textContent = data.time.updated;
      }
    });
  }).catch(error => {
    console.error("Error fetching Bitcoin price:", error);
    // Optionally, notify the user in a more user-friendly way.
  });
};

window.addEventListener("DOMContentLoaded", updateBitcoinPrices);
/******/ })()
;
//# sourceMappingURL=view.js.map