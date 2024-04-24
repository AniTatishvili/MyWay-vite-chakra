declare module 'country-flag-react' {
    import { FC } from 'react';
  
    interface CountryFlagProps {
      countryCode: string;
      svg?: boolean;
    }
  
    const CountryFlag: FC<CountryFlagProps>;
  
    export default CountryFlag;
  }
  