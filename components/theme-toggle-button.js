import { IconButton,useColorMode,useColorModeValue } from "@chakra-ui/react";
import { SunIcon,MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence,motion } from "framer-motion";

const ThemeToggleButton= () => {
    const {toggleColorMode} = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{display: 'inline-block'}} key={useColorModeValue('light','dark')} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}>
        <IconButton aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
            onClick={toggleColorMode}></IconButton>
            </motion.div>
            </AnimatePresence>
    )
}

export default ThemeToggleButton