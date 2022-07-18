require('dotenv').config()

const environment = {
  app: {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT,
    path: __dirname,
    modulesPath: "./modules",
  },
  database: {
    server: "mongodb",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    db: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
  environment: process.env.APP_ENV,
  token: {
    jwt: process.env.APP_KEY,
  },
  email: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    encryption: true,
    user: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
  },
  frontend: process.env.APP_FRONTEND,
  firebaseServerKey: process.env.FIREBASE_KEY,
  cron: {
    backup: "0 0 * * *",
    cleanup: "0 0 * * *",
    status: "0 0 * * *",
  },
  s3: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
  },
  env: (key) => {
    return environment[key];
  },
};

module.exports = environment.env;