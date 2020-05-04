import { Container, Service } from "typedi";
import { Config } from "config";

@Service()
export class DependencyInjector {
    init(config: Config) {
        if (config.ENVIRONMENT === "dev") {
            // container config for dev environment
        } else {
            // container config for prod environment
        }
    }

    get Container() {
        return Container;
    }
}
