/* "use client"; */
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  
  /* const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []); */

  return (
    <>
      {/* loaded &&  */(
        <SessionProvider>
          <NextTopLoader
            height={6}
            showSpinner={false}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            color="#A02EEF"
          />
          {children}
        </SessionProvider>
      )}
    </>
  );
};
