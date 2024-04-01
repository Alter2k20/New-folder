# package.json

An Electron application with React

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

```jsx
  existingData = fs.readFileSync(filename)
  newData = data

  const name = newData.transactinId
  const dat1 = newData.field1
  const dat2 = newData.field2
  existingData.name = name
  existingData.name.data1 = dat1
  existingData.name.dat2 = dat2
  ```