import { toast } from "react-toastify";

  export const toastSuccess = (msg: String) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: msg?.length*50,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  export const toastError = (msg: String) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: msg?.length*50,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  export const toastInfo = (msg: String) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: msg?.length*50,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }