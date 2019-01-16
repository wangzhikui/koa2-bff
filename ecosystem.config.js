module.exports = {
  apps: [{
    name: 'koa2-bff',
    script: 'index.js',
    autorestart: true,
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
