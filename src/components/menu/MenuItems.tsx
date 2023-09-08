import { YouTube, AccessAlarm } from '@mui/icons-material';

const menu = [
  {
    id: 1,
    title: "Dashboards",
    listItems: [
      {
          id: 1,
          title: "Youtube Channels",
          url: "/dashboard/1",
          icon: <YouTube/>
      },
      {
          id: 2,
          title: "...?",
          url: "/dashboard/2",
          icon: <AccessAlarm/>
      },
      {
          id: 3,
          title: "...?",
          url: "/dashboard/3",
          icon: <AccessAlarm/>
      }
    ],
  }
];

export default menu