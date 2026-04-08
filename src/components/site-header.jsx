import { Button } from "@/components/ui/playground-button"
import { Separator } from "@/components/ui/playground-separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Github from '../assets/github-svgrepo-com.svg'

export function SiteHeader() {
  return (
    <header
      className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base text-sm text-neutral-700">Playground</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/nags0x/eternetes"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground">
                <img src={Github} alt='Github_svg' className='size-5'/>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
