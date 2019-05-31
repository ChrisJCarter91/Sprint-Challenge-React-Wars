# Answers

1.  What is React JS and what problems does it try and solve?

React uses a virtual DOM and renders this vs the actual DOM. Dom manipulation is expensive and React makes it so only the updated elements are rendered.

1.  What does it mean to _think_ in react?

Think about things in terms of elements and what each element needs. Example: header, thumbnail, footer, etc. Which of these will need to be updated and which will remain constant? Think of the things on a facebook page that stay static while the posts and things change. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are more simple and take a single parameter or props object and returns a component that is then rendered by React.

Class components are more complex. Needs a render() and can have more than 1 props object. Can have state.

1.  Describe state.

Controlled by the component. Object that stores a component's dynamic data and determines the component's behaviour. 

Can only be used in a class component. 

1.  Describe props.

A prop is an object that holds information to control the behaviour of the particular component. Immutable. Short for Properties.

Trigger "state" changes.