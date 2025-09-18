export interface OverlaySettings {
  overlayType: 'none' | 'dark' | 'light' | 'primary' | 'secondary' | 'accent' | 'custom';
  overlayOpacity: number;
  overlayColor?: string;
  videoAlignment?: 'center' | 'top' | 'bottom';
}

export interface MediaEntry {
  filename: string;
  path: string;
  type: 'video' | 'image';
}

export interface SiteConfig {
  heroVideos: Record<string, string>;
  heroBackgrounds: Record<string, string>;
  heroOverlays: Record<string, OverlaySettings>;
  heroOverlayByPath: Record<string, OverlaySettings>;
  [key: string]: any;
}