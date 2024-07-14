import zIndex from "@mui/material/styles/zIndex";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function ToastContainers() {
  return (
    <>
      <ToastContainer
        style={{zIndex:99999}}
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        limit={1}
        pauseOnHover

      />
    </>
  )
}

export default ToastContainers
