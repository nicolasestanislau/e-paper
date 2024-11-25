import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { ArrowRight, FileUp, X, FileCheck } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export function FileUpload({
  onCloseModalA,
  onOpenModalB,
  onFileUpload,
  uploadedFile,
  onDeleteFile,
}: {
  onCloseModalA: () => void;
  onOpenModalB: () => void;
  onFileUpload: (file: File) => void;
  uploadedFile: File | null;
  onDeleteFile: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(100);

  const onDrop = (acceptedFiles: File[]) => {
    console.log("ondrop");
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = () => {
    if (uploadedFile) {
      console.log("Enviando arquivo", uploadedFile);
    }
  };

  const handleClick = () => {
    console.log("file: ", file);
    handleUpload();
    onCloseModalA();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      onFileUpload(file);
    }
  };

  return (
    <div className="rounded-lg max-w-lg mx-auto">
      {!uploadedFile && (
        <div
          {...getRootProps()}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 border-2 border-dashed border-gray-400 rounded-md"
          style={{ borderColor: "#05C151" }}
        >
          <input
            {...getInputProps()}
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <FileUp color="#05C151" />
          <p className="text-gray-600 text-center">
            Arraste ou clique para selecionar um arquivo
          </p>
          <Button
            style={{
              border: "1px solid hsl(var(--input))",
              backgroundColor: "#fff",
            }}
            variant="ghost"
          >
            Procurar e selecionar arquivo
          </Button>
          <p
            style={{ fontSize: "12px" }}
            className="mt-2 text-gray-600 text-center"
          >
            Tamanho max.: 10MB
          </p>
        </div>
      )}

      {uploadedFile && (
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-gray-700 flex items-center">
              <FileCheck
                style={{
                  color: "#05C151",
                }}
                className="mr-2"
              />{" "}
              {uploadedFile.name}
            </p>

            <Button
              variant="outline"
              onClick={onDeleteFile}
              className="border-none"
            >
              <X />
            </Button>
          </div>
          <div className="flex">
            <Progress value={progress} />
          </div>
        </div>
      )}
      <Button
        style={{
          backgroundColor: "transparent",
          color: "#05C151",
          boxShadow: "none",
        }}
        disabled={!uploadedFile}
        onClick={onOpenModalB}
      >
        Pré-visualizar
      </Button>

      <Separator className="my-4" />
      <div className="mt-4 flex space-x-4 justify-end">
        <Button
          variant="outline"
          onClick={onDeleteFile}
          disabled={!uploadedFile}
        >
          Cancelar
        </Button>
        <DialogClose
          onClick={handleClick}
          disabled={!uploadedFile}
          style={{
            backgroundColor: "#05C151",
            borderRadius: "4px",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#fff",
            opacity: uploadedFile ? 1 : 0.5,
            borderWidth: "1px",
            lineHeight: "1.25rem",
            height: "36px",
            display: "flex",
            alignItems: "center",
          }}
          className="flex py-2 px-4"
        >
          {uploadedFile ? "Criar documento" : "Criar documento"}
          <ArrowRight size={16} className="ml-2" />
        </DialogClose>
      </div>
    </div>
  );
}
