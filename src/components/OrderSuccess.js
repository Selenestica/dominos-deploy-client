import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function OrderSuccess(props) {

    const [item, setItem] = useState([])

    useEffect(() => {
        const items = props.itemName.map((eachItem) => {
            return (<>

                <li>{eachItem}</li>

            </>)
        })
        setItem(items)
    }, [])    

    return(<>
    
        <div className="container">
            <div className="row">
                <div className="col l10 offset-l1 s12 m12">

                    <h1>Your order has been placed!</h1>
                    <div className="order-details-div">
                        <h3>Your order details</h3>
                        <p className="p-titles">Your order</p>
                            {item}
                        <p>was delivered to: {props.customerAddress.street}, {props.customerAddress.city}, {props.customerAddress.state} {props.customerAddress.zip}</p>
                        <p className="p-titles">Your contact information:</p>
                        <p><span><b>Name</b></span>: {props.customerFirst} {props.customerLast}</p>
                        <p><span><b>Email</b></span>: {props.customerEmail}</p>
                        <p><span><b>Phone</b></span>: {props.customerPhone}</p>
                        <p className="p-titles">Your Domino's information:</p>
                        <p><span><b>Store #</b></span>: {props.storeId}</p>
                        <p><span><b>Address</b></span>: {props.storeAddress}</p>
                        <p><span><b>Phone</b></span>: {props.storePhone}</p>
                    </div>
                    <div className="row buttons-row">
                        <a className="button-as" href="/">
                            <div id="carryout-button-div" className="green home-button">
                                <div>
                                    <i className="material-icons carryout-icon">home</i>
                                    <h1 className="button-h1s">Go back home</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="faq-div">
                        <h3>Things to know</h3>
                        <li>
                            You should have received an email from Domino's confirming your order.
                        </li>
                        <br></br>
                        <li>
                            If you didn't, you may want to check above to see if you gave Domino's your correct email address. You can also check your credit card to see if it was charged. 
                        </li>
                        <br></br>
                        <li>
                            If your card was charged, the pizza is on it's way to you! Most likely you gave the wrong email.
                                You can always call your Domino's to confirm.
                        </li>
                        <br></br>
                        <li>
                            If your card wasn't charged and you didn't get an email, there was an error in your order, and you may want to try again.
                        </li>
                    </div>

                </div>
            </div>
        </div>

    </>)

}

const mapStateToProps = (state) => {
    return {
        customerAddress: state.customerAddress,
        itemName: state.itemName,
        storeId: state.storeId,
        storeAddress: state.storeAddress,
        storePhone: state.storePhone,
        customerEmail: state.customerEmail,
        customerPhone: state.customerPhone,
        customerFirst: state.customerFirst,
        customerLast: state.customerLast
    }
}

export default connect(mapStateToProps)(OrderSuccess)