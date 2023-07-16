import { toast } from "react-toastify";

export const sentenceToPascalCase = (sentence) => {
return sentence.replace(/\b\w/g, l => l.toUpperCase())
}

export const copyToClipboardByParam = (text) => {
   navigator.clipboard.writeText(text)
   toast.success("Coppied to clipboard", {
      pauseOnHover: false,
   });
}