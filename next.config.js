module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/get-speech-token",
        destination: "https://localhost:3001/api/get-speech-token", // Proxy to Backend
      },
    ];
  },
};

