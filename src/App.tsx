import { useMemo, useState, type ReactNode } from 'react'
import {
  Bell, Bookmark, BriefcaseBusiness, ChevronDown, Command,
  FileText, Home, MoreHorizontal, Search, Settings, Sparkles, Target, TrendingUp,
} from 'lucide-react'

type Job = { company: string; role: string; place: string; salary: string; match: number; kind: string; logo: string; tone: string; posted: string; skills: string[] }

const jobs: Job[] = [
  { company: 'Shopify', role: 'Software Engineering Intern', place: 'Toronto, ON · Hybrid', salary: '$28–36/hr', match: 96, kind: 'Internship', logo: 'S', tone: 'shopify', posted: '12m ago', skills: ['React', 'TypeScript', 'Node.js'] },
  { company: 'Cohere', role: 'Machine Learning Intern', place: 'Toronto, ON · Remote', salary: '$35–42/hr', match: 92, kind: 'Internship', logo: 'C', tone: 'cohere', posted: '24m ago', skills: ['Python', 'PyTorch', 'LLMs'] },
  { company: 'RBC', role: 'Data Analyst Co-op', place: 'Toronto, ON · Hybrid', salary: '$25–31/hr', match: 88, kind: 'Co-op', logo: 'R', tone: 'rbc', posted: '38m ago', skills: ['SQL', 'Python', 'Tableau'] },
  { company: 'Waabi', role: 'Frontend Developer Intern', place: 'Toronto, ON · On-site', salary: '$27–34/hr', match: 84, kind: 'Internship', logo: 'W', tone: 'waabi', posted: '1h ago', skills: ['React', 'Figma', 'Next.js'] },
]

const nav = [
  [Home, 'Overview'], [Search, 'Discover'], [FileText, 'My resume'], [BriefcaseBusiness, 'Applications'], [TrendingUp, 'Insights'],
]

