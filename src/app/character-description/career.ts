export interface Career {
    display: string;
    value: string;
    careerSkills: Skills[];
}

export interface CareerGroup {
    disabled?: boolean;
    name: string;
    careers: Career[];
}

