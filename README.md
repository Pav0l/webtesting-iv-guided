# Web Testing IV Guided Project

Guided project for **Web Testing IV** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `yarn` or `npm i` to download dependencies.
- [ ] type `yarn server` or `npm run server` to start the API.

Please follow along as the instructor add automated tests to the API.

# Lecture notes

Before starting the tests, we need to specify a NodeJS environment for Jest. So Jest doesn't use window object.

Run:

```
npx jest --init
```

Answer the following questions:

```
The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... no  // we already have a test script set up
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... no
√ Automatically clear mock calls and instances between every test? ... no
```

A `jest.config.js` file is created, where you can config your Jest tests.

Test script in `package.json` the `cross-env` is a library that allows you to inject environmental variable in our tests. Based on this env variable, you setup the config file for your database - [see here](data/dbConfig.js)

```
"scripts": {
    "test": "cross-env DB_ENV=testing jest --watch --verbose"
  },
```

In case you delete your testing DB, you can get it back with `knex migrate:latest` command, but you need to flag it as `testing` env variable, so the migration knows which DB you want to migrate to. Without the env variable, it would migrate only to 'development' database.

```
npx knex migrate:latest --env=testing
```
