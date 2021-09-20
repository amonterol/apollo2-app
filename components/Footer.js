function Footer({ page = " " }) {
  const isHomePage = () => page === "HomePage";

  return (
    <>
      {isHomePage() && (
        <footer className="bg-white has-text-black" id="tempaltemo_footer">
          <div className="container has-text-black">
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                  Tienda Chayito
                </h2>
                <ul className="list-unstyled has-text-black footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    Costado oeste del parque central
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw"></i>
                    <a
                      className="text-decoration-none "
                      href="tel:010-020-0340"
                    >
                      (506) 2445-0340
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw"></i>
                    <a
                      className="text-decoration-none"
                      href="mailto:info@company.com"
                    >
                      info@tiendachayito.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 has-text-black  border-bottom pb-3 border-light">
                  Productos
                </h2>
                <ul className="list-unstyled has-text-black  footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Wear
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Mens Shoes
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Womens Shoes
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Popular Dress
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Gym Accessories
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Shoes
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 has-text-black  border-bottom pb-3 border-light">
                  Más información
                </h2>
                <ul className="list-unstyledhas-text-black  footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Shop Locations
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row has-text-black  mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light"></div>
              </div>
            </div>
          </div>

          <div className="w-100 bg-light py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left has-text-black ">
                    Copyright &copy; 2021 Tienda Chayito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
