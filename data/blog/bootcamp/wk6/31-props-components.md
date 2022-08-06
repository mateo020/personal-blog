---
title: React - Props & Components
date: '2022-08-06'
tags: ['React', 'Props', 'Components']
images: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png'
draft: false
summary: Passing props to components.
---

In React, we pass data to components as props. Props are just arguments we pass to a component. Just like we can pass data to a function, we can pass data to a component.

In JSX, we pass properties to components just like we would assign **attributes** to HTML elements. Unlike HTML though, you can define your own custom properties.

## Passing Props

There are two ways to pass props to a component.

1. list each prop as a `key: value` pair.

```jsx
<MyComponent prop1="value1" prop2="value2" />
```

2. Use the spread operator (`...`) to pass all props as an object. {...{key: value}}

```jsx
const user = {
  firstName: 'Amy',
  lastName: 'Mansel',
  avatar: '/profile-hex.png',
}

;<Profile {...user} />
```

You can also do this in a destructured way, but it will have the same effect as above.

## Using Props

- All properties you pass to a component are _automatically_ stored in an object.
- The object is available as a parameter to the component.
- It is commonly referred to as `props` but can be named anything you want.

Here is an example from Tweeter that shows the `Profile` component using `props`:

```jsx
function Profile(props) {
  // props will contain an object: {firstName: "Amy", lastName: "Mansel", avatar: "/profile-hex.png"}
  const firstName = props.firstName
  const lastName = props.lastName
  const avatar = props.avatar

  return (
    <aside>
      <div className="profile">
        <img className="profile__image" src={avatar} />
      </div>
      <br />
      <div className="profile__name">
        <h2>
          <span className="profile--bold">{firstName}</span> {lastName}
        </h2>
      </div>
    </aside>
  )
}
```

- It's common for a prop to be an **entire function definition**.
- Remember **not** to call the function when it is being passed down (**no parentheses** `()`).
- Pass only the function _reference_ to the component.

```jsx
function doStuff() {
  console.log('This is the doStuff function.')
  // do stuff
}

// WRONG: doStuff is called instead of being passed as a reference!
;<Profile doStuff={doStuff()} />
```

- Instead, pass the function reference **without invoking** it (no parentheses).

```jsx
function doStuff() {
  console.log('This is the doStuff function.')
  // do stuff
}

// CORRECT: doStuff is passed as a reference!
;<Profile doStuff={doStuff} />
```

## props.children

- props have a built in property called `children`.
- `props.children` contains **anything that is inside the tags of a component**.

Example:

- Have a `<WelcomeMessageBox />` component that returns an `<div>` tag inside it.
- This `<div>` contains a bunch of styling and text.

```jsx
function WelcomeMessageBox(props) {
  return (
    <div
      style={{
        height: '30%',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        backgroundColor: 'teal',
        border: '10px solid royalblue',
        padding: '10%',
        fontSize: '2em',
        fontFamily: 'Futura',
      }}
    >
      {props.children}
    </div>
  )
}
```

Using the `<WelcomeMessageBox>` allows a programmer to grab a consistently styled component and also allows them to **put whatever they choose** as the welcome message (`props.children`).

Now over in the `<Homepage>` component we import the `<WelcomeMessageBox>` component and pass it the welcome message.

```jsx
function HomePage() {
  return <WelcomeMessageBox>Welcome</WelcomeMessageBox>
}
```

![props](https://i.imgur.com/yXdcaGb.png)

## Naming Props for Event Handlers

- There are some specific naming conventions for event handlers.
- These are used when passing functions to components that contain event handlers.

Consider the following example between a `<Parent>` and `<Child>` component:

```jsx
function Parent(){

  function doSomething() {
    console.log("Do something");
  }

    return (
      <h1>I am the parent. Here is the child.</h1>
      <Child onClick={doSomething} />
    );
  }
```

```jsx
function Child(props) {
  return <div onClick={props.onClick}>Click me!</div>
}
```

- The `onClick` property in the `<Child>` component is named `onClick` and **MUST** be named this.
  - Here it is the event listener for the `<div>` tag.
- However in the first code block, the name of the prop is also called `onClick`, however it does **NOT** need to named this. It could be named anything. It could be named anything because it is just passing information down to the child component.

This code would result in the exact same thing:

```jsx
function Parent(){

  function doSomething() {
    console.log("Do something");
  }

    return (
      <h1>I am the parent. Here is the child.</h1>
      <Child whatever={doSomething} />
    );
  }
```

```jsx
function Child(props) {
  return <div onClick={props.whatever}>Click me!</div>
}
```