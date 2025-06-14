import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
}

export default App;
