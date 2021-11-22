import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}:ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Sandeson Queiroz</Text>
                    <Text color="gray.300" fontSize="small">sandesonam@email.com</Text>
                </Box>
            ) }

            <Avatar size="md" name="Sandeson Queiroz" src="https://avatars.githubusercontent.com/u/64561246?v=4" />
        </Flex>
    )
}