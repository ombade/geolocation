// import {Box,Flex,Button,useColorModeValue,
//   Stack,
//   useColorMode,  Show,
//   HStack,
//   Text,
//   useDisclosure,
//   IconButton,
//   Hide,
// } from "@chakra-ui/react";
// import {
//   MoonIcon,
//   SunIcon,
//   HamburgerIcon,
//   CloseIcon,
// } from "@chakra-ui/icons";
// import React, { useState } from "react";
// import Name from "./Name";
// import "./Navbar.css";
// import { useAuth } from '../Pages/AuthContext.js';
// import LoginComponent from '../Pages/LoginComponent.js'; 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function Navbar({ mode, setMode }) {
//  const { auth, logout } = useAuth();
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [showLogin, setShowLogin] = useState(false); 
//   const [showRegistration, setShowRegistration] = useState(true);  

//   const onLoginButtonClick = () => {
//     if (auth) {
//       logout();
//       toast.success("Logged out successfully", {
//         position: "bottom-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//     } else {
//       // If not authenticated, show login component
//       setShowLogin(true);
//     }
//   };
 
//   const onCloseLogin = () => {
//     setShowLogin(false);
//   };
//   const toggleMode = () => {
//     if (mode === 'login') {
//       setMode('signup');
//     } else {
//       setMode('login');
//     }
//   };

//   const   onRegistrationButtonClick = () => {
//     // window.location.href = 'https://salmon-painter-hkkrg.pwskills.app:5000/';
//     if (auth) {
//       window.location.href = 'https://salmon-painter-hkkrg.pwskills.app:5000/';
//     } else {
//       toast.error("unauthenticated access Not allowed", {
//         position: "bottom-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         });
//       toast.warn("Login first and then access dashboard", {
//         position: "bottom-left",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         });
//     }
//   };

//   const onCloseRegistration = () => {
//     // setShowRegistration(false);
  
//   };


//   return (
//     <div id="navFix">
//       <Box
//         bg={useColorModeValue("gray.100", "gray.900")}
//         px={9}
//         width={["100%"]}
//       >
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <HStack w="42%">
//             <Name />

//             <Show breakpoint="(min-width: 1000px)">
//               {" "}
//               {/* <Photo /> */}
//             </Show>
//           </HStack>

//           <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//             <HStack spacing={8} alignItems={"center"}>
//               <HStack
//                 as={"nav"}
//                 spacing={4}
//                 display={{ base: "none", md: "flex" }}
//                 id="myDIV"
//               >
//                 <Button className="btnRes">
//                   <a href="#Home">
//                     {" "}
//                     <b>Home</b>
//                   </a>
//                 </Button>

//                 <Button className="btnRes">
//                   <a href="#About">
//                     <b>About</b>
//                   </a>
//                 </Button>



//                 <Button className="btnRes">
//                   <a href="#Contact">
//                     <b>Contact</b>
//                   </a>
//                 </Button>
//                 {/* <Button className="btnRes">
//                   <a href="#Contact">
//                     <b>Contact Us</b>
//                   </a>
//                 </Button> */}
//                 {/* <Button
//         className="btnRes"
//         backgroundColor="#a891b7"
//         _hover={{ bg: "#a891b7", color: "black" }}
//         color="white"
//         variant="solid"
//         onClick={onLoginButtonClick} // Add the click handler
//       >
//         <b>Login</b>
//       </Button>
//               <Button
//               className="btnRes"
//                 backgroundColor="#a891b7"
//                 _hover={{ bg: "#a891b7", color: "black" }}
//                 color="white"
//                 variant="solid"
//                 onClick={onLoginButtonClick}
//                 size={["sm", "md"]}
                
//                 id="resumeBtn"
//               >
//                 <a
//                   href={"http://googlemaps.com"}
//                   target="_blank"
                  
//                 >
//                   Registration
//                 </a>
              
//               </Button> */}

// <Button
//         className="btnRes"
//         backgroundColor="#a891b7"
//         _hover={{ bg: "#a891b7", color: "black" }}
//         color="white"
//         variant="solid"
//         onClick={onLoginButtonClick} 
//       >
//         <b>{auth ? 'Logout' : 'Login'}</b>
//       </Button>
      
//       {showLogin && (
//         <div className="login-popup">
//           <button className="close-button" onClick={onCloseLogin}></button>
          
//         </div>
//       )}
//       <Button
//         className="btnRes"
//         backgroundColor="#a891b7"
//         _hover={{ bg: "#a891b7", color: "black" }}
//         color="white"
//         variant="solid"
//         onClick={onRegistrationButtonClick} // Add the click handler
//       >
//         <b>dashboard</b>
//       </Button>
//       {showRegistration && (
//         <div className="registration-popup">
//           <button className="close-button" onClick={onCloseRegistration}></button>
   
//         </div>
//       )}
//               </HStack>
//             </HStack>
//           </Flex>

        

//           <Flex alignItems={"center"}>
//             <Stack direction={"row"} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>

             
             
