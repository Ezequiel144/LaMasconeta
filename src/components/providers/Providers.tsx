import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  return (
    <>
      {/* loaded &&  */(
        <SessionProvider>
          <NextTopLoader
            height={6}
            showSpinner={false}
            shadow="0 0 10px #8c00f8,0 0 5px #8c00f8"
            color="#A02EEF"
          />
          {children}
        </SessionProvider>
      )}
    </>
  );
};
