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
import { usePathname } from 'next/navigation'

export function MainSidebar() {
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
              Tarefas
            </SideBarNavLink>
            <SideBarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
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
        <h1>User</h1>
      </SideBarFooter>
    </SideBar>
  )
}
