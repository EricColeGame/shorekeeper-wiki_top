export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Shorekeeper Wiki",
  shortName: "Shorekeeper",
  logoText: "S",
  tagline: "Build, Materials, Teams & Skill Guides",
  description: "Complete Shorekeeper guide for Wuthering Waves covering builds, weapons, echoes, materials, teams, skills, and gameplay tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shorekeeper-wiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shorekeeper-wiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://wutheringwaves.kurogames.com/en/",
  heroVideoId: "FQEyNpQnK60", // Wuthering Waves official Shorekeeper Resonator Showcase
  social: {
    discord: "https://discord.com/invite/wutheringwaves",
    youtube: "https://www.youtube.com/@wutheringwaves_official",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
