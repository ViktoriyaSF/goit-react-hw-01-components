import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

background: #1F56CE;
background: -moz-linear-gradient(-45deg, #1F56CE 0%, #22CEBC 41%, #1AD685 100%);
background: -webkit-linear-gradient(-45deg, #1F56CE 0%, #22CEBC 41%, #1AD685 100%);
background: linear-gradient(135deg, #1F56CE 0%, #22CEBC 41%, #1AD685 100%);
   /* background-color: ${props => props.theme.color.background}; */
  color: ${props => props.theme.color.text};
  font-size: 14px;
  letter-spacing: 0.03em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* --------- */
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  display: block;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
`;
