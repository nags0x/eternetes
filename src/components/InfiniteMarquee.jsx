import React from 'react';
import PropTypes from 'prop-types';

const InfiniteMarquee = ({
    children,
    speed = 5,
    direction = 'left',
    pauseOnHover = true,
    gap = 'gap-5', 
    className = ''
}) => {
  const marqueeItems = [...children, ...children, ...children, ...children].map((child, i) => (
    <div className='flex shrink-0 items-center justify-center' key={i}>
        <div className='w-20 h-20 flex justify-center items-center'>
          {React.cloneElement(child, {
            className: `${child.props.className || ''} object-contain w-full h-full`
          })}
          
        </div>
    </div>
  ));

  const marqueeClassNames = [
    'flex',
    gap, 
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right',
    pauseOnHover ? 'hover:animation-paused' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`relative overflow-hidden ${className} `}>
      <div className='mb-5 text-center text-sm '>Trusted by fast-growing startups</div>
      <div className={marqueeClassNames} 
           style={{ '--duration': `${speed}s` }}>
        {marqueeItems}
      </div>
    <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{
          background: 'white',
          maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
        }}
        aria-hidden="true"//industry_standard to help fellow devs ^^
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{
          background: 'white',
          maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />


    </div>
  );
};

InfiniteMarquee.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
  pauseOnHover: PropTypes.bool,
  gap: PropTypes.string,
  className: PropTypes.string
};

export default InfiniteMarquee;