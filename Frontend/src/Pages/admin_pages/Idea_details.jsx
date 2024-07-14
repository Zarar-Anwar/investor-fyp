import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Services/Axios";

const Ideas_details = () => {
    const [user, setUser] = useState('')
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const data = query.get('data');
    const object = data ? JSON.parse(decodeURIComponent(data)) : null;



    useEffect(() => {
        const get_user = async () => {
            try {
                const { data } = await api.get(`/get_user_by_id/${object.user}/`)
                setUser(data)
            } catch (error) {
                toast.error(error.message)
            }
        }
        get_user()
    }, [user])




    return (
        <>
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Ideas Details</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="pt-3">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-8">
                                            <div>
                                                <div className="text-center">
                                                    <div className="mb-4">
                                                        <a className="badge bg-light font-size-12">
                                                            <i className="bx bx-purchase-tag-alt align-middle text-muted me-1" /> Ideas
                                                        </a>
                                                    </div>
                                                    <h3>{object.idea}</h3>
                                                    <h5><b className="text-primary">{object.req_amount}</b> Amount</h5>
                                                    {/* <p className="text-muted mb-4"><i className="mdi mdi-calendar me-1" />{object.date}</p> */}
                                                </div>
                                                <hr />
                                                <div className="text-center">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div>
                                                                <p className="text-muted mb-2">Categories</p>
                                                                <h5 className="font-size-15">{user.category}</h5>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="mt-4 mt-sm-0">
                                                                <p className="text-muted mb-2">Post by</p>
                                                                <h5 className="font-size-15">{user.name}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="my-5">
                                                    <img src={`${process.env.REACT_APP_SERVER_ADDRESS}/${object.file}`} alt="" className="img-thumbnail mx-auto d-block" />
                                                </div>
                                                <hr />
                                                <div className="mt-4">
                                                    <div className="text-muted font-size-14">
                                                        <h5>Descriptions</h5>
                                                        <p>{object.description}</p>
                                                        <blockquote className="p-4 border-light border rounded mb-4">
                                                            <div className="d-flex">
                                                                <div className="me-3">
                                                                    <i className="bx bxs-quote-alt-left text-dark font-size-24" />
                                                                </div>
                                                                <div>
                                                                    <h5>Terms & Conditions</h5>
                                                                    <p className="mb-0">{object.terms_conditions}</p>
                                                                </div>
                                                            </div>
                                                        </blockquote>
                                                      
                                                    </div>
                                                    <hr />
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card */}
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
        </>
    )
}

export default Ideas_details