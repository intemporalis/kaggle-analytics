import "./head.scss"

type Props = {
    rank: number;
    Youtuber: string;
    subscribers: number;
    "video views": number;
    category?: string;
    uploads: number;
}

const Head = (props:Props) => {
  return (
    <div className="head">
        <div className="rank">Rank: {props.rank}</div>
        <div className="name">Name: {props.Youtuber}</div>
        <div className="subscribers">{props.subscribers}</div>
        <div className="totalViews">{props["video views"]}</div>
    </div>
  )
}

export default Head