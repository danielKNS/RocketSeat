import Post from "./components/Post";
import Header from "./components/Header";
import "./styles.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Daniel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem velit deserunt molestiae consectetur, 
        quaerat magnam iure delectus dolore iste quidem, ducimus expedita, inventore eum sit iusto ut! Veritatis, ducimus. "
          />
          <Post
            author="Jonas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem velit deserunt molestiae consectetur, 
        quaerat magnam iure delectus dolore iste quidem, ducimus expedita, inventore eum sit iusto ut! Veritatis, ducimus. "
          />
        </main>
      </div>
    </div>
  );
};

export default App;
