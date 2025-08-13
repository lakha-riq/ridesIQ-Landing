'use client';

import { useEffect } from 'react';
import clarity from 'react-microsoft-clarity';
import Mouseflow from 'react-mouseflow';

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    const mouseflowId = process.env.NEXT_PUBLIC_MOUSEFLOW_ID;

    if (clarityId) {
      clarity.init(clarityId);
    }

    if (mouseflowId) {
      Mouseflow.init(mouseflowId);
    }
  }, []);

  return <>{children}</>;
}
