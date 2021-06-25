import "./styles.css";
import { transcript } from "./Transcript";

// const ShowTranscipt = ({ lines }) => {
//   return <>{lines && lines.map((line) => <p key= > line.word}</p>)}</>;
// };

export default function App() {
  const source = JSON.parse(transcript);
  console.log(source);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <ShowTranscipt lines={source} /> */}
    </div>
  );
}
