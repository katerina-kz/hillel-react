import React, {useState} from 'react';
import {Modal, Button} from "semantic-ui-react";

function ModalSuccess(props) {
    const {setSuccess} = props;
    const [open, setOpen] = useState(true);

    return (
        <Modal
            onClose={() => (setOpen(false), setSuccess(false))}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Content image>
                Your order is transferred to the processing
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={() => (setOpen(false), setSuccess(false))}>
                   Thank's

                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalSuccess;