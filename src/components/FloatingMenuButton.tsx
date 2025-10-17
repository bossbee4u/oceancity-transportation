import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

export const FloatingMenuButton = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90 md:hidden"
    >
      <Menu className="h-6 w-6 text-primary-foreground" />
    </Button>
  );
};