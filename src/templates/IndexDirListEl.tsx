import { ButtonBase, Grid, Icon, Theme, Typography, useMediaQuery } from "@mui/material"
import * as React from "react"
import { useState } from "react"
import { animated, useSpring } from "react-spring"
import { MyLink } from "../components/MyLink"
import { getCurrentPageFromLocationPathname } from "../utils/getCurrentPageFromLocationPathname"
import { ArrowForward } from "@mui/icons-material"

export const IndexDirListEl = (props: { arrowId: string; dirName: string }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
  console.log(isMobile)
  const [hovered, setHovered] = useState(false)
  const animation = useSpring({
    from: { opacity: 0, transform: "translate3d(-20%,0,0)" },
    to: { opacity: isMobile ? 1 : hovered ? 1 : 0, transform: "translate3d(0%,0,0)" },
    reverse: isMobile ? false : !hovered
  })

  return (
    <ButtonBase
      id={props.arrowId}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      focusRipple
      component={"div"}
      sx={{
        borderRadius: 3,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "primary.main",
        display: "block",
        mb: 1,
        px: 1.5,
        transition: "border-color 0.2s",
        "&:hover": {
          borderColor: "primary.dark",
          backgroundColor: "action.hover"
        }
      }}>
      <MyLink sx={{ color: "text.primary" }} underline={"none"} to={props.dirName}>
        <Grid direction={"row"} container alignItems={"flex-end"}>
          <Grid sx={{ flexGrow: 1 }} item>
            <Typography>{getCurrentPageFromLocationPathname(props.dirName)}</Typography>
          </Grid>
          <Grid item>
            <animated.div style={animation}>
              <Icon fontSize={"small"}>
                <ArrowForward fontSize={"inherit"} />
              </Icon>
            </animated.div>
          </Grid>
        </Grid>
      </MyLink>
    </ButtonBase>
  )
}
