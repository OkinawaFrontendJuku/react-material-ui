import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

export const Map =  withScriptjs(withGoogleMap((props) =>{
  return(
    <GoogleMap
            defaultZoom={7}
            center={ { lat:23.6632281, lng:-105.344413 } }
            >
    </GoogleMap>
  )
}))