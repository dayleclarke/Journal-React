import React from 'react'
import { Link } from 'react-router-dom'
// We are going to pass through the entries to our home component. Now home needs to know about entries. It needs to iterate over the entries so we will need to pass it as a parameter. This means we will end up with a variable called entries which will have the value that got passed in through App (the current value of State).  If the state changes it will trigger a rerender of the home component.  A render is triggered if a state or prop changes. 
const Home = ({ entries }) => { // In home we recieve the entries and immediately return some JSX. Whenever you are working in JSX if you need a JavaScript expression to be embedded somewhere you use and open and close curly braces. 
  return ( // here we will iterate over each of the entries. With each entry and its index we are going to map that to a block of JSX. What we end up with is a new array, each element of which is a block of JSX. For each entry a paragraph is created with a key set to index.  They need this unique identifier so that if there are changes made to an entry it only needs to update that entry. Without the key it would need to rerender the entire list. Within the paragraph there is a link component.  It will map to a link with a template string to construct the correct URI for each entry entry/id. Then in the text we put the entry itself. The entry content will be displayed. I need to use the link component rather than an acher <a> tag because the default behaviour for a web browser is to refreshs the whole page when an acher tag is clicked. These extra network requests reduce performance and lead to a poor user experience (there is a moment were the page is blank when it reloads). We only want it to rerender the specific component not the entire page. This creates a fast, responsive user experience.    
    <>
      <h2>Journal Entries</h2>
      {/* links by default are inline so we wrap each link in a pargraph. */}
      <p>The following journal entries have been written by Dayle Clarke in 2023:</p>
      {entries.map((entry, index) => (
      <p key={index}>
        <Link to={`entry/${index}`}>{entry.content}</Link>
      </p>
    ))}
    </>
  )
}
// As new entires as added through the new entries component they are dynamically added to the home page. 
export default Home