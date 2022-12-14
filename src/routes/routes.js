import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Skills = lazy(() => import('../pages/Skills/Skills'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const CV = lazy(() => import('../pages/CV/CV'));
const Additionally = lazy(() => import('../pages/Additionally/Additionally'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

const routes = [
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/skills',
    element: (
      <Suspense>
        <Skills />
      </Suspense>
    ),
  },
  {
    path: '/projects',
    element: (
      <Suspense>
        <Projects />
      </Suspense>
    ),
  },
  {
    path: '/cv',
    element: (
      <Suspense>
        <CV />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: '/additionally',
    element: (
      <Suspense>
        <Additionally />
      </Suspense>
    ),
  },
];

export default routes;
