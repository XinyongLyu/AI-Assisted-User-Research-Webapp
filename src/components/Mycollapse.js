import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Collapse
} from "@chakra-ui/core";
function Mycollapse() {
    const [show, setShow] = React.useState(false);
  
    const handleToggle = () => setShow(!show);
  
    return (
      <>
        <Collapse startingHeight={20} isOpen={show}>
        Hard break at this moment and speak negative.
        </Collapse>
        <Button size="sm" onClick={handleToggle} mt="0.5rem">
          Show {show ? "Less" : "More"}
        </Button>
      </>
    );
  }

  export default Mycollapse;