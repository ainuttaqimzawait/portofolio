import "./tailwind.css";
import Pages from './components/Pages';
import { Provider } from "react-redux";
import store from "./App/feature/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Pages />
      </Provider>
    </div>
  );
}

export default App;
