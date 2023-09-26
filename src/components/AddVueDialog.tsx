import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useState } from 'react'
import { formatPath } from '../utils/formatPath'
import { Vue } from '../interfaces/Vues'

interface Props {
  open: boolean
  onClose: () => void
  vuesToAdd: Vue[]
}

export const AddVueDialog = ({ open, onClose, vuesToAdd }: Props) => {
  const [selectedPhotosToAdd, setSelectedPhotosToAdd] = useState<string[]>([])

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sélectionner les photos à ajouter</DialogTitle>
      <DialogContent>
        <ImageList cols={3}>
          {vuesToAdd.map((vue, index) => (
            <ImageListItem key={index}>
              <img src={formatPath(vue.image_path, 'temp')} alt={vue.image_path} />
              <ImageListItemBar
                title={vue.image_path.split('/')[vue.image_path.split('/').length - 1]}
                actionIcon={
                  <IconButton
                    onClick={() => {
                      selectedPhotosToAdd.includes(vue.image_path)
                        ? setSelectedPhotosToAdd(selectedPhotosToAdd.filter(path => path !== vue.image_path))
                        : setSelectedPhotosToAdd([...selectedPhotosToAdd, vue.image_path])
                    }}
                  >
                    {selectedPhotosToAdd.includes(vue.image_path) ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                  </IconButton>
                }
                actionPosition='left'
              />
            </ImageListItem>
          ))}
        </ImageList>
        <p>{selectedPhotosToAdd}</p>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={() => console.log(selectedPhotosToAdd)}>
          Ajouter
        </Button>
        <Button onClick={onClose}>Fermer</Button>
      </DialogActions>
    </Dialog>
  )
}
