import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataBlog, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    console.log(dataBlog)
    return (
        <div>Thuc</div>
    )
}

export { Blog };