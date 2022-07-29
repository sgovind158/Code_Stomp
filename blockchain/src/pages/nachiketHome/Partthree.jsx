import React from 'react'
import { Box, Button, Image, Text } from "@chakra-ui/react";
import "./Home.css";
import { TiTickOutline } from "react-icons/ti";
import { ArrowRightIcon } from "@chakra-ui/icons";
const Partthree = () => {
    let arr = [
        { title: "Get hired easily" },
        { title: "In-depth understanding of Blockchain" },
        { title: "Implementing Blockchain on business applications" },
        { title: "Blockchain and its use cases" },
        { title: "Lifetime access to the training videos" },
        { title: "Certified individuals’ names will be published on the website" },
        { title: "Assistance will be provided throughout the training program" },
      ];
  return (
    <Box
        width={"100%"}
        height={"620px"}
        // border={"1px solid red"}
        background={"linear-gradient(white,#deedff)"}
      >
        <Text
          fontFamily={"helvetica, sans-serif"}
          fontSize={"40px"}
          fontWeight={700}
          padding={"30px 0 0 0"}
        >
          What Can You Expect From Our Blockchain Certifications?
        </Text>
        <Box width={"100%"} height={"88%"} display={"flex"}>
          <Box width={"50%"} height={"95%"}>
            <Box width={"70%"} margin={"auto"} height={"80%"} marginTop={"10%"}>
              <Image
                width={"100%"}
                height={"100%"}
                src="data:image/jpeg;base64,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"
              />
            </Box>
          </Box>
          <Box width={"50%"}  height={"95%"}>
            <Box
              fontSize={"20px"}
              fontFamily={"helvetica, sans-serif"}
              textAlign={"left"}
              margin={"auto"}
              width={"80%"}
              // border={"1px solid black"}
              marginTop={"10%"}
              lineHeight={"50px"}
            >
              {arr.map((el) => (
                <Text display={"flex"} alignItems={"center"} gap={"20px"}>
                  <TiTickOutline />
                  {el.title}
                </Text>
              ))}
            </Box>
            <Box textAlign={"left"} padding={"20px 0 0 75px"}>
              <Button
                id="btn"
                fontSize={"20px"}
                color={"white"}
                backgroundColor={"#0165e3"}
                width={"40%"}
                height={"55px"}
              >
                Get Certified Now
                <ArrowRightIcon fontSize={"15px"} marginLeft={"10px"} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default Partthree