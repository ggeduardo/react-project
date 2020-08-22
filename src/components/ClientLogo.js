import React from 'react'
import { connect } from 'react-redux'

const ClientLogo = ({ImgLOGO}) =>{

    const textJVX = []

    const repeat = () =>{
        
        ImgLOGO.forEach((image, index) => {
            textJVX.push(                        
            <div className="item" key={index} >
                <img src={image} alt="LOGO DE MARCAS"/>
            </div>)
        });
    }
    repeat()

    return(
            <section className="clients_logo_area">
                <div className="container">
                    <div className="main_title">
                        <h2> Las Marcas más usadas este Mes</h2>
                        <p>Las más vendidas y recomendadas por los usuarios</p>
                    </div>
                    <div className="clients_slider row ">
                        {textJVX}
                    </div>
                </div>
            </section>
    )
}

const mapStateToProps = state =>({
    ImgLOGO : state.CLReducer
})

export default connect(mapStateToProps,{})(ClientLogo)