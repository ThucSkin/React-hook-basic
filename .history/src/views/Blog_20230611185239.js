import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataUsers: dataBlogs, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    console.log(dataBlogs)
    if (dataBlogs.length > 0 && dataBlogs) {
        console.log(dataBlogs)
    }

    return (
        <div>Thuc</div>
    )
}

export { Blog };