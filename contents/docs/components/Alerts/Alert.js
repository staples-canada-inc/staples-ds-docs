import React from 'react';
import { UncontrolledAlert } from 'reactstrap'
import { ComponentPreview } from '../../../../src/pages/components/ComponentPreview.tsx';

function AlertExample() {
    return (
        <UncontrolledAlert color="info">
            I am an alert and I can be dismissed!
    </UncontrolledAlert>
    );
}

export default AlertExample;