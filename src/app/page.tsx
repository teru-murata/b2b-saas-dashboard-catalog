import { DashboardPreview } from "@/components/DashboardPreview";
import { DataTablePreview } from "@/components/DataTablePreview";
import { DeliveryTimeline } from "@/components/DeliveryTimeline";
import { EvidenceCard } from "@/components/EvidenceCard";
import { ImplementationNote } from "@/components/ImplementationNote";
import { QualityGateList } from "@/components/QualityGateList";
import { Section } from "@/components/Section";
import {
  dashboardMetrics,
  deliveryMilestones,
  evidenceCards,
  qualityGates,
  segmentBreakdown,
  tableRecords,
  trendPoints
} from "@/data/catalog";
import styles from "./page.module.css";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#table", label: "Table" },
  { href: "#quality", label: "Quality" },
  { href: "#delivery", label: "Delivery" }
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <nav aria-label="Catalog sections" className={styles.nav}>
          <a className={styles.brand} href="#overview">
            BtoB SaaS frontend catalog
          </a>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className={styles.main}>
        <section id="overview" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <p className="section-eyebrow">Public presentation-ready catalog</p>
            <h1 id="hero-title">
              React / Next.js / TypeScript frontend catalog for BtoB SaaS analytics dashboards.
            </h1>
            <p>
              An evidence-driven frontend showcase for data-rich UI, reusable components, typed data
              boundaries, accessibility, performance-minded rendering, testable delivery, and a remote
              GitHub-style workflow.
            </p>
            <div className={styles.heroActions} aria-label="Primary sections">
              <a href="#dashboard">View dashboard preview</a>
              <a href="#table">Inspect table preview</a>
            </div>
          </div>
          <aside className={styles.heroPanel} aria-label="Phase 2 evidence summary">
            <h2>Phase 2 status</h2>
            <dl>
              <div>
                <dt>Runnable app</dt>
                <dd>Demonstrated</dd>
              </div>
              <div>
                <dt>Typed sample data</dt>
                <dd>Demonstrated</dd>
              </div>
              <div>
                <dt>Lint and build</dt>
                <dd>Verified before commit</dd>
              </div>
            </dl>
          </aside>
        </section>

        <Section
          id="evidence"
          eyebrow="Evidence model"
          title="Engineering-lead-friendly proof, without private context"
          description="Each card separates what exists now from what later phases can improve."
          className={styles.section}
        >
          <div className={styles.evidenceGrid}>
            {evidenceCards.map((item) => (
              <EvidenceCard key={item.id} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="dashboard"
          eyebrow="Dashboard preview"
          title="Data-rich dashboard scenario"
          description="Static sample data shows how summary metrics, segment signals, and trend context can fit into one readable surface."
          className={styles.section}
        >
          <DashboardPreview metrics={dashboardMetrics} segments={segmentBreakdown} trend={trendPoints} />
        </Section>

        <Section
          id="table"
          eyebrow="Data interaction"
          title="Data table preview"
          description="A semantic table with typed sample records, status text, a small filter, and confidence sorting."
          className={styles.section}
        >
          <DataTablePreview rows={tableRecords} />
        </Section>

        <Section
          id="quality"
          eyebrow="Quality evidence"
          title="Quality-oriented delivery"
          description="This phase establishes visible quality gates and marks future checks as planned rather than complete."
          className={styles.section}
        >
          <QualityGateList gates={qualityGates} />
        </Section>

        <Section
          id="delivery"
          eyebrow="Delivery notes"
          title="Public-safe GitHub-style workflow"
          description="The catalog is structured for small reviewable phases, sanitized summaries, and raw artifact hygiene."
          className={styles.section}
        >
          <DeliveryTimeline milestones={deliveryMilestones} />
        </Section>

        <Section
          id="implementation"
          eyebrow="Implementation notes"
          title="Current scope and intentional limits"
          description="The initial app is useful enough for a first public review while keeping later work clearly labeled."
          className={styles.section}
        >
          <div className={styles.noteGrid}>
            <ImplementationNote title="Static data only">
              Sample data is artificial and local. There is no backend, no external API data, and no real
              customer data.
            </ImplementationNote>
            <ImplementationNote title="No chart or table libraries yet">
              The visual preview and table behavior are dependency-free. Phase 3 can strengthen both where it
              adds clear evidence.
            </ImplementationNote>
            <ImplementationNote title="Deferred review depth">
              Unit tests, browser review, and visual review are planned for later phases after the interaction
              surface is stronger.
            </ImplementationNote>
          </div>
        </Section>
      </main>
      <footer className={styles.footer}>
        <p>BtoB SaaS frontend catalog. Public-safe sample data only.</p>
      </footer>
    </>
  );
}
