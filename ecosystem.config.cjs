module.exports = {
  apps: [
    {
      name: 'kpi-server',
      script: './server/index.js',
      cwd: '/var/www/apps/kpi',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        DB_PATH: '/var/www/apps/kpi/server/data/kpi.db',
        CORS_ORIGIN: 'https://guarrod.com',
      },
    },
  ],
};
