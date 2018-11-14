import React, { Component } from 'react'
import dbInstance from './dbInstance'

class GetPic extends Component {
    constructor(props){
        this.getBinary()
    }
    
    getBinary = async () => {
        
        dbInstance.init({dbName:'cheever-db',collection:'test'})
        await dbInstance.open()
        let doc = await dbInstance.find({appid:10})

        console.log(doc)
    }

    render () {
        

        let img = document.createElement('img');
        img.src = 'data:image/jpeg;base64,' + btoa('your-binary-data');

        return (
            <div className="pic">
                {img}
            </div>
        )
    }
}

export default GetPic