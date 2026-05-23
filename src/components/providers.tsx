'use client';

import { ReactNode, useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Prevent hydration mismatch for Zustand stores that use localStorage
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <>{children}</>;
  }

  return (
    <>
      {children}

      {/* WhatsApp Floating Chat */}
      <FloatingWhatsApp
        phoneNumber="923188111495"
        accountName="WP Ustaad"
        chatMessage="Assalam o Alaikum 👋 How can we help you?"
        placeholder="Type your message..."
        statusMessage="Typically replies within minutes"
        avatar="/logo.png"
      />
    </>
  );
}