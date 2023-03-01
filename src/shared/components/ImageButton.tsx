import useImageThumbnail from '../hooks/useImageThumbnail'
import ThumbnailButton from './TumbnailButton'

type ImageButtonProps = {
  title?:string,
  imageUrl: string
  active: boolean
  onClick: () => void
}

function ImageButton(props: ImageButtonProps) {
  const [thumbnailUrl, revokeThumbnailUrl] = useImageThumbnail(props.imageUrl)

  return (
    <ThumbnailButton
      title={props.title}
      thumbnailUrl={thumbnailUrl}
      active={props.active}
      onClick={props.onClick}
      onLoad={revokeThumbnailUrl}
    />
  )
}

export default ImageButton
