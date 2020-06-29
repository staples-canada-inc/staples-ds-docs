import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/src/utils';

import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


const propTypes = {
	status: PropTypes.string,
	faqtitle: PropTypes.string,
	faq: PropTypes.string,
};

const defaultProps = {
	status: '',
	faqtitle: 'File Upload FAQ',
    faq: 'And here\'s some <strong>amazing</strong> content. It\'s very engaging right?',
};


function Dropzone(props) {
	const {
        className,
		cssModule,
		status,
		faq,
		faqtitle
    } = props;
  
	const classes = mapToCssModules(
        classNames(
            className,
			status ? `${status}` : false,
			`dropzone`
        ),
        cssModule
	);
	
	const popoverDemo = (
        <Popover id="popoverDemo1-basic">
            <Popover.Title>{faqtitle}</Popover.Title>
            <Popover.Content>
				{faq}
          </Popover.Content>
        </Popover>
	);
	
	return (
	  <>
		<div class="dropzone" className={classes}>
			<div class="dropzone-target px-5 py-4 d-flex justify-content-center align-items-center">
					<Button variant="secondary">Select File(s)</Button> or drag and drop file(s) here.
			</div>
			<OverlayTrigger trigger="click" placement="top" rootClose="true" overlay={popoverDemo}>
				<span class="faq-trigger float-right pt-2 small">File Upload FAQ</span>
			</OverlayTrigger>
		</div>
	  </>
	)
}

Dropzone.propTypes = propTypes;

export default Dropzone