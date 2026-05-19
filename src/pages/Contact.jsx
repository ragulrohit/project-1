import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Photography Booking Submitted Successfully");
  };

  return (
    <div className="page">

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="Enter Your Name"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Tell us about your photography requirement"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
        ></textarea>

        <button type="submit" className="new">
          Book Session
        </button>

      </form>

      {/* Contact Information */}

      <div className="grid">

        <div className="card">
          <h2>Studio Location</h2>

          <p>
            Namakkal, Tamil Nadu, India
          </p>
        </div>

        <div className="card">
          <h2>Email Us</h2>

          <p>
            photography@email.com
          </p>
        </div>

        <div className="card">
          <h2>Call Us</h2>

          <p>
            +91 9360256116
          </p>
        </div>

      </div>

    </div>
  );
}

export default Contact;