import { useEffect, useState } from 'react'
import { addVehicle, deleteVehicle, getPhotosNameToAdd, getVehicles, getVuesByVehicleId } from '../api'
import { Vehicle } from '../interfaces/Vehicle'
import { Button, Container, List, ListItem, Typography } from '@mui/material'
import {
  generateBrand,
  generateDate,
  generateEquipment,
  generateFrame,
  generateLicenseNumber,
  generateOwner,
} from '../utils/randomGeneration'
import { Vue } from '../interfaces/Vues'
import { VehicleDetails } from './VehicleDetails'
import { VehicleDataGrid } from './VehicleDataGrid'

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [displayDetails, setDisplayDetails] = useState<boolean>(false)
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>()
  const [vehicleVues, setVehicleVues] = useState<Vue[]>([])
  const [vuesToAdd, setVuesToAdd] = useState<Vue[]>([])

  useEffect(() => {
    async function fetchData() {
      const data: Vehicle[] = await getVehicles()
      setVehicles(data)

      const photosNameToAdd = await getPhotosNameToAdd()
      const newPhotosToAdd = photosNameToAdd.map(vuePath => {
        let vue: Vue = {
          image_path: vuePath,
        }
        return vue
      })
      setVuesToAdd(newPhotosToAdd)
    }
    fetchData()
  }, [])

  const onGenerateNewVehicle = async () => {
    let maxIndex = 0
    vehicles.forEach(vehicle => {
      if (vehicle.id && vehicle.id > maxIndex) {
        maxIndex = vehicle.id
      }
    })

    const newVehicle: Vehicle = {
      id: maxIndex + 1,
      brand: generateBrand(),
      frame: generateFrame(),
      equipement: generateEquipment(),
      owner: generateOwner(),
      date: generateDate(),
      commentary: '',
      license_number: generateLicenseNumber(),
      category_id: 1,
      vues: [],
    }
    setVehicles([...vehicles, newVehicle])

    await addVehicle(newVehicle)
  }

  const getVues = async (vehicle: Vehicle | undefined) => {
    if (vehicle && vehicle.id) {
      const data: Vue[] = await getVuesByVehicleId(vehicle.id)
      setVehicleVues(data)
    }
  }

  const onCloseVehicleDetails = () => {
    setDisplayDetails(false)
  }

  const onDeleteVehicle = async (vehicleId: number) => {
    await deleteVehicle(vehicleId)
    const newVehicles = vehicles.filter(vehicle => vehicle.id !== vehicleId)
    setVehicles(newVehicles)
  }

  return (
    <Container>
      <VehicleDetails
        open={displayDetails}
        onClose={onCloseVehicleDetails}
        vuesToAdd={vuesToAdd}
        selectedVehicle={selectedVehicle}
        vehicleVues={vehicleVues}
      />

      <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
        Liste des véhicules
      </Typography>
      <Button variant='contained' onClick={onGenerateNewVehicle} sx={{ marginBottom: '1rem' }}>
        Ajouter
      </Button>
      <VehicleDataGrid
        vehicles={vehicles}
        setDisplayDetails={setDisplayDetails}
        onDeleteVehicle={onDeleteVehicle}
        setSelectedVehicle={setSelectedVehicle}
        getVues={getVues}
      />
      <List>
        <Typography variant='h4'>Nombre de photos en attente : {vuesToAdd.length}</Typography>
        {vuesToAdd.map((photo, index) => (
          <ListItem key={index}>{photo.image_path}</ListItem>
        ))}
      </List>
    </Container>
  )
}
