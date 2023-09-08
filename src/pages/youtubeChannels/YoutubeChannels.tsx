import { useState } from "react";
import "./youtubeChannels.scss"
import { GridColDef } from "@mui/x-data-grid"
import DataTable from "../../components/dataTable/DataTable.tsx";
import data from '../../../resources/Global YouTube Statistics.json'


const columns: GridColDef[] = [
    { field: "rank", headerName: "Rank", width: 50 },
    {
      field: "subscribers",
      type: "number",
      headerName: "Subscribers",
      width: 150,
    },
    {
      field: "Youtuber",
      type: "string",
      headerName: "Youtuber",
      width: 250,
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

const YoutubeAnalytics = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="youtubeChannels">
        <div className="info">
          <h1>Youtube Channels</h1>
        </div>
        <DataTable slug="channels" columns={columns} rows={data}/>
    </div>
  )
}

export default YoutubeAnalytics