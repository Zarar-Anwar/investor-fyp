import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"

const All_Ideas = () => {
    const [idea_data, setIdeaData] = useState([])
    const { state, dispatch } = useContext(Store)
    const { UserInfo } = state
    const get_all_idea = async () => {
        try {
            const { data } = await api.get(`get_all_idea/`)
            setIdeaData(data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    
    const handleDelete = async (id) => {

        try {
            await api.get(`/delete_idea_by_id/${id}`);
            toast.success("Idea Deleted");
            setIdeaData(idea_data.filter(idea => idea.id !== id))
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
                        <h4 className="mb-sm-0 font-size-18">ALL IDEAS</h4>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">

                            <div className="table-responsive">
                                {idea_data.length > 0 ?
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
                                                                {!UserInfo.is_admin?
                                                                <Link
                                                                to={`/admin/ideas/details?data=${encodeURIComponent(JSON.stringify(object))}`}
                                                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                                                >
                                                                    View
                                                                </Link>:null
                                                            }
                                                                {UserInfo.is_admin ?
                                                                    <button onClick={()=>{handleDelete(object.id)}}
                                                                        className="btn btn-danger btn-sm btn-rounded waves-effect waves-light"
                                                                    >
                                                                        DELETE
                                                                    </button> : null
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))


                                                }

                                            </tbody>
                                        </table>
                                    </>

                                    :
                                    <div className="text-center">
                                        <span className="text-danger bolder"> <b>No Idea Data Available</b></span>
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

export default All_Ideas