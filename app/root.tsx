import { cssBundleHref } from "@remix-run/css-bundle";
import stylesheet from "~/tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

// export const links: LinksFunction = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>  
      </body>
    </html>
  );
}

function Layout({children}: {children: ReactNode}) {
  return (
    <>
      <nav className="px-10 pt-s">
        <Link to="/" prefetch="intent" className="text-2xl font-semibold">
          Move<span className="text-teal-500">DB</span>
        </Link>

      </nav>
      <main>{children}</main>
    </>
  )
}