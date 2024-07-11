import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import api from "../../Services/Axios";

function Registration() {
  // React States
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    gender: "", // Adding gender state
    address: "",
    phone: "",
    date: "",
    category: "",
    description: "" // Adding about_yourself state
  });

  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Send API request with formData
      const { data } = await api.post("signup/", formData);
      toast.success("Registered Successfully");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during registration.");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>User | Registration</title>
      </Helmet>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9 col-xl-5">
              <div className="card overflow-hidden">
                <div className="card-body pt-0 border" style={{ marginBottom: "300px" }}>
                  <div className="p-2">
                    <form className="registration-form p-5" id="registration_form" onSubmit={submitHandler}>
                      <div className="mb-3 row">
                        <label htmlFor="id_username" className="col-sm-3 col-form-label">Username<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <input type="text" name="username" className="form-control" id="id_username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="id_name" className="col-sm-3 col-form-label">Name<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <input type="text" name="name" className="form-control" id="id_name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="id_gender" className="col-sm-3 col-form-label">Gender<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <select className="form-select" name="gender" id="id_gender" style={{ height: '50px', fontSize: '16px' }} value={formData.gender} onChange={handleInputChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="id_email" className="col-sm-3 col-form-label">Email<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <input type="email" name="email" className="form-control" id="id_email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="id_password" className="col-sm-3 col-form-label">Password<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <input type="password" name="password" placeholder="Password" className="form-control" id="id_password" value={formData.password} onChange={handleInputChange} required />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="id_address" className="col-sm-3 col-form-label">Address</label>
                        <div className="col-sm-9">
                          <input type="text" name="address" className="form-control" id="id_address" placeholder="Your Address" value={formData.address} onChange={handleInputChange} />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">About Yourself<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="category" id="investor" value="investor" checked={formData.category === "investor"} onChange={handleInputChange} required />
                            <label className="form-check-label" htmlFor="investor" style={{ fontSize: '16px' }}>Investor</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="category" id="entrepreneur" value="entrepreneur" checked={formData.category === "entrepreneur"} onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="entrepreneur" style={{ fontSize: '16px' }}>Entrepreneur</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="category" id="skilled" value="skilled" checked={formData.category === "skilled"} onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="skilled" style={{ fontSize: '16px' }}>Skilled Person</label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="id_phone" className="col-sm-3 col-form-label">Mobile<span className="asteriskField">*</span></label>
                        <div className="col-sm-4">
                          <input type="tel" name="phone" className="form-control" id="id_phone" placeholder="Mobile Number" value={formData.phone} onChange={handleInputChange} required />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="id_dob" className="col-sm-3 col-form-label">Date<span className="asteriskField">*</span></label>
                        <div className="col-sm-9">
                          <input type="date" name="date" className="form-control" id="id_date" value={formData.date} onChange={handleInputChange} required />
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label htmlFor="id_address" className="col-sm-3 col-form-label">Desciption</label>
                        <div className="col-sm-9">
                          <textarea
                            name="description"
                            className="form-control"
                            id="id_description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={5} // Adjust the number of rows as needed
                          />
                        </div>
                      </div>

                      <input type="hidden" name="next" defaultValue="/accounts/profile/" />

                      <p>Already have an account? <a href="/user/login">Login</a></p>
                      <div className="mt-5 w-50 mx-auto">
                        <button className="btn btn-success btn-block waves-effect waves-light" type="submit">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
