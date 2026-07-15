const pages = ["index", "projects", "experiences"] as const satisfies string[];
export type Pages = (typeof pages)[number];
