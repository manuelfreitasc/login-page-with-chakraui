import { Box, Text, Heading, Input, Button } from "@chakra-ui/react";

export function Form() {
  return (
    <Box
      width="100%"
      height="100vh"
      bg="gray.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
       
        p="8"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as='h3' size='lg' mb="8" color="gray.100">
          login in
        </Heading>
        <Box mb="3">
          <Input
            w="350px"
            h="14"
            border="0"
            borderRadius="0"
            bg="gray.800"
            
            placeholder="E-mail"
            _placeholder={{color:"gray.700"}}
          />
        </Box>
        <Box mt="3">
          <Input
            w="350px"
            h="14"
            border="0"
            borderRadius="0"
            bg="gray.800"
           
            placeholder="Password"
            _placeholder={{color:"gray.700"}}
          />
        </Box>
        <Button
          mt="9"
          width="350px"
          h="12"
          bg="yellow.500"
          borderRadius="0"
          _hover={{
            transition: "0.7s",
            filter: "brightness(0.8)"
          }}
        >
          <Text color="gray.100">Log in</Text>
        </Button>
      </Box>
    </Box>
  );
}
