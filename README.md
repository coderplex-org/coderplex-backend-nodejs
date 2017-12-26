# coderplex-backend

> Coderplex.org API server

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. Install your dependencies at the root of the repository

   ```bash
   $ yarn
   ```

1. Rename `.env.sample` to `.env`

   ```bash
   $ mv .env.sample .env
   ```

1. Get GitHub And LinkedIn OAUTH `client_id` and `client_secret`

   * Follow [this guide for github](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/) and [this guide for linkedin](https://developer.linkedin.com/docs/oauth2)
   * Use these as Authorization callback URL while registering
     * For Github `http://localhost:4000/auth/github/callback`
     * For LinkedIn `http://localhost:4000/auth/linkedin/callback`
   * And finally assign `client_id` and `client_secret` of each in `.env` file

1. Install Mongodb Community Edition. And follow instruction to an instance of mongodb in another terminal.
1. Start your app with
   ```bash
   $ yarn start
   ```

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```bash
# Install Feathers CLI
$ npm install -g feathers-cli

# Generate a new Service
$ feathers generate service

# Generate a new Hook
$ feathers generate hook

# Generate a new Model
$ feathers generate model

# Show all commands
$ feathers help
```

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
