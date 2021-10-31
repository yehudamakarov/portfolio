import * as React from "react"
import { GitHub } from "@mui/icons-material"
import { IconButton, Theme } from "@mui/material"
import { SxProps } from "@mui/system"

interface GithubHomeButtonProps {
  sxProps: SxProps<Theme>
}

export const GithubHomeButton: React.FC<GithubHomeButtonProps> = ({sxProps}) => {
  return (
    <IconButton
      href={"https://github.com/yehudamakarov"}
      edge={"start"}
      sx={sxProps}
    >
      <GitHub />
    </IconButton>
  )
}
