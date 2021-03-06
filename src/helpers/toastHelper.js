import { toast } from "react-toastify";

export const toastError = (err) => {
  let message = null;
  if(typeof err === 'object' && err.message)
  {
      ({message} = err);
  }
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.error(message)
  }
};

export const toastSuccesss = message => {
  if(message !== null && typeof message !== "undefined" && message !== "")
  toast.success(message);
}
