import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin: 0;
    background-color: lightgray;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}

img {
    display: block;
}

.list {
    list-style: none;
}

.link {
    text-decoration: none;
}
`;
