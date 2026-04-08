import React from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { SectionCards } from '@/components/section-cards'
import { SiteHeader } from '@/components/site-header'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { DataTable } from './components/data-table'
import data from "./data.json"
// I need context regarding building backend/ all the folders and files and basic dependencies like jwt, bycrypt, mongo, cors etc needed for a fullstack application
// I successfully completed the building the frontend for my full stack hackathon management opensource tool --- the react-router is also setup successfully, rn I just need
// help me writing scalable backend, from setting up server folder to installing all the required dependencies
// my codebase is react js no typescript and I need the backend according to the below my req for now would be mongodb and rest get me the best possible tech stack
const Hack = () => {
    return(
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                }
            }>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards />
                    <div className="px-4 lg:px-6">
                        <ChartAreaInteractive />
                    </div>
                    <DataTable data={data} />
                    </div>
                </div>
                </div>
            </SidebarInset>
            </SidebarProvider>
    )
}

export default Hack;