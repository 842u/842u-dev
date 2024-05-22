/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const ContentSecurityPolicy = `
    default-src 'self';
    connect-src 'self';
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    media-src 'self' https://github-production-user-asset-6210df.s3.amazonaws.com/ https://github.com/842u/;
    font-src 'self';
  `;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=() , accelerometer=(), gyroscope=(), magnetometer=(), payment=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      eslint: {
        dirs: ['app', 'components', 'projects', 'types', 'utils'],
      },
    };
  }

  return {
    eslint: {
      dirs: ['app', 'components', 'projects', 'types', 'utils'],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },
  };
};
