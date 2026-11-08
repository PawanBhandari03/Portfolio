import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TableOfContents, { type TocItem } from './TableOfContents';
import ReadingProgressBar from './ReadingProgressBar';
import hero from '../../assets/Blog/SpeedDemon/hero.png';
import v01 from '../../assets/Blog/SpeedDemon/v01-overview.png';
import v03 from '../../assets/Blog/SpeedDemon/v03-progression.png';
import v04 from '../../assets/Blog/SpeedDemon/v04-phrase-flow.png';
import v05 from '../../assets/Blog/SpeedDemon/v05-bfs.png';
import v07 from '../../assets/Blog/SpeedDemon/v07-measurement.png';
import v09 from '../../assets/Blog/SpeedDemon/v09-hardware.png';
import v10 from '../../assets/Blog/SpeedDemon/v10-scoring.png';
import v14 from '../../assets/Blog/SpeedDemon/v14-stageprofile.png';
import v15 from '../../assets/Blog/SpeedDemon/v15-fiverun.png';

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

interface Props {
  onBack: () => void;
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-extrabold mt-14 mb-4 leading-tight scroll-mt-28" style={{ color: 'var(--text-primary)' }}>
      {children}
    </h2>
  );
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently, no UI state change.
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md transition-colors"
      style={{ color: copied ? '#B7F36B' : '#C7D0D6', backgroundColor: copied ? 'rgba(183,243,107,0.1)' : 'transparent' }}
      aria-label="Copy code to clipboard"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? 'Copied' : 'Copy'}
    </button>
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

function CodeBlock({ label, lang, code }: { label: string; lang: string; code: string }) {
  return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#0d1117' }}>
      <div className="flex items-center justify-between px-5 py-3 text-xs font-mono" style={{ backgroundColor: '#111820', color: '#C7D0D6' }}>
        <span>{label}</span>
        <div className="flex items-center gap-3">
          <span className="font-bold" style={{ color: '#67D7F5' }}>{lang}</span>
          <CopyButton text={code} />
        </div>
      </div>
      <pre className="px-5 py-5 overflow-x-auto text-[13px] leading-relaxed" style={{ color: '#E6EDF3' }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-7 rounded-xl px-6 py-5 border-l-4"
      style={{ backgroundColor: 'rgba(183,243,107,0.08)', borderLeftColor: '#B7F36B', color: 'var(--text-primary)' }}
    >
      {children}
    </blockquote>
  );
}

