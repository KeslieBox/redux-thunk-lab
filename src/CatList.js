// write your CatList component here
import React, {Component} from 'react'

class CatList extends Component {
    render() {
        return(
            <div>
                {this.props.catPics.map(c => <img src={c.url}/>)}
            </div>
        )
    }

}

export default CatList