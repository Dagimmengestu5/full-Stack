// by using its id getElementById()


const header = document.getElementById('header')
const radiobuttons = document.getElementsByName("gender")
// console.log(header)
// console.log(radiobuttons)
const paragraph = document.getElementsByTagName('p')
// console.log(paragraph)

const specialParagraph = document.getElementsByClassName("special")
// console.log(specialParagraph)

const newSpecialParagraph = document.querySelector(".special")
const allspecialParagraph = document.querySelectorAll(".special")

// console.log(newSpecialParagraph)
// console.log(allspecialParagraph)


// const child = document.querySelector(".child")

// const parent = child.parentElement;

// console.log(child,parent)

// const parent = document.querySelector(".parent-container")
// const allChildren = parent.children;
// console.log(parent,allChildren)dsdssd


const newDiv = document.createElement("div")

const parent = document.querySelector(".parent-container")
// newDiv.textContent = "hey there am the new div"
newDiv.innerHTML = "<h1>hey there 11</h1>"
parent.appendChild(newDiv)
parent.prepend(newDiv)


const newButton = document.createElement("button")
const container = document.querySelector(".list")
newButton.textContent  = "click me"
container.appendChild(newButton)

// const newParagraph  = document.createElement('p')
// newParagraph.textContent="new paragraph"
// parent.appendChild(newParagraph)
// parent.prepend(newParagraph)

// append
// prepend
// after

// parent.after(newParagraph)

parent.insertAdjacentHTML("beforeend","<button>New paragraph</button>")
parent.insertAdjacentHTML("beforebegin","<h2>super parent</h2>")
parent.insertAdjacentHTML("afterbegin","<h3>original child</h3>")
parent.insertAdjacentHTML("afterend","<a>click here</a>")


// const inputtext = input.textContent
// p.textContext = inputtext
// parent.insertAdjacentHTML("afterbegin",`<p>${p.textcontet}</p>`)

//postions-description

// beforebegin-before the element
// afterbegin-inside the parent before the first child
// beforeend-inside,after the child
// afterend-after the element

// Replacing a child

const originalChild = document.querySelector(".original-child")
const newChild = document.createElement("p")

newChild.textContent = "New Child"
parent.replaceChild(newChild,originalChild)

const clone = parent.cloneNode(true);

parent.after(clone)


// removing a child

parent.removeChild(newChild)


const listItem = document.createElement("li")
listItem.textContent = "new item"
const firstChilde = document.querySelector(".highlight")
container.insertBefore(listItem,firstChilde)




// to create an html element we use createElement()
// to add text content we either use element.textContent or element.innerHtml
// insert it to the dom as a child we use appendChild(element)
// const newHeader = document.createElement('h1')
// newHeader = "at the top"
// parent.appendChild(newHeader)





{/* <div>
    hey there am the new div
</div> */}



// javascript Dom

// 1. what is the dom


// 2. what is nodes and types of nodes



// 3. Selecting elements using Dom
    // 1.getElementById()
    // 2.getelementsByname()
    // 3.getelementbytagname()
    // 4getelementby classname()
    //5querySelector() and querySelectorAll)()


// 4. traversing elements
        // -selecting parent element
        // -slecting child element
        // selecting sibling element

// 5.manipulating html elements

        // createElement()
        // appendChild()
        // textContent
        // innerHtml
        // after() 
        // append()
        // prepend()
        // insertAdjacentHtml()
        // replaceChild()
        // cloneNode()
        // removeChild()
        // insertBefore()

// 6.Attribute methods

    // 1.getAttribute()
    // 2.setAttribute() 
    // hasAttribute()
    // removeAttribute()

// 7.Manipulating element's Styles
    // 1.style property
    // 2.cssText
    // 3.getComputedStyle
    // 4.classList property

// 8 Javascript Events
// 1.what is event
// 2.event bubbling & event capturing
// 3.event handler in html attributes
// 4.dom level 0 event handlers
// 5. add eventListenr()
// 6. removeEventListener()
// 7.event object
// 8.different types of events xcvweweqwwewewweqwqwwwwew

