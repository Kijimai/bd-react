import React from "react"
import { navLinks } from "../data/data"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const Navbar = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {navLinks.map((link, index) => {
          return <LinkTab label={link} href={`/${link}`} />
        })}
      </Tabs>
    </Box>
  )
}

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault()
//       }}
//       {...props}
//     />
//   )
// }

// const Navbar = () => {
//   return (
//     <nav>
//       <Box sx={{ width: "100%" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab label="Page One" href="/drafts" />
//           <LinkTab label="Page Two" href="/trash" />
//           <LinkTab label="Page Three" href="/spam" />
//         </Tabs>
//       </Box>
//     </nav>
//   )
// }

export default Navbar
