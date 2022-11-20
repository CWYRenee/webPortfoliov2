import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Pictures from "./Pictures";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="scroll-dialog-title" sx={{ typography: 'h5' }}>The fun stuff:</DialogTitle>
        <DialogContent>
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Pictures />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
