import Post from "./components/Post";
import { PostType } from "./components/Post";
import Header from "./components/Header";
import "./styles.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

const App = () => {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mike Brito",
        role: "Educator @Rocketseat",
      },
      content: [
        { type: "paragraph", content: " Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-05-10 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/danielKNS.png",
        name: "Daniel Ribeiro",
        role: "Developer",
      },
      content: [
        { type: "paragraph", content: " Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-05-3 20:00:00"),
    },
  ];
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((posts) => {
            return <Post key={posts.id} post={posts} />;
          })}
        </main>
      </div>
    </div>
  );
};

export default App;
