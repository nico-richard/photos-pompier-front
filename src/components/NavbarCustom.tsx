import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { Link } from 'react-router-dom'

export const NavbarCustom = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          component={Link}
          to='/'
          sx={{
            color: 'red',
            boxShadow: '0px 0px 5px white',
            marginRight: '1rem',
          }}
        >
          <LocalFireDepartmentIcon />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          PHOTOS POMPIER
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button component={Link} to='/vehicules' color='inherit'>
            Véhicules
          </Button>
          <Button component={Link} to='/categories' color='inherit'>
            Catégories
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
