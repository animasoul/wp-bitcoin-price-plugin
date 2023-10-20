import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	ColorPalette,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import "./editor.scss";

import BitcoinPrice from "bitcoin-price-component";
export default function Edit({ attributes, setAttributes }) {
	return (
		<div
			{...useBlockProps({
				style: {
					backgroundColor: attributes.backgroundColor,
					color: attributes.textColor,
					fontSize: `${attributes.fontSize}px`,
				},
			})}
		>
			<InspectorControls>
				<PanelBody
					title={__("Bitcoin Price Settings", "bitcoin-price-component")}
				>
					<TextControl
						label={__("Label", "bitcoin-price-component")}
						value={attributes.label}
						onChange={(value) => setAttributes({ label: value })}
					/>

					<SelectControl
						label={__("Label Level", "bitcoin-price-component")}
						value={attributes.labelLevel}
						options={[
							{ label: "H1", value: "h1" },
							{ label: "H2", value: "h2" },
							{ label: "H3", value: "h3" },
							{ label: "H4", value: "h4" },
							{ label: "H5", value: "h5" },
							{ label: "H6", value: "h6" },
						]}
						onChange={(newValue) => setAttributes({ labelLevel: newValue })}
					/>

					<SelectControl
						label={__("Text Tag", "bitcoin-price-component")}
						value={attributes.txtHtml}
						options={[
							{ label: "p", value: "p" },
							{ label: "span", value: "span" },
							{ label: "div", value: "div" },
						]}
						onChange={(newValue) => setAttributes({ txtHtml: newValue })}
					/>

					<TextControl
						label={__("Refresh Button Text", "bitcoin-price-component")}
						value={attributes.btnText}
						onChange={(value) => setAttributes({ btnText: value })}
					/>

					<ToggleControl
						label={__("Include Label", "bitcoin-price-component")}
						checked={attributes.incLabel}
						onChange={(value) => setAttributes({ incLabel: value })}
					/>

					<ToggleControl
						label={__("Include Refresh Button", "bitcoin-price-component")}
						checked={attributes.incBtn}
						onChange={(value) => setAttributes({ incBtn: value })}
					/>

					<ToggleControl
						label={__("Include USD", "bitcoin-price-component")}
						checked={attributes.incUSD}
						onChange={(value) => setAttributes({ incUSD: value })}
					/>

					<ToggleControl
						label={__("Include GBP", "bitcoin-price-component")}
						checked={attributes.incGBP}
						onChange={(value) => setAttributes({ incGBP: value })}
					/>

					<ToggleControl
						label={__("Include EUR", "bitcoin-price-component")}
						checked={attributes.incEUR}
						onChange={(value) => setAttributes({ incEUR: value })}
					/>

					<ToggleControl
						label={__("Include Disclaimer", "bitcoin-price-component")}
						checked={attributes.incDisclaimer}
						onChange={(value) => setAttributes({ incDisclaimer: value })}
					/>

					<ToggleControl
						label={__("Include Update Time", "bitcoin-price-component")}
						checked={attributes.incUpdateTime}
						onChange={(value) => setAttributes({ incUpdateTime: value })}
					/>
				</PanelBody>
				<PanelBody title="Styling Settings">
					<div>
						<label>{__("Background Color:", "bitcoin-price-component")}</label>
						<ColorPalette
							value={attributes.backgroundColor}
							onChange={(color) => setAttributes({ backgroundColor: color })}
							clearable={true}
						/>
					</div>
					<div>
						<label>{__("Text Color:", "bitcoin-price-component")}</label>
						<ColorPalette
							value={attributes.textColor}
							onChange={(color) => setAttributes({ textColor: color })}
							clearable={true}
						/>
					</div>
					<div>
						<label>{__("Font Size:", "bitcoin-price-component")}</label>
						<RangeControl
							value={attributes.fontSize}
							onChange={(size) => setAttributes({ fontSize: size })}
							min={10}
							max={50}
						/>
					</div>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<BitcoinPrice
					label={attributes.label}
					labelLevel={attributes.labelLevel}
					btnText={attributes.btnText}
					incLabel={attributes.incLabel}
					txtHtml={attributes.txtHtml}
					incBtn={attributes.incBtn}
					incUSD={attributes.incUSD}
					incGBP={attributes.incGBP}
					incEUR={attributes.incEUR}
					incDisclaimer={attributes.incDisclaimer}
					incUpdateTime={attributes.incUpdateTime}
				/>
			</div>
		</div>
	);
}
