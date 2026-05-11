import type { TabId } from '../App';
import NavBtn from './navigation-button'
import { LayoutGrid, MessageSquare, RefreshCw, Users, UserSearch } from 'lucide-react'

interface BottomNavigationProps {
  activeTab: TabId;
  handleTabChange: (tab: TabId) => void;
}

const Bottomnavigation = ({ activeTab, handleTabChange }: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center pointer-events-none z-50">
        <div className="relative w-full max-w-100 pointer-events-auto">
          {/* Curved cutout background */}
          <div className="absolute inset-x-0 bottom-0 bg-[#1A1028] rounded-t-3xl" style={{ height: '76px' }}>
            {/* White arc behind center button */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-[18px] w-[82px] h-[82px] rounded-full bg-white"
              style={{ boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.08)' }}
            />
          </div>

          {/* Nav buttons row */}
          <div className="relative flex items-end justify-between px-5 pb-4 pt-2" style={{ height: '76px' }}>
            <NavBtn
              active={activeTab === 'dashboard'}
              onClick={() => handleTabChange('dashboard')}
              label="Dashboard"
            >
              <LayoutGrid className="w-[22px] h-[22px]" strokeWidth={activeTab === 'dashboard' ? 2.4 : 1.8} />
            </NavBtn>

            <NavBtn
              active={activeTab === 'messages'}
              onClick={() => handleTabChange('messages')}
              label="Messages"
            >
              <MessageSquare className="w-[22px] h-[22px]" strokeWidth={activeTab === 'messages' ? 2.4 : 1.8} />
            </NavBtn>

            {/* Center elevated button */}
            <button
              onClick={() => handleTabChange('deals')}
              className="relative -mt-9 group"
              aria-label="Deals"
            >
              <div
                className={
                  'w-[64px] h-[64px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ' +
                  (activeTab === 'deals'
                    ? 'bg-[#2DD4A8] ring-4 ring-[#1A1028] scale-105'
                    : 'bg-white ring-4 ring-[#1A1028] group-hover:scale-105')
                }
              >
                <RefreshCw
                  className={
                    'w-7 h-7 transition-colors duration-300 ' +
                    (activeTab === 'deals' ? 'text-white' : 'text-[#1A1028]')
                  }
                  strokeWidth={2.2}
                />
              </div>
            </button>

            <NavBtn
              active={activeTab === 'search'}
              onClick={() => handleTabChange('search')}
              label="Search"
            >
              <UserSearch className="w-[22px] h-[22px]" strokeWidth={activeTab === 'search' ? 2.4 : 1.8} />
            </NavBtn>

            <NavBtn
              active={activeTab === 'network'}
              onClick={() => handleTabChange('network')}
              label="Network"
            >
              <Users className="w-[22px] h-[22px]" strokeWidth={activeTab === 'network' ? 2.4 : 1.8} />
            </NavBtn>
          </div>
        </div>
      </nav>
  )
}

export default Bottomnavigation