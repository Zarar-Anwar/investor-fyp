import { useContext, useState } from "react";
import { Store } from "../../Services/Store";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../Services/Axios";
import { toast } from "react-toastify";

const AddTracking = () => {
    const { state } = useContext(Store);
    const { UserInfo } = state;
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const data = query.get('data');
    const object = data ? JSON.parse(decodeURIComponent(data)) : null;

    // React States
    const [productName, setProductName] = useState("");
    const [progress, setProgress] = useState("");
    const [costDescription, setCostDescription] = useState("");
    const [cost, setCost] = useState(0); // Default cost to 0
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [status, setStatus] = useState("upcoming"); // Default to 'upcoming'




    const submitHandler = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("contract", object.id);
        formData.append("product_name", productName);
        formData.append("progress", progress);
        formData.append("cost_description", costDescription);
        formData.append("cost", cost);
        formData.append("start_time", startTime); // Use the datetime format "YYYY-MM-DDTHH:MM"
        formData.append("end_time", endTime); // Use the datetime format "YYYY-MM-DDTHH:MM"
        formData.append("status", status);
    
        try {
            const { data } = await api.post(`post_tracking/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Tracking Data Added Successfully");
            navigate("/admin/contracts");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred during Adding Tracking Data.");
            }
        }
    };
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-xl-8">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Add Tracking Data</h4>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="product-name-input" className="form-label">Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="product-name-input"
                                    onChange={(e) => setProductName(e.target.value)}
                                    placeholder="Enter Product Name"
                                    value={productName}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="progress-input" className="form-label">Progress</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="progress-input"
                                    onChange={(e) => setProgress(e.target.value)}
                                    placeholder="Enter Progress"
                                    value={progress}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cost-description-input" className="form-label">Cost Description</label>
                                <textarea
                                    className="form-control"
                                    onChange={(e) => setCostDescription(e.target.value)}
                                    id="cost-description-input"
                                    placeholder="Enter Cost Description"
                                    value={costDescription}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cost-input" className="form-label">Cost</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cost-input"
                                    onChange={(e) => setCost(e.target.value)}
                                    placeholder="Enter Cost"
                                    value={cost}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status-input" className="form-label">Status</label>
                                <select
                                    className="form-control"
                                    id="status-input"
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    required
                                >
                                    <option value="upcoming">Upcoming</option>
                                    <option value="progress">In Progress</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-lg-6">
                                    <label htmlFor="start-time-input" className="form-label">Start Time</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="start-time-input"
                                        onChange={(e) => setStartTime(e.target.value)}
                                        value={startTime}
                                        required
                                    />
                                </div>
                                <div className="mb-3 col-lg-6">
                                    <label htmlFor="end-time-input" className="form-label">End Time</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="end-time-input"
                                        onChange={(e) => setEndTime(e.target.value)}
                                        value={endTime}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-primary w-md">Submit</button>
                            </div>
                        </form>
                    </div>
                    {/* end card body */}
                </div>
                {/* end card */}
            </div>
        </div>
    );
};

export default AddTracking;
