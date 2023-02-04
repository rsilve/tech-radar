export const quarters = [1, 2, 3, 4] as const
export const levels = [1, 2, 3, 4] as const

export type Quarter = typeof quarters[number]
export type Level = typeof levels[number]

export type Category = "Language" | "Tools" | "Plateform" | "Technique"
export type Adoption = "Adopt" | "Trial" | "Assess" | "Hold"

export type Orientation = "right" | "left";

export type Item = {
    index: number;
    name: string;
    quarter: Quarter;
    level: Level;
    x: number;
    y: number;
    direction?: -1 | 1;
}



