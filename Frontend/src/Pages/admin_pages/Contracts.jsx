import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"
import Ideas from "./Ideas"

const All_Contracts = () => {
    const [contract_list, setContractList] = useState([])
    const { state, dispatch } = useContext(Store)
    const { UserInfo } = state


    const get_all_contract_list = async () => {
        try {
            const { data } = await api.get(`get_contract_by_id/${UserInfo.id}/`)
            setContractList(data)
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        get_all_contract_list()
    }, get_all_contract_list)


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">ALL CONTRACTS</h4>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">

                            <div className="table-responsive">
                                {contract_list.length > 0 ?
                                    <>
                                        <table className="table align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th className="align-middle">ID</th>
                                                    <th className="align-middle">IDEA</th>
                                                    <th className="align-middle">IDEA TITLE</th>
                                                    <th className="align-middle">ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    contract_list.map((object) => (
                                                        <tr>

                                                            <td>
                                                                <a href="javascript: void(0);" className="text-body fw-bold">
                                                                    {object.id}
                                                                </a>{" "}
                                                            </td>
                                                            <td>{object.idea.idea}</td>
                                                            <td>{object.idea_title}</td>
                                                            <td>
                                                            <Link
                                                                    to={`/admin/contract/tracking?data=${encodeURIComponent(JSON.stringify(object))}`}
                                                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                                                >
                                                                    TRACKING
                                                                </Link>

                                                            </td>
                                                        </tr>
                                                    ))


                                                }

                                            </tbody>
                                        </table>
                                    </>

                                    :
                                    <div className="text-center">
                                        <span className="text-danger bolder"> <b>No Contract Data Available</b></span>
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

export default All_Contracts