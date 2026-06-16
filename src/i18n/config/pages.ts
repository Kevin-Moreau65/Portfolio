const pages = ["index", "projects"] as const satisfies string[];
export type Pages = (typeof pages)[number];
