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


   background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
  font-size: 14px;
  letter-spacing: 0.03em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* --------- */
.container {
  min-width: 320px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
}
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
.section {
  padding: 94px 0px;
  @media screen and (max-width: 1199px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
`;
