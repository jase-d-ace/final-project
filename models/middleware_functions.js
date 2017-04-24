//sabrina is a life saver for sharing this with me!!

const cookieParse = (req, res, next) => {
  // Only gets cookies if there are cookies
  if(req.headers.cookie){
    const cookiesParsed = {};
    const headerCookie = req.headers.cookie;

    // Splits the string into an array of cookies (still in string format)
    const rawArray = headerCookie.split('; ');

    // each cookie string is split by key-pair value
    const cleaned = rawArray.map(cookie => {
      return cookie.split('=');
    });

    // Puts the key-pair value into the object
    cleaned.forEach(cookie => {
      cookiesParsed[cookie[0]] = cookie[1];
    });

    // Returns the object
    req.cookies = cookiesParsed;
  }

  next();
}
module.exports = cookieParse
