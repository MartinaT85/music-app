import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="15.625rem" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="15.625rem" marginBottom="6.25rem">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        Player
      </Box>
    </Box>
  )
}

export default PlayerLayout
