import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './plantilla/vendors/linericon/style.css'
import './plantilla/css/font-awesome.min.css'
import './plantilla/css/style.css'
import './plantilla/css/responsive.css'
import './plantilla/vendors/lightbox/simpleLightbox.css'
import './plantilla/vendors/nice-select/css/nice-select.css'
import './plantilla/vendors/jquery-ui/jquery-ui.css'
import './plantilla/vendors/animate-css/animate.css'
import './plantilla/vendors/owl-carousel/owl.carousel.min.css'

import { Provider }  from 'react-redux'
import store from './store'
 
 
const Application = ()=>(
  <Provider store = { store }>
    <App />
  </Provider>  
)
ReactDOM.render(<Application />, document.getElementById('root'))
