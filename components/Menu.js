import React from 'react';
import Link from 'next/link';

const Menu = props => {
  return (
    <div className="mdl-layout mdl-js-layout">
      <div className="menu-title">{props.title}</div>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Mythos Cup</span>
        <nav className="mdl-navigation">
          <Link href="/">
            <a className="mdl-navigation__link">Mythos Cups</a>
          </Link>
          <Link href="/create-cup">
            <a className="mdl-navigation__link">Create new Mythos Cup</a>
          </Link>
          <Link href="/settings">
            <a className="mdl-navigation__link">Settings</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
