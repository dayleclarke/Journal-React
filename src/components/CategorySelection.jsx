import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = ({ categories }) => {

        return (
    <>
        <h2>Please select a category for your journal entry:</h2>
        <ul>
            {categories.map((cat, index) => ( //map across the array (loop though the array one element at a time) and for each element it will pass a callback function that we provide.  It will pass in both the value itself (food on first iteration) and a second parameter the index of the element (zero on the first iteration).  The index can be ignored if we don't need it. Always have a unique key whenever you have a collection of components with a map or a loop. Here we are mapping the category array which is a list containing strings. Map iterates an array and for each element returns something else which is put into a seperate list. It returns a new array with changes made to each element. It will return some JSX. It is enclosed in brackets because it is multiline.  
                <li key={index}> 
                    <Link to={`/entry/new/${cat.name}`}>{cat.name}</Link>
                    {/* a template string to construct the URL for the element. It will take the user to the url /enry/new/ then it will add the category to the end of it. The visible link is going to be the category name. */}
                </li>
                // at the end of the day you will have an array of li elements for each category. 

            ))}
        </ul>
    </>
  )
}

export default CategorySelection