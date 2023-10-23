import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		style: {
			backgroundColor: attributes.backgroundColor,
			color: attributes.textColor,
			fontSize: `${attributes.fontSize}${attributes.fontSizeUnit}`,
			padding: `${attributes.paddingValue}${attributes.paddingUnit}`,
			margin: `${attributes.marginValue}${attributes.marginUnit}`,
		},
	});
	const LabelLevel = attributes.labelLevel || "h3";
	const TextTag = attributes.txtHtml || "p";
	const ContainerTag = attributes.containerTag || "div";
	return (
		<ContainerTag {...blockProps} className="bitcoin-price-component">
			{attributes.incLabel && (
				<LabelLevel className="bpc-label">{attributes.label}</LabelLevel>
			)}
			{attributes.incUpdateTime && (
				<TextTag className="bpc-updated">
					<strong>{__("Updated:", "bitcoin-price-component")}</strong>{" "}
					<span className="updated-time-placeholder">
						{__("Loading...", "bitcoin-price-component")}
					</span>
				</TextTag>
			)}
			{attributes.incUSD && (
				<TextTag className="bpc-USD" data-currency="USD">
					<strong>USD:</strong>{" "}
					<span className="rate-placeholder">
						{__("Loading...", "bitcoin-price-component")}
					</span>
				</TextTag>
			)}
			{attributes.incGBP && (
				<TextTag className="bpc-GBP" data-currency="GBP">
					<strong>GBP:</strong>{" "}
					<span className="rate-placeholder">
						{__("Loading...", "bitcoin-price-component")}
					</span>
				</TextTag>
			)}
			{attributes.incEUR && (
				<TextTag className="bpc-EUR" data-currency="EUR">
					<strong>EUR:</strong>{" "}
					<span className="rate-placeholder">
						{__("Loading...", "bitcoin-price-component")}
					</span>
				</TextTag>
			)}
			{attributes.incDisclaimer && (
				<TextTag className="bpc-disclaimer">
					<strong>{__("Disclaimer:", "bitcoin-price-component")}</strong>{" "}
					<span className="disclaimer-placeholder">
						{__("Loading...", "bitcoin-price-component")}
					</span>
				</TextTag>
			)}
			{attributes.incBtn && (
				<button className="bpc-refresh" onClick="updateBitcoinPrices()">
					{attributes.btnText}
				</button>
			)}
		</ContainerTag>
	);
}
