UI-WEB
------

UI-web is a UI library that provides the common components used in DawnLight's products.


## Installation

*IMPORTANT:* This library was designed to be integrated with the build system of the consumer application. This means that some dependencies of this package are not shipped with this library and it is expected to exist in the consumer application. This is to prevent duplicate and bloated code being shipped with the library.

### 1. Add dependencies

```
yarn add @dawnlight/ui-web @emotion/styled @emotion/react
```

**Note:** if you are developing this library, see notes below about peer dependencies in the development section below.

### 2. Import tailwind config

This ui library was built using tailwindcss. However this lib is meant to be part of another package and not an independent package.

### 2. Import styles

In the consumer app, import the styles in the application component. Make sure the consumer app bundler can understand importing CSS in JS files. In NextJS you do this in the `pages/__app.tsx`:

```tsx
import '@dawnlight/ui-web/styles.css'
```

### 3. Add font dependencies to `/public/fonts/`

This package does not distribute fonts. The following fonts must be accessible at the `/fonts` path of your application.

- DINPro-Regular.tf
- MuseoSans-300.otf
- MuseoSans_500.otf

## Usage

```tsx
import { Card } from '@dawnlight/ui-web';

const SomePage: React.FC = () => {
    return (<Card />);
}

export default SomePage;
```

## Development

To develop new components or edit existing ones follow these steps:

```bash
git clone git@github.com:dawnlight-ai-for-good/ui-web.git
cd ui-web
yarn install
yarn link
cd node_modules/react
yarn link
cd ../react-dom
yarn link
cd ../..
yarn dev
```

Then on another terminal session, for example, if you're working on `ox-web`:

```
cd ox-web
yarn install
yarn link @dawnlight/ui-web react react-dom
yarn dev
```

It symlinks this library module and its peer dependencies locally into the `node_modules` of the consumer app. The watch command will allow you to develop while webpack builds the code for other projects. Keep in mind that the watch command may not be fully complete when the consumer app reloads (like NextJS). In that case you'll have to stop the `yarn dev` command (`CTRL+C`) and run it again.

### Why do I need to symlink peer dependencies while developing?

When you symlink a package, the application you are using will likely have module resolution conflicts with peer dependencies (e.g. `react`). This is because this library may use the wrong module (the one found inside the `node_modules` of this lib folder and not the one from the consumer app). This will lead to errors because we'll be using different versions of the same module.

The easiest way to resolve this issue is to configure our consumer app to use the same peer dependencies of this package. One way to fix this is to symlink the peer dependencies too. See [this comment](https://github.com/facebook/react/issues/14257#issuecomment-595183610) for more details.

It's important to remember that this problem only happens if you are developing the lib while symlinking it in the consumer app. If you are only using the published version of the lib, it won't include peer dependencies in the `node_modules` of the lib and this problem won't happen.

## Component Gallery

To see which components are available and their usage/documentation run:

```
yarn storybook
```

## Test

```
yarn test
```