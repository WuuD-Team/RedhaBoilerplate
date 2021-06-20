<p align="center">
  <h1 align="center">
    <b align="center">React Native TypeScript Boilerplate </b>
    </br>
    <b align="center">by The WuuD Team® </b>
  </h1>
</p>

<p align="center">
		<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/WuuD-Team/RedhaBoilerplate?style=flat&color=blueviolet&logo=GitHub&label=Version">
		<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/WuuD-Team/RedhaBoilerplate/react-native?style=flat&logo=React&label=React Native">
		<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/WuuD-Team/RedhaBoilerplate?style=flat&color=ff69b4&label=Last%20Commit">
		<img alt="Pull Request" src="https://img.shields.io/github/issues-pr/WuuD-Team/RedhaBoilerplate?label=Pull%20Request">
	</br>
		<img alt="Website" src="https://img.shields.io/website?down_color=critical&down_message=down&style=flat&logo=internet&up_color=green&up_message=up&url=https%3A%2F%2Fwuud-team.com%2F">
	<img src="https://api.netlify.com/api/v1/badges/1a8f2e27-e68c-4421-af8a-9f010a5faefb/deploy-status" />
	<img alt="GitHub stars" src="https://img.shields.io/github/stars/WuuD-Team/RedhaBoilerplate?style=social">
  <img alt="Platforms" src="https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=flat&color=critical&logo=Apple&label=Platform">
</p>

<p align="center">
	<a href="https://wuud-team.com/">
		<img src="https://i.imgur.com/z1OlxET.jpg" alt="wuud team cover">
	</a>
</p>

</br>

# 🚀 Installation

You can simply clone the project and start with your new awesome project

```sh
git clone git@github.com:WuuD-Team/RedhaBoilerplate.git my-app-name
```

## Android local.properties

- Go to `Android -> local.properties`
- Change the your local android sdk and cmake path

# 🎁 What's Included?

- **Navigation System**
  - React Navigation V5
  - React Navigation Helpers
  - Ready to use Stack and Tab Screens with navigation
- **Built-in Theme System**
  - Colors
  - Fonts
  - Built-in TextWrapper for better Custom Text usage
- **Built-in Animated Splash Screen**
- **Built-in Localization (Multi-Language Support)**
- **HTTP Network Management**
  - Axios
  - API Service with Usage Examples
- **Built-in EventEmitter**
  - EventBus
- **Built-in Local Storage asa MMKV Storage**
  - LocalStorage (Instead of AsyncStorage)
- **Local Storage Ready to Use Util Functions**
- **Babel Plugin Module Resolver**
  - Fixing the relative path problem
  - Visit `.babelrc` to ready to use and more customization
- **Built-in Custom Font Implementation**
  - All you need to do is copy-paste the .tff file and run `npx react-native-asset` command

## 🏗 Project Structure

```
├───android
├───ios
├───src
│   ├───screens
│   │   ├───detail
│   │   │   ├───DetailScreen.style.ts
│   │   │   └───DetailScreen.tsx
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   └───HomeScreen.tsx
│   │   └───search
│   │       ├───SearchScreen.style.ts
│   │       └───SearchScreen.tsx
│   ├───services
│   │   ├───api
│   │   │   ├───api.constant.ts
│   │   │   └───index.ts
│   │   ├───event-emitter
│   │   │   └───index.ts
│   │   ├───models
│   │   │   └───index.ts
│   │   └───navigation
│   │       └───index.tsx
│   ├───shared
│   │   ├───components
│   │   │   └───text-wrapper
│   │   ├───constants
│   │   │   └───index.ts
│   │   ├───localization
│   │   │   └───index.ts
│   │   └───theme
│   │       ├───fonts
│   │       ├───colors.ts
│   │       ├───font-size.ts
│   │       ├───index.ts
│   │       └───theme.ts
│   └───utils
│       ├───local-storage
│       │   └───index.ts
│       └───index.ts
├───.babelrc
├───.buckconfig
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierrc.js
├───.watchmanconfig
├───App.tsx
├───README.md
├───app.json
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───tsconfig.json
```

# 🗃 Components

## 🎨 Styles

- **TextWrapper** over default Text component
- Colors
- Fonts
- Theme
- Font Size

## 🚢 Imports

Predefined **`h`** tags are usable with TextWrapper

```jsx
import Text from "@shared-components/text-wrapper/Text";

// ? Advanced Usage Example
<Text h3 bold right color="#913400" numberOfLines={1} style={{ margin: 16 }}>
  Heading 3 Bold Right Sided Custom Text
</Text>;
```

```jsx
import colors from "@colors";

<Text h1 color={colors.light.primary}>
  Heading 1 with custom color from theme
</Text>;
```

```jsx
import fonts from "@fonts";

<Text h5 fontFamily={fonts.helvetica.regular}>
  Heading 1 with custom font usage
</Text>;
```

```jsx
import fontSize from "@font-size";
```

```jsx
import theme from "@theme";
```

if you want to call them all at once

```js
import { theme, fonts, colors, spacing, fontSize } from "@shared-styles/index";
```

# 🧭 Step By Step Guide

## 🧼 Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

- `rm -rf .git README.md`
- `git init`
- `yarn || npm i`
- `npx pod-install` (iOS Only)
- `yarn start`
- `yarn ios || yarn android`

**OR**

- `npm i && npx pod-install`
- `yarn start`
- `yarn ios || yarn android`

## 🏷 Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

###  Install Pods (iOS Only)

- `yarn || npm i`
- `cd ios && pod install`
- `yarn start`
- `yarn ios || yarn android`

### 🤖 Android local.properties (Android Only)

- `yarn || npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

#### 💻 Example of MacOS Android SDK Path

Make sure that set your right path of Android SDK

```
ndk.dir=/Users/your-name/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/your-name/Library/Android/sdk
```

- `cd .. && yarn start && yarn android`

</br>
</br>

# 💪 Dev Team

<table align="center">
<tbody>
  <tr border-radius="50%">
    <td align="center" valign="top" width="11%" border-radius="50%">
      <a href="https://github.com/badjio">
        <img
          alt="Backend Developer"
          src="https://avatars2.githubusercontent.com/u/15873766?s=400&v=4"
          style="border-radius:50%"
          width="100"
          height="100"
        />
        <br />
        <br />
        <b>Moh Badjah</b>
        <br />
      </a>
	Lead Backend Developer
    </td>
    <td align="center" valign="top" width="11%">
      <a href="https://github.com/na6im">
        <img
          alt="Web Developer"
          src="https://avatars1.githubusercontent.com/u/38627023?s=400&v=4"
          style="border-radius: 50px"
          width="100"
          height="100"
        />
        <br />
        <br />
        <b>Nassim Amokrane</b>
        <br />
      </a>
      	Lead Web Developer
    </td>
    <td align="center" valign="top" width="11%">
      <a href="https://github.com/MedRedha">
        <img
          alt="Mobile Developer"
          src="https://github.com/medredha.png?s=75"
          style="border-radius: 50%"
          width="100"
          height="100"
        />
        <br />
        <br />
        <b>Med Redha</b>
        <br />
      </a>
      	Lead Mobile Developer
    </td>
  </tr>
</tbody>
</table>

</br>
</br>

## 👨‍⚖️ License

The code is available under the [MIT](https://github.com/WuuD-Team/RedhaBoilerplate/blob/main/LICENSE) license.

</br>

<h3 align="center">
  <b align="center">
  Made with 💖 by the
    <a href="https://wuud-team.com/">
      WuuD Team® - In Code We Trust -
    </a>
  </b>
</h3>
