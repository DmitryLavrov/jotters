import useError from './useError'
import infoService from '../services/info.service'

const useInfo = () => {
  const {handleError} = useError()

  const getInfo = async (lng) => {
    try {
      if (['en', 'ru'].includes(lng)) {
        const {data} = await infoService.get(lng)
        return data
      }
    } catch (err) {
      handleError(err)
    }
  }

  const updateInfo = async (info) => {
    try {
      await infoService.update(info)
    } catch (err) {
      handleError(err)
    }
  }

  return {getInfo, updateInfo}
}

export default useInfo
