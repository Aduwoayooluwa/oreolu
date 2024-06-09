import { FluidMechImage, MechEng, Thermo } from "../assets"
export interface ModuleType {
    id: number;
    title: string;
    shortDesc: string;
    imgUrl: string;
}

export const modulesData: ModuleType[] = [
    {
        id: 1,
        title: "Introduction to Mechanical Engineering",
        shortDesc: "Explore the basics of mechanical engineering, including fundamental concepts and common applications.",
        imgUrl: MechEng
    },
    {
        id: 2,
        title: "Advanced Fluid Dynamics",
        shortDesc: "Dive deeper into fluid dynamics to understand the behavior of liquids and gases in motion.",
        imgUrl: FluidMechImage
    },
    {
        id: 3,
        title: "Thermodynamics and Heat Transfer",
        shortDesc: "Learn about the principles of thermodynamics and the methods of heat transfer essential for thermal engineering.",
        imgUrl: Thermo
    }
];
