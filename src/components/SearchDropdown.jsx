import React, { Component } from 'react'

class SearchDropdown extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        let isActive = (this.props.isActive) ? 'is-active' : ''
        let results = []

        try {
            results = this.props.results.map( (val, i) => {
                return (
                    <div key={i} className='dropdown-item is-fullwidth'>
                        {val.name}
                    </div>
                )
            })
        } catch (e) {
            console.error(e)
        }

        return (
            <div className={`dropdown ${isActive}`}>
                <div className='dropdown-menu' id='dropdown-menu' role='menu'>
                    <div className='dropdown-content'>
                        {results}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchDropdown