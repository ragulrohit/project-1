import React , {useState} from 'react';
import "./validation.css"

const Validation = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Name
    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    } else if (values.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!values.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(values.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Password
    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Address
    if (!values.address.trim()) {
      newErrors.address = "Address is required";
    }

    // City
    if (!values.city.trim()) {
      newErrors.city = "City is required";
    }

    // State
    if (!values.state.trim()) {
      newErrors.state = "State is required";
    }

    // Country
    if (!values.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Zip
    if (!values.zip) {
      newErrors.zip = "Zip code is required";
    } else if (!/^[0-9]{5,6}$/.test(values.zip)) {
      newErrors.zip = "Invalid zip code";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(values);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Name", name: "name" },
          { label: "Email", name: "email" },
          { label: "Phone", name: "phone" },
          { label: "Password", name: "password", type: "password" },
          { label: "Confirm Password", name: "confirmPassword", type: "password" },
          { label: "Address", name: "address" },
          { label: "City", name: "city" },
          { label: "State", name: "state" },
          { label: "Country", name: "country" },
          { label: "Zip Code", name: "zip" }
        ].map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
            />
            {errors[field.name] && (
              <p className="error">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Validation;