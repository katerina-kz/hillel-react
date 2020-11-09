import React, {useState} from 'react';
import {Modal, Button} from "semantic-ui-react";

function ModalError(props) {
    const {setError} = props;
    const [open, setOpen] = useState(true);

    return (
        <Modal
            onClose={() => (setOpen(false), setError(false))}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Content image>
                Something wrong with authorization
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={() => (setOpen(false), setError(false))}>
                    Back
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalError;