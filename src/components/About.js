import React from 'react'

function About() {

  return (<>

          <div className="container">
            <div className="row">
                <div className="col l10 offset-l3 s12 m12">
                  <h1>About DOMino's</h1>
                </div>
            </div>
            <div className="row">
                <div className="col l10 offset-l1 s12 m12 step-divs">
                  <p className="about-ps">
                    This app was built by JB Wilson for the week 13 individual project at
                    <a href='https://www.digitalcrafts.com/'> DigitalCrafts</a> coding bootcamp.
                    This project had to be built in one week using Node.js for the back end, and 
                    React.js and Redux for the front end. 
                    The use of a database such as MongoDB or PostgreSQL was encouraged but not required. 
                    Other than that, the nature and function of the app, as well as any other technologies the 
                    app used, was at the discretion of the student. 
                  </p>
                  <p className="about-ps">
                    DOMino's is, essentially, a third party Domino's pizza delivery app. 
                    It uses the domino's node module to create an online order 
                    with Domino's pizza.
                     You can find that module <a href='https://www.npmjs.com/package/dominos'>here</a>, 
                     and with just a little bit of programming
                      knowledge, you can easily order a pizza and have it delivered to your door without ever leaving your IDE.
                  </p>
                  <p className="about-ps">
                    The name of the app, "DOMino's", is a play on words that was available out of coincidence. The acronym
                     "DOM" stands for Document Object Model, and is an important concept in programming and React in particular. 
                     For an explanation of how React uses the DOM, see <a href='https://reactjs.org/docs/faq-internals.html'>here.</a>
                  </p>
                  <p className="about-ps">
                     One stretch goal of this app was to use MongoDB and json web tokens to store user information, 
                     so that users of this app could register and create a profile. They would then be able to log in and out 
                     of the app, as well as access their "Pizza Profile", where they can view all of their past orders using the app and, 
                     with one click, 
                     re-order anything you've ordered in the past. If you're interested in working with me on this stretch goal, 
                     please shoot me an 
                    <a href="mailto:josiahleemusic@gmail.com?subject=DOMino's app"> email</a>.
                  </p>
                </div>
            </div>
          </div>
  
  </>)

}

export default About