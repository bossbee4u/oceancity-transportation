import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Truck,
  Container,
  PackageSearch,
  Building2,
  LogOut,
  Ship,
  Settings,
  UserCog,
  Shield,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const mainItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Drivers', url: '/drivers', icon: Users },
  { title: 'Trucks', url: '/trucks', icon: Truck },
  { title: 'Trailers', url: '/trailers', icon: Container },
  { title: 'Shipments', url: '/shipments', icon: PackageSearch },
  { title: 'Companies', url: '/companies', icon: Building2 },
];

const adminItems = [
  { title: 'Users', url: '/admin/users', icon: UserCog },
  { title: 'System Settings', url: '/admin/settings', icon: Settings },
  { title: 'Security', url: '/admin/security', icon: Shield },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { signOut, profile } = useAuth();
  const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' : 'hover:bg-sidebar-accent/50';

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-60'} collapsible="icon">
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-4 border-b border-sidebar-border">
          <Ship className="h-6 w-6 text-sidebar-primary" />
          {!collapsed && (
            <div>
              <h2 className="font-bold text-sidebar-foreground">Ocean City</h2>
              <p className="text-xs text-sidebar-foreground/70">Transportation</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {profile?.role === 'admin' && (
          <SidebarGroup>
            <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} end className={getNavCls}>
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        {!collapsed && profile && (
          <div className="px-4 py-2 border-t border-sidebar-border">
            <p className="text-sm font-medium text-sidebar-foreground truncate">{profile.full_name}</p>
            <p className="text-xs text-sidebar-foreground/70 capitalize">{profile.role}</p>
          </div>
        )}
        <div className="p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={signOut}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Sign Out</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}