import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Store } from "../../Services/Store";
import { toast } from "react-toastify";
import api from "../../Services/Axios";

const ProjectTracking = () => {
    const { state } = useContext(Store);
    const { UserInfo } = state;
    const [trackings, setTrackings] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const data = query.get('data');
    const object = data ? JSON.parse(decodeURIComponent(data)) : null;

    console.log(object)

    const get_all_trackings = async () => {
        try {
            const response = await api.get(`/get_tracking_by_id/${object.id}`);
            setTrackings(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        get_all_trackings();
    }, []);

    return (
        <div className="page-content">
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Task Board</h4>
                            {UserInfo.category === 'entrepreneur' && (
                                <>
                                    <Link
                                        to={`/admin/add/contract/tracking?data=${encodeURIComponent(JSON.stringify(object))}`}
                                        className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    >
                                        ADD TASK
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

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
                                                    <h3>{object.idea.idea}</h3>
                                                    <h5><b className="text-primary">{object.idea.req_amount}</b> Amount</h5>
                                                    {/* <p className="text-muted mb-4"><i className="mdi mdi-calendar me-1" />{object.date}</p> */}
                                                </div>
                                                <hr />
                                                <div className="text-center">
                                                    {/* <div className="row">
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
                                                    </div> */}
                                                </div>
                                                <hr />
                                                <div className="my-5">
                                                    <img src={`${process.env.REACT_APP_SERVER_ADDRESS}/${object.idea.file}`} alt="" className="img-thumbnail mx-auto d-block" />
                                                </div>
                                                <hr />
                                                <div className="mt-4">
                                                    <div className="text-muted font-size-14">
                                                        <h5>Descriptions</h5>
                                                        <p>{object.idea.description}</p>
                                                        <blockquote className="p-4 border-light border rounded mb-4">
                                                            <div className="d-flex">
                                                                <div className="me-3">
                                                                    <i className="bx bxs-quote-alt-left text-dark font-size-24" />
                                                                </div>
                                                                <div>
                                                                    <h5>Terms & Conditions</h5>
                                                                    <p className="mb-0">{object.idea.terms_conditions}</p>
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

                {/* end page title */}
                <div className="row">
                    {/* Loop through trackings and display them */}
                    {trackings.length > 0 ? (
                        trackings.map((tracking, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className={`card-title mb-4 ${getStatus1Label(tracking.status)}`}>{getStatusLabel(tracking.status)}</h4>
                                        <div className="pb-1 task-list">
                                            {/* Display tasks based on status */}
                                            {renderTaskBox(tracking, index)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center mt-4">
                            <span className="text-danger"><b>No Tasks Added Yet</b></span>
                        </div>
                    )}
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
            {/* container-fluid */}
        </div>
    );
};

// Helper function to get status label based on status string
const getStatusLabel = (status) => {
    switch (status) {
        case 'upcoming':
            return 'Upcoming';
        case 'progress':
            return 'In Progress';
        case 'complete':
            return 'Completed';
        default:
            return 'Unknown';
    }
};
const getStatus1Label = (status) => {
    switch (status) {
        case 'upcoming':
            return 'text-warning';
        case 'progress':
            return 'text-primary';
        case 'complete':
            return 'text-success';
        default:
            return 'Unknown';
    }
};

// Helper function to render task box based on tracking status
const renderTaskBox = (tracking, index) => {
    const { status, progress, product_name, start_time, cost_description, cost } = tracking;
    let statusClass = '';
    let badgeClass = '';

    switch (status) {
        case 'upcoming':
            statusClass = 'bg-light';
            badgeClass = 'badge-soft-secondary';
            break;
        case 'progress':
            statusClass = 'bg-info';
            badgeClass = 'badge-soft-primary';
            break;
        case 'complete':
            statusClass = 'bg-success';
            badgeClass = 'badge-soft-success';
            break;
        default:
            break;
    }

    return (
        <div className={`card task-box `} id={`task-${index}`}>
            <div className="card-body">
                <div className="float-end ms-2">
                    <span className={`badge rounded-pill ${badgeClass} font-size-12`}>
                        {progress}
                    </span>
                </div>
                <div>
                    <h5 className="font-size-15">
                        <a href="javascript:void(0);" className="text-dark">
                            {product_name}
                        </a>
                    </h5>
                    <p className="text-muted mb-4">{start_time}</p>
                </div>
                <div className="avatar-group float-start task-assigne">
                    <p>{cost_description}</p>
                </div>
                <div className="text-end">
                    <h5 className="font-size-15 mb-1">${cost}</h5>
                    <p className="mb-0 text-muted">Budget</p>
                </div>
                <Link
                    to={`/admin/update/contract/tracking?data=${encodeURIComponent(JSON.stringify(tracking))}`}
                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                >
                    EDIT
                </Link>            </div>
        </div>
    );
};

export default ProjectTracking;
