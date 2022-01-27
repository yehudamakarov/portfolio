import { Assignment } from "@mui/icons-material"
import MailIcon from "@mui/icons-material/Mail"
import * as React from "react"

export const openEmail = (subject, message) => {
  window.location.href = `mailto:yehudamakarov@gmail.com?subject=${subject}&body=${message}`
}
export const actions = [
  {
    icon: <Assignment />,
    name: "Résumé",
    onClick: (message?: string) => openEmail("Resume Request", message ? message : "Hey! Is it possible to send your resume? Thanks!")
  },
  {
    icon: <MailIcon />,
    name: "Email",
    onClick: (message?: string) => openEmail("Hey there!", message ? message : "Interested to touch base for a little?")
  }
]
