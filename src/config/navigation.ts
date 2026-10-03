import type { LucideIcon } from "lucide-react";
import { BookOpen, Cog, Image, Newspaper, Package, Swords, Users } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "teams", path: "/teams", icon: Swords, isContentType: true },
  { key: "updates", path: "/updates", icon: Newspaper, isContentType: true },
  { key: "media", path: "/media", icon: Image, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
