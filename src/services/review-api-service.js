import config from '../config'
import TokenService from '../services/token-service'

const ReviewApiService = {
  postNewReview(newReview) {
    return fetch(`${config.API_ENDPOINT}/products/adminhomepage`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newReview),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ReviewApiService