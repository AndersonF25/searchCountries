import { AllCountries } from "./pages/AllCountries/AllCoutries";
import DetailsCountry from "./pages/DetailsCountry/DetailsCountry";
import Header from "./components/Header/Header";
import { DarkMode } from "./components/DarkMode/DarkMode";
import { Route, Routes } from "react-router-dom";

function App() {
  const { toggleDarkMode, darkMode } = DarkMode();

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/country/:countryName" element={<DetailsCountry />} />
      </Routes>
    </>
  );
}

export default App;
