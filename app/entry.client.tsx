/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

// app/entry.client.tsx

import { hydrate } from 'react-dom';
import { RemixBrowser } from '@remix-run/react';
import './styles/global.css'; // Asegúrate de importar tu archivo CSS global




import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
hydrate(<RemixBrowser />, document);
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
