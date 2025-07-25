# DOM & Style Manipulation with JavaScript: Step-by-Step Learning Guide

Welcome! This guide will help you learn how to manipulate the DOM and styles using JavaScript. Follow each step, try the examples, and complete the exercises and challenges.

---

## 1. What is the DOM?

- **DOM** stands for **Document Object Model**.
- It is a tree-like structure representing the content of a web page.
- Each element (like `<div>`, `<p>`, `<button>`) is a node in this tree.

**Example:**
```html
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>
```

The DOM for this HTML looks like:
- `document`
  - `html`
    - `body`
      - `h1`
      - `p`

---

## 2. JavaScript and the DOM

- JavaScript can access and change the DOM using the `document` object.
- The DOM is an object, and each element is an object with properties and methods.

**Example:**
```js
console.log(document.body); // Logs the <body> element
```

---

## 3. Selecting DOM Elements

There are several ways to select elements. Here are examples for selecting the `<h1>` in `index.html`:

### a) By ID
First, add an ID to your `<h1>` in `index.html`:
```html
<h1 id="main-title">DOM & Style Manipulation with JavaScript</h1>
```
Then select it in JavaScript:
```js
const h1ById = document.getElementById('main-title');
console.log(h1ById);
```

### b) By Class Name
Add a class to your `<h1>`:
```html
<h1 class="title">DOM & Style Manipulation with JavaScript</h1>
```
Select it:
```js
const h1ByClass = document.getElementsByClassName('title')[0];
console.log(h1ByClass);
```

### c) By Tag Name
```js
const h1ByTag = document.getElementsByTagName('h1')[0];
console.log(h1ByTag);
```

### d) By Query Selector
```js
const h1ByQuery = document.querySelector('h1'); // First <h1>
console.log(h1ByQuery);

const h1ByClassQuery = document.querySelector('.title'); // By class
console.log(h1ByClassQuery);

const h1ByIdQuery = document.querySelector('#main-title'); // By ID
console.log(h1ByIdQuery);
```

### e) By Query Selector All
```js
const allH1s = document.querySelectorAll('h1');
allH1s.forEach(el => console.log(el));
```

**Exercise 1:**
- Try selecting the `<h1>` in `index.html` using each method above in your browser console.

---

## 4. Manipulating Styles (Expanded)

You can change the style of elements using JavaScript in several ways. Here are some common techniques and examples:

### a) Inline Styles via JavaScript
Directly set style properties on elements.

**Example: Change background and text color**
```html
<h2 id="myHeading">Style Me!</h2>
<button id="styleBtn">Change Style</button>
```
```js
const heading = document.getElementById('myHeading');
const styleBtn = document.getElementById('styleBtn');
styleBtn.addEventListener('click', function() {
  heading.style.backgroundColor = 'navy';
  heading.style.color = 'white';
  heading.style.padding = '10px';
  heading.style.borderRadius = '8px';
});
```

### b) Changing Font, Size, and Borders
```html
<p id="fontDemo">Watch my font and border change!</p>
<button id="fontBtn">Change Font & Border</button>
```
```js
const fontDemo = document.getElementById('fontDemo');
const fontBtn = document.getElementById('fontBtn');
fontBtn.addEventListener('click', function() {
  fontDemo.style.fontFamily = 'Courier New, monospace';
  fontDemo.style.fontSize = '1.5rem';
  fontDemo.style.border = '2px dashed orange';
  fontDemo.style.margin = '10px 0';
});
```

### c) Toggling Classes
Use CSS classes for styles and toggle them with JS.

```html
<div id="toggleBox">Toggle my style!</div>
<button id="toggleBtn">Toggle Class</button>
<style>
  .highlight {
    background: gold;
    color: #333;
    font-weight: bold;
    box-shadow: 0 2px 8px #ffd70055;
  }
</style>
```
```js
const toggleBox = document.getElementById('toggleBox');
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', function() {
  toggleBox.classList.toggle('highlight');
});
```

### d) Adding and Removing Classes
```js
toggleBox.classList.add('highlight'); // Add class
// ...
toggleBox.classList.remove('highlight'); // Remove class
```

### e) Using CSS Variables (Custom Properties)
You can define CSS variables and update them with JS.

```html
<div id="varBox">Styled with CSS variable</div>
<button id="varBtn">Change Variable</button>
<style>
  :root {
    --main-bg: #e0e0e0;
    --main-color: #222;
  }
  #varBox {
    background: var(--main-bg);
    color: var(--main-color);
    padding: 1rem;
    border-radius: 6px;
    margin: 1rem 0;
  }
</style>
```
```js
const varBox = document.getElementById('varBox');
const varBtn = document.getElementById('varBtn');
varBtn.addEventListener('click', function() {
  document.documentElement.style.setProperty('--main-bg', '#4a90e2');
  document.documentElement.style.setProperty('--main-color', '#fff');
});
```

### f) Changing Display and Visibility
```html
<div id="hideMe">You can hide me!</div>
<button id="hideBtn">Hide/Show</button>
```
```js
const hideMe = document.getElementById('hideMe');
const hideBtn = document.getElementById('hideBtn');
hideBtn.addEventListener('click', function() {
  if (hideMe.style.display === 'none') {
    hideMe.style.display = 'block';
  } else {
    hideMe.style.display = 'none';
  }
});
```

