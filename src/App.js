// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <>
      <nav class="px-4 py-4 bg-purple-900 text-white font-mono">
        <ul class=" flex">
          <li class="mx-2 cursor-pointer">Home</li>
          <li class="mx-2 cursor-pointer">About</li>
          <li class="mx-2 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <div class="container">
        <h1 class="text-blue-500">This is blue text ajaysinhaorigin</h1>
      </div>
      <Home />
    </>
  );
}

export default App;
