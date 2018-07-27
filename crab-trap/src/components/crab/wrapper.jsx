import React from 'react';
import PropTypes from 'prop-types';

import './style/style.css';

const crabWidthCSS = screenWidth => ({
  minWidth: `${screenWidth * 0.12 * 0.6}px`,
});

const transformCSS = moveTo => ({
  transform: moveTo ? `translate3d(${moveTo ? `${moveTo[0]}px, ${moveTo[1]}px` : '0, 0'}, 0)` : '',
});

const transitionTime = walkTime => ({
  transition: `all ${walkTime}s cubic-bezier(0.42, -0.07, 0.58, 0.74)`,
});

const CrabWrapper = ({
  children, paused, walking, className, id, continueWalk, screenWidth, moveTo, walkTime, initialPos,
}) => (
  <div
    style={{
      ...crabWidthCSS(screenWidth),
      ...transformCSS((!moveTo || moveTo[0] === 0 ? initialPos : moveTo)),
      ...transitionTime(walkTime),
    }}
    onTransitionEnd={continueWalk}
    id={id}
    className={`crab-wrapper 
    ${className}  ${paused ? 'paused' : ''} ${walking ? 'walking' : ''}`}
  >
    {console.log(moveTo)}
    {children}
  </div>
);

CrabWrapper.propTypes = {
  continueWalk: PropTypes.func.isRequired,
  children: PropTypes.element,
  paused: PropTypes.bool.isRequired,
  walking: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

CrabWrapper.defaultProps = {
  children: {},
  className: '',
  walking: false,
};

export default CrabWrapper;
