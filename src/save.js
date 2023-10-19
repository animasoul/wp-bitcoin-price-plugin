import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		style: {
			backgroundColor: attributes.backgroundColor,
			color: attributes.textColor,
			fontSize: `${attributes.fontSize}px`,
		},
	});
	return (
		<div {...blockProps} className="bitcoin-price-block">
			{attributes.incLabel && <h3 className="bpc-label">{attributes.label}</h3>}
			{attributes.incUpdateTime && (
				<p className="bpc-updated">
					<strong>Updated:</strong>{" "}
					<span className="updated-time-placeholder">Loading...</span>
				</p>
			)}
			{attributes.incUSD && (
				<p data-currency="USD">
					<strong>USD:</strong>{" "}
					<span className="rate-placeholder">Loading...</span>
				</p>
			)}
			{attributes.incGBP && (
				<p data-currency="GBP">
					<strong>GBP:</strong>{" "}
					<span className="rate-placeholder">Loading...</span>
				</p>
			)}
			{attributes.incEUR && (
				<p data-currency="EUR">
					<strong>EUR:</strong>{" "}
					<span className="rate-placeholder">Loading...</span>
				</p>
			)}
			{attributes.incDisclaimer && (
				<p className="bpc-disclaimer">
					<strong>Disclaimer:</strong>{" "}
					<span className="disclaimer-placeholder">Loading...</span>
				</p>
			)}
			{attributes.incBtn && (
				<button className="bpc-refresh" onClick="updateBitcoinPrices()">
					{attributes.btnText}
				</button>
			)}
		</div>
	);
}
