export const klaviyoSubscribe = async (email: string, params = {}) => {
  const LIST_ID = 'RmZ93E'

  const config = Object.assign({}, params, {
    g: LIST_ID,
    email
  })

  const body = Object.keys(config).reduce((str, key) => {
    // @ts-ignore
    str.append(key, config[key])
    return str
  }, new URLSearchParams())

  return fetch('https://manage.kmail-lists.com/ajax/subscriptions/subscribe', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}
