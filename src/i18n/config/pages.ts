const pages = ["index"] as const satisfies string[];
export type Pages = (typeof pages)[number];
