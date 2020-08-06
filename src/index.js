import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import { getAllProducts } from './actions';
//Custom routes
import AuthRoute from './utils/AuthRoute';
import ProtectedRoute from './utils/protectedRoute'
// Main
import Home from './components/layouts/HomePage/main';


//Collection Pages
import TShirtCollection from "./components/collection/tshirt-collection";
import LogoCollection from "./components/collection/logo-collection";
import BcardCollection from "./components/collection/Bcard-collection";
import Flyers from "./components/collection/flyer-collection";
import Brochures from "./components/collection/brochure-collection";

// Extra Pages
import aboutUs from './components/pages/about-us';
import Contact from './components/pages/contact';
import Login from './components/pages/login'
import Register from './components/pages/register'


// Product Pages
import LeftSideBar from "./components/products/left-sidebar";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'
//New Added
import MyOrder from './components/myorder/myorder'
import MyReview from './components/myreview/myreview'
import SearchResult from './components/pages/search-result'
import Portfolios from './components/chat'
import Conversation from './components/chat/messages'

class Root extends React.Component {

    render() {
        store.dispatch(getAllProducts());

        return (
            <Provider store={store}>
                <IntlProvider locale='en'>
                    <BrowserRouter basename={'/'} >
                        <ScrollContext>
                            <Switch>
                                <Route exact path={"/"} component={Home} />
                                <Layout>

                                    {/*Routes For Features (Product Collection) */}
                                    <Route path={"/collection/t-shirt/:category"} component={TShirtCollection} />
                                    <Route path={"/collection/logo/:category"} component={LogoCollection} />
                                    <Route path={"/collection/business-card/:category"} component={BcardCollection} />
                                    <Route path={"/collection/flyer-designs/:category"} component={Flyers} />
                                    <Route path={"/collection/brochure-designs/:category"} component={Brochures} />

                                    {/*Routes For Single Product*/}
                                    <Route path={"/left-sidebar/product/:id/:review?"} component={LeftSideBar} />

                                    <Route path={"/pages/about-us"} component={aboutUs} />
                                    <Route path={"/pages/contact"} component={Contact} />
                                    {/*New Auth Private and Protected Routes */}
                                    <AuthRoute path={"/pages/login"} component={Login} />
                                    <AuthRoute path={"/pages/register"} component={Register} />
                                    <ProtectedRoute path={"/checkout"} component={checkOut} />
                                    <ProtectedRoute path={"/conversation/:id"} component={Conversation} />
                                    {/*Routes For custom Features*/}
                                    <Route path={"/cart"} component={Cart} />
                                    <Route path={"/wishlist"} component={wishList} />
                                    {/* <Route path={"/checkout"} component={checkOut} /> */}
                                    <Route path={"/order-success"} component={orderSuccess} />
                                    <Route path={"/sales/orders"} component={aboutUs} />
                                    {/* New Added */}
                                    <Route path={"/my-order"} component={MyOrder} />
                                    <Route path={"/my-review"} component={MyReview} />
                                    <Route path={"/search-result/:name/:category_id?"} component={SearchResult} />
                                    <Route path={"/messages"} component={Portfolios} />
                                </Layout>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


