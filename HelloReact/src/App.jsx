import './App.css'

function App(props) {
  return (
    <>
      <h1>
        Hello {props.name}
      </h1>
      <h1>
        Welcome to React + Vite
      </h1>
      <button>
        {
          props.loggedIn ? 'Welcome' : 'Please Login'
        }
      </button>
    </>
  )
}

export default App
