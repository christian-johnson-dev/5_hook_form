# Core Assignment "Hook Form"

This is Christian Johnson's work for Coding Dojo's Part-Time Accelerated MERN Stack.
It was submitted on April 11, 2023.

## Assignment description

This is a basic React component that renders a form with input fields for first name, last name, email, password, and confirm password. The component uses the useState hook to manage state for each input field. As the user types into each input field, the corresponding state value is updated with the new value. The respective state values are displayed below the form with each trigger of React's `onChange` event handler.

<hr>

## Additional Embeleshments

If an input field has no value, its corresponding list item is not rendered. My solution checks if an input field has a value and only displays its corresponding list item if it does. To achieve this, variables are created to display the label and respective `useState` variables in an `<li>` tag. If the length of the original `useState` variable is less than 1, the display variable is set to `null`.

```
  let firstNameDisplay;
  if (firstName.length > 0) {
    firstNameDisplay = <li> First Name: {firstName} </li>;
  } else {
    firstNameDisplay = null;
  }
```

...and on through the lastName, email and password values.

The JSX in the `return` statement reads:

```<h2>Your form data</>
    <ul>
      {firstNameDisplay}
      {lastNameDisplay}
      {emailDisplay}
      {password1Display}
      {password2Display}
    </ul>
```

There must be a way to simplify five separate declarations of display variables into one since they all followed the same logic. Being stumpped, a querry to chatGPT suggested the following helper function:

```const generateDisplayString = (label, value) => {
    if (value.length > 0) {
      return <li>{label}: {value}</li>;
    } else {
      return null;
    }
  }
```

and updating the unordered list to:

```<h2>Your form data</h2>
          <ul>
            {generateDisplayString('First Name', firstName)}
            {generateDisplayString('Last Name', lastName)}
            {generateDisplayString('Email', email)}
            {generateDisplayString('Password', password1)}
            {generateDisplayString('Confirm Password', password2)}
          </ul>
```
