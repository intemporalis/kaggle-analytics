import Head from "../../components/channelStats/head/Head.tsx"
import "./channelStats.scss"
import { useLocation } from 'react-router-dom';


const ChannelStats = () => {

  const location = useLocation();
  const data = location.state;

  return (
    <div className="channelStats">
        <Head {...data}/>
    </div>
  )
}

export default ChannelStats