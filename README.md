# TSDX React w/ Storybook

This project was created to study npm publish with github workflows

## Commands

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

### GitHub Actions

- `publish` create a new release and publish a new version in npm
