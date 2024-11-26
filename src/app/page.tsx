import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DocumentTable from "@/components/DocumentTable";
import { NavUser } from "@/components/nav-user";
import Image from "next/image";
import logoPic from "../../public/assets/logo.png";
import logoPicGrey from "../../public/assets/logoGrey.png";
import solutionsPic from "../../public/assets/solutions.png";
import { Bell } from "lucide-react";
const data = {
  user: {
    name: "Nome do usuário",
    organization: "Organização",
    avatar: "https://github.com/shadcn.png",
  },
};
export default function Home() {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />

      <SidebarInset className="w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <div className="flex">
              <SidebarTrigger className="-ml-1" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className=" md:block">
                    <BreadcrumbLink href="#">
                      <Image
                        alt="Picture of the logo"
                        src={logoPic}
                        width={100}
                        height={100}
                      />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <BreadcrumbItem>
                    <Image
                      alt="Picture of the solutions"
                      src={solutionsPic}
                      width={25}
                      height={25}
                      className="mr-1"
                    />

                    <p className="hidden md:block">Soluções</p>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center">
              <Bell className="mr-4" />
              <NavUser user={data.user} />
            </div>
          </div>
        </header>
        <div className="preview flex flex-col min-h-[350px] w-full justify-center p-10 items-center overflow-auto">
          <DocumentTable />
        </div>
        <footer
          className="flex justify-center items-center"
          style={{
            position: "absolute",
            bottom: "0px",
            width: "inherit",
          }}
        >
          <Image
            alt="Picture of the logo"
            src={logoPicGrey}
            width={100}
            height={100}
          />
          <span style={{ color: "#6B7280", fontSize: "14px" }}>
            Copyright © 2024 e-paper
          </span>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
