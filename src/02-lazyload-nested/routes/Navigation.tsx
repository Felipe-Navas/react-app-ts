import { Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
import { routes } from './routes'

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

import logo from '../../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
