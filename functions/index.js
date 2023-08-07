const admin = require('firebase-admin');

const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://firechat-efed3-default-rtdb.asia-southeast1.firebasedatabase.app',
});
