export default (theme) => ({
  optionButton: {
    "fontWeight": 600,
    "padding": theme.spacing(),
    "borderRadius": "2px",
    "backgroundColor": theme.palette.primary.contrastText,
    "border": "1px solid",
    "minWidth": 150,
    "borderColor": theme.palette.moc.borderColor,
    "&:hover": {
      borderColor: theme.palette.moc.activeElementBorderColor
    },
    "&:focus": {
      outline: "auto 5px -webkit-focus-ring-color"
    }
  },
  optionText: {
    fontWeight: 500,
    fontSize: "0.9rem"
  },
  isSelected: {
    borderColor: theme.palette.moc.activeElementBorderColor
  },
  soldOutOption: {
    opacity: 0.2
  }
});
