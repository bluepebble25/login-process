import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// memo: webpack이 관리해주는 곳은 src이므로 이미지를 경량화 하는 등 웹팩의 관리가
// 필요한 것은 public 말고 src에 넣자
// HOC - 예를 들어 인증 상태에 따라 화면을 보여주는 것처럼 더 큰 단위의 컴포넌트들을 갈아 끼울 수 있는 래퍼 객체인듯?
export default App;
