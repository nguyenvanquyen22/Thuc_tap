// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function TableCell(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
          padding: 12,
          borderColor: theme.palette.divider,
          whiteSpace: 'nowrap',
        },
        head: {
          fontWeight: 600,
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderLeft: 'none',
          borderRight: 'none',
          backgroundColor: theme.palette.divider,
        },
      },
    }
  };
}
