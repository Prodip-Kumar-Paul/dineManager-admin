import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

interface Props {
  open: boolean;
  message: string;
  handleClose: () => {};
}

const ErrorDlg = (props: Props) => {
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>{props.message}</DialogTitle>
    </Dialog>
  );
};

export default ErrorDlg;
