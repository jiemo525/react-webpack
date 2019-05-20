import React from 'react';
import { Modal } from 'antd';

function withModal(ContentComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visible: true
            };
        }
        showModal = () => {
            this.setState({
                visible: true,
            });
        };

        handleOk = e => {
            console.log(e);
            this.setState({
                visible: false,
            });
        };

        handleCancel = e => {
            console.log(e);
            this.setState({
                visible: false,
            });
        };
        render() {
            return (
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ContentComponent {...this.props} />
                </Modal>
            );
        }
    }

}

export default withModal
