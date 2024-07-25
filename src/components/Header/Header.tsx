
import {
  DarkMode,
  HeaderContainer,
  HeaderContent,
  Title,
} from "./header.style";
import { FaMoon, FaSun } from "react-icons/fa";

type HeaderProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

const Header = ({ toggleDarkMode, darkMode }: HeaderProps) => {
  return (
    <HeaderContainer
      style={{
        backgroundColor: darkMode ? "#383838" : "white",
        color: darkMode ? "#fff" : "",
      }}
    >
      <HeaderContent className="responsive-header">
        <Title>Where in the world?</Title>
        <DarkMode onClick={toggleDarkMode}>
          {darkMode ? (
            <FaMoon color="#fff" size={31} />
          ) : (
            <FaSun color="#f3d006" size={31} />
          )}
        </DarkMode>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
