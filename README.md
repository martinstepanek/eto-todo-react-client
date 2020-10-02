# Eto Todo React Client

## Getting started

### Development

```bash
npm start
```

or

```bash
yarn start
```

### Production

```bash
npm build
```

or

```bash
yarn build eto-todo-react-client
```

> See `scripts` field inside package.json for available commands

### Project structure

```
react-client
├── public // public files like index.html, favicon etc
└── src // source code of app
    ├── components // reusable components
    ├── models // models/interfaces/types used in app
    │   ├── entites // entities and response interfaces
    │   └── state // interfaces definining state of app
    ├── styles // global styles and style variables (colors, breakpoints)
    └── views // pages of app
```

- In `src/views/` is every page in separate folder

### Conventions

- Bundle redux logic into ducks (https://github.com/erikras/ducks-modular-redux)
- Use `Styled` prefix for styled 3rd party components (see `src/components/base/StyledLink`)

## Other information

### Supported viewports

- See `src/style/breakpoints.js`

```
md - 768px
xl - 1440px
```

### Used (important) libraries

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Formik](https://jaredpalmer.com/formik/)
- [Styled components](https://styled-components.com/)

### Code quality tools

- Prettier
- ESLint
- Stylelint
- Git hooks
