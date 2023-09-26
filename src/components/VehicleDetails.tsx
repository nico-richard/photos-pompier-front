import { Box, Button, Container, Grid, ImageList, ImageListItem, ImageListItemBar, Modal, Typography } from '@mui/material'
import { Vehicle } from '../interfaces/Vehicle'
import { formatPath } from '../utils/formatPath'
import { AddVueDialog } from './AddVueDialog'
import { useState } from 'react'
import { Vue } from '../interfaces/Vues'

interface Props {
  open: boolean
  onClose: () => void
  selectedVehicle: Vehicle | undefined
  vuesToAdd: Vue[]
  vehicleVues: Vue[]
}

export const VehicleDetails = ({ open, onClose, selectedVehicle, vuesToAdd, vehicleVues }: Props) => {
  const [openVueDialog, setOpenVueDialog] = useState<boolean>(false)

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {selectedVehicle && (
          <Container>
            <Typography variant='h5' sx={{ marginBottom: '1rem' }}>
              Vehicle {selectedVehicle.id}
            </Typography>
            <Typography>brand: {selectedVehicle.brand}</Typography>
            <Typography>frame: {selectedVehicle.frame}</Typography>
            <Typography>equipment: {selectedVehicle.equipement}</Typography>
            <Typography>owner: {selectedVehicle.owner}</Typography>
            <Typography>date: {selectedVehicle.date}</Typography>
            <Typography>commentary: {selectedVehicle.commentary}</Typography>
            <Typography>license_number: {selectedVehicle.license_number}</Typography>
            <Typography>category_id: {selectedVehicle.category_id}</Typography>
            <Typography>vues: {selectedVehicle.vues.length}</Typography>
            <Grid container direction='column' justifyContent='center' alignItems='center'>
              <Grid item>
                <Button variant='contained' onClick={() => setOpenVueDialog(true)} sx={{ marginTop: '1rem' }}>
                  Ajouter des vues
                </Button>
                <AddVueDialog open={openVueDialog} onClose={() => setOpenVueDialog(false)} vuesToAdd={vuesToAdd} />
              </Grid>
              <Grid item>
                <ImageList>
                  {vehicleVues.map(vue => (
                    <ImageListItem key={vue.id}>
                      <img src={formatPath(vue.image_path, 'IMAGES')} alt={vue.image_path} />
                      <ImageListItemBar title={vue.image_path.split('/')[vue.image_path.split('/').length - 1]} />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>
          </Container>
        )}
      </Box>
    </Modal>
  )
}
