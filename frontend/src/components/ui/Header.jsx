import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "/logo.png" },
    { name: "Explore", path: "/category-explorer", icon: "Compass" },
    { name: "Search", path: "/search-discovery", icon: "Search" },
    { name: "Dashboard", path: "/user-dashboard", icon: "User" },
  ];

  const moreItems = [
    { name: "Settings", path: "/settings", icon: "Settings" },
    { name: "Help", path: "/help", icon: "HelpCircle" },
    { name: "About", path: "/about", icon: "Info" },
  ];

  const isActivePath = (path) => location.pathname === path;

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-2 hover-lift">
      <div className="relative">
        <div className="flex items-center justify-center w-10 h-10 glassmorphic rounded-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
          >
            <path
              d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
              fill="currentColor"
            />
            <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 blur-sm"></div>
      </div>
      <span className="text-xl font-bold font-poppins text-foreground text-shadow-glow">
        JokeVault
      </span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b glassmorphic-card border-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <Logo /> */}
          <img src="/logo.png" alt="jokevault" className="w-10 aspect-square" />

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-1 md:flex">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg comedy-timing hover-lift ${
                  isActivePath(item?.path)
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-medium font-inter">{item?.name}</span>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 space-x-2 rounded-lg comedy-timing hover-lift text-muted-foreground hover:text-foreground hover:bg-muted/50">
                <Icon name="MoreHorizontal" size={18} />
                <span className="font-medium font-inter">More</span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 invisible w-48 mt-2 border rounded-lg opacity-0 top-full glassmorphic-card border-border group-hover:opacity-100 group-hover:visible comedy-timing">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className="flex items-center px-4 py-2 space-x-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 comedy-timing"
                    >
                      <Icon name={item?.icon} size={16} />
                      <span className="font-inter">{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="items-center hidden space-x-3 md:flex">
            <Link to="/authentication-portal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/authentication-portal">
              <Button variant="default" size="sm" className="pulse-glow">
                Start Laughing
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg md:hidden comedy-timing hover:bg-muted/50"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="pt-4 pb-4 mt-4 border-t md:hidden border-border animate-fade-in">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg comedy-timing ${
                    isActivePath(item?.path)
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium font-inter">{item?.name}</span>
                </Link>
              ))}

              <div className="pt-2 mt-2 border-t border-border">
                {moreItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center px-4 py-3 space-x-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 comedy-timing"
                  >
                    <Icon name={item?.icon} size={20} />
                    <span className="font-inter">{item?.name}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col pt-4 mt-4 space-y-2 border-t border-border">
              <Link
                to="/authentication-portal"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="ghost" fullWidth>
                  Sign In
                </Button>
              </Link>
              <Link
                to="/authentication-portal"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="default" fullWidth className="pulse-glow">
                  Start Laughing
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
