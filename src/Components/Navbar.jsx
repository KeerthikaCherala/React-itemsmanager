import Logo from "./Logo.jpg";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="Logo" />
        <h1>Items List Manager</h1>
      </div>
    </div>
  );
}

export default Navbar;
