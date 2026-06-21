import customer1 from "./customer1.png";
import customer2 from "./customer2.png";
import customer3 from "./customer3.png";

function Help() {
  const customers = [
    {
      img: customer1,
      name: "Viezh Robert",
      country: "Poland",
      rating: 4.5,
    },
    {
      img: customer2,
      name: "Jessy",
      country: "America",
      rating: 4.0,
    },
    {
      img: customer3,
      name: "Micheal",
      country: "London",
      rating: 3.9,
    },
  ];

  return (
    <>
      {/* Heading */}
      <div className="container text-center mt-5" id="Help">
        <h1 className="fw-bold">
          Trusted by Thousands of Happy Customers
        </h1>

        <p className="text-secondary px-lg-5">
          These are the stories of our customers who have joined us with
          great pleasure when using this crazy feature.
        </p>
      </div>

      {/* Customer Cards */}
      <div className="container mt-5">
        <div className="row g-4">
          {customers.map((customer, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-2" key={index}>
              <div className="border rounded p-4 shadow-sm h-100  ">

                <div className="d-flex justify-content-between ">
                  <div className="d-flex">
                    <img
                      src={customer.img}
                      alt=""
                      width="50"
                      height="50"
                    />

                    <div className="ms-3">
                      <h6 className="mb-0">{customer.name}</h6>
                      <small className="text-secondary">
                        {customer.country}
                      </small>
                    </div>
                  </div>

                  <div>
                    {customer.rating}
                    <i className="bi bi-star-fill text-warning ms-2"></i>
                  </div>
                </div>

                <p className="mt-4 text-secondary">
                  “Wow... I am very happy to use this VPN, it turned out
                  to be more than my expectations and so far there have
                  been no problems. LaslesVPN always the best”.
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap">

          <div className="d-flex">
            <div className="Load"></div>
            <div className="Load1 mx-2"></div>
            <div className="Load1"></div>
          </div>

          <div className="Arrow mt-3 mt-md-0">
            <a href="#">
              <i className="bi bi-arrow-left mx-2"></i>
            </a>

            <a href="#">
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>

      {/* Subscribe Section */}
      <div className="container mt-5 mb-5">
        <div className="row shadow rounded p-4 align-items-center mx-3">

          <div className="col-lg-6 col-12 text-center text-lg-start">
            <h2 className="fw-bold">
              Subscribe Now for Get Special Features!
            </h2>

            <p className="text-secondary">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          <div className="col-lg-6 col-12 text-center mt-4 mt-lg-0">
            <button className="btn btn-danger px-5 shadow">
              Subscribe Now
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Help;