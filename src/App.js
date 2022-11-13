
import Home from "./pages/Home";

import styled from 'styled-components'
import GlobalStyle from "./components/CreateGlobalStyles";

const Container = styled.div`
   
`


function App() {
  return (
   <Container>
   <GlobalStyle/>
    
    <Home/>
   </Container>
  );
}

export default App;
