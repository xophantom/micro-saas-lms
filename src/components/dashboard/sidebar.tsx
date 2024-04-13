import { cn } from '@/lib/utils'
import Link from 'next/link'

// Composition Pattern

export type SideBarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

type SidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function SideBar({ children, className }: SideBarGenericProps) {
  return (
    <aside
      className={cn([
        'border-r border-border flex flex-col space-y-6',
        className,
      ])}
    >
      {children}
    </aside>
  )
}

export function SideBarHeader({ children, className }: SideBarGenericProps) {
  return <header className={cn(['px-6', className])}>{children}</header>
}

export function SideBarNavHeaderTitle({
  children,
  className,
}: SideBarGenericProps) {
  return (
    <div
      className={cn([
        'text-xs uppercase text-muted-foreground ml-3',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export function SideBarMain({ children, className }: SideBarGenericProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}

export function SideBarNav({ children, className }: SideBarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function SideBarNavHeader({ children, className }: SideBarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function SideBarNavTitle({ children, className }: SideBarGenericProps) {
  return <h4 className={cn(['', className])}>{children}</h4>
}

export function SideBarNavMain({ children, className }: SideBarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

export function SideBarNavLink({
  children,
  className,
  href,
  active,
}: SideBarGenericProps<SidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(['text-sm px-3 py-2', active && 'bg-secondary', className])}
    >
      {children}
    </Link>
  )
}

export function SideBarFooter({ children, className }: SideBarGenericProps) {
  return (
    <footer className={cn(['p-6 border-t border-border mt-auto', className])}>
      {children}
    </footer>
  )
}
