import { useEffect, useState } from "react";
import axios from "axios";
import "./youtubeStats.scss";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable.tsx";
import YoutubeChannel from "../../interfaces/YoutubeChannel.ts";

const channels_url = import.meta.env.VITE_CHANNELS_URL;
const img_url = channels_url + 'image/';

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "id",
    type: "number",
  },
    { field: "rank", headerName: "Rank", width: 50 },
    {
      field: "img_src", headerName: "", width: 50,
      renderCell: (params) => {
        return (
          <img src={img_url +
            (params.row.img_path ? params.row.img_path : 'default.jpg')}>
          </img>
        );
      }
    },
    {
      field: "Youtuber",
      type: "string",
      headerName: "Channel Name",
      width: 250,
    },
    {
      field: "subscribers",
      type: "number",
      headerName: "Subscribers",
      width: 150,
    },
    {
        field: "category",
        headerName: "Category",
        type: "string",
        width: 150,
      },
    
    {
      field: "video views",
      type: "number",
      headerName: "Total Views",
      width: 200,
    },
    {
        field: "Country",
        headerName: "Country",
        width: 150,
        type: "string",
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      width: 200,
      renderCell: (params) => {
        return (
            <span>{
              params.row.created_month + ' '
              + params.row.created_date + ' '
              + params.row.created_year
            }</span>
        );
      }
    },
  ];

  columns.map(col => {
    col.headerAlign ='center'
    col.align ='center'
  })

// hide id field
const initialState = {
  columns: {
    columnVisibilityModel: {
      // hidden id column
      id: false
    },
  },
}

const YoutubeStats = () => {
  const [open, setOpen] = useState(false);
  const [channels, setChannels] = useState(null);

  useEffect(() => {
    axios.get(channels_url).then((response) => {
      // assign id field to conform to DataTable generic 'id' reference
      response.data.forEach( (item: YoutubeChannel) => {
        item.id = item.rank
      });

      setChannels(response.data);
    });
  }, []);

  if (!channels) return null;

  return (
    <div className="youtubeStats">
        <div className="info">
          <h1>Youtube Stats</h1>
        </div>
        <DataTable slug="channel" columns={columns} rows={channels} initialState={initialState} />
    </div>
  )
}

export default YoutubeStats