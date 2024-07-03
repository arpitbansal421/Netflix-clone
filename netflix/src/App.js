// import Body from "./components/Body";
import Body1 from "./components/Body1";
import {Toaster} from 'react-hot-toast'
import MovieDialog from "./components/MovieDialog";

function App() {
  return (
    <div className>
     <Body1/>
     <Toaster/>
     <MovieDialog></MovieDialog>
    </div>
  );
}

export default App;
