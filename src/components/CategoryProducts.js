import React from 'react'

class  CategoryProducts extends React.Component{

    render() {
        return(
            <div className="latest_product_inner row">
                {this.props.TextToPrint}
            </div>
        )
    }
}

export default CategoryProducts
