type Props = {
  srcId: string;
  short?: boolean;
};

export default function Card({ srcId, short = false }: Props) {
  return (
    <div className="bg-white break-inside-avoid p-1 mb-2 rounded-lg">
      <iframe
        className="w-full aspect-video p-1 rounded-lg"
        width={short ? "288" : "512"}
        height={short ? "512" : "288"}
        src={`https://www.youtube.com/embed/${srcId}?controls=0`}
        title="video"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      />
    </div>
  )
}