export default function App() {
  const [active, setActive] = useState('Overview')
  const [query, setQuery] = useState('')
  const [saved, setSaved] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)
  const [notice, setNotice] = useState('')
  const filtered = useMemo(() => jobs.filter(j => `${j.company} ${j.role} ${j.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [query])
  const shown = showAll ? filtered : filtered.slice(0, 3)
  const toggleSaved = (role: string) => setSaved(current => current.includes(role) ? current.filter(x => x !== role) : [...current, role])
  const refresh = () => { setNotice('Fresh matches are on the way'); window.setTimeout(() => setNotice(''), 2400) }

  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark"><span /></span><span>careerpilot</span></div>
      <button className="workspace">Alex’s workspace <ChevronDown size={15} /></button>
      <nav>
        <p className="nav-label">WORKSPACE</p>
        {nav.map(([Icon, label]) => <button key={label as string} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => setActive(label as string)}><Icon size={18} />{label as string}{label === 'Applications' && <b>3</b>}</button>)}
        <p className="nav-label second">LIBRARY</p>
        <button className="nav-item"><Bookmark size={18} />Saved jobs</button>
        <button className="nav-item"><Target size={18} />Skill gap</button>
      </nav>
      <div className="sidebar-bottom">
        <button className="upgrade"><Sparkles size={17} /><span><strong>Unlock your edge</strong><small>Go Pro for AI tailoring</small></span></button>
        <button className="nav-item"><Settings size={18} />Settings</button>
        <div className="profile"><div className="avatar">AK</div><div><strong>Alex Kim</strong><small>alex@university.ca</small></div><MoreHorizontal size={18} /></div>
      </div>
    </aside>

    <section className="content">
      <header className="topbar">
        <div className="command-search"><Search size={18} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search your next opportunity…" /><kbd><Command size={12} /> K</kbd></div>
        <div className="header-actions"><button className="icon-button" aria-label="Notifications"><Bell size={19} /><i /></button><button className="help">?</button><div className="avatar top-avatar">AK</div></div>
      </header>

      <div className="page">
        <section className="welcome"><div><p className="eyebrow">MONDAY, FEBRUARY 24</p><h1>Good morning, Alex <span>✦</span></h1><p className="subtitle">Your career is moving forward. Here’s what’s new today.</p></div><button className="refresh" onClick={refresh}><Sparkles size={17} /> Refresh matches</button></section>
        {notice && <div className="toast"><Sparkles size={16} />{notice}</div>}

        <section className="stats-grid">
          <Stat icon={<Target size={20} />} label="MATCHES FOR YOU" value="128" trend="↑ 24 this week" color="lavender" />
          <Stat icon={<Bookmark size={20} />} label="SAVED JOBS" value={String(saved.length || 7)} trend="2 need your attention" color="peach" />
          <Stat icon={<FileText size={20} />} label="APPLICATIONS" value="12" trend="3 in progress" color="mint" />
          <Stat icon={<TrendingUp size={20} />} label="PROFILE STRENGTH" value="82%" trend="↑ 6% this month" color="blue" />
        </section>

        <section className="dashboard-grid">
          <div className="panel recommendations">
            <div className="panel-head"><div><h2>Picked for you <span className="count">{filtered.length}</span></h2><p>Fresh opportunities matched to your profile</p></div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show less' : 'View all'} <span>→</span></button></div>
            <div className="job-list">{shown.map(job => <JobCard key={job.role} job={job} saved={saved.includes(job.role)} onSave={() => toggleSaved(job.role)} />)}{shown.length === 0 && <div className="empty">No roles match that search. Try a skill or company name.</div>}</div>
          </div>
          <div className="right-column">
            <div className="panel profile-card"><div className="panel-head"><div><h2>Profile momentum</h2><p>Your profile is looking strong</p></div><button className="icon-button"><MoreHorizontal size={19} /></button></div><div className="momentum"><div className="progress-ring"><strong>82</strong><small>/100</small></div><div><strong>Almost there!</strong><p>Add 2 projects to reach a standout profile.</p><button className="outline">Improve profile <span>→</span></button></div></div><div className="meter"><span style={{ width: '82%' }} /></div><div className="profile-labels"><span>Basics</span><span>Experience</span><span>Skills</span><span>Projects</span></div></div>
            <div className="panel activity"><div className="panel-head"><div><h2>Application activity</h2><p>Your progress this month</p></div><button className="text-button">Details <span>→</span></button></div><div className="activity-content"><div className="bars">{[42, 74, 55, 92, 70, 100, 64].map((h, i) => <span key={i} className={i === 5 ? 'hot' : ''} style={{ height: `${h}%` }} />)}</div><div className="chart-legend"><div><b>12</b><small>Applications</small></div><div><b>4</b><small>Interviews</small></div><div><b>33%</b><small>Response rate</small></div></div></div></div>
          </div>
        </section>

        <section className="bottom-grid"><div className="panel pipeline"><div className="panel-head"><div><h2>Your pipeline</h2><p>Keep the momentum going</p></div><button className="text-button">Open board <span>→</span></button></div><div className="pipeline-row"><Stage n="4" label="Saved" cls="slate" /><Stage n="3" label="Applied" cls="purple" /><Stage n="2" label="Interviewing" cls="orange" /><Stage n="1" label="Offers" cls="green" /></div></div><div className="panel coach"><div className="coach-icon"><Sparkles size={20} /></div><div><p className="eyebrow">CAREER COPILOT</p><h2>Ready for your next move?</h2><p>Ask anything—from a resume review to interview prep.</p></div><button onClick={() => setNotice('Career Copilot is ready to help')}>Ask Copilot <span>→</span></button></div></section>
      </div>
    </section>
  </main>
}

function Stat({ icon, label, value, trend, color }: { icon: ReactNode; label: string; value: string; trend: string; color: string }) { return <div className="stat-card"><div className={`stat-icon ${color}`}>{icon}</div><div><p>{label}</p><h3>{value}</h3><small>{trend}</small></div></div> }
function Stage({ n, label, cls }: { n: string; label: string; cls: string }) { return <div className="stage"><b className={cls}>{n}</b><span>{label}</span></div> }
function JobCard({ job, saved, onSave }: { job: Job; saved: boolean; onSave: () => void }) { return <article className="job-card"><div className={`company-logo ${job.tone}`}>{job.logo}</div><div className="job-main"><div className="job-title"><h3>{job.role}</h3><span className="match"><Sparkles size={12} /> {job.match}% match</span></div><p>{job.company} <i>•</i> {job.place}</p><div className="pills"><span>{job.kind}</span><span>{job.salary}</span><span>{job.posted}</span></div></div><div className="job-actions"><button onClick={onSave} aria-label="Save job" className={saved ? 'saved' : ''}><Bookmark size={18} fill={saved ? 'currentColor' : 'none'} /></button><button className="apply">View job <span>↗</span></button></div></article> }
