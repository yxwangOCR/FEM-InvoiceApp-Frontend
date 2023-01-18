import React from 'react';

import User from './User';

import { ReactComponent as SunIcon } from '@/assets/images/icon-sun.svg';
import { ReactComponent as MoonIcon } from '@/assets/images/icon-moon.svg';
import { ReactComponent as LogoIcon } from '@/assets/images/logo.svg';

import { useThemeContext } from '@/components/AppProviders';

import './style.scss';

export const AuthLayout: React.FC<Props> = ({ children }) => {
  const { mode, toggleMode } = useThemeContext();

  return (
    <div className="layout">
      <header className="layout__header flex-center-between">
        <span className="layout__header-logo flex-center">
          <LogoIcon />
        </span>
        <div className="layout__header-content flex-center-between">
          <button
            className="layout__header-toggle flex-center"
            onClick={toggleMode}
          >
            {(mode === 'dark')
              ? <SunIcon />
              : <MoonIcon />}
          </button>
          <User />
        </div>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
