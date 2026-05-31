"use client";

import { useState } from "react";
import { DashboardPreview } from "@/components/DashboardPreview";
import { DataTablePreview } from "@/components/DataTablePreview";
import { DeliveryTimeline } from "@/components/DeliveryTimeline";
import { EvidenceCard } from "@/components/EvidenceCard";
import { ImplementationNote } from "@/components/ImplementationNote";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { QualityGateList } from "@/components/QualityGateList";
import { Section } from "@/components/Section";
import { localeOptions, localizedCopy } from "@/data/localizedCopy";
import { defaultLocale, type Locale } from "@/types/locale";
import styles from "./page.module.css";

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const copy = localizedCopy[locale];

  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skipLink}
      </a>
      <header className={styles.header}>
        <nav aria-label={copy.navLabel} className={styles.nav}>
          <a className={styles.brand} href="#overview">
            {copy.brand}
          </a>
          <div className={styles.navLinks}>
            {copy.navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <LanguageSwitch
            activeLocale={locale}
            label={copy.languageSwitch.label}
            optionLabel={copy.languageSwitch.optionLabel}
            options={localeOptions}
            onChange={setLocale}
          />
        </nav>
      </header>
      <main id="main" className={styles.main}>
        <section id="overview" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <p className="section-eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="hero-title">{copy.hero.title}</h1>
            <p>{copy.hero.description}</p>
            <div className={styles.heroActions} aria-label="Primary sections">
              {copy.hero.actions.map((action) => (
                <a key={action.href} href={action.href}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>
          <aside className={styles.heroPanel} aria-label={copy.hero.panelLabel}>
            <h2>{copy.hero.panelTitle}</h2>
            <dl>
              {copy.hero.panelItems.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <Section
          id="evidence"
          eyebrow={copy.sections.evidence.eyebrow}
          title={copy.sections.evidence.title}
          description={copy.sections.evidence.description}
          className={styles.section}
        >
          <div className={styles.evidenceGrid}>
            {copy.evidenceCards.map((item) => (
              <EvidenceCard
                key={item.id}
                item={item}
                labels={copy.evidenceLabels}
                statusLabel={copy.statusLabels[item.status]}
              />
            ))}
          </div>
        </Section>

        <Section
          id="dashboard"
          eyebrow={copy.sections.dashboard.eyebrow}
          title={copy.sections.dashboard.title}
          description={copy.sections.dashboard.description}
          className={styles.section}
        >
          <DashboardPreview
            metrics={copy.dashboardMetrics}
            segments={copy.segmentBreakdown}
            trend={copy.trendPoints}
            copy={copy.sections.dashboard}
            segmentCopy={copy.segment}
            trendCopy={copy.trend}
            statusLabels={copy.statusLabels}
          />
        </Section>

        <Section
          id="table"
          eyebrow={copy.sections.table.eyebrow}
          title={copy.sections.table.title}
          description={copy.sections.table.description}
          className={styles.section}
        >
          <DataTablePreview key={locale} rows={copy.tableRecords} copy={copy.table} statusLabels={copy.statusLabels} />
        </Section>

        <Section
          id="quality"
          eyebrow={copy.sections.quality.eyebrow}
          title={copy.sections.quality.title}
          description={copy.sections.quality.description}
          className={styles.section}
        >
          <QualityGateList gates={copy.qualityGates} statusLabels={copy.statusLabels} />
        </Section>

        <Section
          id="delivery"
          eyebrow={copy.sections.delivery.eyebrow}
          title={copy.sections.delivery.title}
          description={copy.sections.delivery.description}
          className={styles.section}
        >
          <DeliveryTimeline milestones={copy.deliveryMilestones} statusLabels={copy.statusLabels} />
        </Section>

        <Section
          id="build-review"
          eyebrow={copy.sections.buildReview.eyebrow}
          title={copy.sections.buildReview.title}
          description={copy.sections.buildReview.description}
          className={styles.section}
        >
          <DeliveryTimeline milestones={copy.buildReviewMilestones} statusLabels={copy.statusLabels} />
        </Section>

        <Section
          id="implementation"
          eyebrow={copy.sections.implementation.eyebrow}
          title={copy.sections.implementation.title}
          description={copy.sections.implementation.description}
          className={styles.section}
        >
          <div className={styles.noteGrid}>
            {copy.implementationNotes.map((note) => (
              <ImplementationNote key={note.title} title={note.title}>
                {note.body}
              </ImplementationNote>
            ))}
          </div>
        </Section>
      </main>
      <footer className={styles.footer}>
        <p>{copy.footer}</p>
      </footer>
    </>
  );
}
