import { ThemeProvider } from 'styled-components';
// GLOBAL STYLES
import GlobalStyle from './styles/Gloabal';
// COMPONENTS
import Container from './components/Container';
// CONTEXT PROVIDER COMPONENT
import { DataContextProvider } from './context/DataContext';

const theme = {
  colors: {
    text: 'hsl(211, 10%, 45%)'
  },
  mobile: '375px',
};

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <DataContextProvider>
        <Container />
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;
