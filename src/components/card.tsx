type Props = {
  srcId: string;
  short?: boolean;
  onClick?: () => void
};

export default function Card({ onClick, srcId, short = false }: Props) {
  return (
    <div
      className="bg-white break-inside-avoid px-1 py-6 mb-2 rounded-lg"
      onClick={onClick}
    >
      <iframe
        className="w-full aspect-video p-1 rounded-lg"
        height={short ? "512" : undefined}
        src={`https://www.youtube.com/embed/${srcId}?controls=0`}
        title="video"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      />
    </div>
  )
}
