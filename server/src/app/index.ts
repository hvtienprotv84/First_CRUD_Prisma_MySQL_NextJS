import express, { Application } from "express";
import cors from "cors";
import Product from "./model/Product";
import productRouter from "./routes/products";

class App {
  public server: Application;
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(productRouter);
  }
}

export default App;
