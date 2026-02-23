1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 
 difference 1:
    getElementById takes the ID name and find the element with desired ID, 
    getElementsByClassName will take the classname and can find multiple element with same classname,
    querySelector will take any type of attribute or ID or class and get the matching element,
    querySelectorAll will take any attribute or ID or class and get multiple element with same matching attribute
 

difference 2:
    getElementById is faster, 
    getElementsByClassName slower,
    querySelector is slower than ID,
    querySelectorAll is the slowest

difference 3:
    getElementById will return element
    getElementsByClassName will return htmlcollection
    querySelector will return element
    querySelectorAll will return nodelist

2. How do you create and insert a new element into the DOM?

    To Creat a new element:
        //first use the createElement method 
        const newElement = document.createElement(tag name);
        //then give a innertext or class or attribute
        newElement.textContent = "new";
        //insert into a DOM (here in body)
        document.body.appendChild(newElement);

    

3. What is Event Bubbling? And how does it work?

    Event bubbling is a website process where an event from child element goes upward to it's parent step by step

    for example: if I have a website with this:
    <body>
        <header>
            <section>
                <div id="innerDiv">Click Me</div>
            </section>
        </header>
    </body>

    if an event occurs in <div>
    it will propogate to <section>
    then <header>
    then <body>

    this can be stopped using 
    event.stopPropagation();

4. What is Event Delegation in JavaScript? Why is it useful?

    Event Delegation is putting one event listener on a parent element and letting it handle events from its child elements using bubbling.

    it's useful when I want to save memeory and make the code clean, also it reduce the task of adding listener to everychild element

5. What is the difference between preventDefault() and stopPropagation() methods?

    preventDefault() stops the browser’s default behavior (like following a link or submitting a form)

    stopPropagation() stops the event so that it doesn't bubble to it's parent

