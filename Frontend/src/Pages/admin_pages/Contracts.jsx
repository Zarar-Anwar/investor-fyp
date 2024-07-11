import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { Store } from "../../Services/Store";

const Contracts = () =>{
    const { state, dispatch } = useContext(Store);
    const { UserInfo } = state;

    // React States
    const [idea_data, setIdeaData] = useState('')

    return(
        <>
         <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">CONTRACTS</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                        
                            <div className="table-responsive">
                                {idea_data ?
                                    <>
                                        <table className="table align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>

                                                    <th className="align-middle">ID</th>
                                                    <th className="align-middle">IDEA</th>
                                                    <th className="align-middle">DESCRIPTIONS</th>
                                                    <th className="align-middle">REQ AMOUNT</th>
                                                    <th className="align-middle">TERMS & CONDITIONS</th>
                                                    <th className="align-middle">FILE</th>
                                                    <th className="align-middle">ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    idea_data.map((object) => (
                                                        <tr>

                                                            <td>
                                                                <a href="javascript: void(0);" className="text-body fw-bold">
                                                                    {object.id}
                                                                </a>{" "}
                                                            </td>
                                                            <td>{object.idea}</td>
                                                            <td>{object.description}</td>
                                                            <td>{object.req_amount}</td>
                                                            <td>
                                                                {object.terms_conditions}
                                                            </td>
                                                            <td>
                                                                {object.file}
                                                            </td>
                                                            <td>
                                                                <Link
                                                                to={`/admin/add/contracts/${object.id}`}
                                                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                                                
                                                                >
                                                                    Make Contracts
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))


                                                }

                                            </tbody>
                                        </table>
                                    </>

                                    :
                                    <div className="text-center bolder">
                                        <span className="text-danger bolder">No Contracts Data Available</span>
                                    </div>
                                }
                            </div>
                            {/* end table-responsive */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export  default Contracts