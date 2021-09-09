import { readFileSync } from "fs";
import { sanitizeHtml } from "./sanitizer";

const rglr = readFileSync(
  `${__dirname}/../_fonts/roboto-regular.woff2`
).toString("base64");
const bold = readFileSync(`${__dirname}/../_fonts/roboto-500.woff2`).toString(
  "base64"
);

function getCss() {
  return `

    @font-face {
            font-family: 'Roboto';
            font-style:  normal;
            font-weight: normal;
            src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
        }
    @font-face {
            font-family: 'Roboto';
            font-style:  normal;
            font-weight: bold;
            src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
        }


 *,
::before,
::after {
	box-sizing: border-box;
}


html {
	-moz-tab-size: 4;
	-o-tab-size: 4;
	   tab-size: 4;
}



html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
}


body {
	margin: 0;
}


body {
	font-family:
		Roboto,
}


hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}



abbr[title] {
	-webkit-text-decoration: underline dotted;
	        text-decoration: underline dotted;
}


b,
strong {
	font-weight: bolder;
}


code,
kbd,
samp,
pre {
	font-family:
        Roboto,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}


small {
	font-size: 80%;
}


sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}



table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}



button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

button,
select { /* 1 */
	text-transform: none;
}



button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}



::-moz-focus-inner {
	border-style: none;
	padding: 0;
}



:-moz-focusring {
	outline: 1px dotted ButtonText;
}


:-moz-ui-invalid {
	box-shadow: none;
}



legend {
	padding: 0;
}


progress {
	vertical-align: baseline;
}



::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}



[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

::-webkit-search-decoration {
	-webkit-appearance: none;
}



::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}





summary {
	display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto"; /* 1 */
  line-height: 1.5; /* 2 */
}




body {
  font-family: inherit;
  line-height: inherit;
}


*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}


hr {
  border-top-width: 1px;
}



img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}


a {
  color: inherit;
  text-decoration: inherit;
}



button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}


pre,
code,
kbd,
samp {
  font-family: Roboto;
}


img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}


img,
video {
  max-width: 100%;
  height: auto;
}


[hidden] {
  display: none;
}

*, ::before, ::after {
	--tw-border-opacity: 1;
	border-color: rgba(229, 231, 235, var(--tw-border-opacity));
	--tw-ring-offset-shadow: 0 0 #0000;
	--tw-ring-shadow: 0 0 #0000;
	--tw-shadow: 0 0 #0000;
	--tw-blur: var(--tw-empty,/*!*/ /*!*/);
	--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
	--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
	--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
	--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
	--tw-invert: var(--tw-empty,/*!*/ /*!*/);
	--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
	--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
	--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
	--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.absolute {
	position: absolute;
}
.z-10 {
	z-index: 10;
}
.col-span-2 {
	grid-column: span 2 / span 2;
}
.m-16 {
	margin: 4rem;
}
.mb-8 {
	margin-bottom: 2rem;
}
.ml-2 {
	margin-left: 0.5rem;
}
.flex {
	display: flex;
}
.grid {
	display: grid;
}
.h-20 {
	height: 5rem;
}
.h-16 {
	height: 4rem;
}
.w-16 {
	width: 4rem;
}
.grid-cols-3 {
	grid-template-columns: repeat(3, minmax(0, 1fr));
}
.flex-col {
	flex-direction: column;
}
.items-center {
	align-items: center;
}
.justify-center {
	justify-content: center;
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
	--tw-space-x-reverse: 0;
	margin-right: calc(1rem * var(--tw-space-x-reverse));
	margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.rounded-full {
	border-radius: 9999px;
}
.border {
	border-width: 1px;
}
.bg-blue-500 {
	--tw-bg-opacity: 1;
	background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
}
.bg-white {
	--tw-bg-opacity: 1;
	background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.py-3 {
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}
.px-4 {
	padding-left: 1rem;
	padding-right: 1rem;
}
.pt-8 {
	padding-top: 2rem;
}
.font-body {
	    font-family: 'Roboto';
        font-weight: bold;
}

.font-body-regular {
	    font-family: 'Roboto';
        font-weight: normal
}

.text-5xl {
	font-size: 3rem;
	line-height: 1;
}
.text-xl {
	font-size: 1.25rem;
	line-height: 1.75rem;
}
.font-medium {
	font-weight: 500;
}
.text-blue-500 {
	--tw-text-opacity: 1;
	color: rgba(59, 130, 246, var(--tw-text-opacity));
}
.text-gray-800 {
	--tw-text-opacity: 1;
	color: rgba(31, 41, 55, var(--tw-text-opacity));
}
.shadow-2xl {
	--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.drop-shadow-2xl {
	--tw-drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
	filter: var(--tw-filter);
}
    `;
}

export function getHtml(parsedReq) {
  const { text, description } = parsedReq;
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
            ${getCss()}
    </style>
    <body>


<div class=" grid grid-cols-3 m-16 items-center">
  <div class="flex flex-col space-y-2 col-span-2">

    <!-- Logo -->
    <div class="mb-8">
      <img class="h-20" src="https://next.blesshost.com/img/media-kit/1.svg" alt="Logo" />
    </div>
    <!-- end of Logo -->

    <!-- Title -->
    <h2 class="text-5xl font-medium font-body">${sanitizeHtml(text)}</h2>
    <!-- end of Title -->

    <!-- Description -->
    <p class="text-xl text-gray-800 font-body-regular">${sanitizeHtml(
      description
    )}</p>
    <!-- end of Description -->

    <!-- Services -->
    <div class="flex pt-8 space-x-4 font-body ">

      <!-- Service 1 -->
      <div class="flex items-center">
        <div class="rounded-full absolute bg-blue-500 w-16 h-16"></div>
        <div class="flex justify-center py-3 px-4 bg-white shadow-2xl drop-shadow-2xl border rounded-full z-10 ml-2">
          <span class=" text-gray-800">Web Hosting</span>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="flex items-center">
        <div class="rounded-full absolute bg-blue-500 w-16 h-16"></div>
        <div class="flex justify-center py-3 px-4 bg-white shadow-2xl drop-shadow-2xl border rounded-full z-10 ml-2">
          <span class="f text-gray-800">Web Design</span>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="flex items-center">
        <div class="rounded-full absolute bg-blue-500 w-16 h-16"></div>
        <div class="flex justify-center py-3 px-4 bg-white shadow-2xl drop-shadow-2xl border rounded-full z-10 ml-2">
          <span class=" text-gray-800">Digital Marketing</span>
        </div>
      </div>

    </div>
    <!-- end of Services -->

  </div>

  <!-- Image -->
  <div>
    <img src="https://next.blesshost.com/img/social-banner.svg" alt="Social banner">
  </div>
  <!-- end of Image -->

</div>
    </body>
</html>`;
}
