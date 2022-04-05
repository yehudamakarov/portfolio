import { Breadcrumbs, IconButton } from "@mui/material"
import { MyLink } from "../components/MyLink"
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined"
import { getCurrentPageFromLocationPathname } from "../utils/getCurrentPageFromLocationPathname"
import * as React from "react"

export function getPartsAfterRoot(dirName: string) {
  if (dirName === "/") {
    return ["/"]
  }

  while (dirName.charAt(0) === "/") {
    dirName = dirName.substring(1)
  }
  while (dirName.charAt(dirName.length - 1) === "/") {
    dirName = dirName.substring(0, dirName.length - 1)
  }

  return dirName.split("/").map((value, index, array) => {
    if (index === 0) {
      return "/" + value
    }
    return "/" + array.slice(0, index + 1).join("/")
  })
}

export function MyBreadcrumbs(props: { dirName: string }) {
  const structuredParts = getPartsAfterRoot(props.dirName)

  return (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      <MyLink sx={{ color: "text.primary" }} to={"/"}>
        <IconButton size={"small"}>
          <CottageOutlinedIcon fontSize={"inherit"} />
        </IconButton>
      </MyLink>
      {structuredParts.map(value => (
        <MyLink
          key={value}
          sx={{ color: "text.primary" }}
          to={value}>{getCurrentPageFromLocationPathname(value)}
        </MyLink>
      ))}
    </Breadcrumbs>
  )
}
