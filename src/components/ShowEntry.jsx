// a component to display one journal entry (its only job). It just received the entry as a prop and displays that single entry. One of the key reasons we use components is to provide a seperation of concerns. Each component ideally should do one thing only. Break out the functionaliy into subcomponents. We want to have reusable somewhat atomic components that can be compined together in different ways to create the funcitonality we need.

import React from 'react' // insert the blank template with RAFCE: react arrow function component with export.  This provides blank component scaffolding.

// we will pass in the entire entry object which has keys for the content and category of each item.
//we need a route so that we can navigate to the route. 
const ShowEntry = ({ entry }) => { //It will except an entry as a prop. Here we will pass in the entire entry object. This includes the category and the content. 
    //error handling is done in App through the HOC showEntry wrapper. Although we should do more error handling than just checking that the entry was truthy. We should check that it has a key for content and a key for category and that the length of it's values were greater than 1. 
    return (
        <> 
            <h5>{entry.content}</h5>
            <p>Posted in {entry.category.name}</p> 
        </>
    ) 
}

export default ShowEntry

// we need a route to this so that we can navigate to it and show this entry. This is added into the app component. 