import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do ignite"></img>
        <strong>Ignite Feed</strong>
      </header>
    </div>
  );
};

export default Header;
