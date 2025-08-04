import "./App.css";
import { Header, Controls, UndoRemove, Footer } from "./components";
import Contents from "./page/Contents";

function App() {
  return (
    <div className="grid gap-2 w-[90%] max-w-[450px] sm:max-w-[800px] lg:max-w-7xl mx-auto">
      <div className="">
        <Header />
      </div>

      <div className="">
        <div className="">
          <Controls />
        </div>
        <div className="">
          <Contents />
        </div>
        <div className="">
          <UndoRemove />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
