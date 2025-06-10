import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Body from './component/Body'
import Login from './component/Login'
import Profile from './component/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './component/Feed'
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App