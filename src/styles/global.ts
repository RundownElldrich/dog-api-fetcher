import { createGlobalStyle } from 'styled-components';

import { BORDER_RADIUS_PRIMARY, COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  --color-dark-blue: ${COLORS.darkBlue};
  --color-green: ${COLORS.green};
  --color-yellow: ${COLORS.yellow};
  --color-red: ${COLORS.red};
  --color-orange: ${COLORS.orange};
  --color-violet: ${COLORS.violet};
  --border-radius-primary: ${BORDER_RADIUS_PRIMARY};
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}

body {
  @import url('https://fonts.googleapis.com/css2?family=Underdog&display=swap');
  font-family: 'Underdog', cursive;
}

img {
  display: block;
  max-inline-size: 100%;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
li,
figcaption {
  max-width: 60ch;
}

input, select, textarea, button{
  font-family: inherit;
}

`;

export default GlobalStyle;
