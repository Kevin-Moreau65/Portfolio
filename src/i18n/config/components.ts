const components = ["header"] as const satisfies string[];
export type Components = (typeof components)[number];
