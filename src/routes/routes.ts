// assets
import DashboardIcon from '../assets/DashboardIcon.svg';
import DashboardIconActive from '../assets/DashboardIconActive.svg';
import AccountsIcon from '../assets/AccountsIcon.svg';
import AccountsIconActive from '../assets/AccountsIconActive.svg';
import TransactionsIcon from '../assets/TransactionsIcon.svg';
import TransactionsIconActive from '../assets/TransactionsIconActive.svg';
import SettingsIcon from '../assets/SettingsIcon.svg';
import SettingsIconActive from '../assets/SettingsIconActive.svg';
import SignOutIcon from '../assets/SignOutIcon.svg';
import SignOutActive from '../assets/SignOutIcon.svg';

//  interface MenuItem
import ISideMenuItem from '../components/SideNav/ISideMenuItem';
import Dashboard from '../pages/Dashboard';
import Accounts from '../pages/Accounts';
import Transactions from '../pages/Transactions';
import Settings from '../pages/Settings';

/**
 * Side Navigation Menu Items/Routes.
 * @return {ISideMenuItem[]}
 */
const routes: ISideMenuItem[] = [
  {
    label: 'Dashboard',
    activeIcon: DashboardIconActive,
    icon: DashboardIcon,
    to: '/',
    component: Dashboard,
  },
  {
    label: 'Accounts',
    activeIcon: AccountsIconActive,
    icon: AccountsIcon,
    to: '/accounts',
    component: Accounts,
  },
  {
    label: 'Transactions',
    activeIcon: TransactionsIconActive,
    icon: TransactionsIcon,
    to: '/transactions',
    component: Transactions,
  },
  {
    label: 'Settings',
    activeIcon: SettingsIconActive,
    icon: SettingsIcon,
    to: '/settings',
    component: Settings,
  },
  {
    label: 'SignOut',
    activeIcon: SignOutActive,
    icon: SignOutIcon,
    to: '/sign-out',
  },
];

export default routes;
