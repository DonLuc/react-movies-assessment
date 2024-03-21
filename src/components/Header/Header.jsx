import './Header.css';

function Header() {
    const headerTitle = "MOVIES";
    const headerSubtitle = "Browse through a list of exciting movies we have!";
    return ( 
        <header>
          <h1>{headerTitle}</h1>
          <p>
            {headerSubtitle}
          </p>
        </header>
      );
}

export default Header;