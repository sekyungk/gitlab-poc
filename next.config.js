module.exports = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/posts/:id",
        destination: "/posts?id=:id",
      },
    ];
  },
};
