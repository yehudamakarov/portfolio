import { Button } from "@mui/material"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import * as React from "react"

export const EditInGithubButton = (props: { href: string }) => (
  <Button
    target={"_blank"}
    href={props.href}
    size={"small"}
    sx={{ color: "text.primary" }}
    startIcon={<LightbulbOutlinedIcon />}

  >
    Improve
  </Button>
)
