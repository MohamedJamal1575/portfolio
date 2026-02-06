import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-xs' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div
            onClick={() => scrollToSection('hero')}
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold cursor-pointer hover:scale-110 transition-transform">
            MJ
          </div>
          <div className="hidden md:flex items-center gap-1">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="capitalize text-sm font-medium"
              >
                {section}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
