const axios = require('axios')

export default async (req, res) => {
  const query = req._parsedUrl.query
  const pair = query.split('=')
  if (decodeURIComponent(pair[0]) == 'token') {
    const token = decodeURIComponent(pair[1])
    const data = await axios.post(process.env.GOOGLE_RECAPTCHA_VALIDURL, null, {
      params: {
        secret: process.env.GOOGLE_RECAPTCHA_SECRET,
        response: token,
      },
    })
    return await res.end(JSON.stringify(data.data))
  }
  return await res.end(JSON.stringify({ success: false }))
}
