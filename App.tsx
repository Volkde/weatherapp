import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./src/styles/GlobalStyles"; 
import Home from "./src/pages/Home/Home";
import History from "./src/pages/History/History";
import Layout from "./src/components/Layout/Layout";
import Header from "./src/components/Header/Header";
import Search from "./src/components/Search/Search";

function App() {
  return (
    <>
      <GlobalStyles /> 
      <Layout>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Search />  
                <Home />
              </>
            } 
          />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </>
  );
}



export default App;
