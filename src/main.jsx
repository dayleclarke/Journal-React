import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render( //  With ReactDom we create a root node. Then we tell it what is the actual DOM container in the browser DOM where we want to render our tree of components to. React is component based and has a hirarchy of components that are displayed. It needs to know what the actual HTML or DOM container where we want those components to be displayed. (The container for our react components) React has its own internal DOM and when we change data it updates the internal dom. It then compares the internal DOM and the actual browser DOM to find out what has actually changed then it copies accross what has changed. In this example the div with the id "root" in our index html will be the container for our react components. 
// Then we call render and pass it JSX code. Next we are rendering an app component which is wrapped in a BrowserRouter component. Any of the code in app can now work with the components of browser router and any of its methods.  This indicates the JSX to render inside the "root" div. 
    <BrowserRouter> 
        <App />
    </BrowserRouter>
)
