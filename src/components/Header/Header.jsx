// import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import React from 'react';

const Header = () => {
  return (
    <header>
      <a className="" href="./">
        {/* <svg className="">
            <use id="logo" href="{`${sprite}#logo`}" />
          </svg> */}
        <span className="title">ecosolution</span>
        Ledger
      </a>
      {/* <div id="burger">
        <BurgerMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'burger'}
          right
        />

        <div id="page-wrap">
          <h1>Click to show menu</h1>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
