import "./styles.css";
import ParentModal from "./components/ParentModal";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ParentModal></ParentModal>
      <InfiniteScroll></InfiniteScroll>
    </div>
  );
}
