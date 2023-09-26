export const formatPath = (path: string, folder: string) => {
  const tempPathArray = path.split('/').slice(-2)
  tempPathArray.unshift(folder)
  return tempPathArray.join('/')
}
