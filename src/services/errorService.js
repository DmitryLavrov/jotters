import { toast } from 'react-toastify'

const errorService = {
  handleError: (err) => {
    let error
    if (err.response?.data) {
      error = 'Status ' + err.response.data.status + '. ' + err.response.data.message
    } else {
      error = err.message
    }
    toast.error(error)
    // =========================
    console.log('errorService')
    // =========================
  }
}

export default errorService
