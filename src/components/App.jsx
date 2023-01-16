import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import CategorySelection from "./CategorySelection"
import Home from "./Home"
import NewEntry from "./NewEntry"
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import ShowEntry from "./ShowEntry"

// const seedEntries = [
//   { category: "Food", content: "Pizza is awesome!" },
//   { category: "Work", content: "Another day, another dollar" },
//   { category: "Coding", content: "React is cool!" },
// ]

const App = () => {
  const [entries, setEntries] = useState([])
  const nav = useNavigate()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getCategories() {
      const res = await fetch("http://journal-api-production-10b7.up.railway.app/categories")
      const data = await res.json()
      setCategories(data)
    }
    getCategories()
  }, [])

  // Only on mount
  useEffect(() => {
    async function fetchEntries() {
      const res = await fetch("http://journal-api-production-10b7.up.railway.app/entries")
      const data = await res.json()
      setEntries(data)
    }
    fetchEntries()
  }, [])

  // HOC (higher-order component)
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const the_entry = entries[id]
    return the_entry ? <ShowEntry entry={the_entry} /> : <h4>Entry not found!</h4>
  }

  const addEntry = async (category, content) => {
    const id = entries.length
    // const categoryObject = categories.find((cat) => cat.name === category)
    // Add a new entry
    const newEntry = {
      category: category,
      content: content,
    }
    // Post new entry to API
    const returnedEntry = await fetch("http://journal-api-production-10b7.up.railway.app/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry)
    })
    const data = await returnedEntry.json()
    setEntries([...entries, data])
    nav(`/entry/${id}`)
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home entries={entries} />} />
        <Route path="/category" element={<CategorySelection categories={categories} />} />
        <Route path="/entry/:id" element={<ShowEntryWrapper />} />
        <Route path="/entry/new/:category" element={<NewEntry addEntry={addEntry} />} />
        <Route path="*" element={<h4>Page not found!</h4>} />
      </Routes>
    </>
  )
}

export default App// import React, { useState, useEffect } from 'react' 
// import CategorySelection from './CategorySelection'
// import Home from './Home'
// import NewEntry from './NewEntry'
// import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
// import Navbar from './Navbar'
// import ShowEntry from './ShowEntry'

 
// // const seedEntries = [ // here we have hard-coded an array of seed entries so that we don't need to keep adding new entries each time. 
// //   { category: 'Food', content: 'Pizza is delicious and a fantastic was to use up left over veggies!'}, 
// //   { category: 'Work', content: 'I am excited to transition into a new career in web development.'},
// //   { category: 'Coding', content: 'React is an excellent front end framework that is extremely powerful and popular in the industry.'}
// // ]
// const App = () => { // Here we are declaring the component itself. The only thing that distinguished a react component from a vanilla JavaScript function is that it returns JSX. Also the naming convention is in PascalCase.  
//   //Now we set up state with useState. This is a "hook". It hooks into (or intercepts) part of the life cycle of the component.  In memory it creates one piece of state. It is a special variable that react can track so that it knows when it has been changed so it can update the DOM accordingly. When we call useState to create a new piece of trackable state we can optinally pass in an inital value of the state(if it is blank the inital value will be undefined). Here I am setting the intial state to be the array defined in the seedEntries variable declared above. Once it has created that and allocated it in memory and set the initial value it returns an array. The array has 2 elements. The first element is similar to a getter (it gets the current value at the point in time when you reference it). Whenever you refer to entries it will return its current value at that point in time.  The second value can be thought of as a "setter" it allow us to change of update the state with a new value and because we use a setter function it can tell react it has changed. Ract can then respond to that and update the DOM. Here I have desctured it to pull out those two elements from the array and giving them semantic names and setting them to two seperate variables.
          
