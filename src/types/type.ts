import { StaticImageData } from "next/image";
export interface roomCardType {
    roomData: {
        id: number;
        name: string;
        description: string;
        src?: string[] | StaticImageData[];
        image?: string | StaticImageData;
        linkName: string;
        linkUrl: string;
    }
}


export interface amenitiesProps {
    icon: React.ReactNode;
    title: string;
}

export interface CardProps {
    data: {
        // id: number;
        blog: boolean;
        image?: string | StaticImageData;
        title: string;
        icon?: React.ReactNode;
    };
}