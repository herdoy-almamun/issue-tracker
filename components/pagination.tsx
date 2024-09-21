"use client";
import { Button, Flex } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Poprs {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemsCount, pageSize, currentPage }: Poprs) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount <= 1) return null;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    const query = params.toString();
    router.push("?" + query);
  };

  return (
    <Flex align="center" gap="3">
      <p>
        Page {currentPage} of {pageCount}
      </p>
      <Flex align="center" gap="3">
        <Button
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(1)}
          variant="soft"
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>
        <Button
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          variant="soft"
        >
          <MdKeyboardArrowLeft />
        </Button>

        <Button
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(currentPage + 1)}
          variant="soft"
        >
          <MdKeyboardArrowRight />
        </Button>

        <Button
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(pageCount)}
          variant="soft"
        >
          <MdKeyboardDoubleArrowRight />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
