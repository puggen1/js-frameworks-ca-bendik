# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## table of content

  - [Scripts](#scripts)
  - [replicate project](#replicate-project)
  - [Info](#info)
    - [Hosted](#hosted)
    - [Packages used](#packages-used)
    - [Folder construction](#folder-construction)
    - [Redix](#redux)
    - [Session storage](#session-storage)
    - [Context](#context)
    - [Form](#form)
    - [Styling](#styling)
    - [Design](#design)
    - [Public Folder](#public-folder)

## scripts

- ### npm start

  starts the dev mode

- ### npm build

  builds the project into an own folder

## replicate project

use the following commands to replicate this project:

```
npm install
npm start
```

this will give you a copy of the project that is ready to be used / edited.

## info

### Hosted

This project is hosted on netlify: [Shop'n Go](https://shopngo.netlify.app)

### Packages used

for this project i have used a few diffrent packages:

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

in public I have added some icons for mobile and some text.

### redux

I have used redux to store the content of the shopping cart, and number of items in shopping cart.
my redux code also have commands for adding and removing items.

### session storage

the redux store will try to get data from session storage, if you have a session. if not it will create a new shopping cart for you. i have used a simple redux middleware to update session storage every time the cart is updated.

### context

all products are in an context, that is fetched once. so if you click onto a single product, you dont need to fetch again.

there is also a context for modal, that checks if the screen width is a certain size or not, as well as if the modal is avalible or not.

### form

the form is made with react hook form, and yup for validation. the form is also responsive, and will change the layout depending on screen size.

### styling

I have used styled components for most of the style, but some places there is a combination of styled components and classes inside the components. With media queries to change how it looks on diffrent sizes.

### design

i have tried to make the design fit all diffrent product content, and responsive. some parts might look a bit off, mostly because of image size.


### public folder
I have changed some of the pictures in the public folder, and changed the manifest to use these changes.



