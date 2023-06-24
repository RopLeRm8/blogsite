import { Box, Fade, IconButton, TextField } from "@mui/material";
import IconsHandler from "../../../../hooks/IconsHandler";
import { useState, useCallback } from "react";

export default function SearchButton() {
  const { searchIcon: SearchIcon } = IconsHandler();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenSearch = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Box style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
      {!isOpen ? (
        <IconButton onClick={handleOpenSearch}>
          <SearchIcon />
        </IconButton>
      ) : null}
      {isOpen && (
        <Fade in={true}>
          <TextField
            autoFocus
            size="small"
            onBlur={handleOpenSearch}
            placeholder="Search..."
          />
        </Fade>
      )}
    </Box>
  );
}
