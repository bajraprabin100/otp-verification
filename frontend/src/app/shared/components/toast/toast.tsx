import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
const errorMsg = (desc?: string, title?: string) => {
  toast.error(
    <>
      <Typography variant="text2xl" fontWeight={500}>
        {title || "Attention"}
      </Typography>
      <Typography>{desc || "Something went Wrong"}</Typography>
    </>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
};

const successMsg = (desc?: string, title?: string) => {
  toast.success(
    <>
      <Typography variant="text2xl" fontWeight={500}>
        {title || "Success"}
      </Typography>
      <Typography>{desc || "Task completed successfully"}</Typography>
    </>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
};

const warningMsg = (desc?: string, title?: string) => {
  toast.warning(
    <>
      <Typography variant="text2xl" fontWeight={500}>
        {title || "Attention"}
      </Typography>
      <Typography>{desc || "Something must be taken into attention"}</Typography>
    </>,
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
};

const toastFunctions = () => ({ successMsg, warningMsg, errorMsg });

export default toastFunctions;
