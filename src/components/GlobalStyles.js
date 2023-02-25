import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: transparent;
  background-color: rgba(155, 155, 155, 0.5);
}
html{
    font-size: 62.5%;   
    @media screen and (max-width:900px) {
        font-size: 53%
    }
    @media screen and (max-width:600px) {
        font-size: 45%
    }
}
body{  
    font-family: 'Montserrat', sans-serif;
    color: #484848;
}
h1{
    font-size: 5.5rem;
}
h2{
    font-size: 5rem;  
    font-family: 'Abril Fatface', cursive;
    font-weight: 400;
    color: #3c3a3a;
}
h3{
    font-size: 3rem;
}
h4,h5{
    font-size: 2.5rem;
}
p{
    font-size: 2.4rem; 
    line-height: 3.5rem;
}
a{
    font-size: 2.4rem;
    text-decoration: none; 
    color: #3c3a3a;
}
input,button{
    font-size: 2.4rem;
    font-family: 'Montserrat', sans-serif;
    color: #161616;
  
}
`;
export default GlobalStyles;
