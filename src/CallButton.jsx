import React from 'react';
import { SITE } from './data/site.js';

export function CallButton({ className = 'btn btn-primary', children }) {
  return (
    <a className={className} href={`tel:${SITE.tel}`}>
      {children || <>Call {SITE.phone}</>}
    </a>
  );
}
