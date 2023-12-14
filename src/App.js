import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="table">
        <div className="header">
          <p> </p>
          <p>Name</p>
          <p>Type</p>
          <p>Current Progress</p>
          <p>Size</p>
          <p>Progress Bar</p>
          <p> </p>
        </div>
        <ul className="line">
          <li>
            <button className="button">➕</button>
          </li>
          <li>JS course</li>
          <li>course</li>
          <li>15</li>
          <li>20</li>
          <li>
            25%
            <div className="progress">
              <div className="percentage"> </div>
            </div>
          </li>
          <li>
            <button className="button">📃</button>
          </li>
        </ul>
        <ul className="line">
          <li>
            <button className="button">➕</button>
          </li>
          <li>HTML + CSS course</li>
          <li>course</li>
          <li>30</li>
          <li>30</li>
          <li>Finished 🎉</li>
          <li>
            <button className="button">📃</button>
          </li>
        </ul>
        <ul className="line">
          <li>
            <button className="button">➕</button>
          </li>
          <li>Typescript</li>
          <li>book</li>
          <li>0</li>
          <li>276 pages</li>
          <li>Not started</li>
          <li>
            <button className="button">📃</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
