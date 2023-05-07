import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridToolbarContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridToolbarFilterButton onClick={hideMenu} column={currentColumn} />
      <GridToolbarColumnsButton onClick={hideMenu} column={currentColumn} />
    </GridToolbarContainer>
  );
};

export default CustomColumnMenu;
