import { useState } from "react";
import "./youtubeStats.scss"
import { GridColDef } from "@mui/x-data-grid"
import DataTable from "../../components/dataTable/DataTable.tsx";
import data from '../../../../resources/youtube/clean_data.json';

const img_path_base = "/youtube/pics/";

// assign id field to conform to DataTable generic 'id' reference
data.forEach( item => {
  item.id = item.rank
})

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
          <img src={img_path_base +
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
  const [open, setOpen] = useState(false)
  return (
    <div className="youtubeStats">
        <div className="info">
          <h1>Youtube Stats</h1>
        </div>
        <DataTable slug="channel" columns={columns} rows={data} initialState={initialState} />
    </div>
  )
}

export default YoutubeStats