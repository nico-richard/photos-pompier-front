import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams, GridValueFormatterParams } from '@mui/x-data-grid'
import { Vehicle } from '../interfaces/Vehicle'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'

interface Props {
  vehicles: Vehicle[]
  setDisplayDetails: (value: boolean) => void
  onDeleteVehicle: (id: number) => void
  setSelectedVehicle: (vehicle: Vehicle) => void
  getVues: (vehicle: Vehicle) => void
}

export const VehicleDataGrid = ({ vehicles, setDisplayDetails, onDeleteVehicle, setSelectedVehicle, getVues }: Props) => {
  const columns: GridColDef[] = [
    { field: 'id', type: 'number', headerName: 'N°', width: 50 },
    { field: 'brand', type: 'string', headerName: 'Marque', width: 100 },
    { field: 'frame', type: 'string', headerName: 'Chassis', width: 100 },
    {
      field: 'equipement',
      type: 'string',
      headerName: 'Equipement',
      width: 100,
    },
    { field: 'owner', type: 'string', headerName: 'Propriétaire', width: 100 },
    {
      field: 'date',
      type: 'date',
      headerName: 'Date',
      width: 100,
      valueFormatter: (params: GridValueFormatterParams<string>) => {
        return new Date(params.value).toLocaleDateString()
      },
    },
    {
      field: 'category_id',
      type: 'number',
      headerName: 'Catégorie',
      width: 100,
    },
    {
      field: 'vues',
      type: 'number',
      headerName: 'Nombre de vues',
      width: 130,
      valueFormatter: (params: GridValueFormatterParams<number[]>) => {
        return params.value ? params.value.length : 0
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (vehicles: GridRowParams<Vehicle>) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Supprimer'
            onClick={() => onDeleteVehicle(vehicles.row.id!)}
            sx={{
              color: 'primary.main',
            }}
          />,
        ]
      },
    },
  ]

  return (
    <DataGrid
      rows={vehicles}
      columns={columns}
      onRowClick={(params: GridRowParams<Vehicle>) => {
        setDisplayDetails(true)
        setSelectedVehicle(params.row)
        getVues(params.row)
      }}
    />
  )
}
