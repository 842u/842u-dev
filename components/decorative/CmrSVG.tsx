/* eslint no-plusplus: 0 */
/* eslint no-console: 0 */

'use client';

import { useEffect, useState } from 'react';

type CmrSVGProps = {
  text: string;
  duration: number;
  spacing: number;
  rotate: '0' | 'auto' | 'auto-reverse';
};

export function CmrSVG({ text, duration, rotate, spacing }: CmrSVGProps) {
  const [charArray, setCharArray] = useState(text.split(''));

  useEffect(() => {
    const pathElement = document.querySelector(
      'svg path',
    ) as SVGGeometryElement;

    const characterElement = document.querySelector('svg text') as SVGAElement;

    const pathLength = pathElement.getTotalLength();
    const characterWidth = characterElement.getBBox().width;

    const textArray = text.split('');
    const avaliableCharacters =
      pathLength / (characterWidth + spacing) - duration * 2 - text.length;

    let charIndex = 0;

    for (let i = 0; i < avaliableCharacters; i++) {
      if (charIndex >= text.length) {
        charIndex = 0;
      }

      const add = textArray[charIndex];
      setCharArray((last) => [...last, add]);
      charIndex++;
    }

    console.log('char array', charArray);
    console.log('path length', pathLength);
    console.log('character width', characterWidth);
    console.log('avaliable characters', avaliableCharacters);
  }, [charArray]);

  return (
    <div className="overflow-hidden p-20">
      <svg viewBox="0 0 200 200">
        <path
          // d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50z"
          d="M1.59778 14.608L0.469781 13.384L8.67778 5.968C8.86978 5.792 9.06978 5.712 9.27778 5.728C9.48578 5.728 9.67778 5.824 9.85378 6.016C10.0298 6.208 10.1098 6.416 10.0938 6.64C10.0938 6.848 9.99778 7.032 9.80578 7.192L1.59778 14.608ZM0.997781 19C0.725781 19 0.501781 18.92 0.325781 18.76C0.165781 18.584 0.0857813 18.36 0.0857813 18.088V1.168C0.0857813 0.895999 0.165781 0.679999 0.325781 0.519999C0.501781 0.343999 0.725781 0.256 0.997781 0.256C1.26978 0.256 1.48578 0.343999 1.64578 0.519999C1.82178 0.679999 1.90978 0.895999 1.90978 1.168V18.088C1.90978 18.36 1.82178 18.584 1.64578 18.76C1.48578 18.92 1.26978 19 0.997781 19ZM9.87778 18.88C9.66978 19.056 9.45378 19.128 9.22978 19.096C9.00578 19.08 8.81378 18.968 8.65378 18.76L3.30178 12.184L4.59778 11.032L9.99778 17.68C10.1578 17.872 10.2298 18.08 10.2138 18.304C10.1978 18.512 10.0858 18.704 9.87778 18.88ZM18.4088 19.12C17.1768 19.12 16.0728 18.832 15.0968 18.256C14.1208 17.664 13.3448 16.864 12.7688 15.856C12.2088 14.848 11.9288 13.712 11.9288 12.448C11.9288 11.168 12.2168 10.024 12.7928 9.016C13.3848 8.008 14.1848 7.216 15.1928 6.64C16.2008 6.048 17.3368 5.752 18.6008 5.752C19.8648 5.752 20.9928 6.048 21.9848 6.64C22.9928 7.216 23.7848 8.008 24.3608 9.016C24.9528 10.024 25.2568 11.168 25.2728 12.448L24.5288 13.024C24.5288 14.176 24.2568 15.216 23.7128 16.144C23.1848 17.056 22.4568 17.784 21.5288 18.328C20.6168 18.856 19.5768 19.12 18.4088 19.12ZM18.6008 17.44C19.5288 17.44 20.3528 17.224 21.0728 16.792C21.8088 16.36 22.3848 15.768 22.8008 15.016C23.2328 14.248 23.4488 13.392 23.4488 12.448C23.4488 11.488 23.2328 10.632 22.8008 9.88C22.3848 9.128 21.8088 8.536 21.0728 8.104C20.3528 7.656 19.5288 7.432 18.6008 7.432C17.6888 7.432 16.8648 7.656 16.1288 8.104C15.3928 8.536 14.8088 9.128 14.3768 9.88C13.9448 10.632 13.7288 11.488 13.7288 12.448C13.7288 13.392 13.9448 14.248 14.3768 15.016C14.8088 15.768 15.3928 16.36 16.1288 16.792C16.8648 17.224 17.6888 17.44 18.6008 17.44ZM24.3368 19C24.0648 19 23.8408 18.92 23.6648 18.76C23.4888 18.584 23.4008 18.36 23.4008 18.088V13.984L23.8568 12.088L25.2728 12.448V18.088C25.2728 18.36 25.1848 18.584 25.0088 18.76C24.8328 18.92 24.6088 19 24.3368 19ZM46.603 19C46.331 19 46.107 18.92 45.931 18.76C45.755 18.584 45.667 18.36 45.667 18.088V11.176C45.667 10.04 45.371 9.144 44.779 8.488C44.187 7.816 43.427 7.48 42.499 7.48C41.507 7.48 40.691 7.816 40.051 8.488C39.427 9.144 39.123 10.024 39.139 11.128H37.483C37.499 10.056 37.731 9.112 38.179 8.296C38.627 7.48 39.243 6.848 40.027 6.4C40.811 5.952 41.699 5.728 42.691 5.728C43.635 5.728 44.467 5.952 45.187 6.4C45.923 6.848 46.491 7.48 46.891 8.296C47.307 9.112 47.515 10.072 47.515 11.176V18.088C47.515 18.36 47.427 18.584 47.251 18.76C47.091 18.92 46.875 19 46.603 19ZM29.803 19C29.515 19 29.283 18.92 29.107 18.76C28.947 18.584 28.867 18.36 28.867 18.088V6.808C28.867 6.536 28.947 6.312 29.107 6.136C29.283 5.96 29.515 5.872 29.803 5.872C30.075 5.872 30.291 5.96 30.451 6.136C30.627 6.312 30.715 6.536 30.715 6.808V18.088C30.715 18.36 30.627 18.584 30.451 18.76C30.291 18.92 30.075 19 29.803 19ZM38.227 19C37.955 19 37.731 18.92 37.555 18.76C37.379 18.584 37.291 18.36 37.291 18.088V11.176C37.291 10.04 36.995 9.144 36.403 8.488C35.811 7.816 35.051 7.48 34.123 7.48C33.131 7.48 32.315 7.808 31.675 8.464C31.035 9.104 30.715 9.944 30.715 10.984H29.395C29.427 9.96 29.651 9.056 30.067 8.272C30.499 7.472 31.083 6.848 31.819 6.4C32.555 5.952 33.387 5.728 34.315 5.728C35.259 5.728 36.091 5.952 36.811 6.4C37.547 6.848 38.115 7.48 38.515 8.296C38.931 9.112 39.139 10.072 39.139 11.176V18.088C39.139 18.36 39.051 18.584 38.875 18.76C38.715 18.92 38.499 19 38.227 19ZM52.9214 19C52.6334 19 52.4014 18.92 52.2254 18.76C52.0654 18.584 51.9854 18.352 51.9854 18.064V6.808C51.9854 6.52 52.0654 6.296 52.2254 6.136C52.4014 5.96 52.6334 5.872 52.9214 5.872C53.1934 5.872 53.4094 5.96 53.5694 6.136C53.7454 6.296 53.8334 6.52 53.8334 6.808V18.064C53.8334 18.352 53.7454 18.584 53.5694 18.76C53.4094 18.92 53.1934 19 52.9214 19ZM52.8974 3.376C52.5454 3.376 52.2414 3.248 51.9854 2.992C51.7294 2.736 51.6014 2.424 51.6014 2.056C51.6014 1.656 51.7294 1.344 51.9854 1.12C52.2574 0.879999 52.5694 0.759999 52.9214 0.759999C53.2574 0.759999 53.5534 0.879999 53.8094 1.12C54.0814 1.344 54.2174 1.656 54.2174 2.056C54.2174 2.424 54.0894 2.736 53.8334 2.992C53.5774 3.248 53.2654 3.376 52.8974 3.376ZM61.3709 19C60.7309 19 60.1549 18.824 59.6429 18.472C59.1469 18.12 58.7549 17.632 58.4669 17.008C58.1949 16.384 58.0589 15.664 58.0589 14.848V1.168C58.0589 0.895999 58.1389 0.679999 58.2989 0.519999C58.4749 0.343999 58.6989 0.256 58.9709 0.256C59.2429 0.256 59.4589 0.343999 59.6189 0.519999C59.7949 0.679999 59.8829 0.895999 59.8829 1.168V14.848C59.8829 15.536 60.0189 16.096 60.2909 16.528C60.5789 16.96 60.9389 17.176 61.3709 17.176H61.9709C62.2109 17.176 62.4029 17.264 62.5469 17.44C62.6909 17.6 62.7629 17.816 62.7629 18.088C62.7629 18.36 62.6589 18.584 62.4509 18.76C62.2589 18.92 62.0029 19 61.6829 19H61.3709ZM72.7756 19.384C72.3916 19.384 72.0636 19.248 71.7916 18.976C71.5196 18.704 71.3836 18.376 71.3836 17.992C71.3836 17.592 71.5196 17.256 71.7916 16.984C72.0796 16.712 72.4076 16.576 72.7756 16.576C73.1596 16.576 73.4876 16.72 73.7596 17.008C74.0316 17.28 74.1676 17.608 74.1676 17.992C74.1676 18.36 74.0316 18.688 73.7596 18.976C73.5036 19.248 73.1756 19.384 72.7756 19.384ZM91.2025 19.12C89.9545 19.12 88.8265 18.832 87.8185 18.256C86.8265 17.68 86.0345 16.896 85.4425 15.904C84.8665 14.896 84.5705 13.768 84.5545 12.52V1.192C84.5545 0.903999 84.6345 0.679999 84.7945 0.519999C84.9705 0.343999 85.2025 0.256 85.4905 0.256C85.7625 0.256 85.9785 0.343999 86.1385 0.519999C86.3145 0.679999 86.4025 0.903999 86.4025 1.192V8.248C86.9305 7.496 87.6265 6.896 88.4905 6.448C89.3705 5.984 90.3465 5.752 91.4185 5.752C92.6505 5.752 93.7545 6.048 94.7305 6.64C95.7065 7.216 96.4745 8.008 97.0345 9.016C97.6105 10.024 97.8985 11.16 97.8985 12.424C97.8985 13.704 97.6025 14.848 97.0105 15.856C96.4345 16.864 95.6425 17.664 94.6345 18.256C93.6265 18.832 92.4825 19.12 91.2025 19.12ZM91.2025 17.44C92.1305 17.44 92.9625 17.224 93.6985 16.792C94.4345 16.344 95.0105 15.744 95.4265 14.992C95.8585 14.24 96.0745 13.384 96.0745 12.424C96.0745 11.48 95.8585 10.632 95.4265 9.88C95.0105 9.112 94.4345 8.512 93.6985 8.08C92.9625 7.648 92.1305 7.432 91.2025 7.432C90.2905 7.432 89.4665 7.648 88.7305 8.08C87.9945 8.512 87.4185 9.112 87.0025 9.88C86.5865 10.632 86.3785 11.48 86.3785 12.424C86.3785 13.384 86.5865 14.24 87.0025 14.992C87.4185 15.744 87.9945 16.344 88.7305 16.792C89.4665 17.224 90.2905 17.44 91.2025 17.44ZM107.307 19.12C106.075 19.12 104.971 18.832 103.995 18.256C103.019 17.664 102.243 16.864 101.667 15.856C101.107 14.848 100.827 13.712 100.827 12.448C100.827 11.168 101.115 10.024 101.691 9.016C102.283 8.008 103.083 7.216 104.091 6.64C105.099 6.048 106.235 5.752 107.499 5.752C108.763 5.752 109.891 6.048 110.883 6.64C111.891 7.216 112.683 8.008 113.259 9.016C113.851 10.024 114.155 11.168 114.171 12.448L113.427 13.024C113.427 14.176 113.155 15.216 112.611 16.144C112.083 17.056 111.355 17.784 110.427 18.328C109.515 18.856 108.475 19.12 107.307 19.12ZM107.499 17.44C108.427 17.44 109.251 17.224 109.971 16.792C110.707 16.36 111.283 15.768 111.699 15.016C112.131 14.248 112.347 13.392 112.347 12.448C112.347 11.488 112.131 10.632 111.699 9.88C111.283 9.128 110.707 8.536 109.971 8.104C109.251 7.656 108.427 7.432 107.499 7.432C106.587 7.432 105.763 7.656 105.027 8.104C104.291 8.536 103.707 9.128 103.275 9.88C102.843 10.632 102.627 11.488 102.627 12.448C102.627 13.392 102.843 14.248 103.275 15.016C103.707 15.768 104.291 16.36 105.027 16.792C105.763 17.224 106.587 17.44 107.499 17.44ZM113.235 19C112.963 19 112.739 18.92 112.563 18.76C112.387 18.584 112.299 18.36 112.299 18.088V13.984L112.755 12.088L114.171 12.448V18.088C114.171 18.36 114.083 18.584 113.907 18.76C113.731 18.92 113.507 19 113.235 19ZM118.845 18.376L117.333 17.56L126.261 6.208L127.509 7.264L118.845 18.376ZM118.005 19C117.445 19 117.165 18.72 117.165 18.16C117.165 17.6 117.445 17.32 118.005 17.32H126.909C127.469 17.32 127.749 17.6 127.749 18.16C127.749 18.72 127.469 19 126.909 19H118.005ZM117.909 7.552C117.349 7.552 117.069 7.272 117.069 6.712C117.069 6.152 117.349 5.872 117.909 5.872H126.813C127.373 5.872 127.653 6.152 127.653 6.712C127.653 7.272 127.373 7.552 126.813 7.552H117.909ZM136.253 19.12C135.021 19.12 133.917 18.832 132.941 18.256C131.965 17.664 131.189 16.864 130.613 15.856C130.053 14.848 129.773 13.712 129.773 12.448C129.773 11.168 130.061 10.024 130.637 9.016C131.229 8.008 132.029 7.216 133.037 6.64C134.045 6.048 135.181 5.752 136.445 5.752C137.709 5.752 138.837 6.048 139.829 6.64C140.837 7.216 141.629 8.008 142.205 9.016C142.797 10.024 143.101 11.168 143.117 12.448L142.373 13.024C142.373 14.176 142.101 15.216 141.557 16.144C141.029 17.056 140.301 17.784 139.373 18.328C138.461 18.856 137.421 19.12 136.253 19.12ZM136.445 17.44C137.373 17.44 138.197 17.224 138.917 16.792C139.653 16.36 140.229 15.768 140.645 15.016C141.077 14.248 141.293 13.392 141.293 12.448C141.293 11.488 141.077 10.632 140.645 9.88C140.229 9.128 139.653 8.536 138.917 8.104C138.197 7.656 137.373 7.432 136.445 7.432C135.533 7.432 134.709 7.656 133.973 8.104C133.237 8.536 132.653 9.128 132.221 9.88C131.789 10.632 131.573 11.488 131.573 12.448C131.573 13.392 131.789 14.248 132.221 15.016C132.653 15.768 133.237 16.36 133.973 16.792C134.709 17.224 135.533 17.44 136.445 17.44ZM142.181 19C141.909 19 141.685 18.92 141.509 18.76C141.333 18.584 141.245 18.36 141.245 18.088V13.984L141.701 12.088L143.117 12.448V18.088C143.117 18.36 143.029 18.584 142.853 18.76C142.677 18.92 142.453 19 142.181 19ZM157.967 19C157.695 19 157.471 18.912 157.295 18.736C157.119 18.56 157.031 18.344 157.031 18.088V11.848C157.031 10.856 156.839 10.04 156.455 9.4C156.087 8.76 155.575 8.28 154.919 7.96C154.279 7.64 153.551 7.48 152.735 7.48C151.951 7.48 151.239 7.632 150.599 7.936C149.975 8.24 149.479 8.656 149.111 9.184C148.743 9.712 148.559 10.312 148.559 10.984H147.239C147.271 9.976 147.543 9.08 148.055 8.296C148.567 7.496 149.247 6.872 150.095 6.424C150.943 5.96 151.887 5.728 152.927 5.728C154.063 5.728 155.079 5.968 155.975 6.448C156.871 6.912 157.575 7.6 158.087 8.512C158.615 9.424 158.879 10.536 158.879 11.848V18.088C158.879 18.344 158.791 18.56 158.615 18.736C158.439 18.912 158.223 19 157.967 19ZM147.647 19C147.359 19 147.127 18.92 146.951 18.76C146.791 18.584 146.711 18.36 146.711 18.088V6.808C146.711 6.52 146.791 6.296 146.951 6.136C147.127 5.96 147.359 5.872 147.647 5.872C147.919 5.872 148.135 5.96 148.295 6.136C148.471 6.296 148.559 6.52 148.559 6.808V18.088C148.559 18.36 148.471 18.584 148.295 18.76C148.135 18.92 147.919 19 147.647 19ZM168.929 19.12C167.649 19.12 166.505 18.832 165.497 18.256C164.489 17.68 163.697 16.888 163.121 15.88C162.545 14.872 162.257 13.728 162.257 12.448C162.257 11.152 162.545 10 163.121 8.992C163.697 7.984 164.489 7.192 165.497 6.616C166.505 6.04 167.649 5.752 168.929 5.752C170.209 5.752 171.345 6.04 172.337 6.616C173.345 7.192 174.137 7.984 174.713 8.992C175.289 10 175.585 11.152 175.601 12.448C175.601 13.728 175.305 14.872 174.713 15.88C174.137 16.888 173.345 17.68 172.337 18.256C171.345 18.832 170.209 19.12 168.929 19.12ZM168.929 17.44C169.857 17.44 170.689 17.224 171.425 16.792C172.161 16.36 172.737 15.768 173.153 15.016C173.569 14.264 173.777 13.408 173.777 12.448C173.777 11.488 173.569 10.632 173.153 9.88C172.737 9.112 172.161 8.512 171.425 8.08C170.689 7.648 169.857 7.432 168.929 7.432C168.001 7.432 167.169 7.648 166.433 8.08C165.697 8.512 165.113 9.112 164.681 9.88C164.265 10.632 164.057 11.488 164.057 12.448C164.057 13.408 164.265 14.264 164.681 15.016C165.113 15.768 165.697 16.36 166.433 16.792C167.169 17.224 168.001 17.44 168.929 17.44ZM181.445 19C181.237 19 181.053 18.944 180.893 18.832C180.733 18.72 180.621 18.576 180.557 18.4L176.813 7.168C176.717 6.768 176.725 6.456 176.837 6.232C176.949 5.992 177.173 5.872 177.509 5.872C177.717 5.872 177.901 5.928 178.061 6.04C178.221 6.152 178.341 6.328 178.421 6.568L181.757 16.768H181.229L184.325 6.592C184.389 6.384 184.493 6.216 184.637 6.088C184.797 5.944 184.997 5.872 185.237 5.872C185.477 5.872 185.669 5.936 185.813 6.064C185.973 6.192 186.085 6.368 186.149 6.592L189.101 16.528H188.693L191.957 6.568C192.117 6.104 192.413 5.872 192.845 5.872C193.197 5.872 193.437 6.008 193.565 6.28C193.693 6.536 193.693 6.832 193.565 7.168L189.821 18.4C189.757 18.576 189.645 18.72 189.485 18.832C189.341 18.944 189.165 19 188.957 19C188.749 19 188.557 18.944 188.381 18.832C188.221 18.72 188.117 18.576 188.069 18.4L185.045 8.368H185.333L182.309 18.4C182.245 18.592 182.133 18.744 181.973 18.856C181.813 18.952 181.637 19 181.445 19Z"
          fill="none"
          id="characterPath"
          // stroke="lightgrey"
        />

        {charArray.map((character, index) => (
          <text className="fill-dark text-[2px] font-bold dark:fill-light">
            {character}
            <animateMotion
              begin={`${spacing * index}s`}
              calcMode="linear"
              dur={`${duration}s`}
              fill="remove"
              repeatCount="indefinite"
              rotate={rotate}
            >
              <mpath href="#characterPath" />
            </animateMotion>
          </text>
        ))}
      </svg>
    </div>
  );
}
