import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"
import Ideas from "./Ideas"

const All_Contracts = () => {
    const [user_list, serUserList] = useState()
    const { state, dispatch } = useContext(Store)
    const { UserInfo } = state

    
    const get_all_user_list = async () => {
        try {
            const { data } = await api.get(`get_all_contracts/`)
            serUserList(data)
        } catch (error) {
            toast.error(error.message)
        }
    }
    console.log(user_list)
    useEffect(() => {
        get_all_user_list()
    }, get_all_user_list)


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
                                {user_list ?
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
                                                    user_list.map((object) => (
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
                                                                    to={`/delete_user_by_id/${object.user}`}
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
                                        <span className="text-danger bolder">No User Data Available</span>
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