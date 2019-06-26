import config from '../config'
import TokenService from './token-service'

const ReviewsApiService = {
  postNewReview(newReview) {
    return fetch(`${config.API_ENDPOINT}/products/userhomepage`, {
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

export default ReviewsApiService