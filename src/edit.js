import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	ColorPalette,
	RangeControl,
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
				<PanelBody title="Bitcoin Price Settings">
					<TextControl
						label="Label"
						value={attributes.label}
						onChange={(value) => setAttributes({ label: value })}
					/>

					<TextControl
						label="Refresh Button Text"
						value={attributes.btnText}
						onChange={(value) => setAttributes({ btnText: value })}
					/>

					<ToggleControl
						label="Include Label"
						checked={attributes.incLabel}
						onChange={(value) => setAttributes({ incLabel: value })}
					/>

					<ToggleControl
						label="Include Refresh Button"
						checked={attributes.incBtn}
						onChange={(value) => setAttributes({ incBtn: value })}
					/>

					<ToggleControl
						label="Include USD"
						checked={attributes.incUSD}
						onChange={(value) => setAttributes({ incUSD: value })}
					/>

					<ToggleControl
						label="Include GBP"
						checked={attributes.incGBP}
						onChange={(value) => setAttributes({ incGBP: value })}
					/>

					<ToggleControl
						label="Include EUR"
						checked={attributes.incEUR}
						onChange={(value) => setAttributes({ incEUR: value })}
					/>

					<ToggleControl
						label="Include Disclaimer"
						checked={attributes.incDisclaimer}
						onChange={(value) => setAttributes({ incDisclaimer: value })}
					/>

					<ToggleControl
						label="Include Update Time"
						checked={attributes.incUpdateTime}
						onChange={(value) => setAttributes({ incUpdateTime: value })}
					/>
				</PanelBody>
				<PanelBody title="Styling Settings">
					<div>
						<label>Background Color:</label>
						<ColorPalette
							value={attributes.backgroundColor}
							onChange={(color) => setAttributes({ backgroundColor: color })}
							clearable={true}
						/>
					</div>
					<div>
						<label>Text Color:</label>
						<ColorPalette
							value={attributes.textColor}
							onChange={(color) => setAttributes({ textColor: color })}
							clearable={true}
						/>
					</div>
					<div>
						<label>Font Size:</label>
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
					btnText={attributes.btnText}
					incLabel={attributes.incLabel}
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
