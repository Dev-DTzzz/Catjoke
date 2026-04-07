export const useAsset = (path: string) => {
  const config = useRuntimeConfig()
  // Убираем начальный слеш если есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${config.app.baseURL}${cleanPath}`
}