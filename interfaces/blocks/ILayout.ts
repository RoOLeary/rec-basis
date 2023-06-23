import { AllData } from "./IAllData";
import { Footer } from "./IFooter";
import { Header } from "./IHeader";

export interface Layout {
    title : string,
    header : Header
    footer : Footer
}