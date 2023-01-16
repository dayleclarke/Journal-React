import '@testing-library/jest-dom'// to ensure you are using the correct virtual DOM
import { render, screen } from "@testing-library/react" // this was automatically added but check it is here. 
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import App from "./App"

describe('App Component', () => {
    let container

    beforeEach(function () { // cannot be an arrow function.
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container //render an instance the component to the in memory virtual DOM. 
    })
    
    it('Shows the Journal Entries Heading', () => { // Explain in English what is being tested.         
        expect(container.querySelector("h2")).toBeDefined() // true if the object has been defined. Checks that there is a h2 in the document. 
        expect(container.querySelector("h2")).toHaveTextContent('Journal Entries') // now we are checking that the content of the h2 is what is expected. Query selector on the container allows us to select the element we want in the browswer similar to a CSS query selector. GetByText can be a handy way to pick by a string of text. In the nav the nav structure (copies from bootstrapt) has nested elements without unique identifiors. QuerySelector might be hard to get the select category (probably need to use N:child) I can query it instead of using the surounding container. 
        //expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Journal Entries') // can query by role (e.g. headings) or by text content. Here it must match the exact test provided (case sensitive) 

    })

    it("Shows category selection page when Select Category is clicked", async () => { // individual tests are considered atomic (isolated from each other)       
        await userEvent.click(screen.getByText('Select Category')) // simulate the user clicking on that link. This is async and returns a promise.
        expect(container.querySelector("h2")).toBeDefined()
        expect(container.querySelector("h2")).toHaveTextContent('Please select a category for your journal entry:') //leading and trailing whitespace will be trimmed. 
    })
}) 
// It automatically reruns the tests when it is in watch mode. An empty test will pass because you haven't written any expectations. There are no expectations to fail so it would pass. It will pass by default unless something makes it fail. 