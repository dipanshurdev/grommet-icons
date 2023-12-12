import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { generatePrefix } from '../utils';

const ApplePodcasts = forwardRef((props, ref) => {
  const prefix = generatePrefix('ApplePodcasts');
  return (
    <StyledIcon
      ref={ref}
      viewBox="0 0 24 24"
      a11yTitle="ApplePodcasts"
      {...props}
    >
      <g clipPath={`url(#${prefix}-a)`}>
        <path
          fill={`url(#${prefix}-b)`}
          fillRule="evenodd"
          d="M21.992 22.816c.768-.592 1.304-1.424 1.536-2.016.464-1.192.472-2.544.472-3.4V6.6c0-.848 0-2.208-.472-3.4-.232-.592-.776-1.432-1.536-2.016a4.99 4.99 0 0 0-1.688-.88C19.528.08 18.584 0 17.4 0H6.6C5.416 0 4.472.08 3.696.304a5.137 5.137 0 0 0-1.688.88C1.24 1.776.704 2.608.472 3.2.008 4.392 0 5.744 0 6.6v10.8c0 .856.008 2.208.472 3.4.232.592.776 1.432 1.536 2.016.44.344.968.664 1.688.88.776.224 1.72.304 2.904.304h10.8c1.184 0 2.136-.072 2.904-.304a5.137 5.137 0 0 0 1.688-.88ZM3.56 10.992c.064-4.592 3.824-8.32 8.416-8.336 4.664-.008 8.464 3.784 8.48 8.44 0 3.68-2.36 6.816-5.648 7.968-.08.032-.168-.032-.152-.12l.12-.864a.272.272 0 0 1 .168-.232c2.6-1.144 4.424-3.736 4.424-6.752 0-4.08-3.336-7.392-7.424-7.36-3.992.032-7.256 3.288-7.296 7.288a7.365 7.365 0 0 0 4.424 6.824.317.317 0 0 1 .168.232c.021.192.05.384.078.576l.042.288c.008.08-.072.152-.152.12-3.32-1.168-5.696-4.352-5.648-8.072Zm10.408-.584c0 1.088-.88 1.968-1.968 1.968a1.967 1.967 0 0 1-1.968-1.968c0-1.088.88-1.968 1.968-1.968s1.968.888 1.968 1.968Zm.088 4.08a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624s-1.376.24-1.736.624c-.184.2-.288.4-.32.688-.064.558-.024 1.037.04 1.807v.009c.064.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.624.832 1.4.832.776 0 1.272-.392 1.4-.832.08-.272.168-.656.28-1.368.152-1 .272-1.976.336-2.712.072-.776.104-1.256.04-1.816Zm-2.272-9.032c-2.992.112-5.392 2.584-5.432 5.576a5.65 5.65 0 0 0 2.472 4.744c.072.048.176-.008.176-.096a7.853 7.853 0 0 1-.008-.968.326.326 0 0 0-.112-.272 4.574 4.574 0 0 1-1.448-3.456 4.585 4.585 0 0 1 4.392-4.448 4.574 4.574 0 0 1 4.752 4.568c0 1.312-.56 2.496-1.448 3.336a.381.381 0 0 0-.112.272c.016.312.008.616-.008.96-.008.088.096.152.176.096a5.661 5.661 0 0 0 2.472-4.672c.008-3.184-2.656-5.768-5.872-5.64Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id={`${prefix}-b`}
          x1="12"
          x2="12"
          y1="0"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F452FF" />
          <stop offset="1" stopColor="#832BC1" />
        </linearGradient>
        <clipPath id={`${prefix}-a`}>
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </StyledIcon>
  );
});

ApplePodcasts.displayName = 'ApplePodcasts';

export { ApplePodcasts };
