const routers = [];

module.exports = (app) => {
  routers.forEach((router) => {
    app.use(router.path, router.hedelar);
  });
};
