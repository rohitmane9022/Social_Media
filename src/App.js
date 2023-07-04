import "./App.css";

import { NavRoutes } from "./Routes/NavRoutes";

import { Toaster } from "react-hot-toast";
import { usePosts } from "./contexts/PostsProvider";
import { Loader } from "./components/Loader/Loader";

function App() {
  const { postLoading } = usePosts();
  return (
    <div className="App">
      
      <NavRoutes />
      {postLoading && <Loader />} 
      
    </div>
  );
}

export default App;
