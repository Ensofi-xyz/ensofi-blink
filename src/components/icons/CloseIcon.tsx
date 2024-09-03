import { FC, SVGProps } from 'react';

const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...otherProps}>
      <path
        d="M18.3002 6.21022C18.2077 6.11752 18.0978 6.04397 17.9768 5.99379C17.8559 5.94361 17.7262 5.91778 17.5952 5.91778C17.4643 5.91778 17.3346 5.94361 17.2136 5.99379C17.0926 6.04397 16.9827 6.11752 16.8902 6.21022L12.0002 11.0902L7.11022 6.20022C7.01764 6.10764 6.90773 6.0342 6.78677 5.9841C6.6658 5.93399 6.53615 5.9082 6.40522 5.9082C6.27429 5.9082 6.14464 5.93399 6.02368 5.9841C5.90272 6.0342 5.79281 6.10764 5.70022 6.20022C5.60764 6.29281 5.5342 6.40272 5.4841 6.52368C5.43399 6.64464 5.4082 6.77429 5.4082 6.90522C5.4082 7.03615 5.43399 7.1658 5.4841 7.28677C5.5342 7.40773 5.60764 7.51764 5.70022 7.61022L10.5902 12.5002L5.70022 17.3902C5.60764 17.4828 5.5342 17.5927 5.4841 17.7137C5.43399 17.8346 5.4082 17.9643 5.4082 18.0952C5.4082 18.2262 5.43399 18.3558 5.4841 18.4768C5.5342 18.5977 5.60764 18.7076 5.70022 18.8002C5.79281 18.8928 5.90272 18.9662 6.02368 19.0163C6.14464 19.0665 6.27429 19.0922 6.40522 19.0922C6.53615 19.0922 6.6658 19.0665 6.78677 19.0163C6.90773 18.9662 7.01764 18.8928 7.11022 18.8002L12.0002 13.9102L16.8902 18.8002C16.9828 18.8928 17.0927 18.9662 17.2137 19.0163C17.3346 19.0665 17.4643 19.0922 17.5952 19.0922C17.7262 19.0922 17.8558 19.0665 17.9768 19.0163C18.0977 18.9662 18.2076 18.8928 18.3002 18.8002C18.3928 18.7076 18.4662 18.5977 18.5163 18.4768C18.5665 18.3558 18.5922 18.2262 18.5922 18.0952C18.5922 17.9643 18.5665 17.8346 18.5163 17.7137C18.4662 17.5927 18.3928 17.4828 18.3002 17.3902L13.4102 12.5002L18.3002 7.61022C18.6802 7.23022 18.6802 6.59022 18.3002 6.21022Z"
        fill="currentColor"
      />
    </svg>
  );
};

CloseIcon.displayName = 'CloseIcon';
export default CloseIcon;
