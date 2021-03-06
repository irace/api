var localenv = require('./localenv.js')
  , withings = require('./withings.js');

var fetchData = function (env) {
  withings({
    user_id: env.WITHINGS_USER_ID,
    consumer_key: env.WITHINGS_CONSUMER_KEY,
    consumer_secret: env.WITHINGS_CONSUMER_SECRET,
    token: env.WITHINGS_TOKEN,
    token_secret: env.WITHINGS_TOKEN_SECRET
  }, function (error, data) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(JSON.stringify(data, null, 2));
    }
  });
};

localenv('credentials.json', function (error, env) {
  if (error) {
    console.log(error);
  }
  else {
    fetchData(env);
  };  
});
