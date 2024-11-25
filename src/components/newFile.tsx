import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUpload } from "@/components/fileUpload";
export function NewFile() {
  const [activeModal, setActiveModal] = useState<"A" | "B" | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const openModalA = () => setActiveModal("A");
  const openModalB = () => setActiveModal("B");
  const closeModal = () => setActiveModal(null);
  const deleteFile = () => setUploadedFile(null);
  return (
    <>
      <Dialog
        open={activeModal === "A"}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogTrigger asChild>
          <div>
            <div className="hidden md:block">
              {" "}
              <Button
                style={{
                  border: "1px solid hsl(var(--input))",
                  backgroundColor: "#05C151",
                }}
                onClick={openModalA}
              >
                <Plus />
                Novo documento
              </Button>
            </div>

            <Button
              className="block md:hidden "
              style={{
                backgroundColor: "#05C151",
                position: "absolute",
                bottom: "100px",
                right: "34px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
              }}
              onClick={openModalA}
            >
              {" "}
              <Plus />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Criar novo documento</DialogTitle>
            <DialogDescription>
              Insira os dados necessários para criar
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 mr-4">
              <Label className="flex items-center mt-4 font-bold">
                Origem do documento
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecionar a origem do documento " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Digitalizado</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="flex items-center mt-4 font-bold">
                Tipo documental
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecionar tipo do documento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Tipo documental</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <FileUpload
              onCloseModalA={closeModal}
              onOpenModalB={() => {
                closeModal();
                openModalB();
              }}
              onFileUpload={(file: File) => setUploadedFile(file)}
              uploadedFile={uploadedFile}
              onDeleteFile={deleteFile}
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={activeModal === "B"}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Pré-visualização do arquivo</DialogTitle>
          </DialogHeader>
          <div>
            {uploadedFile ? (
              <div>
                <p className="text-gray-700 mb-4">{uploadedFile.name}</p>
                {uploadedFile.type === "application/pdf" ? (
                  <iframe
                    src={URL.createObjectURL(uploadedFile)}
                    title="PDF Preview"
                    className="w-full h-96 border rounded"
                  ></iframe>
                ) : (
                  <p className="text-gray-500">
                    O arquivo enviado não é um PDF.
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Nenhum arquivo enviado.</p>
            )}
          </div>
          <DialogFooter>
            <Button style={{ backgroundColor: "#05C151" }} onClick={openModalA}>
              Ferchar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
