import React, { useState, } from 'react'
import {
  MessageCircle,
  Sparkles,
  Globe,
  Handshake,
} from 'lucide-react'

import ComingSoonPage from './components/coming-soon'
import DashboardPage from './components/dashboard-page'
import Bottomnavigation from './components/bottom-navigation'



export type TabId = 'dashboard' | 'messages' | 'deals' | 'search' | 'network';



export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [transitioning, setTransitioning] = useState(false);
  const [displayTab, setDisplayTab] = useState<TabId>('dashboard');
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const tabOrder: TabId[] = ['dashboard', 'messages', 'deals', 'search', 'network'];

  const handleTabChange = (newTab: TabId) => {
    if (newTab === activeTab) return;
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setTransitioning(true);
    setActiveTab(newTab);

    // Brief delay then show new content with entrance animation
    requestAnimationFrame(() => {
      setTimeout(() => {
        setDisplayTab(newTab);
        setTransitioning(false);
      }, 180);
    });
  };

  const getPageStyle = (): React.CSSProperties => {
    const translateX = transitioning
      ? direction === 'right' ? '-12%' : '12%'
      : '0%';
    return {
      transform: `translateX(${translateX})`,
      opacity: transitioning ? 0 : 1,
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
      willChange: 'transform, opacity',
    };
  };

  return (
    <div className="min-h-screen w-full bg-[#0B1727] flex justify-center font-sans text-white">
      <div className="w-full max-w-100 px-0 pt-0 pb-24 bg-white overflow-hidden">
        <div style={getPageStyle()}>
          {displayTab === 'dashboard' && <DashboardPage />}
          {displayTab === 'messages' && <ComingSoonPage tab="messages" icon={<MessageCircle className="w-12 h-12" />} />}
          {displayTab === 'deals' && <ComingSoonPage tab="deals" icon={<Handshake className="w-12 h-12" />} />}
          {displayTab === 'search' && <ComingSoonPage tab="search" icon={<Sparkles className="w-12 h-12" />} />}
          {displayTab === 'network' && <ComingSoonPage tab="network" icon={<Globe className="w-12 h-12" />} />}
        </div>
      </div>

      {/* ─── Bottom Navigation ─── */}
      <Bottomnavigation activeTab={activeTab} handleTabChange={handleTabChange} />
    </div>
  )
}



