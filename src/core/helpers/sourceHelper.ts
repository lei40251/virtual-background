export type SourceConfig = {
  type: 'image' | 'video' | 'camera'
  url?: string
}

export type SourcePlayback = {
  htmlElement: HTMLImageElement | HTMLVideoElement
  width: number
  height: number
}

export const sourceImageUrls = [
  'doctor-5871743_640',
  'woman-5883428_1280',
].map((imageName) => `images/${imageName}.jpg`)

export const sourceVideoUrls = [
  'Dance - 32938',
  'Doctor - 26732',
  'Thoughtful - 35590',
].map((videoName) => `videos/${videoName}.mp4`)
