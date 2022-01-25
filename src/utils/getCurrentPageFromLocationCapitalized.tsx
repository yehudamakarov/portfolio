import { WindowLocation } from "@reach/router"

export function getCurrentPageFromLocationCapitalized(location: WindowLocation<WindowLocation["state"]>) {
  const onHomePage = location.pathname === "/"
  const pageName = onHomePage ? "home" : location.pathname
  const withoutSlash = pageName.replace(/\/+/gm, "")
  // capitalize
  return withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1)
}
