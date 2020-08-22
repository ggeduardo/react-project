import React from 'react'
import { Link } from 'react-router-dom'

const RowSeached = (props) =>{

    const Images = [props.Image1, props.Image2, props.Image3 ]
    const TextJVX = []
    
    
    const repeat = () =>{
        for (let i = 0; i < 3; i++) {
            TextJVX.push(
                <div className="media" key={i}>
                    <div className="d-flex">
                        <img src={Images[i].url} alt={"Más buscado " + Images[i].name }/>
                    </div>
                    <div className="media-body">
                        <Link to="/cbuscados"><h4>{Images[i].name}</h4></Link>
                        <h3>{Images[i].price}</h3>
                    </div>
                </div>)
            
        }
    }
    
    repeat()

    return(
        <div className="col-lg-3 col-sm-6">
			<div className="most_p_list">
				{TextJVX}
			</div>
		</div>
    )
}

export default RowSeached