//   const [entries, setEntries] = useState([]) // this is an array that will return a list of journal entries. We added useState to app as it is the closest parent component to both home and new. Both the home and new routes will need access to entries. We will pass it the list of seedEntries so that we have some representative data to work with. 
//   const nav = useNavigate() // useNavigate will return an object called nav. We can use that to programmatically naviage around our app.
//   const [categories, setCategories] = useState([]) // set up a state to hold our categories. We also have a setter (setCategories) in case we need to change that if need be. Initially we pass it a hard coded array. Later on this will come from a dynamic source but to sepeate concerns we start with hard coded values. Later on I would want to add functionality that would allow administators to add and remove categories. In most cases when you need a set of sample elements three is enough to test in most cases to test initially). UseState can store any data type e.g. an array, object ect. It doesn't need to be a primative type. A piece of state can even be a function that changes depending on what the user does. We pass it hard coded categories to a list to start with. 

//   useEffect(() => {
//       async function getCategories() { // This allows us to have an async function that isn't our callback. The callback itself can't be asyn otherwise it will return a promise which breaks the app. 
//           const res = await fetch("http://journal-api-production-10b7.up.railway.app/categories")
//           const data = await res.json()
//       setCategories(data)
//       }
//       getCategories()
//   }, [])

//   //We want to add a useEffect and pass it an empty array for the dependencies. We can garantee that the component has finished initalising and it attached to the DOM. UseEffect only fires after it has mounted which is why it is considered best practice. UseEffect is asynchronous (it doesn't need to finish before it continues).  The first parameter is a callback function

//   useEffect(() => {
//     async function fetchEntries() {
//       const res = await fetch("http://journal-api-production-10b7.up.railway.app/entries")
//       const data = await res.json()
//       setEntries(data)
//     }
//     fetchEntries()
//   }, [])
//   // useEffect(async () => {
//   //   const res = await fetch('http://journal-api-production-10b7.up.railway.app/entries') // here we are fetching the entries end point from the API. 
//   //   const data = await res.json() // parse the JSON response
//   //   setEntries(data) // update the set entries.
//   // }, []) // the second parameter is a dependncy list. Every useEffect will happen at least once and that's on mount. What the array controls is when and if that happens after mount. If there is a dependeny listed then it will trigger the effect if the dependent element changes. Because it is an array there can be multiple items added here such as a state and/or prop. An empty array means it will only trigger on mount (as it has no dependancies to trigger the effect).   

  

//   //HOC Higher Order Component (if we wanted this could be declared in a sepeate module and imported particularly if we wanted to use it in more than one place. Here we have wrapped the exsisting component (show entry) that we don't want to change but we want some additional functionality to happen before showEntry gets rendered. It wraps the component we actually want In and allows us to do the additional functionality we need before it is rendered. This wrapper allows us to extract the id and extract the entry. This simplifies that ShowEntry component and makes it reusabke. A HOC allows us to avoid modifying the component itself allowing it to be remain reusable. We needed the wrapper (rather than doing it directly in the return statement) because we needed to get the ID from the URI and then retrieve the entry with that ID. We had work that needed to be done before we could render the ShowEntry component.  If ever you need to do some work before rendering a component its a good candidate for creating a HOC. 
//   const ShowEntryWrapper = () => { // we are creating a child component here that accepts nothing ().  An instance of this component is then provided in the routes listed below. 
//     const { id } = useParams() //useParams will return an object that contains any parameters that have come in through the URL in this case the ID. We then abstract out the ID from there. 
//     const the_entry = entries[id] // here I look up the appropriate element in the entries array. I then set it to a variable called the_entry.
//     return the_entry ? <ShowEntry entry={the_entry} /> : <h4>Entry not found!</h4> // Error checking. If the_entry is truthy (a valid entry) it will return a show entry component and we pass in the entry that we want it to show. Otherwise, if it is falsy it will display an error message. 
//   }
  
