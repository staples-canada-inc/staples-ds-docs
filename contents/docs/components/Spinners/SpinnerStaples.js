import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'reactstrap/src/utils';

const propTypes = {
    tag: tagPropType,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    classtitle: PropTypes.string,
};

const defaultProps = {
    tag: 'div',
    type: 'staples',
    children: 'Loading...'
};

const SpinnerStaples = props => {
    const {
        className,
        cssModule,
        type,
        size,
        color,
        children,
        tag: Tag,
        ...attributes
    } = props;

    const classes = mapToCssModules(
        classNames(
            className,
            size ? `spinner-staples-${size}` : false,
            `spinner-${type}`,
            color ? `text-${color}` : false
        ),
        cssModule
    );

    return (
        <Tag role="status" {...attributes} className={classes}>
            <React.Fragment>
                <div className="square"></div>
                <div className="square"></div>
                <span className="sr-only">{children}</span>
            </React.Fragment>
        </Tag>
    );
};

SpinnerStaples.propTypes = propTypes;
SpinnerStaples.defaultProps = defaultProps;

export default SpinnerStaples;