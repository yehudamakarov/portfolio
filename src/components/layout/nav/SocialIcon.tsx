import GitHubIcon from "@mui/icons-material/GitHub"
import YouTubeIcon from "@mui/icons-material/YouTube"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { IconButton } from "@mui/material"
import * as React from "react"
import InstagramIcon from "@mui/icons-material/Instagram"

export const SocialIcon = ({ type }: { type: "github" | "youtube" | "linkedin" | "instagram" }) => {
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
    case "linkedin":
      link = "https://www.linkedin.com/in/yehudamakarov/"
      icon = <LinkedInIcon fontSize={"small"} />
      break
    case "instagram":
      link = "https://www.instagram.com/yehudamakarov/"
      icon = <InstagramIcon fontSize={"small"} />
      break
    default:
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
