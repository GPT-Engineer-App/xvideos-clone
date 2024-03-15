import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Grid, Image, Container, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Hot video 1",
    thumbnail: "https://images.unsplash.com/photo-1557086306-de6579e2f837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXh5JTIwdmlkZW8lMjB0aHVtYm5haWx8ZW58MHx8fHwxNzEwNDc1MzAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Sexy clip 2",
    thumbnail: "https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlcm90aWMlMjB2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTA0NzUzMDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Adult video 3",
    thumbnail: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3JuJTIwdmlkZW8lMjB0aHVtYm5haWx8ZW58MHx8fHwxNzEwNDc1MzAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // more video data...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // TODO: implement search functionality
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <Box>
      <Box bg="red.500" p={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading color="white">XVideos</Heading>
            <Spacer />
            <Flex>
              <Input placeholder="Search videos..." mr={4} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <Button leftIcon={<FaSearch />} onClick={handleSearch}>
                Search
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" mt={8}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {videos.map((video) => (
            <Box key={video.id}>
              <Image src={video.thumbnail} alt={video.title} />
              <Text mt={2}>{video.title}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
