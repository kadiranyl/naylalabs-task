import { toast } from "react-toastify";

  const toastSettings = (msg: String) => {
    return {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      autoClose: msg?.length*50,
    }
  }

  export const toastSuccess = (msg: String) => {
    const options: any = toastSettings(msg)
    
    toast.success(msg, options);
  }

  export const toastError = (msg: String) => {
    const options: any = toastSettings(msg)
    
    toast.error(msg, options);
  }

  export const toastInfo = (msg: String) => {
    const options: any = toastSettings(msg)

    toast.info(msg, options);
  }