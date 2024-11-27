"use client";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import ListSearch from "./ListSearch";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
const Search = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState<any>([]);
  const debounced = useDebouncedCallback((value) => {
    handleSearch(value);
  }, 1000);
  const searchref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (searchref.current && !searchref.current.contains(e.target as Node)) {
        setData([]);
      }
    });
  }, []);
  const handleSearch = async (searchItem: string) => {
    console.log(searchItem);

    const response = await fetch(`${API_URL}posts?q=${searchItem}`);
    const data = await response.json();
    console.log(data);
    setData(data.items);
  };

  return (
    <div className="search-container w-full relative flex">
      <SearchIcon />
      <input
        placeholder="Search"
        className="w-full ring-0 text-black font-normal outline-none"
        type="text"
        onChange={(e) => debounced(e.target.value)}
      />
      {data.length > 0 && (
        <AnimatePresence>
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=" absolute left-0 top-4 w-full"
            ref={searchref}
          >
            <ListSearch data={data} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Search;
