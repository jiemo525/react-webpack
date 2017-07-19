import React from 'react';
// import { Button, Card } from 'antd';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import './index.scss'

class AddBrand extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                <div className="search_tree">
                    AddBrand
                </div>
                <Footer />
            </div>    
        );
    }
}

export default AddBrand;