import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ReadingProgressBar from './ReadingProgressBar';
import gallery from '../../assets/Blog/DogFood/gallery.png';
import scoring from '../../assets/Blog/DogFood/scoring.png';
import judgeDesk from '../../assets/Blog/DogFood/judge-desk.png';

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

interface Props {
  onBack: () => void;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold mt-14 mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
      {children}
    </p>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </div>
      <figcaption className="mt-3 text-sm italic" style={{ color: 'var(--text-secondary)' }}>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function DogFoodArticle({ onBack }: Props) {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Building Broadsheet: a hackathon platform in FastAPI, Postgres and Docker | Pawan Bhandari';
    return () => { document.title = previous; };
  }, []);

  return (
    <div className="relative z-10">
      <ReadingProgressBar />
      <main className="w-full max-w-6xl mx-auto px-6 pt-8 pb-24 min-h-screen">
        <button
          onClick={onBack}
          className="self-start text-sm font-medium transition-colors group flex items-center gap-2 z-20 mb-8 hover:text-[#8B5CF6]"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
          Back to blogs
        </button>

        <div className="flex justify-center">
          <div className="min-w-0 w-full max-w-3xl">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: 'rgba(183,243,107,0.12)', color: '#5fa832' }}>
              Hackathon Raptors &middot; DogFood 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
              Building Broadsheet: a hackathon platform in FastAPI, Postgres and Docker
            </h1>
            <p className="text-lg mb-5" style={{ color: 'var(--text-secondary)' }}>
              A self-hosted platform for running a hackathon, built with Claude Code as a pair programmer &mdash; and the one-line deployment bug that cost hours before it ran online.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-10">
              <span className="font-semibold" style={{ color: '#8B5CF6' }}>Pawan Bhandari</span>
              <span style={{ color: 'var(--text-secondary)' }}>&middot; DOGFOOD 2026</span>
              <span style={{ color: 'var(--text-secondary)' }}>&middot; October 2, 2026</span>
              <span style={{ color: 'var(--text-secondary)' }}>&middot; ~5 min read</span>
            </div>
          </motion.div>

          <P>I&rsquo;ll be upfront: I built Broadsheet with Claude Code as my pair programmer, and it wrote most of the code. My job was deciding what to build, testing it, pushing back, and getting it live. So this isn&rsquo;t a post about a clever algorithm I came up with alone. It&rsquo;s about steering a project that turned out much bigger than it looked.</P>
          <P>Code: <a href="https://github.com/PawanBhandari03/DogFood-HackaThon" target="_blank" rel="noopener" className="underline" style={{ color: '#8B5CF6' }}>github.com/PawanBhandari03/DogFood-HackaThon</a></P>

          <Figure src={gallery} alt="Broadsheet public gallery showing submitted hackathon projects with search and filter controls." caption="The public gallery. Anyone can search and filter submitted projects without logging in." />

          <H2>What Broadsheet is</H2>
          <P>Broadsheet is a self-hosted platform for running a hackathon. Organizers create an event, teams submit projects, judges score them, people can vote, and the results get published. It runs with one command, <code>docker compose up</code>.</P>

          <H2>The real challenge: scale</H2>
          <P>Broadsheet looks like one product, but it&rsquo;s really several. There&rsquo;s an organizer dashboard, a judge desk, a participant view, team invites, submissions, judging, voting and results. Every role needs its own screens, every task needs a clear owner, and every action needs a rule about who&rsquo;s allowed to do it.</P>
          <P>Security followed the same pattern. It wasn&rsquo;t one big feature. It was dozens of small checks that all had to agree. No single piece was especially hard, but making all of them work together was the real job.</P>

          <H2>The decision that shaped everything: one app, one database</H2>
          <P>We made Postgres the only database and kept the app as a single FastAPI service that renders its pages on the server. We also used server-side sessions instead of JWTs, because a session can be revoked instantly.</P>
          <P>Postgres-only meant we could use a partial unique index (&ldquo;one live project per team&rdquo;) and store audit details as JSON. That kept the rules inside the database, not scattered through the code. The trade-off is that you can&rsquo;t just run it on SQLite.</P>

          <H2>The Docker and deployment gotcha that cost hours</H2>
          <P>Everything worked on localhost. Then I tried to put it online on Railway. I even planned a separate frontend on Vercel before realizing the pages are rendered by the server, so there was nothing to split out.</P>
          <P>The real problem was the database connection. Railway gives you a <code>postgres://</code> address, but our driver needs <code>postgresql+psycopg://</code>. Until we rewrote the start of that URL, the app simply couldn&rsquo;t connect. It&rsquo;s one line of code, but finding it took a long time.</P>

          <H2>The scoring idea I&rsquo;m glad we didn&rsquo;t ship</H2>
          <P>Each project is only seen by a few judges, so a plain average mostly shows which judges you got. A harsh judge drags a project down. The usual fix is to adjust every judge&rsquo;s scores based on how they usually score.</P>
          <P>That breaks on real data. A judge with one review has no spread to measure. A judge who gives every project a 4 gives you a division by zero. So instead of the simple version, we used shrinkage: a judge with few reviews gets pulled toward the event average, and a judge with many reviews is barely touched.</P>
          <P>On our test data, the top three changes depending on whether you correct for judges, and 9 projects move four or more places. The results page shows raw and normalized scores side by side, plus a margin of error, so two close projects aren&rsquo;t presented as a real difference.</P>
          <Figure src={scoring} alt="Results table comparing raw and judge-normalized scores for a sample hackathon event, with margin of error and rank movement columns." caption={'Raw versus normalized results on the sample event. “Move” shows how many places the judge correction shifted each project, and ± S.E. shows how reliable each score is.'} />

          <H2>The part of the spec that looked simple</H2>
          <P>&ldquo;A judge can&rsquo;t see another judge&rsquo;s scores.&rdquo; It sounds like one line. It really means every judge query is locked to the logged-in judge, someone else&rsquo;s ID returns an error, and every refused attempt gets logged. Hiding a button doesn&rsquo;t count. We also made a request about a nonexistent judge return the same error as a real one, so nobody can use it to find out who the judges are.</P>
          <P>The deadline was the same. It isn&rsquo;t one check. It has to hold on every single write, so it lives in one place that every route calls.</P>
          <Figure src={judgeDesk} alt="Judge desk interface showing a scoring form with weighted criteria sliders and a comment box, next to the Broadsheet masthead." caption={'The judge desk. Each judge sees only their own assigned projects and score sheets, with the organizer’s rubric and weights.'} />

          <H2>Demo data mattered more than I expected</H2>
          <P>An empty database proves nothing, so we built about 30 judges and 40 projects of test data, including awkward cases on purpose: a judge with one review, a judge who scores everything the same, and uneven draws. Most of the real bugs showed up there. There&rsquo;s also a seeded &ldquo;Practice Jam&rdquo; event, so anyone can log in and click through the whole flow straight away.</P>

          <H2>What took the longest</H2>
          <P>The T4 extras: webhooks, certificates, signed judge records, an embeddable widget. They look small, but each has edge cases. A failed webhook must never break the action that triggered it. Certificates should show rank only after results are published. And we hit a real bug when the judge-records feature referenced a database relationship that didn&rsquo;t exist, which we only found in testing.</P>

          <H2>What I&rsquo;d change</H2>
          <P>By the end, the app had a lot going on, and a first-time organizer would probably feel it. If I did it again, I&rsquo;d build fewer features and make every screen obvious.</P>

          <H2>What we left out on purpose</H2>
          <P>We didn&rsquo;t build fancy optimal judge assignment. A simple &ldquo;least loaded judge first&rdquo; rule stays within one review of perfectly balanced, and an organizer can understand it. Pairwise judging is also out. Those are the next steps.</P>

          <H2>Where it stands</H2>
          <P>The provided checker verifies the core and judging tiers (T1 and T2). Community voting (T3) and the API, webhook and certificate extras (T4) are built and tested, and anyone can check them by reading the repo.</P>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <a href="https://github.com/PawanBhandari03/DogFood-HackaThon" target="_blank" rel="noopener" className="flex-1 rounded-xl px-5 py-4 font-semibold transition-colors" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', color: '#8B5CF6' }}>
              Repository &rarr; <span className="block text-xs font-normal mt-1" style={{ color: 'var(--text-secondary)' }}>github.com/PawanBhandari03/DogFood-HackaThon</span>
            </a>
          </div>

          <div className="mt-14 pt-6 border-t text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
            <p className="italic mb-4">Author: Pawan Bhandari &middot; DOGFOOD 2026 hackathon. Originally published on Medium, October 2, 2026.</p>
            <p><strong>AI-assistance disclosure:</strong> Broadsheet was built with Claude Code as a pair programmer, which wrote most of the implementation. I made the product and architecture decisions, tested the result, and am responsible for the claims made in this article.</p>
          </div>

          </div>
        </div>
      </main>
    </div>
  );
}
