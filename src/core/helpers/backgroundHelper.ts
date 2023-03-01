export type BackgroundConfig = {
  type: 'none' | 'blur' | 'image'
  url?: string
}

export const backgroundImageUrls = [
  'bg1',
  'bg2',
  'bg3',
  'bg4',
  'bg5',
  'bg6',
  'bg7',
].map((imageName) => `backgrounds/${imageName}.jpeg`)
