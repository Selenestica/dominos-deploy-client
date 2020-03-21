import React from 'react'
import {connect} from 'react-redux'
import Alert from '@material-ui/lab/Alert'

function Alerts(props) {

  return(<>
  
            {props.isError === true && <Alert severity="error">There's been an error with your order. Please try again.</Alert>}
            {props.missingField === true && <Alert severity="error">One or more fields above is missing information! Please check to see that you have filled out every field.</Alert>}
  
  </>)

}

const mapStateToProps = (state) => {
  return {
    isError: state.isError,
    missingField: state.missingField
  }
}

export default connect(mapStateToProps)(Alerts)