import * as  React from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

const TopLayout = ({ children, theme }) => <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
export default TopLayout