//   const addEntry = async (category, content) => { // This will take care of adding the new entry to the array. Now new entry is decoupled from our data representation.  It doesn't need to have any knowledge of how the data is stored. All it needs to know about is the add entry function and it can call that and pass in the category name and the entry. We have limited the knowledge it requires. This means that if we change how the data is stored later (such as on on the back-end through an API) newEntry doesn't need to be rewritten all we need to do it change the addEntry function and as long as it accepts the same 2 parameters the newEntry component will be none the wiser. We want to make parts as ignorant of others as possible so we can then change them without affecting the entire system.   
//     const id = entries.length // an array index. If I add a new entry the index of that new entry will be the original length of the array. I have access to the enries array. If I have an array of 3 items it will be the length of 3. The index of those items is 0, 1 and 2. Therefore the new item (the 4th element) must be at index 3 which is the length of the original array. I need to do this before the new item is added.
//     //const categoryObject = categories.find(cat => cat.name === category) // categories is found the categories component which is a child.  Find iterates over the provided array and calls a callback function for each element passing in each element and it returns true if the passed in element is one we are looking for. 
//     // Add a new entry
//     const newEntry = {
//       category: category,
//       content: content
//     }
//     // Post new entry to API
//     const returnedEntry = await fetch('http://journal-api-production-10b7.up.railway.app/entries', {
//       method: 'POST',
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newEntry)
//     })
//     const data = await returnedEntry.json()
//     setEntries([...entries, newEntry]) // setEntries is defined back in the parent (app). Setters replace the entire state value so even though it's an array with setEntry we need to replace the entire entry with a new array. We created a new array as indicated by the use of square brackets [] with an expansion operator on the existing entries ...entries and it tags a new entry on as the last element. This will change setEntries to the new array. 
//     nav(`/entry/${id}`) // this is a way of redirecting. All we have to do now is call nav (defined above on line 7) and pass it the URL were we want to go.  It will take the user to the url http://localhost:5173/entry/ followed by the id. We need to set up a variable for id which will be the length of the entries array. This will take me to the new entry we just created. 
//   }

//   return ( // In order for something to be a REACT component is must return JSX. Because it's multiline JSX parnthesis is required. Everything to return has been wrapped in a fragment because it only allows one top level component. Everything needs to be wrapped in a component because i Here I have now removed BrowserRouter and moved it into the main.jsx. I wrapped the entire app component in BrowserRouter in the main.jsx file. I lifted it. That is I moved it up to the parent component. Now it my app component I can use anything that requires a router. So for example I can use useNavigate and it will allow me to navigate around the site programatically.   
//     <>
//     {/* Here we are rendering an instance of a NavBar and a Routes component. When we use browser router all of the route components need to be children of a Routes component. Each route component has a path (the URI) and an element (when the path matches this is the element I want displayed. Here we can also pass in props. You need to make a mental distinction between front end and back end routes. They are not linked or related to each other in any way. The backend api has a set of routes and the front end has its own seperate routes which are completely different.   */}      
//       <Navbar />
//       <Routes>
//         {/* Here we have set the home page as the path. When the URI matches this path it will render the Home component. Here we can also pass in props(in this case the entries which was declared in line 16 is passed in as a prop. Entries will be the current value of entries at that point in time.)  */}
//         <Route path="/" element={<Home entries={entries} />} />
//         <Route path="/category" element={<CategorySelection categories={categories}/>} />
//         {/* the following route will take the user to the show entry route to display a single entry with the id number listed in the url. Because we are not working with a database the id is just going to be the array index of the entries array. Now we can pass a two segment uri where the first part is entry and the second part will be interpreted as the id. */}
//         <Route path="/entry/:id" element={<ShowEntryWrapper />} /> 
//         {/* we can see this is a restful paramater as it is prefixed with a colon (:). It has a parameter called category. In this example the addEntry function is passed in as a prop. */}
//          <Route path="/entry/new/:category" element={<NewEntry addEntry={addEntry} />} />
//          {/* This is a wild card. If none of the other routes match it will return a page not found error.  */}
//         <Route path="*" element={<h4>Page not found!</h4>} />
//       </Routes>
//   </>
//   )
// }
// export default App
