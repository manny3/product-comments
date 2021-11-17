import React from "react";
// import { render } from "react-dom";
import Pages from './pages';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


import { ApolloClient, InMemoryCache, ApolloProvider} 
from "@apollo/client";


const client = new ApolloClient({
  uri: "https://pw4e2pcbni.ap-northeast-1.awsapprunner.com/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Pages />
        </Container>
      </React.Fragment>
    </ApolloProvider>
  );
}


export default App;
