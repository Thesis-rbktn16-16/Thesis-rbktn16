import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  Text,
  Link,
  NativeBaseProvider,
  VStack,
  View,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Loading from "../../../../src/components/Loading/Loading";

function AdventurePassDetails() {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="40%"
      shadow={1}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
    >
      <Box>
        <Text fontSize="2xl" marginBottom="3">
          Adventure Pass
        </Text>
        <Text fontWeight="500">
          The Adventure Pass is perfect for tourists, visitors, and anyone
          looking for a long or leisurely ride.
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Image
            marginTop="5"
            rounded="lg"
            height="100%"
            width="100%"
            source={require("../../../../assets/haveFun.jpg")}
            alt={"Loading..."}
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={6}>
        <Text fontWeight="500" fontWeight="400">
          For just 25TD, you'll get 24 hours of access to By-Cycle and you can
          keep a bike out for up to 2 hours at a time. If you're enjoying a long
          ride and want to keep a bike out longer than 2 hours at a time, it's
          only an extra 3TD per additional 30 minutes. With By-Cycle, you can
          take a bike out from any station within the system and return it to
          any other. So you can take a one-way trip or stop to explore on foot
          without having to worry about locking up a rental bike. With thousands
          of bikes across Metro Boston, By-Cycle is the most convenient (and
          fun!) way to get around.
        </Text>
        <Stack space={2}>
          <Text
            fontSize="xs"
            _light={{ color: "violet.500" }}
            _dark={{ color: "violet.300" }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            Buy a pass
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AdventurePassDetails />
      </Center>
    </NativeBaseProvider>
  );
}