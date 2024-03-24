import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Todo } from "./components/Todo";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Todo />
      </Main>
    </>
  );
}

export default App;
