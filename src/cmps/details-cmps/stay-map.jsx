import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class StayMap extends Component {

    state = {
        zoom: 11,
    }




    render() {
        return (

            <div style={{ height: '50vh', width: '100%' }}>
                <div className="map-header">
                    <h2>Where you’ll be</h2>
                </div>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBx9qnfAgsFEcpswENvLRS8b_x7YxYp--g' }}
                    // center={this.state.center}
                    defaultCenter={this.props.latlng}
                    defaultZoom={this.state.zoom}
                // onChildClick={this.onSetCenter}
                >

                    <AnyReactComponent
                        lat={this.props.latlng.lat}
                        lng={this.props.latlng.lng}
                        text="📍"
                    />

                </GoogleMapReact>
            </div>
        )
    }


}