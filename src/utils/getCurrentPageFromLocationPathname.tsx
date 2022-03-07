export const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

export const getAfterLastSlash = pathname => /[^/]*$/.exec(pathname)[0]

export const splitAndCapitalize = (pageName: string) => {
  console.log("page name: ", pageName)
  const pageParts = pageName.split("-").length > 0 ? pageName.split("-") : [pageName]
  return pageParts
    .map((s, i) => i === 0 || ["to", "of", "for"].some((dontCapitalize) => dontCapitalize !== s) ? capitalize(s) : s)
    .join(" ")
}

export const getCurrentPageFromLocationPathname = (locationPathname: string) => {
  const onHomePage = locationPathname === "/"
  while (locationPathname.charAt(locationPathname.length - 1) === "/") {
    locationPathname = locationPathname.substring(0, locationPathname.length - 1)
  }
  const afterLastSlash = getAfterLastSlash(locationPathname)
  const pageName = onHomePage ? "home" : afterLastSlash

  // todo https://github.com/royalfig/the-capitalizer/blob/master/src/capitalize/capitalize.js
  return splitAndCapitalize(pageName)
}
