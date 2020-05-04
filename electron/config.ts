import { Service } from "typedi";

@Service()
export class Config {
    ENVIRONMENT = process.env.ENVIRONMENT || "dev";
    DEBUG = process.env.DEBUG || true;
}
