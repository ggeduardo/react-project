import React from 'react';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom'


/*-------------------- Imported components ..................... */


import TopSM from './components/TopSM.js'
import MMenu1 from './components/MMenu.js'
import MainPage from './MainPage.js'
import CategoryPage from './CategoryPage.js'
import Footer1 from './components/Footer.js'
import DetailProduct from './detailsproduct.js';


/*.............................................................. */

const App = () =>  {

	return (
		<Router>
			<div className="App">
				<header className="header_area">
					<TopSM/>
					<MMenu1/>
				</header>
				<Switch>
					<Route exact path="/"> <MainPage/> </Route>
					<Route exact path="/categories" > <CategoryPage /> </Route>
					<Route exact path="/detallesdelProducto" > <DetailProduct /></Route>
				</Switch>
				<Footer1/>
			</div>
		</Router>
		  )
}



export default App;
