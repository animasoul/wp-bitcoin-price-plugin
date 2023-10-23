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
					fontSize: `${attributes.fontSize}${attributes.fontSizeUnit}`,
					padding: `${attributes.paddingValue}${attributes.paddingUnit}`,
					margin: `${attributes.marginValue}${attributes.marginUnit}`,
				},
			})}
		>
			<InspectorControls>
				<PanelBody
					title={__("Bitcoin Price Settings", "bitcoin-price-component")}
				>
					<SelectControl
						label={__("Container Tag", "bitcoin-price-component")}
						value={attributes.containerTag}
						options={[
							{ label: "div", value: "div" },
							{ label: "span", value: "span" },
						]}
						onChange={(newValue) => setAttributes({ containerTag: newValue })}
					/>
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
					<RangeControl
						label={__("Padding Value", "bitcoin-price-component")}
						value={attributes.paddingValue}
						onChange={(value) => setAttributes({ paddingValue: value || 0 })}
						min={0}
						max={100}
					/>
					<SelectControl
						label={__("Padding Unit", "bitcoin-price-component")}
						value={attributes.paddingUnit}
						options={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onChange={(value) => setAttributes({ paddingUnit: value })}
					/>

					<RangeControl
						label={__("Margin Value", "bitcoin-price-component")}
						value={attributes.marginValue}
						onChange={(value) => setAttributes({ marginValue: value || 0 })}
						min={0}
						max={100}
					/>
					<SelectControl
						label={__("Margin Unit", "bitcoin-price-component")}
						value={attributes.marginUnit}
						options={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "rem", value: "rem" },
						]}
						onChange={(value) => setAttributes({ marginUnit: value })}
					/>
					<div>
						<label>{__("Background Color", "bitcoin-price-component")}</label>
						<ColorPalette
							label={__("Background Color", "bitcoin-price-component")}
							value={attributes.backgroundColor}
							onChange={(color) => setAttributes({ backgroundColor: color })}
							clearable={true}
						/>
					</div>
					<div>
						<label>{__("Text Color", "bitcoin-price-component")}</label>
						<ColorPalette
							label={__("Text Color", "bitcoin-price-component")}
							value={attributes.textColor}
							onChange={(color) => setAttributes({ textColor: color })}
							clearable={true}
						/>
					</div>
					<RangeControl
						label={__("Font Size", "bitcoin-price-component")}
						value={attributes.fontSize}
						onChange={(size) => setAttributes({ fontSize: size })}
						min={0}
						max={50}
					/>
					<SelectControl
						label={__("Font Size Unit", "bitcoin-price-component")}
						value={attributes.fontSizeUnit}
						options={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onChange={(value) => setAttributes({ fontSizeUnit: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<BitcoinPrice
					containerTag={attributes.containerTag}
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
