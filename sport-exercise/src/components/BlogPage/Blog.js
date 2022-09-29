import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mb-5 pt-5 mt-5 w-100' id='blog'>
            <h2 className='text-center pt-5 mb-5 ms-2 me-2 clr fw-bolder'>Welcome to Blogs</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <h5 className='text-success'>How does React work?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      <strong>React</strong> is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <h5 className='text-success'>What are the differences between props and state?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <strong>Props: </strong>The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only. 
      <strong>State: </strong>The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.
     
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <h5 className='text-success'>What does useEffect do?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;