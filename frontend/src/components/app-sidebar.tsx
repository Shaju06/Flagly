import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import Link from 'next/link';
import { NavUser } from './nav-user';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar className="space-y-6">
      <SidebarHeader className="px-6 border-b pb-6">
        <h2 className="text-lg font-semibold">Flagly</h2>
        <div className="space-y-2 mt-6">
          <p className="text-sm text-muted-foreground">
            Project
          </p>
          <Select defaultValue="web">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Web" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Web App</SelectItem>
              <SelectItem value="mobile">
                Mobile App
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Environment
          </p>
          <Select defaultValue="prod">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Production" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dev">Dev</SelectItem>
              <SelectItem value="staging">
                Staging
              </SelectItem>
              <SelectItem value="prod">
                Production
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1 px-2 mt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">Dashboard</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/flags">Feature Flags</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/enviroment">Enviroment</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
