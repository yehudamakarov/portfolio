import GitHubIcon from "@mui/icons-material/GitHub"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { IconButton } from "@mui/material"
import * as React from "react"

export const SocialIcon = ({ type }: { type: "github" | "youtube" }) => {
  let link
  let icon
  switch (type) {
    case "github":
      link = "https://github.com/yehudamakarov"
      icon = <GitHubIcon fontSize={"small"} />
      break
    case "youtube":
      link = "https://www.youtube.com/channel/UCwxQAOaKZ3FREWBoyiStN5g"
      icon = <YouTubeIcon fontSize={"small"} />
      break

  }
  return (
    <IconButton
      sx={{ color: "text.secondary" }}
      target={"_blank"}
      href={link}>
      {icon}
    </IconButton>
  )
}
