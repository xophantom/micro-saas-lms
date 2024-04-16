'use client'

import {
  SideBar,
  SideBarHeader,
  SideBarMain,
  SideBarNav,
  SideBarNavMain,
  SideBarNavLink,
  SideBarNavHeader,
  SideBarNavHeaderTitle,
  SideBarFooter,
} from '@/components/dashboard/sidebar'
import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { UserDropdown } from './user-dropdown'
import { Session } from 'next-auth'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <SideBar>
      <SideBarHeader>
        <h1></h1>
      </SideBarHeader>
      <SideBarMain className="flex flex-col flex-grow">
        <SideBarNav>
          <SideBarNavMain>
            <SideBarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </SideBarNavLink>
            <SideBarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </SideBarNavLink>
          </SideBarNavMain>
        </SideBarNav>

        <SideBarNav className="mt-auto">
          <SideBarNavHeader>
            <SideBarNavHeaderTitle>Links extras</SideBarNavHeaderTitle>
          </SideBarNavHeader>
          <SideBarNavMain>
            <SideBarNavLink href="/">Precisa de ajuda?</SideBarNavLink>
            <SideBarNavLink href="/">Site</SideBarNavLink>
          </SideBarNavMain>
        </SideBarNav>
      </SideBarMain>

      <SideBarFooter>
        <UserDropdown user={user} />
      </SideBarFooter>
    </SideBar>
  )
}
