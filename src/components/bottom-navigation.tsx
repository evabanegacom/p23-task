import type { TabId } from '../App'
import NavBtn from './navigation-button'

import chineseLang from '../assets/chinese-lang-white.svg'
import searchList from '../assets/search-list.svg'
import messageNav from '../assets/message-nav.svg'
import dashboardSquare from '../assets/dashboard-square.svg'
import repeat from '../assets/repeat.svg'

interface BottomNavigationProps {
  activeTab: TabId
  handleTabChange: (tab: TabId) => void
}

const activeIconFilter =
  'brightness(0) saturate(100%) invert(6%) sepia(33%) saturate(2561%) hue-rotate(252deg) brightness(81%) contrast(111%)'

const inactiveIconFilter =
  'brightness(0) saturate(100%) invert(97%) sepia(7%) saturate(336%) hue-rotate(324deg) brightness(99%) contrast(92%)'

const getIconFilter = (isActive: boolean) =>
  isActive ? activeIconFilter : inactiveIconFilter

const Bottomnavigation = ({
  activeTab,
  handleTabChange,
}: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="relative h-[132px] w-full max-w-[400px] overflow-hidden pointer-events-auto">
        <svg
          className="absolute inset-x-0 bottom-0 h-[118px] w-full overflow-hidden drop-shadow-[0_-2px_10px_rgba(14,3,25,0.12)]"
          viewBox="0 0 400 118"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 15C18 31 42 39 74 39H143C153 39 156 31 160 22C168 4 183 0 200 0C217 0 232 4 240 22C244 31 247 39 257 39H326C358 39 382 31 400 15V118H0V15Z"
            fill="#0E0319"
          />

          <path
            d="M0 15C18 31 42 39 74 39H143C153 39 156 31 160 22C168 4 183 0 200 0C217 0 232 4 240 22C244 31 247 39 257 39H326C358 39 382 31 400 15"
            fill="none"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeWidth="9"
          />
        </svg>

        <button
          type="button"
          onClick={() => handleTabChange('deals')}
          aria-label="Deals"
          aria-current={activeTab === 'deals' ? 'page' : undefined}
          className="group absolute left-1/2 top-[30px] z-20 -translate-x-1/2 cursor-pointer rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span
            className={
              'flex h-[78px] w-[78px] items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,0,0,0.32),inset_0_5px_12px_rgba(255,255,255,0.85)] transition-all duration-300 ' +
              (activeTab === 'deals'
                ? 'ring-4 ring-[#2DD4A8]/35'
                : 'ring-4 ring-white/10 group-hover:ring-white/20')
            }
          >
            <img
              src={repeat}
              alt=""
              className="h-[43px] w-[43px]"
            />
          </span>
        </button>

        <div className="absolute inset-x-0 bottom-[18px] z-10 flex items-end justify-between px-7">
          <NavBtn
            active={activeTab === 'dashboard'}
            onClick={() => handleTabChange('dashboard')}
            label="Dashboard"
          >
            <img
              src={dashboardSquare}
              alt=""
              className="h-[37px] w-[37px]"
              style={{
                filter: getIconFilter(activeTab === 'dashboard'),
              }}
            />
          </NavBtn>

          <NavBtn
            active={activeTab === 'messages'}
            onClick={() => handleTabChange('messages')}
            label="Messages"
          >
            <img
              src={messageNav}
              alt=""
              className="h-[31px] w-[31px]"
              style={{
                filter: getIconFilter(activeTab === 'messages'),
              }}
            />
          </NavBtn>

          <div
            className="h-14 w-[78px] shrink-0"
            aria-hidden="true"
          />

          <NavBtn
            active={activeTab === 'search'}
            onClick={() => handleTabChange('search')}
            label="Search"
          >
            <img
              src={searchList}
              alt=""
              className="h-[37px] w-[37px]"
              style={{
                filter: getIconFilter(activeTab === 'search'),
              }}
            />
          </NavBtn>

          <NavBtn
            active={activeTab === 'network'}
            onClick={() => handleTabChange('network')}
            label="Network"
          >
            <img
              src={chineseLang}
              alt=""
              className="h-[37px] w-[37px]"
              style={{
                filter: getIconFilter(activeTab === 'network'),
              }}
            />
          </NavBtn>
        </div>
      </div>
    </nav>
  )
}

export default Bottomnavigation