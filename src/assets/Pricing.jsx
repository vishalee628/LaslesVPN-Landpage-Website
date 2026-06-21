import price from "./pricing.png";
import click from "./click.png";

function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      border: "border-secondary",
    },
    {
      name: "Standard Plan",
      price: "$10/mo",
      border: "border-secondary",
    },
    {
      name: "Premium Plan",
      price: "$12/mo",
      border: "border-danger",
    },
  ];

  const features = [
    "Unlimited Bandwidth",
    "Encrypted Connection",
    "No Traffic Logs",
    "Works on All Devices",
  ];

  return (
    <div id="Pricing" className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Choose Your Plan</h2>
        <p className="text-secondary">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-3" key={index}>
              <div
                className={`pricing-card shadow-sm text-center border rounded p-4 ${plan.border}`}
              >
                <img
                  src={price}
                  alt=""
                  className="img-fluid mb-3"
                  style={{ width: "100px" }}
                />

                <h4>{plan.name}</h4>

                {features.map((feature, i) => (
                  <div
                    className="d-flex justify-content-center align-items-center mb-2"
                    key={i}
                  >
                    <img
                      src={click}
                      alt=""
                      width="15"
                      height="15"
                      className="me-2"
                    />
                    <p className="mb-0">{feature}</p>
                  </div>
                ))}

                <div className="mt-4">
                  <h4>{plan.price}</h4>

                  <button className="btn btn-outline-danger rounded-pill px-5 mt-2">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;