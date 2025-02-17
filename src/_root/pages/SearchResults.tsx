import Loader from "@/components/shared/Loader";
import { Models } from "appwrite";
import GridPostList from "./GridPostList";
import { searchPosts } from "@/lib/appwrite/api";

type searchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: searchResultsProps) => {
    if (isSearchFetching) return <Loader />

    if (searchedPosts && searchedPosts.documents.length > 0) {
        return (
            <GridPostList posts={searchedPosts.documents} />
        )
    }
    return (
        <p className="text-light-4 mt-10 text-center w-full">No result found</p>
    )
}

export default SearchResults