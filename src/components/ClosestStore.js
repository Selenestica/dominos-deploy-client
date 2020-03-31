import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function ClosestStore(props) {
  const [myStore, setMyStore] = useState([]);

  useEffect(() => {
    const strAddress = props.address.street;
    const cityStateZipAddress =
      props.address.city + props.address.state + props.address.zip;
    const url = `https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store-locator?s=${strAddress}&c=${cityStateZipAddress}&type=`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        const storeDetails = Object.keys(json.Stores).map(key => {
          let storeId = json.Stores[key].StoreID;
          let storeAddress = json.Stores[key].AddressDescription;
          let storePhone = json.Stores[key].Phone;

          return (
            <>
              <div>
                <p>
                  <span>
                    <b>Store #</b>
                  </span>
                  : {storeId}
                </p>
                <p>
                  <span>
                    <b>Address</b>
                  </span>
                  : {storeAddress}
                </p>
                <p>
                  <span>
                    <b>Phone</b>
                  </span>
                  : {storePhone}
                </p>
                <div className="step-2-div">
                  <h4>Step 2: Choose what you want from the menu</h4>
                  <button
                    id="storeInfo"
                    className="open-menu-button green"
                    onClick={() =>
                      props.getStoreInfo(storeId, storeAddress, storePhone)
                    }
                  >
                    <i className="material-icons carryout-icon small">
                      arrow_downward
                    </i>
                  </button>
                </div>
              </div>
            </>
          );
        });

        setMyStore(storeDetails[0]);
      });
  }, []);

  return <>{myStore}</>;
}

const mapStateToProps = state => {
  return {
    address: state.customerAddress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStoreInfo: (newStoreId, newStoreAddress, newStorePhone) =>
      dispatch({
        type: "STORE_INFO_SAVED",
        storeId: newStoreId,
        storeAddress: newStoreAddress,
        storePhone: newStorePhone
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClosestStore);