function ResultsTable() {
  const rows: [string, string, string, string, boolean][] = [
    ['A · Ingest', '32.05 s', '0.040 s / 41 MB', '72.491', false],
    ['B · Index', '56.35 s', '0.226 s / 100 MB', '65.999', false],
    ['C · Join', '14.44 s', '0.054 s / 12 MB', '70.384', false],
    ['D · Traverse', '72.69 s', '0.312 s / 156 MB', '59.190 · weakest', true],
  ];
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--border-color)' }}>
      <table className="w-full text-sm md:text-[15px] font-mono border-collapse">
        <thead>
          <tr style={{ backgroundColor: '#111820' }}>
            {['Track', 'Reference time', 'Live-board result', 'Machine points'].map((h) => (
              <th key={h} className="text-left px-4 py-3 text-white font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
              <td className="px-4 py-3" style={{ color: 'var(--text-primary)' }}>{r[0]}</td>
              <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>{r[1]}</td>
              <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>{r[2]}</td>
              <td className="px-4 py-3 font-bold" style={{ color: r[4] ? 'var(--text-secondary)' : '#2E6B3A' }}>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExperimentsTable() {
  const rows: [string, string, string, string][] = [
    ['AVX2 + PCLMUL (C)', 'Faster structure indexing', '75 ms vs 64 ms', 'REVERTED'],
    ['pread 128 KB blocks (C)', 'Laptop gain would transfer', '60 ms vs 56–58 ms', 'REVERTED in C'],
    ['One thread per physical core', 'Less L2 contention', 'A 69 vs 40; B 313 vs 239; C 77 vs 53 ms', 'REVERTED'],
    ['Half-size name table (C)', 'Save about 2 MB', '82 ms vs 55–64 ms', 'REVERTED'],
    ['Shared name table (C)', 'Lower peak memory', '66 MB → 15 MB; slower locally', 'KEPT for score trade-off'],
  ];
  return (
    <div className="my-8">
      {/* Desktop/tablet: full table. Hidden below md so it never forces horizontal
          scroll on a phone — a fixed-width table was spilling past the screen edge. */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--border-color)' }}>
        <table className="w-full text-sm font-mono border-collapse">
          <thead>
            <tr style={{ backgroundColor: '#111820' }}>
              {['Experiment', 'Expectation / local signal', 'Board observation', 'Decision'].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-white font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
                <td className="px-4 py-3" style={{ color: 'var(--text-primary)' }}>{r[0]}</td>
                <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>{r[1]}</td>
                <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>{r[2]}</td>
                <td className="px-4 py-3 font-bold" style={{ color: r[3].startsWith('KEPT') ? '#2E6B3A' : '#C45B45' }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: the same data as stacked cards, no fixed width, nothing overflows. */}
      <div className="md:hidden flex flex-col gap-3">
        {rows.map((r) => (
          <div key={r[0]} className="rounded-xl border p-4 text-sm font-mono" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            <p className="font-sans font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{r[0]}</p>
            <p className="text-[11px] font-sans uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>Expectation</p>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{r[1]}</p>
            <p className="text-[11px] font-sans uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>Board observation</p>
            <p className="mb-2 break-words" style={{ color: 'var(--text-secondary)' }}>{r[2]}</p>
            <p className="font-bold" style={{ color: r[3].startsWith('KEPT') ? '#2E6B3A' : '#C45B45' }}>{r[3]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const ring_code = `uint64_t ring[8];
uint32_t pos = 0, seen = 0;
bool found = false;

tokenize_line(dbase + doc_off[d], dend, [&](uint64_t key) {
    ring[pos] = key;
    pos = pos + 1 == k ? 0 : pos + 1;
    if (found || ++seen < k || key != keys[ids[k - 1]]) return;

    uint32_t m = 0;
    for (uint32_t r = pos; m < k && ring[r] == keys[ids[m]];
         r = r + 1 == k ? 0 : r + 1) ++m;
    found = m == k;
});`;

const bfs_code = `std::vector<uint32_t> order;
order.reserve(n);
std::vector<uint32_t> new_id(n, UINT32_MAX);
for (uint32_t root = 0; root < n; ++root) {
    if (new_id[root] != UINT32_MAX) continue;
    new_id[root] = static_cast<uint32_t>(order.size());
    order.push_back(root);
    for (size_t head = order.size() - 1; head < order.size(); ++head)
        for (uint32_t i = off[order[head]], e = off[order[head] + 1]; i < e; ++i) {
            const uint32_t v = arcs[i].to;
            if (new_id[v] == UINT32_MAX) {
                new_id[v] = static_cast<uint32_t>(order.size());
                order.push_back(v);
            }
        }
}
{
    std::vector<uint32_t> off2(n + 1, 0);
    std::vector<uint8_t> has_in2(n);
    for (uint32_t x = 0; x < n; ++x) {
        off2[x + 1] = off2[x] + (off[order[x] + 1] - off[order[x]]);
        has_in2[x] = has_in[order[x]];
    }
    std::vector<Arc> arcs2(m);
    parallel(nt, [&](int i) {
        for (uint64_t x = n * i / nt; x < n * (i + 1) / nt; ++x) {
            uint32_t pos = off2[x];
            for (uint32_t j = off[order[x]], e = off[order[x] + 1]; j < e; ++j)
                arcs2[pos++] = {new_id[arcs[j].to], arcs[j].w};
        }
    });
    off.swap(off2);
    arcs.swap(arcs2);
    has_in.swap(has_in2);
}
std::vector<uint32_t>().swap(order);`;

const TOC_ITEMS: TocItem[] = [
  { id: 'four-speed-problems', label: 'Four speed problems' },
  { id: 'formula-disagreed', label: 'The formula disagreed' },
  { id: 'phrase-queries', label: 'The wrong hypothesis' },
  { id: 'simd-rewrite', label: 'The SIMD rewrite' },
  { id: 'graph-numbering', label: 'Graph numbering' },
  { id: 'track-a-change', label: 'The Track A change' },
  { id: 'passing-run-bug', label: 'The comparison bug' },
  { id: 'commits-story', label: '116 commits' },
  { id: 'clean-measurement', label: 'Measurement limits' },
  { id: 'optimise-again', label: 'What I would redo' },
  { id: 'repository-evidence', label: 'The repository' },
  { id: 'result-i-trust', label: 'The result I trust' },
];

export default function SpeedDemonArticle({ onBack }: Props) {
  // Give the tab/bookmark a real title instead of the generic portfolio one
  // while this post is open, and restore it on the way out.
  useEffect(() => {
    const previous = document.title;
    document.title = 'I Thought Faster C++ Was the Whole Game. The Scoring Board Disagreed. | Pawan Bhandari';
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

        <div className="flex gap-10 items-start justify-center">
          <TableOfContents items={TOC_ITEMS} />
          <div className="min-w-0 w-full max-w-3xl">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: 'rgba(183,243,107,0.12)', color: '#5fa832' }}>
              Hackathon Raptors &middot; Speed Demon 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
              I Thought Faster C++ Was the Whole Game. The Scoring Board Disagreed.
            </h1>
            <p className="text-lg mb-5" style={{ color: 'var(--text-secondary)' }}>
              Four workloads, 116 commits, and several optimisations that only looked good on my laptop.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-8">
              <span className="font-semibold" style={{ color: '#8B5CF6' }}>Pawan Bhandari</span>
              <span style={{ color: 'var(--text-secondary)' }}>&middot; Team BobTheBuilder &middot; Solo entry</span>
              <span style={{ color: 'var(--text-secondary)' }}>&middot; ~18 min read</span>
            </div>
            <div className="rounded-2xl overflow-hidden mb-10">
              <img src={hero} alt="Abstract processor and performance dial with lime and cyan data-flow traces on a graphite background." className="w-full h-auto block" />
            </div>
          </motion.div>

      <P>I entered Hackathon Raptors&rsquo; Speed Demon challenge as <strong style={{ color: 'var(--text-primary)' }}>BobTheBuilder</strong>. It was a solo entry: I built and tuned the submission myself. My plan sounded straightforward&mdash;rewrite four slow workloads in C++20, remove unnecessary overhead, measure the result, and repeat.</P>
      <P>The first rewrite made that approach look convincing. Execution times fell from tens of seconds to fractions of a second. Then the scoring board began to disagree with my laptop. A SIMD rewrite regressed. Running one thread per physical core made three tracks slower. A smaller memory footprint survived even though execution became slower. In the graph track, changing the order of node IDs mattered more than replacing the search algorithm.</P>
      <P>This is not a chronological tour of 116 commits. It is an account of the assumptions I started with, the experiments that challenged them, and what the measurements could&mdash;and could not&mdash;prove.</P>

      <H2 id="four-speed-problems">I thought I was solving four speed problems. I was really solving four different data-access problems.</H2>
      <P>Speed Demon ran from October 30 to November 2, 2026. I entered four independent workloads, each implemented as a standalone C++20 program without external libraries.</P>
      <P><strong style={{ color: 'var(--text-primary)' }}>Track A &mdash; Ingest</strong> processed 3.1 million log lines into hourly and per-endpoint statistics, including p50, p95 and p99 latency. <strong style={{ color: 'var(--text-primary)' }}>Track B &mdash; Index</strong> answered 50,000 boolean and phrase queries over 250,000 documents. <strong style={{ color: 'var(--text-primary)' }}>Track C &mdash; Join</strong> parsed a hostile CSV containing quoted commas, escaped quotes, embedded newlines, mixed line endings and UTF-8 BOMs at some chunk boundaries, then joined the records against a region table. <strong style={{ color: 'var(--text-primary)' }}>Track D &mdash; Traverse</strong> handled a directed weighted graph with five million edges and 2,000 shortest-path queries.</P>
      <P>Each workload stressed a different part of a program: parsing and aggregation, repeated document access, CSV correctness, or graph representation. I could not assume that an optimisation that helped one track would help the others.</P>
      <Callout>
        <strong>The point:</strong> The four tracks shared a scoring harness, not a bottleneck. Every optimisation had to earn its place in the workload where I used it.
      </Callout>
      <Figure src={v01} alt="Four cards summarising the Ingest, Index, Join and Traverse workloads." caption="Four workloads, four different data-access patterns. Each uses a different algorithm; nothing is shared between them except the scoring harness." />

      <H2 id="formula-disagreed">I thought faster execution was the whole score. The formula disagreed.</H2>
      <P>The competition did not score wall-clock time alone. Its efficiency coefficient combined four ratios against the reference implementation:</P>
      <div className="my-6 rounded-xl px-5 py-5 font-mono text-sm overflow-x-auto" style={{ backgroundColor: '#0d1117', color: '#E6EDF3' }}>
        K = (T_ref / T)^0.50 &times; (M_ref / M)^0.20 &times; (S_ref / S)^0.15 &times; (D_ref / D)^0.15
      </div>
      <P>Here, T is wall time, M is peak memory, S is source size and D is the dependency factor. Time carried a 0.50 weight; memory carried 0.20; source size and dependencies carried 0.15 each. Memory had a 50&times; cap. Source size and dependency factors could reduce K, but could not earn a bonus below the reference. The machine score was calculated as 50 &times; log10(K), clamped to a range of 0&ndash;100. Track totals combined 65% machine score with 35% judging, and the overall title used the geometric mean of the best three track totals. The <a href="https://speeddemon.dev/" target="_blank" rel="noopener" className="underline" style={{ color: '#8B5CF6' }}>official scoring page</a> documents the formula and its gates.</P>
      <P>That changed how I evaluated an optimisation. A smaller table could be worth keeping even if it slowed execution. The useful question was no longer only &ldquo;did the runtime fall?&rdquo; It was &ldquo;what happened to the complete scoring objective?&rdquo;</P>
      <Figure src={v10} alt="Scoring pipeline showing time, memory, source-size and dependency factors feeding K, machine points, track totals and best-three aggregate." caption="How the score is assembled, from the four weighted inputs through to the overall best-three aggregate." />
      <ResultsTable />
      <P><em>The November 7 live board showed BobTheBuilder at rank 60 with a displayed best-three figure of 69.572. This matches the geometric mean of the visible machine-point values for A, B and C, with D omitted. I present it as a live-board snapshot, not as a final judge-weighted result.</em></P>
      <P>Track C made the scoring trade-off concrete. A shared-name-table change reduced memory from 66 MB to 15 MB, but local execution became about 35% slower. The time factor was approximately 0.861 and the memory factor approximately 1.345. Multiplying those two affected factors gives about 1.158&mdash;not the full K and not a 1.158&times; increase in points. My <code>PERF.md</code> calculation favoured the trade-off, so I kept the change.</P>

      <H2 id="phrase-queries">I thought common words were making phrase queries expensive. Skipping them changed nothing.</H2>
      <P>Track B gave me the clearest example of a wrong hypothesis. My notes showed phrase queries consuming about 85% of query CPU time. The phrase check revisited 214,226 candidate documents and performed a hash-table lookup for every token in each candidate.</P>
      <P>I initially blamed phrases made entirely of common words and tried skipping them. The result did not change. The expensive work was happening further down the path: the original code tokenised each candidate, called <code>dict.find()</code> for every token, stored token IDs in a vector, and then scanned that vector for the phrase.</P>
      <P>I changed the check to stream through the document while retaining the most recent <em>k</em> token keys in a ring. Because the query grammar limited phrases to eight terms, the ring had eight entries. The implementation scanned the ring only when the newest token matched the phrase&rsquo;s final key.</P>
      <Figure src={v04} alt="Phrase-query flow comparing repeated per-token dictionary lookups with a bounded ring of recent token keys." caption="The phrase-query flow: repeated dictionary lookup and temporary token array versus direct key comparison against a bounded ring. Conceptual explanation, not a profiler capture." />
      <CodeBlock label="track-b/main.cpp · ring-buffer phrase check" lang="C++20" code={ring_code} />
      <P>In local analysis, phrase CPU time moved from roughly 2.6&ndash;3.2 seconds to 1.6&ndash;1.8 seconds. A later WSL2 session measured the phrase branch at 3,314 ms before and 2,003 ms after. These are laptop measurements, not scoring-board timings.</P>
      <P>Commit <code>dc3fd0b</code> bundled the ring-buffer check with dense-term bitsets and a key-only probe array. Because those changes landed together, I cannot attribute the whole measured improvement to the ring alone. A separate stage cut on the current scan measured tokenisation at about 180 ms and table lookups at about 480 ms within a roughly 650 ms scan. That was a different experiment, not another breakdown of the phrase-timing run.</P>
      <Figure src={v14} alt="Grouped horizontal bars comparing seven Track B processing stages in warm local runs two and three." caption="Warm local WSL2 runs, current HEAD, i5-10300H, 8 threads. Separate from the phrase-branch timing above; not a scoring-board result." />

      <H2 id="simd-rewrite">I thought a clever SIMD rewrite had to win. The board made me revert it.</H2>
      <P>The most useful regressions were not random failures. Each had a technical reason that made it look promising before I measured it.</P>
      <P>For Track C, I added an AVX2/PCLMUL structure index with SWAR number parsing. The implementation passed the tiny, sample and full output checks, but the scoring board returned about 75 ms against a previous 64 ms. I reverted it.</P>
      <P>I then tried reading with <code>pread</code> in 128 KB blocks. On my laptop, that appeared about 8% faster: approximately 80&ndash;90 ms fell to 74&ndash;80 ms. The board showed around 60 ms against the previous 56&ndash;58 ms. I backed the change out of Track C. The same general input approach helped Track A, which was another reminder that a technique can behave differently across workloads.</P>
      <P>Thread allocation produced an even clearer warning. I tried using one thread per physical core&mdash;six worker threads in an environment exposing twelve scoring threads&mdash;because I expected less L2 contention. Instead, Track A moved from 40 ms to 69 ms, Track B from 239 ms to 313 ms, and Track C from 53 ms to 77 ms. I reverted the experiment.</P>
      <P>My interpretation was that the second hardware thread helped hide memory latency. That explanation fits the observed pattern, but it remains an inference rather than a separately measured hardware-counter result.</P>
      <ExperimentsTable />
      <P>The lesson was not that SIMD, <code>pread</code> or physical-core pinning is inherently bad. It was that none of those techniques is a result by itself. A method can help one workload and hurt another. I had to measure it on the scoring target and be willing to revert it when the evidence went the other way.</P>

      <H2 id="graph-numbering">I thought the graph needed a smarter search. Its numbering was making the search wait.</H2>
      <P>Track D used a directed weighted graph with five million edges and 2,000 shortest-path queries. The input node IDs were shuffled. During Dijkstra relaxation, a neighbour&rsquo;s ID determined where the program accessed the distance and CSR arrays. As a result, graph-near nodes could lead to accesses at far-apart memory locations.</P>
      <P>I tried BFS renumbering: traverse the graph in discovery order, assign a new ID when each node is first reached, rebuild the CSR layout using those IDs, and translate query endpoints through the mapping. The graph itself did not change; its numbering and array layout did.</P>
      <P>The reasoning was that graph-near nodes would receive nearby IDs and therefore occupy more local positions in the reordered arrays. That supports a memory-locality explanation. It does not prove that every access missed cache or that particular nodes fit within one cache line.</P>
      <Figure src={v05} alt="Same graph shown with shuffled node IDs and BFS discovery-order IDs mapped to reordered arrays." caption="Conceptual view of shuffled node IDs and BFS discovery-order renumbering. The graph topology is unchanged; only identifiers and array layout are reorganised. Not a cache trace or literal memory dump." />
      <P><strong style={{ color: 'var(--text-primary)' }}>The implementation &mdash; <code>track-d/main.cpp</code> &middot; C++20</strong></P>
      <P>The following excerpt shows the BFS ordering and CSR rebuild introduced between{' '}
        <a href="https://github.com/PawanBhandari03/SpeedDemon_Entry/commit/07e6cfd" target="_blank" rel="noopener" className="underline" style={{ color: '#8B5CF6' }}><code>07e6cfd</code></a>{' '}and{' '}
        <a href="https://github.com/PawanBhandari03/SpeedDemon_Entry/commit/a2bcaa7" target="_blank" rel="noopener" className="underline" style={{ color: '#8B5CF6' }}><code>a2bcaa7</code></a>.
        {' '}Explanatory comments and surrounding declarations are omitted so the focus stays on the implementation:
      </P>
      <CodeBlock label="track-d/main.cpp · BFS renumbering" lang="C++20" code={bfs_code} />
      <P><code>order</code> maps each new ID to its old ID; <code>new_id</code> maps each old ID to its new ID. The code visits every connected component, assigns IDs in discovery order, then rebuilds the CSR offsets and edges using the new numbering. Query endpoints are translated through <code>new_id</code> elsewhere in the implementation. The follow-up commit{' '}
        <a href="https://github.com/PawanBhandari03/SpeedDemon_Entry/commit/5c8f65b" target="_blank" rel="noopener" className="underline" style={{ color: '#8B5CF6' }}><code>5c8f65b</code></a> later parallelised the renumbering pass.</P>
      <P>On my laptop, query time moved from about 1,800 ms to 425 ms, while the whole run moved from 2.4 seconds to 1.0 second. These are local measurements, not an isolated scoring-board result. Commit <code>a2bcaa7</code> also introduced 32-bit distances with a 64-bit fallback and parallel CSR construction; the later <code>5c8f65b</code> commit parallelised renumbering. I therefore cannot isolate the board-level contribution of BFS renumbering alone.</P>
      <P>I also added a structural shortcut: if a query target has no incoming edge and differs from the source, no directed path can reach it. The answer is exactly <code>-1</code>, so Dijkstra does not need to run. I did not record an isolated timing for this fast path, so I describe the correctness argument without claiming a speedup.</P>

      <H2 id="track-a-change">I thought one small Track A change explained the whole timing drop. It did not.</H2>
      <P>Track A&rsquo;s timestamp parser originally performed calendar arithmetic for every log line. Neighbouring records commonly shared an hour, so I cached the calculation while the <code>YYYY-MM-DDTHH</code> prefix stayed unchanged, comparing two overlapping eight-byte words.</P>
      <P>The local parse phase moved from 98 ms to 46 ms. However, the commit also added SWAR endpoint scanning, parallel bucketing and output changes. Later, once I used the fixed 72-hour span in the specification, commit <code>67fc287</code> removed the calendar arithmetic altogether. The prefix cache was an intermediate optimisation, not a feature that remained in the final implementation.</P>
      <Figure src={v03} alt="Track A board execution time across eight recorded optimisation steps, decreasing from 104 to 40 milliseconds with run variability noted." caption="Track A board timing progression: 104, 75, 72.6, 65.4, 56, 54.4, 52 and 40 ms. Identical code runs varied by about ±15%; the final code also recorded 52 ms in another run." />
      <P>Track C had two other optimisations with clearer local explanations. Replacing sorting-based distinct-name counting with an open-addressing hash set reduced that phase from roughly 65&ndash;90 ms to 10 ms. Directly indexing three-letter region codes in a <code>26&sup3;</code> table reduced region loading from 19 ms to 5 ms. Together, the changes moved a recorded board run from 0.145 seconds to 0.069 seconds. Because the changes landed together, I report the board result as a combined improvement rather than attributing it to either edit individually.</P>

      <H2 id="passing-run-bug">I thought a passing run meant I was finished. One comparison bug said otherwise.</H2>
      <P>Correctness was a gate, not a bonus. The output had to match the expected hash exactly; a faster program that changed an answer did not qualify as a valid improvement.</P>
      <P>Track D exposed why. I had placed a 64-bit overflow check after the <code>nd &lt; dist[v]</code> comparison. The comparison therefore happened before the candidate distance had been validated, silently changing the answer. A local hash check caught the bug before I pushed the change.</P>
      <P>The repository README documents tiny, sample and full validation checks for all four tracks. A later quick log generated hashes without an external <code>--expected</code> value. That log shows that the programs executed and produced hashes; it does not independently prove that the outputs matched reference hashes, so I do not use it to make that stronger claim.</P>
      <P>The event harness ran five executions, discarded the highest and lowest, and averaged the middle three. My local captures helped diagnose branches, but they were not interchangeable with the board&rsquo;s measurement procedure.</P>
      <Figure src={v15} alt="Five board executions with the fastest and slowest discarded and the middle three averaged." caption="The organiser's board protocol described in the event README: five executions, discard the highest and lowest, average the middle three. Local quick captures are not equivalent to this board procedure." />

      <H2 id="commits-story">I thought 116 commits would tell the whole story. Some changes are still hard to attribute.</H2>
      <P>A commit history is not automatically a scientific record. Some commits bundled several optimisations, and some late changes have no individual board run ID. A final implementation can be measured, but that does not prove which edit caused the result.</P>
      <P>The November 7 live board showed BobTheBuilder at rank 60 with a displayed best-three figure of 69.572. The value matches the geometric mean of the visible machine-point values for A, B and C, with D omitted. I present it as a live-board snapshot, not a final judge-weighted result. The event rules state that judges contribute 35% to each track total and that the overall title uses the best three track totals.</P>
      <P>A public number can look more conclusive than the evidence behind it. My responsibility is to explain what it represents: where the entry stood at that moment, not a final award.</P>

      <H2 id="clean-measurement">I thought every useful change would leave a clean measurement. Some did not.</H2>
      <P>My development laptop was an ASUS TUF Gaming F15 with an Intel Core i5-10300H: four physical cores, eight logical processors and 256 KB of L2 cache per core. The scoring board&rsquo;s environment notes describe its processor as an Intel i5-13500 derivative with twelve CPUs and about 2 MB of L2 cache per core. The exact model string was never logged, so I cannot claim it more precisely than that. The two machines differed enough that a laptop result was a signal to investigate, not a number I could transfer directly to the board.</P>
      <Figure src={v09} alt="Development laptop and scoring-board environment compared by processor, thread count and L2 cache information." caption="The development laptop and scoring environment had different CPU and cache characteristics. Local measurements helped identify candidates for investigation; the scoring board determined the competition result." />
      <P>There are several limits I want to keep visible. The Track B phrase timing is local, and its commit combines several changes. The Track D BFS timing is local, and its commit bundles other work. My explanation about the second hardware thread hiding memory latency is an inference, not a hardware-counter proof. The date-prefix timing shares a commit with SWAR scanning and parallel bucketing. Some late changes have no individual board run ID.</P>
      <P>Those limitations do not make the experiments useless; they define the claims I can responsibly make. I can report the result of a combined commit, but I cannot assign its entire gain to one line if the experiment did not isolate that line. I can say an outcome is consistent with a memory-latency explanation, but I cannot call the mechanism proven without measuring it. That boundary is part of the result.</P>
      <Figure src={v07} alt="Measurement workflow diagram: baseline, isolate stage, measure, compare expected output, run on board, keep or revert." caption="The measurement loop used through the project: establish a baseline, isolate a stage, measure time and memory, verify output, test on the board, then keep or revert." />

      <H2 id="optimise-again">I would not optimise the same way if I started again.</H2>
      <P>If I started again, I would change the order of my work.</P>
      <P><strong style={{ color: 'var(--text-primary)' }}>First, map the scoring function to a measurement plan.</strong> I would make the time, memory, source-size and dependency trade-offs explicit before tuning.</P>
      <P><strong style={{ color: 'var(--text-primary)' }}>Second, isolate changes.</strong> The ring-buffer and BFS commits bundled multiple modifications. Where practical, I would use smaller commits and run significant variants on the board before moving on to the next change.</P>
      <P><strong style={{ color: 'var(--text-primary)' }}>Third, treat run IDs as part of the implementation.</strong> A timing without its machine, build, commit and measurement type is difficult to compare. Track A&rsquo;s roughly &plusmn;15% variation makes repeated measurements especially important.</P>
      <P><strong style={{ color: 'var(--text-primary)' }}>Fourth, use local profiling to ask questions, not declare a winner.</strong> Callgrind instruction counts, stage cuts, RSS and cgroup <code>memory.peak</code> answer different questions. I would describe explanations such as SMT hiding memory latency as interpretations unless I had direct evidence.</P>
      <P><strong style={{ color: 'var(--text-primary)' }}>Finally, keep correctness in the same loop.</strong> The overflow bug was caught because output validation was not postponed until the end.</P>

      <H2 id="repository-evidence">I thought the repository was just the submission. It is also the evidence trail.</H2>
      <P>The repository contains four track folders, each with its <code>main.cpp</code>, Dockerfile, configuration, README and <code>PERF.md</code>. I would start with a track&rsquo;s performance log to follow the experiment sequence, then inspect the corresponding source and commits. The Dockerfiles show how each track was built and run; the root README and checker describe the validation workflow.</P>
      <div className="flex flex-col sm:flex-row gap-4 my-8">
        <a href="https://github.com/PawanBhandari03/SpeedDemon_Entry" target="_blank" rel="noopener" className="flex-1 rounded-xl px-5 py-4 font-semibold transition-colors" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', color: '#8B5CF6' }}>
          Repository &rarr; <span className="block text-xs font-normal mt-1" style={{ color: 'var(--text-secondary)' }}>github.com/PawanBhandari03/SpeedDemon_Entry</span>
        </a>
        <a href="https://speeddemon.dev/" target="_blank" rel="noopener" className="flex-1 rounded-xl px-5 py-4 font-semibold transition-colors" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', color: '#8B5CF6' }}>
          Competition and rules &rarr; <span className="block text-xs font-normal mt-1" style={{ color: 'var(--text-secondary)' }}>speeddemon.dev</span>
        </a>
      </div>

      <H2 id="result-i-trust">The result I trust most is not the fastest number. It is the assumption I stopped making.</H2>
      <P>I entered Hackathon Raptors as BobTheBuilder and worked through all four tracks solo. I rewrote reference implementations, tried techniques that sounded right, kept some, reverted others, and learned to separate a local observation from a scoring-board result.</P>
      <P>The timings matter. The more valuable result was a change in how I approached performance work: I stopped treating an optimisation idea as evidence that the program had improved.</P>
      <div className="my-8 rounded-2xl px-7 py-6 text-lg md:text-xl font-bold" style={{ backgroundColor: 'rgba(183,243,107,0.1)', border: '2px solid #B7F36B', color: 'var(--text-primary)' }}>
        A faster-looking implementation is only a hypothesis. The measurement is the argument.
      </div>

      <div className="mt-14 pt-6 border-t text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
        <p className="italic mb-4">Author: Pawan Bhandari &middot; Team name: BobTheBuilder (solo entry) &middot; Hackathon Raptors Speed Demon 2026.</p>
        <p><strong>AI-assistance disclosure:</strong> I used AI tools to help structure and edit this article. The implementation, experiments and benchmark records described here are based on my project work and records. I remain responsible for reviewing the technical claims, measurements and code excerpts before publication.</p>
      </div>

          </div>
        </div>
      </main>
    </div>
  );
}
