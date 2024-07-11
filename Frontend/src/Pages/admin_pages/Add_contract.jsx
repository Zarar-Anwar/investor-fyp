import { useContext, useState } from "react";
import { Store } from "../../Services/Store";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/Axios";
import { toast } from "react-toastify";

const Add_Contracts = () => {
    const {id} = useParams()
    console.log(id)
    const { state, dispatch } = useContext(Store);
    const { UserInfo } = state;

    // React States
    const [idea_title, setIdea_Title] = useState("");
    const [terms_conditions, setTermsAndConditions] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        // formData.append("user", UserInfo.user);
        formData.append("idea_title", idea_title);
        formData.append("terms_conditions", terms_conditions);

        try {
            const { data } = await api.post(`post_contract/`, formData, {
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
                        <h4 className="card-title mb-4">Add Contract</h4>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="formrow-idea-input" className="form-label">Idea Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formrow-idea-title-input"
                                    onChange={(e) => setIdea_Title(e.target.value)}
                                    placeholder="Enter Your Idea Title"
                                    value={idea_title}
                                />
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

export default Add_Contracts;
