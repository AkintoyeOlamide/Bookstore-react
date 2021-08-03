const Navbar = () => (
  <nav className="d-flex align-items-center justify-content-between py-4">
    <div className="navbar-left d-flex align-items-center justify-content-center">
      <div className="nav-brand h2">HappyFeet Bookstore</div>
      <div className="mr-4 selected">Books</div>
      <div>Categories</div>
    </div>
    <div className="navbar-right align-items-center justify-content-center">
      {/* <div>login</div> */}
    </div>
  </nav>
);

export default Navbar;
