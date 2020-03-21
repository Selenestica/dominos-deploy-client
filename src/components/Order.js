import React, {useState} from 'react'
import {connect} from 'react-redux'
import ClosestStore from './ClosestStore'
import AllMenus from './menus/AllMenus'
import Alerts from './Alerts'
import axios from 'axios'

function Order(props) {

    const [customerInfo, setCustomerInfo] = useState({})

    const handleChange = (e) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value,
            chosenStore: props.storeId,
            itemCode: props.itemId
        })
        props.customerContactInfo(
            customerInfo.email,
            customerInfo.phone,
            customerInfo.firstName,
            customerInfo.lastName
        )
    }

    const onHandleSubmitCustomerInfo = async () => {
        if (
            customerInfo.firstName  || 
            customerInfo.lastName ||
            customerInfo.email ||
            customerInfo.phone ||
            customerInfo.cardNumber ||
            customerInfo.expiration ||
            customerInfo.securityCode ||
            customerInfo.cardZip || null
        ) 
        {
            props.missingField()
        }
        else {
            try {
                const response = await axios.post('https://cors-anywhere.herokuapp.com/https://damp-brushlands-91192.herokuapp.com/order/add-order', customerInfo)
                console.log(response.status)
                props.history.push('/order-success')
            }
            catch (error) {
                console.log(error)
                props.isError()            
            }
        }
    }

    return(<>

        <div className="container">
            <div className="row">

                <div className="row">
                    <div className="col s12 m12 l8 offset-l2">
                        <h2>Get pizza in 3 easy steps</h2>
                    </div>
                </div>

                <div className="col l10 offset-l1 s12 m12">
                    <h4>Step 1: Find the Domino's nearest to you</h4>
                    <div className="step-divs">
                        <p className="p-titles">Your address</p>
                        <input type="text" onChange={handleChange} name="street" placeholder="street" />
                        <input type="text" onChange={handleChange} name="city" placeholder="city" />
                        <input type="text" onChange={handleChange} name="state" placeholder="state" />
                        <input type="text" onChange={handleChange} name="zip" placeholder="zip code" />
                        <button className="open-menu-button green" onClick={() => props.findStore(customerInfo)}><i className="material-icons carryout-icon small">search</i></button>
                    </div>
                    {props.addressNotNull ? <div className="step-divs">
                        <p className="p-titles">Your Domino's</p>
                        <ClosestStore />
                        <input type="hidden" onChange={handleChange} name="chosenStore" value={props.storeId} />
                        <input type="hidden" onChange={handleChange} name="itemCode" value={props.itemId} />
                        <input type="hidden" onChange={handleChange} name="chosenDeliveryMethod" value="Delivery" />
                    </div> : null}

                    <AllMenus />

                    {props.storeIdNotNull ? <div>
                        <h4>Step 3: Enter your info, and place the order!</h4>
                        <div className="step-divs">
                            <p className="p-titles">Contact Info</p>
                            <input type="text" onChange={handleChange} name="firstName" placeholder="first name" />
                            <input type="text" onChange={handleChange} name="lastName" placeholder="last name" />
                            <input type="text" onChange={handleChange} name="email" placeholder="email" />
                            <input type="text" onChange={handleChange} name="phone" placeholder="phone number" />
                        </div>
                        <div className="step-divs">
                            <p className="p-titles">Payment</p>
                            <input type="text" onChange={handleChange} name="cardNumber" placeholder="cc number" />
                            <input type="text" onChange={handleChange} name="expiration" placeholder="expiration" />
                            <input type="text" onChange={handleChange} name="securityCode" placeholder="security code" />
                            <input type="text" onChange={handleChange} name="cardZip" placeholder="zip code" />
                        </div>
                        <Alerts />
                        <div onClick={onHandleSubmitCustomerInfo} className="green place-order-button-div">
                            <a className="place-order-button"><i className="material-icons carryout-icon large">check</i><h1 className="place-order-text">Place order</h1></a>
                        </div>
                   </div> : null}
                </div>

            </div>
        </div>   

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        findStore: (newCustomerInfo) => dispatch({type: 'ADDRESS_SAVED', customerInfo: newCustomerInfo}),
        isError: () => dispatch({type: 'DISPLAY_ORDER_ERROR'}),
        missingField: () => dispatch({type: 'DISPLAY_MISSING_FIELD_ERROR'}),
        customerContactInfo: (newCustomerEmail, newCustomerPhone, newCustomerFirst, newCustomerLast) => dispatch({
            type: 'CUSTOMER_CONTACT',
            customerEmail: newCustomerEmail,
            customerPhone: newCustomerPhone,
            customerFirst: newCustomerFirst,
            customerLast: newCustomerLast
        })
    }
}

const mapStateToProps = (state) => {
    return {
        propsState: state,
        addressNotNull: state.addressNotNull,
        storeIdNotNull: state.storeIdNotNull,
        storeId: state.storeId,
        itemId: state.itemId,
        itemName: state.itemName,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)