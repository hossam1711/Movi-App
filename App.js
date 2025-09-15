import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./form/redux/store";

import Navbar from "./form/nav/nav.jsx";
import Movies from "./form/movies/Movies.jsx";
import FavoritesPage from "./form/fav/FavoritesPage.jsx";
import MovieDetails from "./form/MovieDetails/MovieDetails.jsx";
import LoginForm from "./form/form/form.jsx";
import SignUpForm from "./form/formR/formR.jsx";
import Footer from "./form/footer/footer.jsx";
import BackgroundWrapper from "./form/BackgroundWrapper.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
   
          <Navbar />

          <main>
            <Routes>
              <Route
                path="/login"
                element={
                  <BackgroundWrapper>
                    <LoginForm />
                  </BackgroundWrapper>
                }
              />
              <Route
                path="/signup"
                element={
                  <BackgroundWrapper>
                    <SignUpForm />
                  </BackgroundWrapper>
                }
              />
              <Route path="/" element={<Navigate to="/login" />} />

              <Route
                path="/movies"
                element={
                  <BackgroundWrapper>
                    <Movies />
                  </BackgroundWrapper>
                }
              />

              <Route
                path="/favorites"
                element={
                  <BackgroundWrapper>
                    <FavoritesPage />
                  </BackgroundWrapper>
                }
              />

              <Route
                path="/movie/:id"
                element={<MovieDetails />}
              />

              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </main>


          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
