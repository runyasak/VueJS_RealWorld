import firebase from 'firebase'
import Auth from './auth'

const list = (callback) => {
  firebase.database().ref('tweet')
  .on('value', (snapshot) => {
    const results = []
    snapshot.forEach((snapshot) => {
      results.push(snapshot.val())
    })
    callback(results.reverse())
  })
}

const post = (content) => {
  return firebase.database().ref('tweet').push({
    content,
    owner: Auth.getCurrentUser().uid,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
}

export default {
  list,
  post
}
