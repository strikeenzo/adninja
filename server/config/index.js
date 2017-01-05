export default {
  port: process.env.PORT || 3000,
  db: {
    host: 'localhost',
    name: 'wallet',
    password: 'root',
    username: 'root'
  },
  jwt: {
    secret: 'WALLET-TEST'
  }
};
