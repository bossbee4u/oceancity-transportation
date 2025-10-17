import { Link } from 'react-router-dom';
import { Ship, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const PublicNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Transport Services', path: '/transport' },
    { label: 'Used Trucks', path: '/used-trucks' },
    { label: 'Spare Parts', path: '/spare-parts' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Ship className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">Ocean City</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/auth">
              <Button variant="default">Sign In</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" className="w-full mt-2">Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};