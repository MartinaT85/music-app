import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

import {
  MdHome,
  MdSearch,
  MdPlaylistAdd,
  MdFavorite,
  MdLibraryMusic,
} from 'react-icons/md'

import NextImage from 'next/image'
import NextLink from 'next/link'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },

  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
]

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 6.25rem)"
      bg="black"
      paddingX="0.5rem"
      color="gray"
    >
      <Box paddingY="1.25rem" height="100%">
        <Box width="7.8125rem" marginBottom="1.25rem" paddingX="1.25rem">
          <NextImage src="/logo.svg" width={120} height={60} />
        </Box>
        <Box marginBottom="1.25rem">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="1.25rem" fontSize="1rem" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="1.25rem"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem key={item.name} paddingX="1.25rem" fontSize="1rem">
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="1.25rem"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginTop="1.25rem" color="gray.800" />
        <Box height="53%" overflowY="auto" paddingY="1.25rem">
          {new Array(50).fill(1).map(() => (
            <h1>Hello</h1>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
