import { useState } from 'react'
// import { useLenis } from './useLenis.js'

export default function App() {
  const [page, setPage] = useState('home')

  // useLenis()
  return (
    <div>
      <nav className="nav">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('about')}>About</button>
        <p className="nav-hint">
          Switching pages re-mounts this component — use this to demo the
          duplicate-scroll-listener bug if you skip lenis.destroy().
        </p>
      </nav>

      {page === 'home' ? <HomeSections /> : <AboutSections />}
    </div>
  )
}

function HomeSections() {
  return (
    <main>
      <section className="section section-hero">
        <span className="eyebrow">Lenis Demo</span>
        <h1>Lenis + React</h1>
        <p>Home page. Scroll down.</p>
      </section>
      <section className="section"><h2>Home — Section 1</h2></section>
      <section className="section"><h2>Home — Section 2</h2></section>
      <section className="section"><h2>Home — Section 3</h2></section>
    </main>
  )
}

function AboutSections() {
  return (
    <main>
      <section className="section section-hero">
        <span className="eyebrow">Lenis Demo</span>
        <h1>About Page</h1>
        <p>Simulates a route change, like Next.js App Router.</p>
      </section>
      <section className="section"><h2>About — Section 1</h2></section>
      <section className="section"><h2>About — Section 2</h2></section>
    </main>
  )
}