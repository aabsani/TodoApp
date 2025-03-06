function Header({ isDark, onIsDark }) {
  return (
    <div className="header">
      <h1>TODO</h1>
      <img
        src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
        alt="moon/sun icon"
        onClick={() => onIsDark(!isDark)}
      />
    </div>
  );
}

export default Header;
