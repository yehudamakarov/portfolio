import * as React from "react"
import { Fragment } from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
import { actions } from "./OpenEmail"

export const ContactButton = ({ sxColor }) => {
  const [value, setValue] = React.useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (onClick?: (message?: string) => void) => () => {
    if (onClick !== undefined) {
      onClick(value)
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <Button size={"small"} sx={{ color: sxColor }} endIcon={<MailIcon />}
              onClick={handleClickOpen}>Contact</Button>
      <Dialog open={open} onClose={handleClose()}>
        <DialogTitle>Contact Me</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I'd love to get in touch with you, feel free to send me a message.
          </DialogContentText>
          <TextField
            placeholder={"Your message here"}
            value={value}
            onChange={handleChange}
            autoFocus
            margin="dense"
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          {actions.map(action => (
            <Button key={action.name} sx={{ color: "text.primary" }} startIcon={action.icon}
                    onClick={handleClose(action.onClick)}>{action.name}</Button>)
          )}
        </DialogActions>
      </Dialog>
    </Fragment>)
}
