import React from "react";
import { AppDataProvider } from "./data/contextApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Feed from "./componets/Feed";
import VideoDetail from "./componets/VideoDetail";
import SearchResult from "./componets/SearchResult";


const App = () => {
  return (
    <AppDataProvider>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/"  element={<Feed></Feed>}/>
          <Route exact path="/searchResults/:searchQuery" element={<SearchResult/>}/>
          <Route exact path="/video/:id" element={<VideoDetail/>}/>
        </Routes>
      </Router>
    </AppDataProvider>
  );
};

export default App;
