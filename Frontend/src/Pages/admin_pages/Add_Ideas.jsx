import { useContext, useState } from "react";
import { Store } from "../../Services/Store";
import { useNavigate } from "react-router-dom";
import api from "../../Services/Axios";
import { toast } from "react-toastify";

const Add_Ideas = () => {
    const { state, dispatch } = useContext(Store);
    const { UserInfo } = state;

    // React States
    const [idea, setIdea] = useState("");
    const [description, setDescription] = useState("");
    const [req_amount, setReqAmount] = useState("");
    const [terms_conditions, setTermsAndConditions] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("user", UserInfo.user);
        formData.append("idea", idea);
        formData.append("description", description);
        formData.append("req_amount", req_amount);
        formData.append("terms_conditions", terms_conditions);
        formData.append("file", file);

        try {
            const { data } = await api.post(`post_idea/${UserInfo.id}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // localStorage.setItem("UserInfo", JSON.stringify(data));
            // dispatch({ type: "UserLoggedIn", payload: data });
            toast.success("Idea Added");
            navigate("/admin/ideas");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred during Adding Idea.");
            }
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-xl-8">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Add Ideas</h4>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="formrow-idea-input" className="form-label">Idea</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formrow-idea-input"
                                    onChange={(e) => setIdea(e.target.value)}
                                    placeholder="Enter Your Idea"
                                    value={idea}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="formrow-description-input" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            onChange={(e) => setDescription(e.target.value)}
                                            id="formrow-description-input"
                                            placeholder="Enter Description"
                                            value={description}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="formrow-req_amount-input" className="form-label">Req Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            onChange={(e) => setReqAmount(e.target.value)}
                                            id="formrow-req-amount-input"
                                            placeholder="Enter Requested Amount"
                                            value={req_amount}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="formrow-terms_conditions-input" className="form-label">Terms & Conditions</label>
                                        <textarea
                                            className="form-control"
                                            onChange={(e) => setTermsAndConditions(e.target.value)}
                                            id="formrow-terms_conditions-input"
                                            placeholder="Enter Terms & Conditions"
                                            value={terms_conditions}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <label htmlFor="formrow-file-input" className="form-label">Choose File</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            id="formrow-file-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
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

export default Add_Ideas;
