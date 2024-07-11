import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"

const Gigs = () => {
    const [gigs, setGigs] = useState()
    const {state , dispatch} = useContext(Store)
    const {UserInfo} = state
    const get_gigs = async () => {
        try {
            const { data } = await api.get(`get_gig/${UserInfo.id}/`)
            setGigs(data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        get_gigs()
    }, get_gigs)


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">GIGS</h4>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                        
                            <div className="table-responsive">
                                {gigs ?
                                    <>
                                        <table className="table align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th className="align-middle">ID</th>
                                                    <th className="align-middle">DESCRIPTION</th>
                                                    <th className="align-middle">TITLE</th>
                                                    <th className="align-middle">FILE</th>
                                                    <th className="align-middle">ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    gigs.map((object) => (
                                                        <tr>

                                                            <td>
                                                                <a href="javascript: void(0);" className="text-body fw-bold">
                                                                    {object.id}
                                                                </a>{" "}
                                                            </td>
                                                            <td>{object.title}</td>
                                                            <td>{object.description}</td>
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

export default Gigs