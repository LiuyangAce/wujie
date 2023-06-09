import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    console.log('跳转到vue3-子 指定路由');
    window.$wujie?.props.jump(
      {
        path: '/childList/v3Child',
        query: {
          'v3-child': '/1'
        }
      }
    )
  }

  function handleClickAlived() {
    console.log(1111);
    window.$wujie?.bus.$emit("routeChange", "/2");
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>跳转到vue3-子 指定路由</button>
        <button onClick={handleClickAlived}>跳转到vue3-子 指定路由-/v2---v3已经实例化</button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
