"use client";
import { useState } from "react";
import { DataTable } from "@/components/app-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewFile } from "@/components/newFile";
import {
  Filter,
  CircleHelp,
  CircleAlert,
  X,
  CalendarIcon,
  CircleCheck,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { formatDate } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
export default function DocumentTable() {
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="p-4 bg-white"
            style={{ height: "100%", width: "100%" }}
          >
            <h2
              style={{ color: "#191E29", fontSize: "18px" }}
              className="text-lg font-bold mb-2"
            >
              Filtar documentos
            </h2>
            <span style={{ color: "#6B7280", fontSize: "14px" }}>
              Indique os dados necessários para realizar a filtragem
            </span>
            <Separator className="my-4" />
            <div
              className="flex p-4"
              style={{ border: "1px solid #D1D5DB", borderRadius: "4px" }}
            >
              <div className="mr-2">
                <CircleAlert size={16} />
              </div>
              <span style={{ color: "#202936", fontSize: "14px" }}>
                Selecione o tipo de documento necessário para, a partir dele,
                selecionar os tipos de índice para a filtragem
              </span>
            </div>
            <div>
              <Label
                className="flex items-center mt-4 mb-2"
                style={{ fontWeight: "bold" }}
              >
                Período de criação
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal w-full",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date ? (
                      formatDate(date, "PPP")
                    ) : (
                      <span>Selecionar período</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Separator className="my-4" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                className="flex items-center mt-4"
                style={{ fontWeight: "bold" }}
              >
                Tipo de documento
                <span className="ml-2"></span>
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione tipo documento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Nota fiscal de serviço</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                className="flex items-center mt-4"
                style={{ fontWeight: "bold" }}
              >
                Emitente
                <span className="ml-2"></span>
              </Label>
              <Input
                placeholder="Razão social do emitente"
                className="max-w-sm mr-1"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                className="flex items-center mt-4"
                style={{ fontWeight: "bold" }}
              >
                Valor total dos tributos
                <span className="ml-2"></span>
              </Label>
              <Input placeholder="Valor em R$" className="max-w-sm mr-1" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                className="flex items-center mt-4"
                style={{ fontWeight: "bold" }}
              >
                Valor líquido
                <span className="ml-2"></span>
              </Label>
              <Input placeholder="Valor em R$" className="max-w-sm mr-1" />
            </div>
            <Separator className="my-4" />
            <div className="flex justify-end">
              <Button
                style={{
                  border: "1px solid hsl(var(--input))",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                Limpar
              </Button>
              <Button
                style={{
                  border: "1px solid hsl(var(--input))",
                  backgroundColor: "#05C151",
                }}
                onClick={() => {
                  toast({
                    description: (
                      <div className="flex items-center space-x-2">
                        <CircleCheck
                          className="h-5 w-5"
                          style={{ color: "#fff" }}
                        />
                        <span style={{ color: "#fff" }}>
                          Filtro aplicado com sucesso!
                        </span>
                      </div>
                    ),
                  });
                }}
              >
                Aplicar filtro
              </Button>
            </div>
          </div>
          <Button
            onClick={toggleMenu}
            className="absolute top-4 right-4 px-2 py-1 border-none text-black"
            style={{ backgroundColor: "transparent" }}
          >
            <X />
          </Button>
        </div>
      </div>
      <div className="flex w-[inherit] justify-between flex-col md:flex-row">
        <div>
          <h3
            style={{
              color: "#3A424E",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "31.2px",
            }}
          >
            Documentos
          </h3>
          <span style={{ color: "#6B7280" }}>
            Crie, gerencie e visualize os documentos
          </span>
        </div>
        <div className="flex justify-between flex-col sm:flex-row">
          {" "}
          <Input placeholder="Buscar documentos" className="max-w-sm mr-1" />
          <Button
            style={{ border: "1px solid hsl(var(--input))" }}
            variant="ghost"
            className="mt-4 sm:mt-0"
            onClick={toggleMenu}
          >
            <Filter />
            Filtrar
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div
        className="flex md:justify-between justify-start"
        style={{ width: "inherit" }}
      >
        <div className="flex w-full flex-col sm:flex-row">
          <div className="grid w-full max-w-sm items-center gap-1.5 mr-4">
            <Label className="flex items-center mt-4">
              Origem do documento
              <span className="ml-2">
                <CircleHelp className="w-4" style={{ color: "#6B7280" }} />
              </span>
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Digitalizado" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Digitalizado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="flex items-center mt-4">
              Tipo documental
              <span className="ml-2">
                <CircleHelp className="w-4" style={{ color: "#6B7280" }} />
              </span>
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo documental" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Tipo documental</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="hidden md:block">
          <NewFile />
        </div>
      </div>
      <DataTable />
      <div className="block md:hidden">
        <NewFile />
      </div>
    </>
  );
}
