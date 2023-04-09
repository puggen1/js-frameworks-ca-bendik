# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## scripts

- ### npm start

  starts the dev mode

- ### npm build

  builds the project into an own folder

## info

### Hosted

This project is hosted on netlify: [Shop'n Go](https://shopngo.netlify.app)

### Packages used

for this project i have used a few diffrent packaged:

- [MUI](https://mui.com/) for some components, easy modal and icons
- [Redux toolKit](https://redux-toolkit.js.org/) for shopping cart features
- [yup](https://www.npmjs.com/package/yup) for validation and error messages for form
- [React Hook form](https://react-hook-form.com/) in combination with yup to create the form
- [Styled components](https://styled-components.com/) to modify the diffrent components
- [React router](https://reactrouter.com/en/main) to navigate the page in diffrent ways

### folder construction

some components have subfolders with more components, that are related, example: Products have singleproduct and product(card)

inside the theme folder i a small theme.js file, that holds the basic theme for MUI. There is also an style.css with some global css rules.

utils have some usefull functions and constants, some of them are used multiple places, and some is stored there to make components more clean.
