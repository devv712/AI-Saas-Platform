import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { Menu, Sparkles, UserCircle } from "lucide-react";

export default function NavBar() {
  const { user, logoutMutation } = useAuth();

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/support", label: "Support" },
  ];

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-6">
      {navigationItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <a className="text-muted-foreground hover:text-foreground transition-colors">
            {item.label}
          </a>
        </Link>
      ))}
    </nav>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4 mt-8">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  // User Menu
  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="text-destructive"
          onClick={() => logoutMutation.mutate()}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNav />

        <div className="flex items-center gap-2 mr-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <Link href="/">
            <a className="font-semibold">AetherMind</a>
          </Link>
        </div>

        <DesktopNav />

        <div className="flex-1" />

        {user ? (
          <UserMenu />
        ) : (
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
}