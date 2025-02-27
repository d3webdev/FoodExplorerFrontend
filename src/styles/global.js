import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
      font-size: 62.5%;
    }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none; 

    *::-webkit-scrollbar {
      display: none;
    }

  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    
  }

  .Toastify__toast {
    font-size: 1.4rem;
  }

  section, 
  header, 
  main, 
  footer,
  .card,
  .button,
  .input {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
  }

  header { animation-delay: 0.1s; }
  main { animation-delay: 0.3s; }
  .button { animation-delay: 0.4s; }
  .input { animation-delay: 0.1s; }
  .dish-display { animation-delay: 0.3s; }
  footer { animation-delay: 1.1s; }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;
