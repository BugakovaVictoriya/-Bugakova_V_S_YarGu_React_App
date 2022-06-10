import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className="navigation-bar">
        <div className="navigation-bar__container container">
          <img className="logo" src="img/logo.svg" alt=""></img>
          <div className="navigation-bar__menu menu">
            <nav className="menu">
              <ul className="menu__list">
                <li><Link to="/" className="menu__link">Films</Link></li>
                <li><Link to="/people" className="menu__link">People</Link></li>
                <li><Link to="/locations" className="menu__link">Locations</Link></li>
                <li><Link to="/species" className="menu__link">Species</Link></li>
                <li><Link to="/vehicles" className="menu__link">Vehicles</Link></li>
              </ul>
            </nav>
         </div>
        </div>
      </header>
      <Outlet />
      </>
    )
}

export {Header}