import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background: url("/assets/background.jpg") no-repeat center center fixed !important;
    background-size: cover !important;
    color: white;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
