export const quarters = [1, 2, 3, 4] as const
export const levels = [1, 2, 3, 4] as const

export type Quarter = typeof quarters[number]
export type Level = typeof levels[number]

export type Categories = {
    [n in Quarter]: string;
};
export type AdoptionLevels = {
    [n in Level]: string;
};





