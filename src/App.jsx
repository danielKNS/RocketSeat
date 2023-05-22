import Post from "./Post";
import Header from "./components/Header";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />

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
    </div>
  );
};

export default App;
