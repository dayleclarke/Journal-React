import React, { useState } from "react"
import { useParams } from "react-router-dom"

const NewEntry = ({ addEntry }) => {
  const { category } = useParams()
  const [entry, setEntry] = useState('')

  function submit(evt) {
    evt.preventDefault()
    addEntry(category, entry)
  }

  return (
    <>
      <h2>New Entry in {category} category</h2>
      <form onSubmit={submit} className="container">
        <div>
          <textarea value={entry} onChange={(evt) => setEntry(evt.target.value)} rows="10" className="form-control"></textarea>
        </div>
        <button className="btn btn-primary mt-2">Create Entry</button>
      </form>
    </>
  )
}

export default NewEntry// // A form which allows a new entry to be created. 
// import React, { useState } from "react"
// import { useParams } from "react-router-dom"

// const NewEntry = ({ addEntry }) => {
//   const { category } = useParams() // This allows us to get the category of the URI.
//   const [entry, setEntry] = useState('')
    

//   function submit(evt) { // When the form is submitted we can use that value to set the value of content in our new entry object.  We then call setEntries which we have passed in as a prop. 
//     evt.preventDefault() // To stop the browser from reloading. 
//     addEntry(category, entry) // Calls the addEntry function that was passed in as a prop. When the form is submitted it allows it to call that function pass the category and the entry. The category comes in as a parameter and the entry is a piece of local state.   
//   }
//   return (
//     <>
//       <h2>New Entry in {category} category</h2>
//       <form onSubmit={submit} className="container">
//         <div>
//         {/* here we set up a controlled element (controlled by the state). The value of the textarea comes from entry which is a piece of state. Here we are bounding our text area to the usestate we set in line 7. We set up an onChange event which calls set entry with the new value. It updates the state which then in turn updates the value. Because the value is bound to the state when the state updates the text area gets updated as well. Now we have done the two way binding. Between the HTML element and the state. That way it becomes a controlled element. If we change the text area the state will change. But it also works the other way. If the state is changed the text areas will change too. Now we have one source of truth and that's the state. We don't have to worry about reading or updating the text area directly */}
//           <textarea value={entry} onChange={(evt) => setEntry(evt.target.value)} rows="10" className="form-control"></textarea>
//         </div>
//         <button className="btn btn-primary mt-2">Create Entry</button>
//       </form>
//     </>
//   )
// }

// export default NewEntry
// //two way binding by adding value and the onChange. We need value to retrieve the value of the state and display it in the text area. We add onChange and pass it the event so that when the user changes whats in the text areas we can update the state. The two have to be synchronised. 

