import "./tailwind.css";
import Pages from './components/Pages';
import { Provider } from "react-redux";
import store from "./App/feature/store";
import PagesOnPhone from "./components/PagesOnPhone";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Pages />
        <PagesOnPhone />
      </Provider>
    </div>
  );
}

export default App;
