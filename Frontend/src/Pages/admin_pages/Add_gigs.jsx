import { useContext, useState } from "react";
import { Store } from "../../Services/Store";
import { useNavigate } from "react-router-dom";
import api from "../../Services/Axios";
import { toast } from "react-toastify";

const Add_Gigs = () => {
    const { state } = useContext(Store);
    const { UserInfo } = state;

    // React States
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("user", UserInfo.id);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", file);

        try {
            const { data } = await api.post(`post_gig/${UserInfo.id}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Gig Added");
            navigate("/admin/gigs");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred during Adding Gigs.");
            }
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-xl-8">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Add Your Gig</h4>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="formrow-title-input" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formrow-title-input"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter Your Idea Title"
                                    value={title}
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

export default Add_Gigs;
