import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import { DataGrid, GridToolbar ,GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';


const CategoryList = () => {
  const categories = useAppSelector(selectCategories)

  // use categories to create rows
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleDateString('pt-BR')
  }))
  
  const columns: GridColDef[] = [
    {  
      field: 'name', 
      headerName: 'Name', 
      flex: 1,
      renderCell: renderNameCell
    },
    { 
      field: 'isActive', 
      headerName: 'Active', 
      flex: 1, 
      type: "boolean",
      renderCell: renderIsActiveCell
    },
    { field: 'createdAt', headerName: 'Created At', flex: 1},    
    { 
      field: 'id', 
      headerName: 
      'Actions', 
      flex: 1,  
      renderCell: renderActionCell
    },
  ];

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return <Typography color={rowData.value? "primary" : "secondary"}>
      {rowData.value ? "Active" : "Inactive"}
      </Typography>;
  }
  function renderActionCell(rowData: GridRenderCellParams){
    return (
      <IconButton
        color='secondary'
        onClick={() =>console.log('clicked')}
        aria-label="delete">
          <DeleteIcon />
      </IconButton>
    )
  }

  function renderNameCell(rowData: GridRenderCellParams){
    return (
      <Link
        style={{ textDecoration: "none"}}
        to={`/categories/edit/${rowData.id}`}>
          <Typography color="primary">{rowData.value}</Typography>
      </Link>
    )
  }


  return (
    <Box maxWidth="lg" sx={{mt:4, mb:4}}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{marginBottom: "1rem"}}
        >
          New Category
        </Button>
      </Box>
      <Container>
        <div style={{height: 500, width:"100%"}}>
          <DataGrid 
            components={{Toolbar: GridToolbar}}
            rows={rows} 
            columns={columns} 
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500}
              }
            }}
            disableColumnFilter={true}
            disableColumnSelector={true}
            disableDensitySelector={true}
            disableSelectionOnClick={true}
            />
        </div>

      </Container>
    </Box>
  )
};


export default CategoryList;