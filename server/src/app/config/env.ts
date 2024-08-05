if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const env = {
  PORT: process.env.PORT || 8080,
};

export default env;
