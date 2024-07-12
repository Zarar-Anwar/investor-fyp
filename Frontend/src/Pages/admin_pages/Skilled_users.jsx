import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"
import Ideas from "./Ideas"

const Skilled_Person = () => {
    const [user_list, serUserList] = useState()
    const { state, dispatch } = useContext(Store)
    const { UserInfo } = state

    const handleDelete = async (id) => {

        try {
            const data = await api.get(`/delete_user_by_id/${id}`)
            toast.success("User Deleted")
        } catch (error) {
            toast.error(error.message)
        }

    }

    const get_all_user_list = async () => {
        try {
            const { data } = await api.get(`get_all_users_skilled_person/`)
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
                        <h4 className="mb-sm-0 font-size-18">SKILLED PERSON</h4>

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
                                                    <th className="align-middle">Name</th>
                                                    <th className="align-middle">Email</th>
                                                    <th className="align-middle">Category</th>
                                                    <th className="align-middle">Phone</th>
                                                    <th className="align-middle">Date</th>
                                                    <th className="align-middle">Gender</th>
                                                    <th className="align-middle">Address</th>
                                                    <th className="align-middle">Description</th>
                                                    <th className="align-middle"></th>
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
                                                            <td>{object.name}</td>
                                                            <td>{object.email}</td>
                                                            <td>{object.category}</td>
                                                            <td>{object.phone}</td>
                                                            <td>{object.date}</td>
                                                            <td>{object.gender}</td>
                                                            <td>{object.address}</td>
                                                            <td>{object.description}</td>

                                                            <td>
                                                                <button

                                                                    onClick={() => { handleDelete(object.user) }}
                                                                    className="btn btn-danger btn-sm btn-rounded waves-effect waves-light"
                                                                >
                                                                    DELETE
                                                                </button>

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

export default Skilled_Person