import errorService from '../services/errorService'
import infoService from '../services/info.service'

const useInfo = () => {

  const getInfo = async (lng) => {
    try {
      if (['en', 'ru'].includes(lng)) {
        const {data} = await infoService.get(lng)
        return data
      }
    } catch (err) {
      errorService.handleError(err)
    }
  }

  const updateInfo = async (info) => {
    try {
      await infoService.update(info)
    } catch (err) {
      errorService.handleError(err)
    }
  }

  return {getInfo, updateInfo}
}

export default useInfo
