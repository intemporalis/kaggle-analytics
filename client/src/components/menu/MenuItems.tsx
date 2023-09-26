import { YouTube, AccessAlarm } from '@mui/icons-material';

const menu = [
  {
    id: 1,
    title: "Dashboards",
    listItems: [
      {
          id: 1,
          title: "Youtube Channels",
          url: "/channels",
          icon: <YouTube/>
      },
      {
          id: 2,
          title: "...?",
          url: "/",
          icon: <AccessAlarm/>
      },
      {
          id: 3,
          title: "...?",
          url: "/",
          icon: <AccessAlarm/>
      }
    ],
  }
];

export default menu