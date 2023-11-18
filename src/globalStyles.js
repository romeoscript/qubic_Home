import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --background: #eff7f9;
   --black:#0a0b10;
   --purple:#ffd700;
   --pink:#000000;
   --white:#fff;
   --nav:#ffd700;
   --nav2:#007bff;
}


*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Lato', sans-serif;
}
html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
  
}
    body,
    html,
    a {
        font-family: 'Lato', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;

//  /* Colors */
