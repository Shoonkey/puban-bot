import dotenv from "dotenv";
import path from "path";

function loadEnvironment() {
  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
  });
}

export default loadEnvironment;
