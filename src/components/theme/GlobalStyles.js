import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  /* max-width: 100%; */
  height: auto;
}
li{
    list-style: none;
}
a {
    text-decoration: none;
}
/* .App {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
} */
.loader {
 position: absolute; 
 top: 50%; 
 left: 50%;
 transform: translate(-50%, -50%);
 display: flex;
 justify-content: center;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}
`;

export default GlobalStyles;