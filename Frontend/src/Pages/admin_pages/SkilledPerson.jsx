import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../Services/Axios"
import { useContext, useEffect, useState } from "react"
import { Store } from "../../Services/Store"
import Ideas from "./Ideas"

const SkilledPerson = () => {
    const [skilled_person, setSkilledPerson] = useState()
    const {state , dispatch} = useContext(Store)
    const {UserInfo} = state
    const get_all_skilled_person = async () => {
        try {
            const { data } = await api.get(`get_user_skilled/`)
            setSkilledPerson(data)
        } catch (error) {
            toast.error(error.message)
        }
    }
console.log(skilled_person)
    useEffect(() => {
        get_all_skilled_person()
    }, get_all_skilled_person)


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
                                {skilled_person ?
                                    <>
                                        <table className="table align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>

                                                    <th className="align-middle">ID</th>
                                                    <th className="align-middle">Username</th>
                                                    <th className="align-middle">Description</th>
                                                    <th className="align-middle">Title</th>
                                                    <th className="align-middle">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    skilled_person.map((object) => (
                                                        <tr>

                                                            <td>
                                                                <a href="javascript: void(0);" className="text-body fw-bold">
                                                                    {object.id}
                                                                </a>{" "}
                                                            </td>
                                                            <td>{object.user.username}</td>
                                                            <td>{object.description}</td>
                                                            <td>{object.title}</td>
                                                          
                                                            <td>
                                                                <Link
                                                                    to={'#'}
                                                                    className="btn btn-success btn-sm btn-rounded waves-effect waves-light"
                                                                >
                                                                    HIRE
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

export default SkilledPerson