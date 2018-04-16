# dotenv-display
Displays your run-time environment variables based on dotenv

## Installation
```bash
npm install dotenv-display
````

##Usage
In order to display your runtime environemnt variables make sure to call displayEnv after creating your configuration from dotenv.
Here is some code smaple:

```bash
import {config} from "dotenv";
import * as path from "path"
import {displayEnv} from "./envDisplay";
``````

```bash
let configPath = path.join(__dirname, "./config/.env")
let env = config({path: configPath});
displayEnv(env.parsed);
```

The output will include only variables that were defined inside your .env file