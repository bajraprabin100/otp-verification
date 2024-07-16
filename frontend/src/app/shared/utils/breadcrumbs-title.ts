export function getBreadCrumbTitle(urlPath: string, separator = "_"){
  switch (urlPath) {
    case "i":
      return "test"
    default:
      return getPathString(urlPath, separator);
  }
}
export function getPathString(pathName: string, separator = "_"){
  const pathSplit = splitString(pathName, separator)
  const pathStringList = pathSplit?.reduce((d, r) => {
    d?.push(capitalizeFirstLetter(r))
    return d
  }, [])
  return pathStringList?.join(" ");
}
export function splitString(urlPath, separator){
  return urlPath?.split(separator).filter(d => d !== "");
}
export function capitalizeFirstLetter(char: string){
  return char?.[0]?.toUpperCase()?.concat(char?.slice(1)) ?? ""
}
