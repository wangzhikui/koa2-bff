module.exports = {
  apps: [{
    name: 'koa2-bff-development',
    script: 'index.js',
    autorestart: true,
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    env: {
      NODE_ENV: 'development',
      port: 3000
    }
  },{
    name: 'koa2-bff-production',
    script: 'index.js',
    autorestart: true,
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    env: {
      NODE_ENV: 'production',
      port: 3000
    }
  },{
    name: 'koa2-bff-test',
    script: 'index.js',
    autorestart: true,
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    env: {
      NODE_ENV: 'test',
      port: 3000
    }
  },{
    name: 'koa2-bff-release',
    script: 'index.js',
    autorestart: true,
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
    env: {
      NODE_ENV: 'release',
      port: 3000
    }
  }]
}
