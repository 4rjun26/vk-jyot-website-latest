import { useRouter } from "next/router";
import CategoriesVideosList from "@/components/category_page_components/CategoriesVideosList";

const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get dynamic ID from URL

  return(
    <>
        <CategoriesVideosList category={id} showLoadMore={true} showThree={9} />
    </>
  );

}

export default CategoryPage;