import React, { useState } from 'react'
import cart from "../Pages/cartPage.module.css"
import { Badge, Heading, Image, Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const CartPage = () => {
    const [counter, setCounter] = useState(10)
  return (
    <div className={cart.mainDiv}>
      <TableContainer>
  <Table variant='simple' >
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead  className={cart.thead} border = "box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
      <Tr>
        <Th>Delete</Th>
        <Th>Image</Th>
        <Th>PRODUCT</Th>
        <Th isNumeric>PRICE</Th>
        <Th isNumeric>QUANTITY</Th>
        <Th isNumeric>TOTAL</Th>
       
      </Tr>
    </Thead>
    <Tbody className={cart.tbody}  border = "box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
      <Tr>
        <Td onClick={()=>{}} ><CloseIcon/></Td>
        <Td> <Image
    boxSize='100px'
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  /></Td>
  {/* link add krni he */}
        <Td>Certified Metaverse Expert™</Td>
        <Td isNumeric>&#36;100</Td>
        <Td isNumeric   >
        <Button colorScheme='teal' variant='outline'  onClick={()=>{
            if(counter>0){
                setCounter(counter-1)
            }
          }}  >  
               -
          </Button>
          <Badge variant='outline' colorScheme='green' h="40px" w={"40px"} paddingTop="12px" paddingRight={"15px"}>
          {counter}
            </Badge>
              

              <Button colorScheme='teal' variant='outline' onClick={()=>setCounter(counter+1)} >
              +
          </Button>

        </Td>
        <Td isNumeric>&#36;100</Td>
      </Tr>
      
    </Tbody>
    <Box bg='tomato' w='100%' p={4} color='white' marginTop={"30px"}>
   Update Cart
</Box>
    
  </Table>
</TableContainer>

<Box  w='40%' p={4} 
// border="1px solid red"
   marginTop={"100px"}>
<Heading >Cart Totals</Heading>
<Box
//   border={"1px solid red"}
   display="flex" justifyContent={"space-between"} padding="auto">
 <Box>  <Text fontSize='xl'>SUBTOTAL</Text> </Box>
 <Box>  <Text fontSize='xl'>&#36;100</Text> </Box>

</Box>

<Box
//  border={"1px solid red"}
border={" box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 1px 1px;"}
  display="flex" justifyContent={"space-between"} padding="auto">
 <Box  ><Text fontSize='xl'>TOTAL</Text> </Box>
 <Box><Text fontSize='xl'>&#36;100</Text> </Box>

</Box>
</Box>
<Button colorScheme='teal' size='lg'>
   Proceed to Checkout
  </Button>

    </div>
  )
}

export default CartPage
