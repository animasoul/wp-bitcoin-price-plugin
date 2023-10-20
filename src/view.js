const API_ENDPOINT = "https://api.coindesk.com/v1/bpi/currentprice.json";
const CURRENCIES = ["USD", "GBP", "EUR"];

function formatCurrency(value, currencyCode) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currencyCode,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(value);
}

let previousRates = {
	USD: null,
	GBP: null,
	EUR: null,
};

function updateRateClass(ratePlaceholder, currentRate, previousRate) {
	if (previousRate === null) return;
	if (currentRate > previousRate) {
		ratePlaceholder.classList.add("increased");
	} else if (currentRate < previousRate) {
		ratePlaceholder.classList.add("decreased");
	} else {
		ratePlaceholder.classList.add("unchanged");
	}
}

window.updateBitcoinPrices = function () {
	fetch(API_ENDPOINT)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			const bitcoinBlocks = document.querySelectorAll(
				".bitcoin-price-component",
			);

			bitcoinBlocks.forEach((block) => {
				CURRENCIES.forEach((currency) => {
					const ratePlaceholder = block.querySelector(
						`[data-currency="${currency}"] .rate-placeholder`,
					);

					if (data.bpi[currency] && ratePlaceholder) {
						updateRateClass(
							ratePlaceholder,
							data.bpi[currency].rate_float,
							previousRates[currency],
						);

						setTimeout(() => {
							ratePlaceholder.classList.remove(
								"increased",
								"decreased",
								"unchanged",
							);
						}, 2000);

						ratePlaceholder.textContent = formatCurrency(
							data.bpi[currency].rate_float,
							currency,
						);
						previousRates[currency] = data.bpi[currency].rate_float;
					}
				});

				const disclaimerPlaceholder = block.querySelector(
					".disclaimer-placeholder",
				);
				if (data.disclaimer && disclaimerPlaceholder) {
					disclaimerPlaceholder.textContent = data.disclaimer;
				}

				const updatedTimePlaceholder = block.querySelector(
					".updated-time-placeholder",
				);
				if (data.time.updated && updatedTimePlaceholder) {
					updatedTimePlaceholder.textContent = data.time.updated;
				}
			});
		})
		.catch((error) => {
			console.error("Error fetching Bitcoin price:", error);
			// Optionally, provide a more user-friendly notification.
		});
};

window.addEventListener("DOMContentLoaded", window.updateBitcoinPrices);
