import { MyLink } from "../../MyLink"
import { Button } from "@mui/material"
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined"
import * as React from "react"

export const BackHomeButton = () => (
  <MyLink to={"/"} underline={"none"}>
    <Button
      size={"small"}
      sx={{ color: "text.primary" }}
      startIcon={<CottageOutlinedIcon />}
    >
      Home
    </Button>
  </MyLink>
)
