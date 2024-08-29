import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const UserProfile = () => {
  return (
    <Box>
      <Paper elevation={2} sx={{
        padding: '2rem',
        margin: '2rem',
        height: '40vh',
        maxWidth: 'md'
      }}>
        <Typography variant='h5'>
        This is the user profile.
        This  page will show all the  information related to the logged in user.
        </Typography>
      </Paper>
    </Box>
  )
}

export default UserProfile
