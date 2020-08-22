import React, {createRef} from 'react'
import {connect} from 'react-redux'
import {amountToPrint} from '../store/leftDorp/action'


const LeftDorp =({amountToPrint}) =>{

    const ref1 = createRef()
    
        return(
            <div className= "left_dorp" key ="1">
                <select className="sorting">
                    <option value="1">Default sorting</option>
                    <option value="2">Default sorting 01</option>
                    <option value="4">Default sorting 02</option>
                </select>
                <select className="show" ref={ref1} onClick={()=>{amountToPrint(ref1.current.value)}} >
                    <option value="1" >Show 12</option>
                    <option value="2" >Show 15</option>
                    <option value="3" >Show 18</option>
                </select>
            </div>
        )
    
}
export default connect(null, {amountToPrint})(LeftDorp)