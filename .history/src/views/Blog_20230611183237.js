import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataBlogs, loading } = useFetch('https://reqres.in/api/users?page=2', true)
    console.log(">>>check", dataBlogs)
    return (
        <div>Thuc</div>
    )
}

export { Blog };