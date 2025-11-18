declare global {
  interface Window {
    requestIdleCallback?: (callback: IdleRequestCallback) => number;
  }
}

const NAV_OPEN_CLASS = 'nav-is-open';
const NAV_ROOT_ATTRIBUTE = 'data-nav-root';
const TOGGLE_ATTR = 'data-nav-toggle';
const MENU_ATTR = 'data-nav-menu';

const enhanceNav = (nav: HTMLElement) => {
  const toggleId = nav.getAttribute(TOGGLE_ATTR);
  const menuId = nav.getAttribute(MENU_ATTR);
  const toggle = toggleId ? document.getElementById(toggleId) : null;
  const menu = menuId ? document.getElementById(menuId) : null;

  if (!(toggle instanceof HTMLElement) || !(menu instanceof HTMLElement)) {
    return;
  }

  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const closeMenu = () => {
    nav.classList.remove(NAV_OPEN_CLASS);
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    nav.classList.add(NAV_OPEN_CLASS);
    toggle.setAttribute('aria-expanded', 'true');
    const firstLink = menu.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();
  };

  const handleToggle = () => {
    if (nav.classList.contains(NAV_OPEN_CLASS)) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && nav.classList.contains(NAV_OPEN_CLASS)) {
      closeMenu();
      toggle.focus();
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!nav.contains(target) && nav.classList.contains(NAV_OPEN_CLASS)) {
      closeMenu();
    }
  };

  const handleMediaChange = (query: MediaQueryListEvent) => {
    if (query.matches) {
      closeMenu();
    }
  };

  toggle.addEventListener('click', handleToggle);
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleDocumentClick);
  mediaQuery.addEventListener('change', handleMediaChange);
};

const attachNavs = () => {
  const navs = document.querySelectorAll<HTMLElement>(`[${NAV_ROOT_ATTRIBUTE}]`);
  navs.forEach(nav => enhanceNav(nav));
};

const init = () => {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      attachNavs();
    });
  } else {
    attachNavs();
  }
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
}

export {};
