import useFetch from "../customize/Fetch";

const Blog = () => {
    const { data: dataBlogs, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    console.log(">>>check", dataBlogs)
    return (
        <div>Thuc</div>
    )
}

export { Blog };