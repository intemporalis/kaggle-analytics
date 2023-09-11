import { Link } from "react-router-dom";
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Launch } from '@mui/icons-material';


type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string;
    initialState?: object;
}

const DataTable = (props:Props) => {

    const actionColumn:GridColDef = {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to= {`/${props.slug}/${params.row.id}`}
                    state={props.rows[params.row.id]}
                    >
                      <Launch />
                    </Link>
                </div>
            )
        }
    }

  return (
    <div className="dataTable">
        <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          ...props.initialState,
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar: {
                showQuickFilter:true,
                quickFilterProps: { debounceMs: 500 },
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable