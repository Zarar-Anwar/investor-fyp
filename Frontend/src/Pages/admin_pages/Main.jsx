import { useContext } from "react"
import { Store } from "../../Services/Store"

const Main = () => {
    const { state } = useContext(Store)
    const { UserInfo } = state
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <img src="assets/images/users/avatar-1.jpg" alt="" className="avatar-md rounded-circle img-thumbnail" />
                                        </div>
                                        <div className="flex-grow-1 align-self-center">
                                            <div className="text-muted">
                                                <p className="mb-2">Welcome to   <b>{UserInfo.category.toUpperCase()}</b>  Dashboard</p>
                                                <h5 className="mb-1">{UserInfo.name}</h5>
                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 align-self-center">
                                    <div className="text-lg-center mt-4 mt-lg-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <div>
                                                    <p className="text-muted text-truncate mb-2">Contracts</p>
                                                    <h5 className="mb-0">40</h5>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div>
                                                    <p className="text-muted text-truncate mb-2">Ideas</p>
                                                    <h5 className="mb-0">18</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* end row */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
        
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                                                <i className="bx bx-copy-alt" />
                                            </span>
                                        </div>
                                        <h5 className="font-size-14 mb-0">Email</h5>
                                    </div>
                                    <div className="text-muted mt-4">
                                        <h4>{UserInfo.email}<i className="mdi mdi-inbox ms-1 text-success" /></h4>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                                                <i className="bx bx-copy-alt" />
                                            </span>
                                        </div>
                                        <h5 className="font-size-14 mb-0">Phone</h5>
                                    </div>
                                    <div className="text-muted mt-4">
                                        <h4>{UserInfo.phone}<i className="mdi mdi-inbox ms-1 text-success" /></h4>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                                                <i className="bx bx-copy-alt" />
                                            </span>
                                        </div>
                                        <h5 className="font-size-14 mb-0">Address</h5>
                                    </div>
                                    <div className="text-muted mt-4">
                                        <h4>{UserInfo.address}<i className="mdi mdi-inbox ms-1 text-success" /></h4>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                      
                    </div>
                    {/* end row */}
                </div>
            </div>

            <div className="row">
        <div className="col-xl-12">
          <div className="card bg-primary-subtle">
            <div>
              <div className="row">
                <div className="col-7">
                  <div className="text-primary p-3">
                    <h5 className="text-primary">Description</h5>
                    <ul className="ps-3 mb-0">
                      <li className="py-1">{UserInfo.description}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-5 align-self-end">
                  <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>

        </>
    )
}

export default Main