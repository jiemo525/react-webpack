import React from 'react';
import { Button, Card } from 'antd';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import SearchTree from '../../components/SearchTree/index';
import './index.scss'

class EditCategory extends React.Component {
    
    render() {
        const {text} = this.props;
        return (
            <div>
                <Header />
                <div className="search_tree">
                    <Card>
                        <SearchTree />
                    </Card>
                </div>
                <Footer />
            </div>    
        );
    }
}

export default EditCategory;