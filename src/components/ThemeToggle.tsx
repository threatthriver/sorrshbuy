
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-primary-foreground hover:bg-primary-glow/20 h-8 w-8 lg:h-10 lg:w-10"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 lg:h-6 lg:w-6" />
      ) : (
        <Sun className="h-4 w-4 lg:h-6 lg:w-6" />
      )}
    </Button>
  );
};

export default ThemeToggle;