### g) Setting Multiple Styles at Once
You can set several styles at once using the `style.cssText` property:
```js
heading.style.cssText = 'background: teal; color: white; padding: 1rem; border-radius: 10px;';
```

---

**Exercise 2:**
- Change the color of the `<h1>` to red using JavaScript.
- Add a button that toggles a highlight class on a paragraph.
- Add a button that changes a CSS variable and updates the style of an element.

**Challenge 1:**
- Write a function that changes the background color of the page to a random color when a button is clicked.
- Create a button that hides and shows a div using the display property.

---

## 5. Creating and Adding Elements (Multiple Ways)

You can create new elements and add them to the DOM in several ways:

### a) Using `appendChild`
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
document.body.appendChild(newDiv); // Adds as the last child of <body>
```

### b) Using `insertBefore`
```js
const newP = document.createElement('p');
newP.textContent = 'Inserted before content!';
const contentDiv = document.getElementById('content');
document.body.insertBefore(newP, contentDiv); // Inserts before #content
```

### c) Using `insertAdjacentElement`
```js
const newSpan = document.createElement('span');
newSpan.textContent = 'I am adjacent!';
contentDiv.insertAdjacentElement('beforebegin', newSpan); // Before #content
```

### d) Using `insertAdjacentHTML`
```js
contentDiv.insertAdjacentHTML('afterbegin', '<strong>Inserted with HTML!</strong>'); // Inside #content, at the start
```

### e) Using `innerHTML`
```js
contentDiv.innerHTML += '<em>Appended with innerHTML!</em>';
```

### f) Inserting inside another element
```js
const innerDiv = document.createElement('div');
innerDiv.textContent = 'I am inside content!';
contentDiv.appendChild(innerDiv); // Adds as last child of #content
```

### g) Inserting before or after an element
```js
const beforeDiv = document.createElement('div');
beforeDiv.textContent = 'Before content!';
contentDiv.parentNode.insertBefore(beforeDiv, contentDiv); // Before #content

const afterDiv = document.createElement('div');
afterDiv.textContent = 'After content!';
contentDiv.insertAdjacentElement('afterend', afterDiv); // After #content
```

**Exercise 3:**
- Create a new `<p>` element with some text and add it to the `#content` div using two different methods.

**Challenge 2:**
- Create a list (`<ul>`) and add three items to it using JavaScript, using at least two different insertion methods.

---

## 6. Events and Event Listeners (Expanded)

Events are actions like clicks, mouse movements, key presses, and more. You can respond to them using event listeners. Here are some common event types and how to handle them:

### a) Click Events

**Example:**
```js
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('Button clicked!');
});
```

**Manipulating Styles on Click:**
```js
btn.addEventListener('click', function() {
  btn.style.backgroundColor = 'green';
  btn.textContent = 'Clicked!';
});
```

### b) Mouse Events
- `mouseover`, `mouseout`, `mousedown`, `mouseup`

**Example:**
```js
btn.addEventListener('mouseover', function() {
  btn.style.backgroundColor = 'orange';
});
btn.addEventListener('mouseout', function() {
  btn.style.backgroundColor = '';
});
```

### c) Input Events
- For `<input>`, `<textarea>`, etc.
- `input` fires on every change, `change` fires when focus is lost after a change.

**Example:**
```js
const input = document.querySelector('input');
input.addEventListener('input', function() {
  console.log('Current value:', input.value);
});
```

### d) Change Events
**Example:**
```js
const select = document.querySelector('select');
select.addEventListener('change', function() {
  alert('Selected: ' + select.value);
});
```

### e) Keyboard Events
- `keydown`, `keyup`, `keypress`

**Example:**
```js
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});
```

### f) Form Submit Events
**Example:**
```js
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents page reload
  alert('Form submitted!');
});
```

---

### Different Types of Buttons
- `<button type="button">` — Default, triggers JS events
- `<button type="submit">` — Submits a form
- `<button type="reset">` — Resets form fields

**Example:**
```html
<form id="myForm">
  <input type="text" id="myInput">
  <button type="button" id="logBtn">Log Value</button>
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```
```js
const logBtn = document.getElementById('logBtn');
const myInput = document.getElementById('myInput');
logBtn.addEventListener('click', function() {
  alert('Input value: ' + myInput.value);
});
```

---

### Manipulating Styles Based on Events

**Example:**
Change the background color of a div when an input value changes:
```js
const colorInput = document.createElement('input');
colorInput.type = 'color';
document.body.appendChild(colorInput);

const box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.background = '#ccc';
document.body.appendChild(box);

colorInput.addEventListener('input', function() {
  box.style.background = colorInput.value;
});
```

---

**Exercise 4:**
- Add a button to the page that shows an alert when clicked.
- Add an input and a button. When the button is clicked, display the input's value in a new paragraph below.
- Add a color input and a div. Change the div's background color as the color input changes.

**Challenge 3:**
- Add a form with a text input and a submit button. When submitted, add the input value as a new item in a list below the form, and clear the input.

---

## 7. Putting It All Together

Try combining what you've learned:
- Select elements
- Change their styles
- Create new elements
- Add event listeners

**Final Challenge:**
- Build a simple interactive to-do list: add tasks, mark them as done, and remove them.

---

Happy learning! Practice each step and experiment with your own ideas. 