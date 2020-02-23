# react-from-scratch-starter

> A skeleton for creating a React app from scratch.

This repo is for people new (or not) to creating React repositories without create-react-app.
This project is for people who:

- want to create their own webpack config, but never really knew how to start.
- want to use tools like Babel, ESLint, and Prettier with custom config instead of it being baked in behind the scenes.
- want to learn React at a deeper level without the hand-holding that create-react-app provides.

_Note_: All config settings (`.babelrc`, `.eslintrc`, `.prettierrc` files) are based on Jacob D. Castro's preferences. Feel free to edit them to your liking!

## Setting Up

1. Download (clone) the repository onto your local machine and rename the project folder to whatever you want.

```
git clone https://github.com/jacobdcastro/react-from-scratch-starter.git [project-name]
```

2. Change into the newly created directory run a 'git reset' script. This clears out all git history and allows you to start fresh.

```
rm -rf .git && git init
```

3. Install the two webpack cli's needed to run webpack in the `npm run` scripts. _Note_: These are both global installs.

```
npm install -g webpack webpack-dev-server
```

Optionally: if you plan to use prettier with the project, you may globally install the prettier cli to be able to use the `npm run format` script.

```
npm install -g prettier
```

4. Install all of the packages the project requires.

```
npm install
```
