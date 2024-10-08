import { useState } from "react";
import Header from "./components/navbar";
import Banner from "./components/banner";
import List from "./components/lists";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <List title="Netflix Originals" param="originals" />

      <List title="Trending Now" param="trending" />

      <List title="Now Playing" param="now_playing" />

      <List title="popular" param="popular" />

      <List title="Top Rated" param="top_rated" />

      <List title="Upcoming" param="upcoming" />
    </>
  );
}

export default App;
