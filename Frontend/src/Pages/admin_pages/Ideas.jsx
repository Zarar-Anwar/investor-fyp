import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"

const Ideas = () => {
    const [idea_data, setIdeaData] = useState()
    const {state , dispatch} = useContext(Store)
    const {UserInfo} = state
    const get_all_idea = async () => {
        try {
            const { data } = await api.get(`get_idea/${UserInfo.id}/`)
            setIdeaData(data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        get_all_idea()
    }, get_all_idea)


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">IDEAS</h4>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3 ">
                                <Link to="/admin/add/ideas" class="btn btn-primary" type="button" >
                                    <i class="bx bxs-bulb align-middle me-1"></i> ADD IDEAS
                                </Link>
                            </div>
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
                                                                    to={`/admin/ideas/details?data=${encodeURIComponent(JSON.stringify(object))}`}
                                                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                                                >
                                                                    View
                                                                </Link>
                                                                {/* <Link
                                                                    to={`/admin/add/contracts/${object.id}`}
                                                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"

                                                                >
                                                                    Make Contracts
                                                                </Link> */}
                                                            </td>
                                                        </tr>
                                                    ))


                                                }

                                            </tbody>
                                        </table>
                                    </>

                                    :
                                    <div className="text-center">
                                        <span className="text-danger bolder">No Ideas Data Available</span>
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

export default Ideas