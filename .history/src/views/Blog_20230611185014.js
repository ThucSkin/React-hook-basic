import useFetch from "../customize/Fetch";

const Blog = () => {
    const { data: dataBlogs, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    if (dataBlogs.length > 0 && dataBlogs) {
        console.log(dataBlogs)
    }

    return (
        <div>Thuc</div>
    )
}

export { Blog };