import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

export function PopoverDemo1() {

    const popoverDemo1 = (
        <Popover id="popoverDemo1-basic">
            <Popover.Title>Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
          </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popoverDemo1}>
            <Button variant="secondary">Click to display popover</Button>
        </OverlayTrigger>
    )

}

export function PopoverDemo2() {

    const popoverDemo2 = (
        <Popover id="popoverDemo2-basic">
            <Popover.Title>Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
          </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popoverDemo2}>
            <Button variant="secondary">Click to display popover</Button>
        </OverlayTrigger>
    )

}

export function PopoverDemo3() {

    const popoverDemo3 = (
        <Popover id="popoverDemo3-basic">
            <Popover.Title>Popover Title</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
          </Popover.Content>
        </Popover>
    );

    return (
        <>
            <OverlayTrigger trigger="click" placement="top" overlay={popoverDemo3}>
                <Button variant="tertiary" className="mr-3">Top</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={popoverDemo3}>
                <Button variant="tertiary" className="mr-3">Right</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverDemo3}>
                <Button variant="tertiary" className="mr-3">Bottom</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="left" overlay={popoverDemo3}>
                <Button variant="tertiary" className="mr-3">Left</Button>
            </OverlayTrigger>
        </>
    )

}