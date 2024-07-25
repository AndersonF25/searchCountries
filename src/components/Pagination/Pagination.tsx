import "./pagination.style";
import { BtnArrow, List, ListItem, Nav } from "./pagination.style";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  onNext,

  onPrev,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <Nav>
      <List>
        <ListItem>
          <BtnArrow onClick={onPrev} disabled={currentPage === 1}>
            <MdKeyboardDoubleArrowLeft size={24} />
          </BtnArrow>
        </ListItem>
        <span>{currentPage}</span>
        ...
        <span>{pageNumbers.length}</span>
        <ListItem>
          <BtnArrow onClick={onNext} disabled={currentPage === totalPages}>
            <MdKeyboardDoubleArrowRight size={24} />
          </BtnArrow>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Pagination;