//             </Stack>
//           </Flex>
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           {isOpen ? (
//             <Box pb={4} display={{ md: "none" }}>
//               <Stack as={"nav"} spacing={4}>
//                 <Button  onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}>
//                   <a href="#Home">
//                     {" "}
//                     <b>Home</b>
//                   </a>
//                 </Button>
//                 <Button  onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}>
//                   <a href="#Home">
//                     {" "}
//                     <b>Home</b>
//                   </a>
//                 </Button>

//                 <Button  onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}>
//                   <a href="#Home">
//                     {" "}
//                     <b>Home</b>
//                   </a>
//                 </Button>
//                 <Button  onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}>
//                   <a href="#Home">
//                     {" "}
//                     <b>Home</b>
//                   </a>
//                 </Button>
//                 <Button
//                   onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}
//                 >
//                   <a href="#Home">
//                     {" "}
//                     <b>Home</b>
//                   </a>
//                 </Button>

//                 <Button
//                   onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}
//                 >
//                   <a href="#About">
//                     <b>About</b>
//                   </a>
//                 </Button>

                
//                 <Button
//                 onClick={onLoginButtonClick}
//                 _hover={{
//                   textShadow: "#FC0 1px 0 10px",
//                   transform: "scale(1.2)",
//                 }}
//               >
//                 <a href="#Projects">
//                   <b>login</b>
//                 </a>
//               </Button>

//                 <Button
//   onClick={onLoginButtonClick}
//   _hover={{
//     textShadow: "#FC0 1px 0 10px",
//     transform: "scale(1.2)",
//   }}
// >
//   <a href="#Projects">
//     <b>Registration</b>
//   </a>
// </Button>

//                 <Button
//                   onClick={isOpen ? onClose : onOpen}
//                   _hover={{
//                     textShadow: "#FC0 1px 0 10px",
//                     transform: "scale(1.2)",
//                   }}
//                 >
//                   <a href="#Contact">
//                     <b>Contact</b>
//                   </a>
//                 </Button>
//               </Stack>
//             </Box>
//           ) : null}
//         </Flex>
//       </Box>
//       {showLogin && (
//         <div>
//           <LoginComponent />
//           <Button onClick={onCloseLogin}>Close</Button>
//         </div>
//       )}{" "}{/* Display LoginComponent conditionally */}
//         <ToastContainer />
//     </div>
//   );
// }
import { Box, Flex, Button, useColorModeValue, Stack, useColorMode, Show, HStack, Text, useDisclosure, IconButton, Hide } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Name from "./Name";
import "./Navbar.css";
import { useAuth } from '../Pages/AuthContext.js';
import LoginComponent from '../Pages/LoginComponent.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar({ mode, setMode }) {
  const { auth, logout,uid } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);

  const onLoginButtonClick = () => {
    if (auth) {
      logout();
      toast.success("Logged out successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      // If not authenticated, show login component
      setShowLogin(true);
    }
  };

  const onCloseLogin = () => {
    setShowLogin(false);
  };
  const toggleMode = () => {
    if (mode === 'login') {
      setMode('signup');
    } else {
      setMode('login');
    }
  };

  // const onRegistrationButtonClick = () => {
  //   // Check if the user is authenticated
  //   if (auth) {
  //     // Construct the URL with the uid as a query parameter
  //     const url = `https://salmon-painter-hkkrg.pwskills.app:5000/dashboard?uid=${auth.uid}`;

  //     // Send a GET request
  //     fetch(url)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         // If the response is successful, redirect or handle it as needed
  //         window.location.href = url;
  //       })
  //       .catch(error => {
  //         // Handle errors, show a toast, etc.
  //         toast.error(`Error while sending GET request: ${error.message}`, {
  //           position: 'bottom-left',
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: 'colored',
  //         });
  //         console.error('Error:', error.message);
  //       });
  //   } else {
  //     toast.error("Unauthenticated access not allowed", {
  //       position: "bottom-left",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });

  //     toast.warn("Login first and then access dashboard", {
  //       position: "bottom-left",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   }
  // };
    const   onRegistrationButtonClick = () => {
    // window.location.href = 'https://salmon-painter-hkkrg.pwskills.app:5000/';
    if (auth) {
      
      window.location.href = `https://salmon-painter-hkkrg.pwskills.app:5000/dashboard?uid=${uid}`;
    } else {
      toast.error("unauthenticated access Not allowed", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      toast.warn("Login first and then access dashboard", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  const onCloseRegistration = () => {
    // setShowRegistration(false);

  };

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Name />

            <Show breakpoint="(min-width: 1000px)">
              {" "}
              {/* <Photo /> */}
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>

                <Button
                  className="btnRes"
                  backgroundColor="#a891b7"
                  _hover={{ bg: "#a891b7", color: "black" }}
                  color="white"
                  variant="solid"
                  onClick={onLoginButtonClick} // Add the click handler
                >
                  <b>{auth ? 'Logout' : 'Login'}</b>
                </Button>

                {showLogin && (
                  <div className="login-popup">
                    <button className="close-button" onClick={onCloseLogin}></button>

                  </div>
                )}
                <Button
                  className="btnRes"
                  backgroundColor="#a891b7"
                  _hover={{ bg: "#a891b7", color: "black" }}
                  color="white"
                  variant="solid"
                  onClick={onRegistrationButtonClick} // Add the click handler
                >
                  <b>dashboard</b>
                </Button>
                {showRegistration && (
                  <div className="registration-popup">
                    <button className="close-button" onClick={onCloseRegistration}></button>

                  </div>
                )}
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button
                  onClick={onLoginButtonClick}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Projects">
                    <b>login</b>
                  </a>
                </Button>

                <Button
                  onClick={onLoginButtonClick}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Projects">
                    <b>Registration</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
      {showLogin && (
        <div>
          <LoginComponent />
          <Button onClick={onCloseLogin}>Close</Button>
        </div>
      )}{" "}{/* Display LoginComponent conditionally */}
      <ToastContainer />
    </div>
  );
}
