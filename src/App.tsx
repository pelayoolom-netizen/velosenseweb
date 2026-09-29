/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatusBar } from './components/StatusBar';
import { FeatureCards } from './components/FeatureCards';
import { InteractiveCoach } from './components/InteractiveCoach';
import { TimelineSection } from './components/TimelineSection';
import { StatsDashboard } from './components/StatsDashboard';
import { MtbSection } from './components/MtbSection';
import { Integrations } from './components/Integrations';
import { MobileShowcase } from './components/MobileShowcase';
import { PrivacySection } from './components/PrivacySection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Telemetry Cockpit */}
        <Hero />

        {/* Status indicators bar */}
        <StatusBar />

        {/* Core Capabilities Bento Grid */}
        <FeatureCards />

        {/* Interactive Coach Dialogues */}
        <InteractiveCoach />

        {/* 4-Step Post-Ride Workflow Timeline */}
        <TimelineSection />

        {/* Interactive 20.4 km Stats Dashboard Recreation */}
        <StatsDashboard />

        {/* MTB Mountain Trail Dedicated Section */}
        <MtbSection />

        {/* 3 Mobile Screens Showcase */}
        <MobileShowcase />

        {/* Hardware & Cloud Integrations */}
        <Integrations />

        {/* Transparency & Device Permissions */}
        <PrivacySection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Final Conversion CTA */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
