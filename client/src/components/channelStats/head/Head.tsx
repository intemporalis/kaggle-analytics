import { AccountBox } from "@mui/icons-material";
import "./head.scss"
import { Launch } from '@mui/icons-material';
import { Link } from "react-router-dom";
import YoutubeChannel from "../../../interfaces/YoutubeChannel.ts";

const img_path_base = "/youtube/pics/";


const Head = (props:YoutubeChannel) => {
  return (
    <div className="head">
        <div className="profile">
          <img className="profilePhoto" src={img_path_base +
            (props.img_path ? props.img_path : 'default.jpg')}>
          </img>
          <div className="headInfo">
            <span className="name">
              {props.Youtuber}
              { props.channel_url.length ?
              <sup>
              <Link to={props.channel_url} target="_blank">
                <Launch />
              </Link>
            </sup>
            :
            ''
            }
              
            </span>
            <span className="rank">Rank: {props.rank}</span>
          </div>
        </div>
        
        
        
        <div className="subscribers">{props.subscribers}</div>
        <div className="totalViews">{props["video views"]}</div>
    </div>
  )
}

export default Head